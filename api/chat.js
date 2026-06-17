import {
  validateMessages,
  checkRateLimit,
  getCachedFaqAnswer,
  buildChatPayload,
  callOpenAI,
} from './lib/chat-utils.js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress;

  const rateError = checkRateLimit(ip);
  if (rateError) {
    return res.status(429).json({ error: rateError });
  }

  const { messages } = req.body || {};
  const validation = validateMessages(messages);
  if (validation.error) {
    return res.status(400).json({ error: validation.error });
  }

  const lastUser = [...validation.messages].reverse().find((m) => m.role === 'user');
  const cached = getCachedFaqAnswer(lastUser?.content || '');
  if (cached) {
    return res.status(200).json({ reply: cached, cached: true });
  }

  try {
    const payload = buildChatPayload(validation.messages);
    const reply = await callOpenAI(payload);
    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Chat API error:', err.message);
    return res.status(500).json({
      error: err.message || 'Something went wrong. Please try again or visit /contact.',
    });
  }
}
