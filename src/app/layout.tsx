import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://christiannikolov.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Christian Nikolov',
    default:
      'Christian Nikolov - Tech Leader, IT Consultant & AWS Certified Architect',
  },
  description:
    "I'm Christian Nikolov, a tech leader, IT consultant, and AWS Certified Solutions Architect based in Poland. I specialise in AI workflows, building efficient teams, and helping people set up agentic codebases.",
  authors: [{ name: 'Christian Nikolov', url: siteUrl }],
  keywords: [
    'Christian Nikolov',
    'AWS',
    'Solutions Architect',
    'Tech Leader',
    'IT Consultant',
    'TypeScript',
    'AI workflows',
    'Next.js',
    'Poland',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Christian Nikolov',
    title: 'Christian Nikolov - Tech Leader, IT Consultant & AWS Certified Architect',
    description:
      'Tech leader, IT consultant, and AWS Certified Solutions Architect based in Poland. I specialise in AI workflows, building efficient teams, and helping people set up agentic codebases.',
  },
  twitter: {
    card: 'summary',
    title: 'Christian Nikolov - Tech Leader, IT Consultant & AWS Certified Architect',
    description:
      'Tech leader, IT consultant, and AWS Certified Solutions Architect based in Poland.',
  },
  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
