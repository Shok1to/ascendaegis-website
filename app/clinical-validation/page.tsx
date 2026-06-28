import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"

const metrics = [
  {
    value: "87.4%",
    label: "Epoch-by-Epoch Agreement",
    body: "Matching or exceeding the average inter-scorer agreement between two expert human RPSGTs across 5-stage sleep scoring.",
  },
  {
    value: "0.93",
    label: "AHI Correlation (r)",
    body: "Strong linear correlation with consensus sleep physician diagnoses for Apnea-Hypopnea Index tracking.",
  },
  {
    value: "<5 min",
    label: "Average Score Time",
    body: "Complete processing speed from raw polysomnography (PSG) data ingestion to a draft-ready clinical report.",
  },
]

export default function ClinicalValidationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — navy with hex background */}
        <section className="relative bg-primary text-primary-foreground">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "url(/images/hero-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-primary-foreground/70">
                Clinical validation
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Clinical Rigour Meets Automation.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                Automated sleep scoring shouldn't require compromising on
                diagnostic confidence. Our deep learning models are continuously
                validated against expert consensus datasets to ensure
                human-level precision with zero-friction deployment.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Metrics — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-accent">Performance metrics</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Validated Performance at Scale
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {metrics.map((metric, i) => (
                <Reveal
                  key={metric.label}
                  delay={i * 120}
                  className="rounded-xl border border-border bg-card p-8 text-center shadow-sm"
                >
                  <p className="text-5xl font-bold text-primary">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-base font-semibold text-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {metric.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Signal Analysis — navy with image */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow text-primary-foreground/70">
                  High-fidelity signal analysis
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Multi-Channel Physiological Intelligence
                </h2>
                <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/85">
                  Our models interpret raw, multi-channel physiological signals,
                  directly analyzing EEG, ECG, EOG, and EMG channels
                  simultaneously. By training on diverse clinical-grade
                  datasets, the platform successfully maps complex sleep
                  architecture, capturing rapid transitions and micro-arousals
                  that traditional rule-based algorithms frequently miss.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/85">
                  This ensures that your clinical staff receives a baseline
                  draft that aligns seamlessly with gold-standard laboratory
                  scoring rules.
                </p>
              </Reveal>
              <Reveal>
                <Image
                  src="/images/ai-vs-manual.png"
                  alt="AI vs Manual Sleep Scoring Comparison"
                  width={600}
                  height={400}
                  className="w-full rounded-xl shadow-lg"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA — white */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-accent">Documentation</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                White Paper & Compliance Downloads
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                Institutional evidence and technical documentation available on
                request.
              </p>
              <div className="mt-9">
                <Button
                  size="lg"
                  render={
                    <Link href="mailto:info@aaegis-ai.com?subject=Request%20for%20Validation%20Data" />
                  }
                >
                  Request Validation Data
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
