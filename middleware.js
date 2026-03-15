/**
 * Serves pre-rendered HTML to crawlers (Google, Bing, etc.) when PRERENDER_SERVICE_URL is set.
 * Crawler user-agents whitelist — Bing requires bingbot to be included.
 * Uses only Web Standard APIs (no @vercel/functions) so it runs on Vercel Edge.
 */
// Crawler user-agents that should receive pre-rendered content. Must include bingbot for Bing indexing.
const CRAWLER_USER_AGENTS = [
  'googlebot',
  'bingbot',           // Bing crawler — required for Bing Webmaster Tools / Request indexing
  'slurp',             // Yahoo
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebot',           // Facebook
  'ia_archiver',       // Alexa
  'twitterbot',
  'linkedinbot',
  'whatsapp',
  'telegrambot',
  'applebot',
  'semrushbot',
  'ahrefsbot',
];

const SITE_URL = 'https://www.westbridgeitsolutions.com';

const STATIC_EXT = /\.(js|css|ico|webp|png|jpg|jpeg|gif|svg|woff2?|xml|txt|map)(\?|$)/i;

/** Vercel rewrite without Next.js: return response with x-middleware-rewrite header */
function rewrite(destination) {
  const url = typeof destination === 'string' ? destination : destination.toString();
  return new Response(null, {
    status: 200,
    headers: { 'x-middleware-rewrite': url },
  });
}

export default function middleware(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith('/assets/') || STATIC_EXT.test(url.pathname)) {
    return fetch(request);
  }
  const ua = (request.headers.get('user-agent') || '').toLowerCase();
  const isCrawler = CRAWLER_USER_AGENTS.some((bot) => ua.includes(bot));

  const prerenderBase = process.env.PRERENDER_SERVICE_URL;
  if (isCrawler && prerenderBase) {
    const path = url.pathname + url.search;
    const prerenderUrl = prerenderBase.replace(/\/?$/, '/') + SITE_URL + path;
    return rewrite(prerenderUrl);
  }

  return fetch(request);
}
