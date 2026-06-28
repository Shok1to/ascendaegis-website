import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Gauge, ShieldCheck, Workflow } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { WorkflowDiagram } from "@/components/diagrams/workflow-diagram"
import { ComplianceGrid } from "@/components/diagrams/compliance-grid"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "The Aegis Platform | Ascend Aegis",
  description:
    "High-precision AI that handles complex medical data in real-time. The Aegis Sleep Tool automates scoring and integrates into existing clinical workflows.",
}

const capabilities = [
  {
    icon: Workflow,
    title: "Direct data ingestion",
    body: "Proprietary deep learning models process raw patient data directly from the study, with no manual pre-processing.",
  },
  {
    icon: Gauge,
    title: "Real-time scoring",
    body: "Studies are scored in minutes instead of hours, delivering instant, consistent results to the clinician.",
  },
  {
    icon: ShieldCheck,
    title: "Workflow integration",
    body: "Designed for seamless integration into existing hospital and clinic systems with enterprise-grade security.",
  },
]

export default function PlatformPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — navy with hex background */}
        <div className="relative bg-primary text-primary-foreground">
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
                          The Aegis Platform
                        </p>
                        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                          Clinical automation in real-time.
                        </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                          Ascend Aegis replaces manual, error-prone diagnostic workflows with high-precision AI engineered to handle complex medical data in real-time.
                        </p>
                      </Reveal>
                    </div>
                  </section>
          
        {/* Capabilities — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              {capabilities.map((cap) => (
                <div key={cap.title} className="bg-card p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <cap.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cap.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sleep Tool — navy */}
        <section
          id="sleep-tool"
          className="border-b border-border bg-primary text-primary-foreground scroll-mt-16"
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow text-primary-foreground/70">
                  Aegis Sleep Tool
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Our flagship tool, validated against clinical standards.
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/85">
                  By automating the scoring process, we eliminate the 2&ndash;4
                  hour manual bottleneck per study, delivering instant,
                  consistent results that exceed current clinical accuracy
                  standards. Aegis is validated through strategic partnerships
                  with leading sleep centers.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl border border-primary-foreground/20">
                <Image
                  src="/images/sleep-signal.png"
                  alt="Polysomnography signal channels visualized as clean stacked waveforms"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-14">
              <WorkflowDiagram />
            </div>
          </div>
        </section>

        {/* Security — white */}
        <section id="security" className="bg-background scroll-mt-16">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="eyebrow text-accent">Security &amp; compliance</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Built on a regulatory-compliant backbone.
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Through the Aegis &times; Nuvollo partnership, every diagnostic
                runs on SOC 2 Type II infrastructure with real-time scaling and
                low-latency global reach.
              </p>
            </div>
            <div className="mt-12">
              <ComplianceGrid />
            </div>
            <div className="mt-12 flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-pretty text-lg font-medium text-foreground">
                See the Aegis platform applied to your clinic&apos;s workflow.
              </p>
              <Button size="lg" render={<Link href="/for-clinics#contact" />}>
                Request a Demo
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
