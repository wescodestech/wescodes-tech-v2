import { MetadataRoute } from 'next'
import projectsData from '@/data/projects.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wesleyhowell.com'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/skills',
    '/portfolio',
    '/experience',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic project pages
  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...projectPages]
}
