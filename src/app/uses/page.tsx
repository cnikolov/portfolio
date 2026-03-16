import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating. Here's a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Mark Adler Standing Desk with Temo Wheels">
            A standing desk on wheels that can effortlessly move to any room in
            the house. Perfect for chasing the sunlight &mdash; I roll it to the
            brightest room to harvest as much natural light as possible.
            A convenient refresh for both body and mind.
          </Tool>
          <Tool title="HP X27 Monitors">
            Reliable 27&quot; displays that strike a great balance between
            screen real estate and pixel density. Plenty of room to tile
            terminals, editors, and browser windows side by side.
          </Tool>
          <Tool title="MSI Vector GP68 Laptop">
            Gaming laptops are surprisingly great dev machines &mdash; the beefy
            GPU and thermals make running local AI models and experimenting with
            LLMs a breeze. Portable power when I need to work away from the
            desk.
          </Tool>
          <Tool title="Linux Pop!_OS">
            Currently running Pop!_OS and couldn&apos;t be happier. Full
            control, privacy, speed, and agility in any workload &mdash; I
            don&apos;t miss a thing. Also a contributor to the OS, writing Rust
            for the COSMIC desktop environment.
          </Tool>
          <Tool title="Speediance Gym Monster">
            A compact fitness machine right next to the desk to offset sitting
            time. Quick sessions between coding sprints keep the blood flowing
            and the mind sharp.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            My daily driver for everything from TypeScript to Rust. The
            extension ecosystem is unmatched &mdash; Copilot, ESLint, Prettier,
            and remote containers make it feel like a full IDE without the
            bloat.
          </Tool>
          <Tool title="Visual Studio">
            It is what it is &mdash; Microsoft engineering at its finest. Half
            your RAM gone before you even open a file, but when you need deep
            .NET debugging, profiling, or legacy C# work, nothing else comes
            close. You don&apos;t choose Visual Studio; it chooses you.
          </Tool>
          <Tool title="Zed">
            Blazing-fast editor written in Rust. I reach for it when I want a
            lightweight, distraction-free session &mdash; it launches instantly
            and the native performance is noticeable on large files.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it&apos;s
            become our virtual whiteboard for the entire company. Never would
            have expected the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It&apos;s not the newest kid on the block but it&apos;s still the
            fastest. The Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it&apos;s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
