import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"

export const metadata: Metadata = {
  title: "Our Vision | Ascend Aegis",
  description:
    "AI that expands access to expert diagnostics—wherever they're needed. Building an intelligent diagnostic platform beyond sleep medicine.",
}

export default function VisionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-primary-foreground/70">Our Vision</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                AI that expands access to expert diagnostics—wherever they're
                needed.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                Today's healthcare AI is largely built for a single specialty, a
                single workflow, or a single clinical environment. Our vision is
                different.
              </p>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                We are building an intelligent diagnostic platform capable of
                supporting clinicians across medical disciplines, extending
                high-quality diagnostic capabilities beyond traditional
                healthcare settings and into the places where expertise is
                hardest to access.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Built on a Foundation */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-accent">Built on a Foundation</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Start with what already exists.
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Today, Ascend Aegis is transforming sleep diagnostics by
                automating complex scoring workflows, reducing turnaround times,
                and helping clinics deliver care more efficiently.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Tomorrow, the same platform can support far more.
              </p>
            </Reveal>
          </div>
        </section>

        {/* One Platform, Many Applications */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-primary-foreground/70">
                One Platform. Many Applications.
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Rather than isolated solutions, a unified platform.
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/85">
                Rather than developing isolated AI solutions for individual
                specialties, our vision is a unified platform that continuously
                learns, adapts, and expands.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/85">
                As new diagnostic capabilities are added, healthcare
                organizations gain access to an increasingly comprehensive
                ecosystem without replacing existing infrastructure.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Looking Ahead */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-accent">Looking Ahead</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Expert diagnostics, wherever care is delivered.
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                We envision a future where expert diagnostic insight is
                available regardless of geography, infrastructure, or clinical
                specialty.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                By combining scalable cloud infrastructure, responsible
                artificial intelligence, and clinician-centred design, Ascend
                Aegis aims to help make high-quality diagnostics more
                accessible, more efficient, and available wherever care is
                delivered.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
