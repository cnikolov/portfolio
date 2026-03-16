import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { EuropeMap } from '@/components/EuropeMap'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PortraitImage } from '@/components/PortraitImage'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Christian Nikolov, AWS Certified Solutions Architect based in Poland. I build software, lead teams, and help people adopt AI workflows.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <FadeIn className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <PortraitImage />
          </div>
        </FadeIn>
        <FadeInStagger className="lg:order-first lg:row-span-2">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Hey, I&apos;m Christian.
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Software builder, dad of two, and Baltic Sea cold-plunger &mdash;
              based on the Polish coast.
            </p>
          </FadeIn>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Back in the glory days of my teenage years at the age of 16, I
              joined a small community online that was building a private version
              of World of Warcraft with CMake, C++, and MySQL. Who would have
              thought that coding on a MySQL database could be the gateway to my
              love affair with all things code?
            </p>
            <p>
              Realising my chances of a coding career in Bulgaria were slim, I
              decided to spare my family the financial burden of university and
              instead travelled to the UK. In 2014, in the heart of a small
              family business &mdash; the British Ironwork Centre &mdash; I
              officially earned my first years as a software developer, diving
              headfirst into the e-commerce realm. I got my hands dirty with
              SEO, Magento, Angular, AWS, and SQL &mdash; building purchasing
              reports and learning how every part of an online business fits
              together.
            </p>
            <p>
              Eager to work in a company full of like-minded developers and IT
              people, I set sail &mdash; by road, in my Audi, with a daily
              commute of 55 minutes each way &mdash; to Angel Solutions in
              Liverpool. Hungry to learn, I managed to work for a few months
              and then move to Merseyside. I felt the itch to share my coding
              wisdom, so a friend and I started teaching coding in the centre of
              Chester. My network expanded and so did possibilities &mdash; I
              met a lovely recruiting company sponsoring digital events in the
              area, and an opportunity at Syrenis was revealed.
            </p>
            <p>
              With the world grappling with COVID-19 and digital acceleration in
              full swing, I moved to Poland where my family could be closer
              together. I continued my work with Syrenis in B2B mode, then
              moved on to Monterosa as a Technical Leader to challenge my
              leadership even further and grow.
            </p>
            <p>
              Today I specialise in AI workflows with no-code and low-code
              tooling. I help people set up agentic codebases so they can thrive
              &mdash; without having to chase every AI headline. I write code in
              TypeScript, Rust, and whatever the job demands. I thrive on
              growing efficiency within a team and a project &mdash; creating a
              shared passion so that everyone grows together, like a rainforest.
            </p>
          </div>

        </FadeInStagger>
        <FadeIn className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/cnikolov"
              icon={GitHubIcon}
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/christian-nikolov-959966b0/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:christian.nikolov@outlook.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              christian.nikolov@outlook.com
            </SocialLink>
          </ul>
        </FadeIn>
      </div>

      <FadeIn className="mt-16">
        <h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Beyond the keyboard
        </h2>
        <div className="mt-4 space-y-5 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            Living on the Polish Baltic coast means the forest is always a
            short ride away. I spend my weekends on long bicycle rides
            through the pine forests around Ustka &mdash; it&apos;s the best
            way to clear my head after a week of releases.
          </p>
          <p>
            In winter I trade the bike for skis whenever I can. There is
            nothing quite like an early-morning run on fresh snow in the
            Vysok&eacute; Tatry or the Polish mountains. And yes, I&apos;m
            one of those people who does cold plunges in the Baltic Sea
            year-round. Something about the shock of &minus;4&deg;C water
            resets everything.
          </p>
          <p>
            I&apos;m Bulgarian by nationality. I love visiting historical
            places across Europe &mdash; Bulgaria, the UK, Poland, and
            anywhere in between. Having lived in three countries, I&apos;ve
            picked up a taste for exploring new cultures, food, and
            landscapes.
          </p>
          <p>
            I used to teach coding for free &mdash; started in Chester and
            Liverpool with in-person meetups, and now do it virtually. These
            days I attend hackathons and help businesses adopt cloud and AI
            workflows, helping them navigate the noise and reduce waste.
            Family is the most important thing to me. My wife and my two
            daughters are a delight to spend time with (my wife edited that
            last sentence).
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <EuropeMap />
      </FadeIn>
    </Container>
  )
}
