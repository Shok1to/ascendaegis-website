import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.aaegis-ai.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard', '/investors', '/login', '/register', '/forgot-password', '/reset-password'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
