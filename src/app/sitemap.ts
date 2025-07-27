import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rippedforreal.com';
  
  const routes = ['', '/privacy', '/terms', '/support'];
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });
  
  return sitemapEntries;
}