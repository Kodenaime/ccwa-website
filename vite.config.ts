import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'
import fs from 'node:fs'
import path from 'node:path'

const eventsJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'src/data/events.json'), 'utf-8')
) as { events: Array<{ id: string }> }

const eventRoutes = eventsJson.events.map((event) => `/events/${event.id}`)

const summaryTs = fs.readFileSync(
  path.resolve(__dirname, 'src/data/activitiesSummary.ts'),
  'utf-8'
)
const activityIds = Array.from(summaryTs.matchAll(/id:\s*["']([^"']+)["']/g)).map(
  (match) => match[1]
)
const activityRoutes = activityIds.map((id) => `/activities/${id}`)

const dynamicRoutes = [
  '/about',
  '/activities',
  '/activities/summary',
  ...activityRoutes,
  '/events',
  ...eventRoutes,
  '/gallery',
  '/sponsorship',
  '/contact',
  '/privacy',
  '/terms',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://www.ccwaintl.org',
      dynamicRoutes,
      readable: false,
      changefreq: {
        '/': 'weekly',
        '/events': 'weekly',
        '/activities': 'monthly',
        '/activities/summary': 'monthly',
        '/about': 'monthly',
        '/sponsorship': 'monthly',
        '/gallery': 'monthly',
        '/contact': 'monthly',
        '/privacy': 'yearly',
        '/terms': 'yearly',
        '*': 'monthly',
      },
      priority: {
        '/': 1.0,
        '/about': 0.9,
        '/activities': 0.9,
        '/events': 0.9,
        '/sponsorship': 0.9,
        '/activities/summary': 0.8,
        '/gallery': 0.8,
        '/contact': 0.8,
        '/privacy': 0.3,
        '/terms': 0.3,
        '*': 0.7,
      },
      generateRobotsTxt: true,
      robots: [
        { userAgent: '*', allow: '/' },
        { userAgent: 'GPTBot', allow: '/' },
        { userAgent: 'OAI-SearchBot', allow: '/' },
        { userAgent: 'ChatGPT-User', allow: '/' },
        { userAgent: 'ClaudeBot', allow: '/' },
        { userAgent: 'PerplexityBot', allow: '/' },
        { userAgent: 'Google-Extended', allow: '/' },
      ],
    }),
  ],
})
