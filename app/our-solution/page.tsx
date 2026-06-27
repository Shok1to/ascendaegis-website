import Link from "next/link"
import { ArrowRight, Stethoscope, Zap, Globe2, Shield, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"

const pillars = [
  {
    icon: Stethoscope,
    title: "Clinically Validated AI",
    body: "Born from a partnership with Canadian sleep clinics, Aegis was built to solve a real-world problem: manual scoring is too slow. We have automated the entire process to deliver immediate, consistent, and reliable results from patient to physician.",
  },
  {
    icon: Zap,
    title: "Zero-Friction Diagnostics",
    body: "We provide the infrastructure for diagnostic automation. By eliminating manual bottlenecks and integrating enterprise-grade cloud security, we empower providers to focus on patient care while our technology handles the complexity of the data.",
  },
  {
    icon: Globe2,
    title: "The New Global Standard",
    body: "Sleep is our wedge; global diagnostic automation is our goal. We are building the regulatory-compliant backbone for the next generation of medicine, evolving our AI to set a new standard for intelligent diagnostics across the entire medical landscape.",
  },
]

const tools = [
  {
    title: "Aegis Sleep Tool",
    body: "Our flagship tool uses proprietary deep learning models to process raw patient data directly. By automating the scoring process, we eliminate the 2-4 hour manual bottleneck per study, delivering instant, consistent results that exceed current clinical accuracy standards.",
  },
  {
    title: "Clinical Readiness",
    body: "Built for the highest clinical standards, Aegis is designed for seamless integration into existing hospital and clinic workflows. We are currently validated through strategic partnerships with leading sleep centres, ensuring our AI is as reliable as it is fast.",
  },
]

export default function OurSolutionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-primary-foreground/70">Our solution</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Breaking the Diagnostic Bottleneck.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                Ascend Aegis replaces manual, error-prone diagnostic workflows
                with high-precision AI. Our platform is engineered to handle
                complex medical data in real-time.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              {pillars.map((pillar, i) => (
                <Reveal
                  key={pillar.title}
                  delay={i * 120}
                  className="bg-card p-7"
                >
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

        {/* Clinical Automation */}
        <section className="border-b border-border bg-secondary/50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-accent">
                Clinical automation in real-time
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Aegis: Clinical Automation in Real-Time.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {tools.map((tool, i) => (
                <Reveal
                  key={tool.title}
                  delay={i * 120}
                  className="rounded-xl border border-border bg-card p-7"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {tool.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {tool.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-accent">Infrastructure & security</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Unlimited Scale. Uncompromising Security.
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                Powered by the Aegis × Nuvollo Strategic Partnership. By
                integrating Nuvollo's enterprise-grade cloud capabilities, we
                have removed the infrastructure bottleneck. This means SOC 2
                Type II security, real-time scaling, and low-latency global
                reach for every diagnostic we run.
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                By leveraging Nuvollo's infrastructure, Ascend Aegis maintains a
                Capital-Light model, allowing us to scale diagnostic volume
                globally with zero CAPEX investment in hardware.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-primary-foreground/70">The future</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Beyond Sleep: The Future of Diagnostics.
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/85">
                We are building the intelligent backbone for the next generation
                of medicine. By perfecting clinical automation in sleep, we are
                creating the blueprint to accelerate accuracy and delivery of
                care across the entire medical landscape.
              </p>
              <div className="mt-9">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                  render={<Link href="/investors" />}
                >
                  View the Vision
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
