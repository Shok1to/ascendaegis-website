import { Shield, Cpu, FileText, ClipboardCheck } from "lucide-react"
import { Reveal } from "@/components/parallax"

const steps = [
  {
    icon: Shield,
    step: "01",
    title: "Secure Data Ingestion",
    body: "Your clinic streams raw, sequential physiological data securely via our optimized S-Type API.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Algorithmic Analysis",
    body: "The deep learning backend processes the signals, executing precise event detection and sleep architecture scoring according to AASM guidelines.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Instant Report Generation",
    body: "The system automatically calculates the Apnea-Hypopnea Index (AHI) and generates comprehensive, clinical-grade diagnostic reports.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Clinical Sign-Off",
    body: "Your staff reviews and signs off on the completed study in a fraction of the traditional time, instantly clearing your patient queue.",
  },
]

export function IntegrationPipeline() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">How it works</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The Integration Pipeline
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            From patient data to physician report in minutes, not hours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <div className="relative flex flex-col rounded-xl border border-border bg-card p-7 h-full">
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-px w-6 bg-border lg:block translate-x-full" />
                )}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-xs font-semibold text-accent">
                    {step.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
