import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"

const leadership = [
  {
    name: "Richard Bangyay",
    title: "Founder / CEO",
    bio: 'Focused on the intersection of AI-driven medical automation and scalable business unit economics. Richard leads the strategic vision for Ascend Aegis, moving the company from a "Wedge" strategy in sleep diagnostics toward a global Diagnostic Operating System.',
    image: "/images/Richard.webp",
  },
  {
    name: "Dr. Stephen Glazer",
    title: "Chief Medical Officer",
    bio: "A cornerstone of our clinical validation process. Dr. Glazer leads the weekly validation sessions, ensuring that every AI-driven insight meets the highest standards of sleep medicine. His oversight bridges the gap between machine learning and patient-centric care.",
    image: "/images/Stephen.webp",
  },
  {
    name: "Brianna Morissette",
    title: "Chief of Staff",
    bio: 'Brianna serves as the CEO\'s strategic lead at Ascend Aegis, driving operational excellence. She manages project lifecycles, investor relations, and partnerships, ensuring the "Diagnostic Operating System" scales with the precision and integrity required for global medical deployment.',
    image: "/images/Brianna.webp",
  },
]

const board = [
  {
    name: "Mr. Joey Bermudez",
    title: "Chairman of the Board",
    image: "/images/Joey.webp",
  },
  {
    name: "Dr. Timothy Damaso",
    title: "Board Member · Physiomed",
    image: "/images/Timothy.webp",
  },
  {
    name: "Mr. Alberto Turri",
    title: "Board Member · FNS LLC",
    image: "/images/Alberto.webp",
  },
  {
    name: "Mr. Richard Bangyay",
    title: "Board Member",
    image: "/images/Richard.webp",
  },
]

const enablement = [
  {
    name: "Dean Pietersen",
    title: "Corporate Secretary",
    bio: "Dean Pietersen brings 20+ years of operations and logistics experience. He manages governance and regulatory compliance, ensuring operational integrity and board alignment as the company scales its AI-driven diagnostic solutions globally.",
  },
  {
    name: "Efren Antimano",
    title: "Technical Partnerships",
    bio: "A seasoned leader with over 28 years in IT and consumer electronics, Efren previously held strategic sales roles at Intel in Canada and Asia. He specializes in business development and high-level partnerships, driving growth through customer-centric strategies and collaborative innovation.",
  },
]

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-primary-foreground/70">Our people</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Building the Future of Diagnostics
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Leadership */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Leadership Team
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.map((member, i) => (
                <Reveal key={member.name} delay={i * 120}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-border">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {member.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Board */}
        <section className="border-b border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Board of Directors
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {board.map((member, i) => (
                <Reveal key={member.name + member.title} delay={i * 100}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-border">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.title}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Business Enablement */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Business Enablement
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {enablement.map((member, i) => (
                <Reveal key={member.name} delay={i * 120}>
                  <div className="rounded-xl border border-border bg-card p-7">
                    <h3 className="text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {member.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
