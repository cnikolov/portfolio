import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description: 'Talks and podcast appearances.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Speaking"
      intro="Work in progress. This page will list talks and podcast appearances when ready."
    >
      <div className="space-y-20">
        <SpeakingSection title="Sample">
          <Appearance
            href="#"
            title="Sample talk title"
            description="Sample description. Replace with your actual talk or podcast appearance when you have content to add."
            event="Event Name, Year"
            cta="Watch video"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
