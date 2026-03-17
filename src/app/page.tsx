import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PhotoCarousel } from '@/components/PhotoCarousel'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import britishIronworks from '@/images/photos/british-ironworks.jpg'
import swingMeetingRoom from '@/images/photos/swing-meeting-room.jpg'
import heartCharity from '@/images/photos/heart-charity.jpg'
import angelSolutionsStage from '@/images/photos/angel-solutions-stage.jpg'
import christmasWithDaughter from '@/images/photos/christmas-with-daughter.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function LearnMore() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Learn more about me</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get to know my story, the places I&apos;ve lived, and what drives me
        outside of code.
      </p>
      <div className="mt-6 flex gap-4">
        <Button href="/about" variant="secondary" className="flex-1">
          About me
        </Button>
        <Button href="/cv" className="flex-1">
          View CV
        </Button>
      </div>
    </div>
  )
}

interface Role {
  company: string
  title: string
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-zinc-100 shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <BriefcaseIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">&mdash;</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Monterosa',
      title: 'Technical Leader',
      start: '2024',
      end: {
        label: 'Present',
        dateTime: '2026',
      },
    },
    {
      company: 'Syrenis',
      title: 'Technical Leader',
      start: '2020',
      end: '2023',
    },
    {
      company: 'NDA Gaming',
      title: 'Technical Lead, Fraud Prevention',
      start: '2018',
      end: '2020',
    },
    {
      company: 'Angel Solutions',
      title: 'Software Developer',
      start: '2016',
      end: '2018',
    },
    {
      company: 'British Ironwork Centre',
      title: 'Software Developer & IT',
      start: '2013',
      end: '2016',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="/cv" variant="secondary" className="group mt-6 w-full">
        View full CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

const photos = [
  { src: swingMeetingRoom, alt: 'The swing meeting table at British Ironwork Centre', rotation: 'rotate-2' },
  { src: britishIronworks, alt: 'Spartan helmets at the British Ironwork Centre', rotation: '-rotate-2' },
  { src: angelSolutionsStage, alt: 'Presenting at Angel Solutions Innovation Day', rotation: 'rotate-2' },
  { src: heartCharity, alt: 'Dressed as a heart collecting donations for the British Heart Foundation', rotation: '-rotate-2' },
  { src: christmasWithDaughter, alt: 'Christmas time with my daughter', rotation: 'rotate-2' },
]

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <FadeInStagger className="max-w-2xl">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Tech Leader, IT Consultant, and AWS Certified Architect.
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I&apos;m Christian Nikolov, a consultant, technical leader, and
              AWS Certified Solutions Architect based in Poland. I specialise in
              AI workflows with no-code and low-code tooling, helping people set
              up agentic codebases so they can thrive.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="https://github.com/cnikolov"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/christian-nikolov-959966b0/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
      <PhotoCarousel photos={photos} />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <FadeInStagger className="flex flex-col gap-16">
            {articles.map((article) => (
              <FadeIn key={article.slug}>
                <Article article={article} />
              </FadeIn>
            ))}
          </FadeInStagger>
          <FadeInStagger className="space-y-10 lg:pl-16 xl:pl-24">
            <FadeIn>
              <Resume />
            </FadeIn>
            <FadeIn>
              <LearnMore />
            </FadeIn>
          </FadeInStagger>
        </div>
      </Container>
    </>
  )
}
