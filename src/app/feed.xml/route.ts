import { Feed } from 'feed'

import { getAllArticles } from '@/lib/articles'

export const dynamic = 'force-static'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://christiannikolov.com'

export async function GET() {
  let author = {
    name: 'Christian Nikolov',
    email: 'christian.nikolov@outlook.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Christian Nikolov — Articles and blog posts',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved 2026`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articles = await getAllArticles()

  for (let article of articles) {
    let publicUrl = `${siteUrl}/articles/${article.slug}`

    feed.addItem({
      title: article.title,
      id: publicUrl,
      link: publicUrl,
      description: article.description,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
