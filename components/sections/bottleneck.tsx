import { Sparkles, Workflow } from 'lucide-react'
import { Reveal } from '@/components/parallax'

const pillars = [
  {
    icon: Sparkles,
    title: 'Generative AI',
    body: 'Writes and summarises. In diagnostics that means a draft report or a plain-language summary of a result, ready for a clinician to review and correct.',
  },
  {
    icon: Workflow,
    title: 'Agentic AI',
    body: 'Carries a task through its steps. For example: check a recording for quality problems, run the analysis, and send the result to the right person for sign-off.',
  },
]

export function Bottleneck() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Our approach</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Generative and agentic AI, with a clinician in charge
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Two kinds of AI do different jobs in a diagnostic workflow. Aegis
            uses both, and a clinician makes the final decision.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 120} className="bg-card p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                <pillar.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
