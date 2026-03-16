import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Bullion Market Cap',
    description:
      'Architected the entire infrastructure for a precious-metals market data platform. AWS CDN, custom CMS, real-time price updates, AI workflows, edge servers, Postgres, and SSR/SSG for blazing-fast page loads.',
    link: {
      href: 'https://bullionmarketcap.com',
      label: 'bullionmarketcap.com',
    },
    icon: 'bullion',
  },
  {
    name: 'Cloud Exam Trainer',
    description:
      'Custom ChatGPT for AWS Cloud Practitioner and Solutions Architect exam prep. Real-world questions and answers. Score 90%+ three times in a row to guarantee a pass. Ask for questions one at a time to study effectively.',
    link: {
      href: 'https://chatgpt.com/g/g-67a5e0b1237081918639fe5eedde7d79-cloud-exam-trainer',
      label: 'chatgpt.com/g/cloud-exam-trainer',
    },
    icon: 'cloud',
  },
  {
    name: 'playwright-cluster',
    description:
      'A cluster manager for Playwright that spawns a pool of browser instances for scraping thousands of pages at once. Handles crashes, retries, and different concurrency models out of the box. 776+ weekly npm downloads.',
    link: {
      href: 'https://github.com/cnikolov/playwright-cluster',
      label: 'github.com/cnikolov/playwright-cluster',
    },
    icon: 'playwright',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function PlaywrightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        rx="1.5"
        className="fill-teal-500 dark:fill-teal-400"
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        rx="1.5"
        className="fill-teal-500/60 dark:fill-teal-400/60"
      />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        rx="1.5"
        className="fill-teal-500/60 dark:fill-teal-400/60"
      />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        rx="1.5"
        className="fill-teal-500/30 dark:fill-teal-400/30"
      />
    </svg>
  )
}

function SystemsIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="2"
        y="3"
        width="20"
        height="6"
        rx="1.5"
        className="fill-teal-500 dark:fill-teal-400"
      />
      <circle cx="5.5" cy="6" r="1" className="fill-white dark:fill-zinc-900" />
      <circle cx="8.5" cy="6" r="1" className="fill-white/50 dark:fill-zinc-900/50" />
      <rect
        x="2"
        y="12"
        width="20"
        height="6"
        rx="1.5"
        className="fill-teal-500/60 dark:fill-teal-400/60"
      />
      <circle cx="5.5" cy="15" r="1" className="fill-white dark:fill-zinc-900" />
      <circle cx="8.5" cy="15" r="1" className="fill-white/50 dark:fill-zinc-900/50" />
      <path d="M12 21v-3M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-teal-600 dark:text-teal-300" />
    </svg>
  )
}

function CloudIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        className="fill-teal-500 dark:fill-teal-400"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Open-source tools and projects I have built over the years.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Open-source tools and projects I have built over the years."
      intro="I love building tools that solve real problems. Here are the projects I am most proud of. They are open-source, so check out the code and contribute if you have ideas."
    >
      <FadeInStagger
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {projects.map((project) => (
          <FadeIn key={project.name}>
            <Card as="li">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {project.icon === 'bullion' ? (
                <SystemsIcon className="h-8 w-8" />
              ) : project.icon === 'cloud' ? (
                <CloudIcon className="h-8 w-8" />
              ) : (
                <PlaywrightIcon className="h-8 w-8" />
              )}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
            </Card>
          </FadeIn>
        ))}
      </FadeInStagger>
    </SimpleLayout>
  )
}
