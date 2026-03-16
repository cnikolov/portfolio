import { type MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://christiannikolov.com'

export default async function sitemap(): Promise<MetadataRoute['sitemap']> {
  let articles = await getAllArticles()

  let articleEntries: MetadataRoute['sitemap'] = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  let staticPages: MetadataRoute['sitemap'] = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/uses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  return [...staticPages, ...articleEntries]
}
