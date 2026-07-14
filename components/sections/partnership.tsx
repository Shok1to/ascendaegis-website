import { ComplianceGrid } from "@/components/diagrams/compliance-grid"
import { Reveal } from "@/components/parallax"

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
            By integrating Nuvollo's enterprise-grade cloud capabilities, Ascend
            Aegis provides a secure, scalable foundation that supports faster
            diagnostics worldwide—with SOC 2 Type II security, real-time
            scaling, and reliable low-latency performance.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ComplianceGrid />
        </Reveal>
      </div>
    </section>
  )
}
