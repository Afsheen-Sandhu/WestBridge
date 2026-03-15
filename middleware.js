/**
 * Serves pre-rendered HTML to crawlers (Google, Bing, etc.) when PRERENDER_SERVICE_URL is set.
 * Crawler user-agents whitelist — Bing requires bingbot to be included.
 */
import { next, rewrite } from '@vercel/functions';

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

export const config = {
  matcher: [
    // Run for page routes; skip static assets
    '/((?!assets/|_next/|api|.*\\.(js|css|ico|webp|png|jpg|jpeg|gif|svg|woff2?|xml|txt|map)).*)',
  ],
};

export default function middleware(request) {
  const ua = (request.headers.get('user-agent') || '').toLowerCase();
  const isCrawler = CRAWLER_USER_AGENTS.some((bot) => ua.includes(bot));

  const prerenderBase = process.env.PRERENDER_SERVICE_URL;
  if (isCrawler && prerenderBase) {
    const url = new URL(request.url);
    const path = url.pathname + url.search;
    // Prerender.io-style: base + full site URL (e.g. https://service.prerender.io/https://www.westbridgeitsolutions.com/about-us)
    const prerenderUrl = new URL(prerenderBase.replace(/\/?$/, '/') + SITE_URL + path);
    return rewrite(prerenderUrl);
  }

  return next();
}
