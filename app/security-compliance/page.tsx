import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Lock, FileCheck, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"

export const metadata: Metadata = {
  title: "Security & Compliance | Ascend Aegis",
  description:
    "Aegis runs in a secured, SOC-certified environment and is working toward SOC 2 and ISO 27001, Health Canada MDEL and FDA requirements.",
}

const pillars = [
  {
    icon: ShieldCheck,
    title: "Secured, SOC-certified hosting",
    body: "Aegis systems run in a hosting environment that holds SOC certification. Access is controlled, activity is logged, and data is encrypted.",
  },
  {
    icon: Lock,
    title: "Patient privacy first",
    body: "Aegis is built to support the requirements of PIPEDA in Canada, PHIPA in Ontario and HIPAA in the United States.",
  },
  {
    icon: FileCheck,
    title: "Audit trails",
    body: "Each processing stage records what was done to a study, so a result can be traced back to the original recording.",
  },
  {
    icon: Network,
    title: "Designed for disruption",
    body: "The edge and mesh architecture is designed so that processing can continue when a connection to the central cloud is slow or lost.",
  },
]

const roadmap = [
  {
    item: "Secured data infrastructure",
    status: "Active",
    statusColor: "bg-green-500",
    body: "Encrypted data routing, audit logging and token-based authentication.",
  },
  {
    item: "SOC-certified hosting environment",
    status: "In place",
    statusColor: "bg-green-500",
    body: "The environment where Aegis systems and data run.",
  },
  {
    item: "Health Canada MDEL",
    status: "In progress",
    statusColor: "bg-yellow-500",
    body: "Preparing procedures for a Medical Device Establishment Licence.",
  },
  {
    item: "FDA 510(k) pre-submission",
    status: "Scheduled",
    statusColor: "bg-blue-500",
    body: "Compiling software-as-a-medical-device documentation and starting pre-submission discussions.",
  },
  {
    item: "Aegis SOC 2",
    status: "Planned",
    statusColor: "bg-muted-foreground",
    body: "Aegis's own SOC 2 certification.",
  },
  {
    item: "Aegis ISO 27001",
    status: "Planned",
    statusColor: "bg-muted-foreground",
    body: "Aegis's own information security management certification.",
  },
]

const faqs = [
  {
    q: "Where is Aegis data hosted?",
    a: "In a secured, SOC-certified hosting environment, with encryption and audit logging.",
  },
  {
    q: "Is Aegis SOC 2 or ISO 27001 certified?",
    a: "Aegis runs in a SOC-certified environment and is working toward its own SOC 2 and ISO 27001 certification. Both are shown as planned in the roadmap on this page.",
  },
  {
    q: "What privacy laws does Aegis design for?",
    a: "Canada's PIPEDA, Ontario's PHIPA and the US HIPAA.",
  },
  {
    q: "Is the Sleep Tool a licensed medical device?",
    a: "Not yet. Aegis is preparing for a Health Canada Medical Device Establishment Licence (MDEL) and an FDA 510(k) pre-submission. Until then the Sleep Tool is limited to validation, pilot evaluation and investigational research.",
  },
]

export default function SecurityCompliancePage() {
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
                Security &amp; Compliance
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Trust, security and regulatory status
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                Patient data is handled in a secured, SOC-certified
                environment. Aegis is working toward its own SOC 2 and ISO
                27001 certification and toward medical device licensing.
              </p>
              <div className="mt-9">
                <Button
                  size="lg"
                  render={
                    <Link href="mailto:technical@aaegis-ai.com?subject=Security%20and%20compliance%20question" />
                  }
                >
                  Security questions: technical@aaegis-ai.com
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pillars — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-6 md:grid-cols-2">
              {pillars.map((pillar, i) => (
                <Reveal
                  key={pillar.title}
                  delay={i * 120}
                  className="rounded-xl border border-border bg-card p-7 shadow-sm"
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

        {/* Roadmap — navy */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-primary-foreground/70">Roadmap</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Certification and regulatory status
              </h2>
            </Reveal>

            <div className="mt-10 overflow-hidden rounded-xl border border-primary-foreground/20">
              {roadmap.map((row, i) => (
                <Reveal
                  key={row.item}
                  delay={i * 80}
                  className={`flex flex-col gap-3 bg-primary-foreground/5 p-6 sm:flex-row sm:items-start sm:gap-6 ${
                    i !== roadmap.length - 1
                      ? "border-b border-primary-foreground/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2 sm:w-64 sm:shrink-0">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${row.statusColor}`}
                    />
                    <span className="text-sm font-semibold text-primary-foreground">
                      {row.item}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <p className="text-sm leading-relaxed text-primary-foreground/75">
                      {row.body}
                    </p>
                    <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-primary-foreground/60">
                      {row.status}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150} className="mt-8">
              <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-7">
                <h3 className="text-base font-semibold text-primary-foreground">
                  Intended use
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                  The Aegis Sleep Tool is not currently offered for
                  independent commercial diagnostic use. It is limited to
                  validation, pilot evaluation and investigational research
                  while Health Canada MDEL and FDA requirements are
                  completed.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Questions — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-accent">Questions</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Security and compliance questions
              </h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {faqs.map((item, i) => (
                <Reveal key={item.q} delay={i * 100}>
                  <details className="group rounded-xl border border-border bg-card p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground marker:content-none">
                      {item.q}
                      <span className="shrink-0 text-accent transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact — navy */}
        <section id="contact" className="bg-primary text-primary-foreground scroll-mt-16">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <Reveal className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Security and compliance enquiries
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                  Hospital IT, privacy and procurement teams can request
                  documentation and ask questions.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <span className="font-mono text-sm text-primary-foreground/80">
                  technical@aaegis-ai.com
                </span>
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                  render={
                    <Link href="mailto:technical@aaegis-ai.com?subject=Security%20and%20compliance%20question" />
                  }
                >
                  Email technical@aaegis-ai.com
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
