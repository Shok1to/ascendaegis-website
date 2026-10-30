import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.aaegis-ai.com'

// lastModified reflects each page's last content change (from git history).
// Excluded: /api, /dashboard, /investors, /login, /register, /forgot-password, /reset-password.
const pages: { path: string; lastModified: string; priority: number }[] = [
  { path: '', lastModified: '2026-10-14', priority: 1 },
  { path: '/sleep-tool', lastModified: '2026-10-14', priority: 0.9 },
  { path: '/our-solution', lastModified: '2026-10-14', priority: 0.8 },
  { path: '/clinical-validation', lastModified: '2026-10-14', priority: 0.8 },
  { path: '/for-clinics', lastModified: '2026-10-14', priority: 0.8 },
  { path: '/security-compliance', lastModified: '2026-10-14', priority: 0.6 },
  { path: '/vision', lastModified: '2026-07-15', priority: 0.6 },
  { path: '/team', lastModified: '2026-10-15', priority: 0.7 },
  { path: '/alberto-turri', lastModified: '2026-06-28', priority: 0.4 },
  { path: '/brianna-morissette', lastModified: '2026-09-20', priority: 0.4 },
  { path: '/dr-timothy-damaso', lastModified: '2026-06-28', priority: 0.4 },
  { path: '/joey-bermudez', lastModified: '2026-06-28', priority: 0.4 },
  { path: '/richard-bangyay', lastModified: '2026-09-20', priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
    priority,
  }))
}
