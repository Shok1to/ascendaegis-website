import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Layers, Banknote } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Investors | Ascend Aegis',
  description:
    'Sleep is the wedge; global diagnostic automation is the goal. A capital-light model building the regulatory-compliant backbone for the next generation of medicine.',
}

const thesis = [
  {
    icon: TrendingUp,
    title: 'A validated wedge',
    body: 'Sleep diagnostics is a large, underserved market with a clear, painful bottleneck. Aegis enters with a clinically validated solution and real partnerships.',
  },
  {
    icon: Banknote,
    title: 'Capital-light model',
    body: 'By leveraging Nuvollo\u2019s infrastructure, we scale diagnostic volume globally with zero CAPEX investment in hardware.',
  },
  {
    icon: Layers,
    title: 'Expanding platform',
    body: 'The same engine that automates sleep scoring becomes the blueprint for diagnostic automation across the medical landscape.',
  },
]

const roadmap = [
  {
    step: '01',
    title: 'Sleep diagnostics',
    desc: 'Automated, real-time PSG scoring validated with leading sleep centers.',
  },
  {
    step: '02',
    title: 'Adjacent modalities',
    desc: 'Extend the engine into neighbouring diagnostic categories with shared infrastructure.',
  },
  {
    step: '03',
    title: 'The Diagnostic OS',
    desc: 'A regulatory-compliant standard for intelligent diagnostics across medicine.',
  },
]

export default function InvestorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Investors"
          title="Beyond sleep: building the Diagnostic Operating System."
          description="Sleep is our wedge; global diagnostic automation is our goal. We are building the regulatory-compliant backbone for the next generation of medicine."
        />

        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="eyebrow text-accent">The investment thesis</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A focused entry point into a platform-scale opportunity.
              </h2>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              {thesis.map((item) => (
                <div key={item.title} className="bg-card p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="eyebrow text-accent">The roadmap</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From a single modality to a category standard.
              </h2>
            </div>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {roadmap.map((item) => (
                <li
                  key={item.step}
                  className="rounded-xl border border-border bg-card p-7"
                >
                  <span className="font-mono text-sm font-semibold text-accent">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Request the investor brief.
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/85">
                  Connect with our team to learn more about the market, the
                  technology, and the path to a new global standard for
                  diagnostics.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                render={<Link href="/for-clinics#contact" />}
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
