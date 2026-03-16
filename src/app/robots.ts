export const dynamic = 'force-static'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cnikolov.vercel.app'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
