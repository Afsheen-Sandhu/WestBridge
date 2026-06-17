import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const knowledge = JSON.parse(
  readFileSync(path.join(__dirname, '../chat-knowledge.json'), 'utf8')
);

const MAX_MESSAGE_LENGTH = 500;
const MAX_HISTORY_TURNS = 6;
const RATE_LIMIT_MAX = 30;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RAG_TOP_K = 3;

const rateLimitStore = new Map();

const SYSTEM_PROMPT = `You are the WestBridge IT Solutions website assistant — a web design agency in Surrey, BC, Canada.
Rules:
- Answer ONLY using the CONTEXT below. If unsure, say you don't know and suggest /contact or WhatsApp (+1-604-365-7605).
- Keep replies to 2-4 short sentences. No markdown headers or bullet lists unless listing 2-3 items.
- Never invent projects, prices, timelines, or guarantees not in CONTEXT.
- For custom quotes or contracts, direct users to /contact or WhatsApp.
- Use relative paths like /works/slug when linking to site pages.`;

export function getKnowledge() {
  return knowledge;
}

export function validateMessages(messages) {
  if (!Array.isArray(messages) || messages.length === 0) {
    return { error: 'messages array required' };
  }

  const recent = messages.slice(-MAX_HISTORY_TURNS * 2);
  for (const msg of recent) {
    if (!msg?.role || !msg?.content) {
      return { error: 'Each message needs role and content' };
    }
    if (!['user', 'assistant'].includes(msg.role)) {
      return { error: 'Invalid message role' };
    }
    if (typeof msg.content !== 'string' || msg.content.length > MAX_MESSAGE_LENGTH) {
      return { error: `Messages must be under ${MAX_MESSAGE_LENGTH} characters` };
    }
  }

  return { messages: recent };
}

export function checkRateLimit(ip) {
  const key = ip || 'unknown';
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return 'Too many requests. Please try again in an hour or contact us directly.';
  }

  entry.count += 1;
  return null;
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function tokenize(text) {
  return normalize(text).split(' ').filter((w) => w.length > 2);
}

export function getCachedFaqAnswer(userMessage) {
  const normalized = normalize(userMessage);
  for (const { key, answer } of knowledge.faqCache) {
    const nk = normalize(key);
    if (normalized.includes(nk) || nk.split(' ').every((w) => normalized.includes(w))) {
      return answer;
    }
  }

  const shortcuts = [
    { match: ['contact', 'email', 'phone', 'reach'], answer: `Email ${knowledge.company.email} or call ${knowledge.company.phone}. Visit /contact or WhatsApp us.` },
    { match: ['service', 'offer', 'do you do'], answer: 'We offer web design, redesign, eCommerce, CMS, landing pages, branding, motion design, UX strategy, performance optimization, and ongoing support. See /services.' },
    { match: ['where', 'location', 'based', 'surrey'], answer: `${knowledge.company.name} is based in ${knowledge.company.location}.` },
    { match: ['portfolio', 'projects', 'work', 'case stud'], answer: 'Browse our portfolio at /works — restaurants, agencies, healthcare, eCommerce, and more.' },
  ];

  for (const { match, answer } of shortcuts) {
    if (match.some((m) => normalized.includes(m))) {
      return answer;
    }
  }

  return null;
}

export function retrieveContext(query) {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) {
    return knowledge.chunks.find((c) => c.id === 'company')?.text || '';
  }

  const scored = knowledge.chunks.map((chunk) => {
    const haystack = normalize(`${chunk.text} ${(chunk.tags || []).join(' ')}`);
    let score = 0;
    for (const token of queryTokens) {
      if (haystack.includes(token)) score += 1;
    }
    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.filter((s) => s.score > 0).slice(0, RAG_TOP_K);

  if (top.length === 0) {
    const fallback = scored.slice(0, 2).map((s) => s.chunk.text);
    return fallback.join('\n');
  }

  return top.map((s) => s.chunk.text).join('\n');
}

export function buildChatPayload(messages) {
  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  const context = retrieveContext(lastUser?.content || '');
  const systemContent = `${SYSTEM_PROMPT}\n\nCONTEXT:\n${context}`;

  return [
    { role: 'system', content: systemContent },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];
}

export async function callOpenAI(chatMessages) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('Chat is not configured yet. Please use /contact or WhatsApp.');
  }

  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: chatMessages,
      max_tokens: 250,
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('OpenAI error:', res.status, err);
    throw new Error('Unable to get a response right now. Please try /contact.');
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || 'Sorry, I could not generate a reply.';
}
