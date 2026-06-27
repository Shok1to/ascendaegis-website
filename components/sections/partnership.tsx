import { ComplianceGrid } from '@/components/diagrams/compliance-grid'
import { Reveal } from '@/components/parallax'

export function Partnership() {
  return (
    <section className="border-b border-border bg-background" id="security">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">
            Unlimited scale. Uncompromising security.
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Powered by the Aegis &times; Nuvollo strategic partnership.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            By integrating Nuvollo&apos;s enterprise-grade cloud capabilities, we
            have removed the infrastructure bottleneck&mdash;delivering SOC 2
            Type II security, real-time scaling, and low-latency global reach
            for every diagnostic we run.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ComplianceGrid />
        </Reveal>

        <Reveal className="mt-8 rounded-xl border border-border bg-secondary/60 p-7">
          <p className="text-pretty leading-relaxed text-secondary-foreground">
            By leveraging Nuvollo&apos;s infrastructure, Ascend Aegis maintains a{' '}
            <span className="font-semibold text-foreground">
              Capital-Light model
            </span>
            , allowing us to scale diagnostic volume globally with zero CAPEX
            investment in hardware.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
