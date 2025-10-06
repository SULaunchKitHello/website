import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sulaunchkit.com'
  const lastModified = new Date()

  // Static pages for both languages
  const staticPages = [
    '',
    '/privacy-policy',
    '/terms-of-service',
  ]

  const languages = ['en', 'es']
  
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add homepage
  sitemapEntries.push({
    url: baseUrl,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
  })

  // Add language-specific pages
  languages.forEach(lang => {
    staticPages.forEach(page => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 0.9 : 0.7,
      })
    })
  })

  return sitemapEntries
}