import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PrintButton } from './PrintButton'
import { ShareBanner } from './ShareBanner'

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Christian Nikolov — Consultant, Technical Leader, Developer. Full CV and work history.',
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 print:text-lg">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function Job({
  title,
  company,
  period,
  type,
  children,
}: {
  title: string
  company: string
  period: string
  type?: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-6 first:mt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 print:text-sm">
          {title}
        </h3>
        <span className="text-sm text-zinc-500 dark:text-zinc-400 print:text-xs">
          {period}
        </span>
      </div>
      <p className="text-sm font-medium text-teal-600 dark:text-teal-400 print:text-xs">
        {company}
        {type && (
          <span className="text-zinc-400 dark:text-zinc-500"> — {type}</span>
        )}
      </p>
      <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 print:text-xs">
        {children}
      </div>
    </div>
  )
}

function SkillGroup({
  label,
  skills,
}: {
  label: string
  skills: string
}) {
  return (
    <div className="flex gap-x-2">
      <dt className="font-medium text-zinc-800 dark:text-zinc-100">{label}:</dt>
      <dd className="text-zinc-600 dark:text-zinc-400">{skills}</dd>
    </div>
  )
}

export default function CV() {
  return (
    <Container className="mt-16 sm:mt-32 print:mt-0 print:px-0">
      <div className="max-w-3xl print:max-w-none">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 print:text-3xl">
            Christian Nikolov
          </h1>
          <p className="mt-2 text-lg font-medium text-teal-600 dark:text-teal-400 print:text-sm">
            Consultant &middot; Technical Leader &middot; Developer &middot; AWS
            Certified Solutions Architect &middot; AI Workflows Expert
          </p>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 print:text-xs">
            I am a software development professional deeply invested in
            architecture design, privacy, and infrastructure. I write code, teach,
            and build efficient teams. I specialise in AI workflows with no-code
            and low-code tooling, helping people set up agentic codebases so they
            can thrive — without having to chase every AI headline. Over the years
            I have worked across C#, TypeScript, Rust, SQL, NoSQL, Kafka, and
            serverless development in AWS.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400 print:text-xs">
            <span>Ustka, Poland</span>
            <span>+359 88 29 08 696</span>
            <Link
              href="mailto:christian.nikolov@outlook.com"
              className="text-teal-600 hover:text-teal-500 dark:text-teal-400"
            >
              christian.nikolov@outlook.com
            </Link>
            <Link
              href="https://www.linkedin.com/in/christian-nikolov-959966b0/"
              className="text-teal-600 hover:text-teal-500 dark:text-teal-400"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/cnikolov"
              className="text-teal-600 hover:text-teal-500 dark:text-teal-400"
            >
              GitHub
            </Link>
            <Link
              href="https://www.credly.com/users/christian-nikolov/"
              className="text-teal-600 hover:text-teal-500 dark:text-teal-400"
            >
              Credly
            </Link>
          </div>
        </header>

        <div className="mt-8">
          <ShareBanner />
        </div>

        <Section title="Work Experience">
          <Job
            title="Technical Leader"
            company="Monterosa"
            period="2024 — Present"
            type="B2B"
          >
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Oversee GitLab CI/CD and manage the AWS ecosystem (S3,
                CloudFront, GraphQL, DynamoDB, API Gateway).
              </li>
              <li>
                Architect APIs using Node and Bun while innovating with internal
                AI toolsets.
              </li>
              <li>
                Develop proof of concepts — experimenting with SSG, SSR, and
                various automations.
              </li>
              <li>Create internal libraries to simplify processes.</li>
              <li>
                Train and support both front-end and back-end teams, including
                operating a custom automated Google Sheet.
              </li>
              <li>
                Represent Monterosa in daily customer meetings via Zoom/Google
                Meet, capturing client requirements.
              </li>
              <li>
                Help teams set up agentic codebases and AI-driven workflows so
                they can move faster without constantly chasing the latest AI
                news.
              </li>
            </ul>
          </Job>

          <Job
            title="Technical Leader"
            company="Syrenis"
            period="2020 — Dec 2023"
            type="B2B"
          >
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Cloud Infrastructure &amp; DevOps: Engineered robust AWS
                architectures using CDK, Lambda, CloudFormation, S3, EC2,
                Fargate, VPC, and RDS.
              </li>
              <li>
                Core stack: .NET Core, Node.js, and TypeScript &mdash;
                building and maintaining Web APIs, worker services, and
                front-end applications.
              </li>
              <li>
                Leadership &amp; Team Management: Led development on flagship
                products while supervising front-end and back-end teams,
                reporting directly to the CTO.
              </li>
              <li>
                Cost Optimization: Implemented cost-saving strategies within AWS
                environments to drive business value.
              </li>
              <li>
                Innovation: Created the Cookie Scanner, a high-performance tool
                capable of handling up to one billion pages.
              </li>
              <li>
                Mentorship &amp; Standards: Authored articles on company coding
                standards, SOLID principles, design patterns, and best practices
                for maintainable code.
              </li>
              <li>
                In charge of delivering releases on time for multiple products.
              </li>
              <li>
                Handled specifications with care and distributed workload via
                Jira.
              </li>
              <li>
                Ensured brand guidelines were followed across all projects.
              </li>
              <li>
                Shared knowledge actively in internal meetups on &ldquo;Clean
                Code.&rdquo;
              </li>
              <li>Organised outings to events and dev meetups.</li>
            </ul>
          </Job>

          <Job
            title="Technical Lead, Software Development, Fraud Prevention"
            company="NDA Gaming (Biggest Sportsbook in the UK)"
            period="2018 — 2020"
          >
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Built anti-bot systems using browser automation detection,
                WebRTC fingerprinting, and graphics fingerprinting.
              </li>
              <li>
                Developed behaviour-learning models to detect suspicious
                activity patterns on the platform.
              </li>
              <li>
                Implemented performance tracking and fraud prevention pipelines
                to protect sports book operations.
              </li>
              <li>
                Further details under NDA.
              </li>
            </ul>
          </Job>

          <Job
            title="Software Developer"
            company="Angel Solutions"
            period="2016 — 2018"
          >
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Built and maintained .NET (C#) applications serving local
                authorities and schools, hosted on Rackspace infrastructure.
              </li>
              <li>
                Produced SSRS reports calculating school performance metrics
                &mdash; pupil and school results across local authority areas
                vs regions, with heavy data aggregation at every level.
              </li>
              <li>
                Wrote complex SQL queries to power reporting dashboards for
                education sector clients.
              </li>
            </ul>
          </Job>

          <Job
            title="Software Developer &amp; IT"
            company="British Ironwork Centre"
            period="2013 — 2016"
          >
            <ul className="list-disc space-y-1 pl-4">
              <li>
                First professional role &mdash; dove headfirst into the
                e-commerce realm building and maintaining .NET (C#) and
                Angular web solutions for a growing family business.
              </li>
              <li>
                Hosted on AWS EC2 and CloudFront &mdash; managed
                infrastructure, deployments, and CDN configuration.
              </li>
              <li>
                Built SQL reports for sales and purchases to accurately
                schedule shipments and manufacturing to replenish stock.
              </li>
              <li>
                Worked across SEO, Magento, and Angular &mdash; learning
                how every part of an online business fits together.
              </li>
              <li>
                Built API integrations with marketplaces such as eBay and
                Amazon.
              </li>
              <li>
                Scraped supplier catalogues to enable drop-shipping of products.
              </li>
              <li>
                Implemented an Inventory System with automated purchasing
                suggestions and multi-level location storage.
              </li>
            </ul>
          </Job>
        </Section>

        <Section title="AI & Agentic Workflows">
          <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 print:text-xs">
            <p>
              I am an AI expert in the field of no-code and low-code agentic
              workflows. I help individuals and teams set up agentic codebases
              that let them thrive — without needing to read every AI headline
              to stay current. My approach combines practical tooling with
              production-ready architecture so teams can adopt AI capabilities
              incrementally and with confidence.
            </p>
            <ul className="list-disc space-y-1 pl-4">
              <li>AI Cookie Categorization and JS Interceptor at Syrenis.</li>
              <li>
                Internal AI toolsets and proof-of-concept automation at
                Monterosa.
              </li>
              <li>
                Advising on agentic workflows, prompt engineering, and LLM
                integration patterns.
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Career Highlights">
          <ul className="list-disc space-y-1 pl-4 text-sm text-zinc-600 dark:text-zinc-400 print:text-xs">
            <li>
              Cookie Module that made Syrenis the Compliance Leader.
            </li>
            <li>
              Released open-source{' '}
              <Link
                href="https://www.npmjs.com/package/playwright-cluster"
                className="text-teal-600 hover:text-teal-500 dark:text-teal-400"
              >
                playwright-cluster
              </Link>{' '}
              (npm package).
            </li>
            <li>AI Cookie Categorization and JS Interceptor.</li>
            <li>.NET Core Worker Services.</li>
            <li>E2E Automation Testing Solution.</li>
            <li>Custom Authorization Process.</li>
            <li>Implemented Structural Logging.</li>
            <li>Reducing cost on infrastructures.</li>
            <li>AWS Solutions Architect Associate certified.</li>
            <li>Building strong technical teams.</li>
            <li>
              Built the first cross-domain consent solution, cookie-less
              solution.
            </li>
            <li>Simplify architectures and save cost.</li>
          </ul>
        </Section>

        <Section title="Technical Skills">
          <dl className="space-y-1 text-sm print:text-xs">
            <SkillGroup
              label="Primary"
              skills="TypeScript, Next.js, TanStack Start, React, Postgres, Bun, Cloud, AWS"
            />
            <SkillGroup
              label="Cloud & DevOps"
              skills="AWS (CDK, Lambda, CloudFormation, S3, EC2, Fargate, VPC, RDS, CloudFront, API Gateway), GitLab CI/CD, GitHub Actions"
            />
            <SkillGroup
              label="Databases"
              skills="PostgreSQL, MongoDB, DynamoDB, MS-SQL"
            />
            <SkillGroup
              label="Testing"
              skills="Playwright, playwright-cluster, Selenium"
            />
            <SkillGroup
              label="ORM"
              skills="Prisma, Mongoose, Entity Framework, Dapper"
            />
            <SkillGroup
              label="Tools"
              skills="Jira, GitLab, GitHub, Kafka, Electron"
            />
            <SkillGroup
              label="AI"
              skills="LangChain, AI SDK, n8n, Make, Motia, Trigger.dev, prompt engineering, LLM integration, agentic workflows"
            />
            <SkillGroup
              label="Previously"
              skills=".NET Core, Web API, MVC, Node.js, Express, Koa, Rust"
            />
          </dl>
        </Section>

        <Section title="Languages">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 print:text-xs">
            English (Fluent) &middot; Bulgarian (Fluent) &middot; Polish
            (Intermediate)
          </p>
        </Section>

        <Section title="Interests">
          <ul className="list-disc space-y-1 pl-4 text-sm text-zinc-600 dark:text-zinc-400 print:text-xs">
            <li>Outdoor activities, sports, and sightseeing.</li>
            <li>Visiting historical places.</li>
            <li>
              Teaching starters to code with free meetups — Chester, Liverpool,
              and now virtually.
            </li>
            <li>
              Family is really important to me. My wife and my two daughters
              are a delight to spend time with.
            </li>
          </ul>
        </Section>

        <div className="mt-12 print:hidden">
          <PrintButton />
        </div>
      </div>
    </Container>
  )
}
