import { Stethoscope, Zap, Globe2 } from 'lucide-react'
import { Reveal } from '@/components/parallax'

const pillars = [
  {
    icon: Stethoscope,
    title: 'Clinically Validated AI',
    body: 'Born from a partnership with Canadian sleep clinics, Aegis was built to solve a real-world problem: manual scoring is too slow. We have automated the entire process to deliver immediate, consistent, and reliable results from patient to physician.',
  },
  {
    icon: Zap,
    title: 'Zero-Friction Diagnostics',
    body: 'We provide the infrastructure for diagnostic automation. By eliminating manual bottlenecks and integrating enterprise-grade cloud security, we empower providers to focus on patient care while our technology handles the complexity of the data.',
  },
  {
    icon: Globe2,
    title: 'The New Global Standard',
    body: 'Sleep is our wedge; global diagnostic automation is our goal. We are building the regulatory-compliant backbone for the next generation of medicine, evolving our AI to set a new standard across the entire medical landscape.',
  },
]

export function Bottleneck() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Breaking the diagnostic bottleneck</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Manual scoring is too slow. We automated the entire workflow.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
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
