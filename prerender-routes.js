/**
 * All routes to prerender for SEO and accessibility.
 * Used by vite-plugin-prerender so crawlers and screen readers get full HTML.
 */
import { projectsData } from './src/data/projectsData.js';
import { blogPosts } from './src/data/blogData.js';

const staticRoutes = [
  '/',
  '/about-us',
  '/works',
  '/services',
  '/blogs',
  '/templates',
  '/approach',
  '/contact',
  '/careers',
  '/studio',
];

const workRoutes = projectsData.map((p) => `/works/${p.slug}`);
const blogRoutes = blogPosts.map((b) => `/blogs/${b.slug}`);

export const prerenderRoutes = [...staticRoutes, ...workRoutes, ...blogRoutes];
