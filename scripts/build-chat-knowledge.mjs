/**
 * Builds compact RAG chunks for the AI chatbot from site data.
 * Run before build: node scripts/build-chat-knowledge.mjs
 */
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { projectsData } from '../src/data/projectsData.js';
import { blogPosts } from '../src/data/blogData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../api/chat-knowledge.json');

const SERVICES = [
  { title: 'Crafted Websites', tags: ['website', 'react', 'nextjs', 'seo'], text: 'High-performance sites with React, Next.js, responsive design, SEO.' },
  { title: 'Website Redesign', tags: ['redesign', 'ui', 'ux', 'audit'], text: 'Modern facelifts, UI/UX audits, conversion-focused redesigns.' },
  { title: 'eCommerce Solutions', tags: ['ecommerce', 'shopify', 'store', 'shop'], text: 'Shopify, secure payments, inventory sync, conversion-focused stores.' },
  { title: 'CMS & Dynamic Sites', tags: ['cms', 'headless', 'content'], text: 'Headless CMS, custom dashboards, scalable content systems.' },
  { title: 'Landing Pages', tags: ['landing', 'marketing', 'leads'], text: 'Conversion-centered landing pages, A/B testing, fast load times.' },
  { title: 'Consistent Identity', tags: ['branding', 'identity', 'logo', 'design system'], text: 'Style guides, design systems, logos, cohesive brand language.' },
  { title: 'Motion Design', tags: ['animation', 'motion', 'gsap', 'lottie'], text: 'Lottie, GSAP, micro-interactions, engaging animations.' },
  { title: 'UX Strategy', tags: ['ux', 'strategy', 'wireframe', 'research'], text: 'User testing, wireframing, journey mapping, data-driven planning.' },
  { title: 'Performance', tags: ['performance', 'speed', 'seo', 'core web vitals'], text: 'Core Web Vitals, code splitting, CDN, technical SEO optimization.' },
  { title: 'Ongoing Support', tags: ['support', 'maintenance', 'hosting'], text: 'Security patches, content updates, proactive monitoring after launch.' },
];

const FAQ = [
  { q: 'how do i get started', a: 'Reach out via the contact form or WhatsApp. We schedule a discovery call, then provide a tailored proposal and roadmap.', tags: ['start', 'begin', 'contact'] },
  { q: 'how involved do i need to be', a: 'Collaborative partnership. We handle design and dev; your feedback at strategy, design approval, and final review is key.', tags: ['involvement', 'process'] },
  { q: 'how long does it take to build a website', a: 'Standard corporate sites: 4–8 weeks. Complex eCommerce or custom apps: 10–16 weeks. Timeline depends on scope.', tags: ['timeline', 'duration', 'how long'] },
  { q: 'do you provide support after launch', a: 'Yes. We offer maintenance and support packages for security, updates, and performance.', tags: ['support', 'maintenance', 'after launch'] },
  { q: 'responsive and ecommerce websites', a: 'Every site is fully responsive. We build high-converting eCommerce on Shopify, WooCommerce, and headless solutions.', tags: ['responsive', 'ecommerce', 'mobile'] },
];

const COMPANY = {
  name: 'WestBridge IT Solutions',
  tagline: 'Web design & development agency in Surrey, BC, Canada',
  email: 'support@westbridgeitsolutions.com',
  phone: '+1-604-365-7605',
  whatsapp: '+1-604-365-7605',
  location: 'Surrey, British Columbia, Canada',
  site: 'https://www.westbridgeitsolutions.com',
  pages: {
    contact: '/contact',
    services: '/services',
    works: '/works',
    blogs: '/blogs',
    approach: '/approach',
    about: '/about-us',
  },
};

const chunks = [];

chunks.push({
  id: 'company',
  tags: ['westbridge', 'about', 'agency', 'surrey', 'contact', 'who'],
  text: `${COMPANY.name} — ${COMPANY.tagline}. Email: ${COMPANY.email}. Phone: ${COMPANY.phone}. Location: ${COMPANY.location}.`,
});

chunks.push({
  id: 'process',
  tags: ['process', 'approach', 'methodology', 'how we work'],
  text: 'Process: discovery call → strategy & wireframes → design → development → launch → ongoing support. Collaborative and transparent at every stage.',
});

for (const s of SERVICES) {
  chunks.push({
    id: `service-${s.title.toLowerCase().replace(/\s+/g, '-')}`,
    tags: s.tags,
    text: `Service — ${s.title}: ${s.text}`,
  });
}

for (const f of FAQ) {
  chunks.push({
    id: `faq-${f.q.slice(0, 24).replace(/\s+/g, '-')}`,
    tags: f.tags,
    text: `FAQ: ${f.q}? ${f.a}`,
    faqKey: f.q,
    faqAnswer: f.a,
  });
}

for (const p of projectsData) {
  const tags = [p.category, p.name, p.slug, ...(p.services || []), ...(p.techStack || [])]
    .join(' ')
    .toLowerCase()
    .split(/[\s,&]+/)
    .filter(Boolean);

  chunks.push({
    id: `project-${p.slug}`,
    tags,
    text: `Portfolio — ${p.name} (${p.category}): ${p.tagline || p.overview || ''} Services: ${(p.services || []).join(', ')}. Link: /works/${p.slug}`,
  });
}

for (const b of blogPosts) {
  const tags = [b.category, b.title, b.slug, b.author]
    .join(' ')
    .toLowerCase()
    .split(/[\s,&]+/)
    .filter(Boolean);

  chunks.push({
    id: `blog-${b.slug}`,
    tags,
    text: `Blog — "${b.title}" (${b.category}): ${b.excerpt} Link: /blogs/${b.slug}`,
  });
}

const output = {
  version: 1,
  generatedAt: new Date().toISOString(),
  company: COMPANY,
  chunks,
  faqCache: FAQ.map((f) => ({ key: f.q, answer: f.a })),
};

writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`Wrote ${chunks.length} chunks to ${outPath}`);
