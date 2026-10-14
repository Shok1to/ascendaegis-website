import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, CheckCircle2, Plug, HeartPulse } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "For Clinics | Aegis Sleep Tool",
  description:
    "Aegis Sleep Tool for sleep clinics: a first-draft sleep study score for your reviewers, built with Canadian sleep centres. Request a demo.",
}

const benefits = [
  {
    icon: Clock,
    title: "Clinician time",
    body: "Manual scoring can take hours per study. The tool prepares a draft so staff start from a scored study.",
  },
  {
    icon: CheckCircle2,
    title: "Consistency",
    body: "The same method is applied to every study, which reduces variation between scorers.",
  },
  {
    icon: Plug,
    title: "Fits your workflow",
    body: "Designed to work with the equipment and review process your clinic already uses, with minimal disruption.",
  },
  {
    icon: HeartPulse,
    title: "Built with clinics",
    body: "Developed and validated with Canadian sleep centres, with a sleep physician leading clinical oversight.",
  },
]

const faqs = [
  {
    q: "What does a sleep clinic need to try the Aegis Sleep Tool?",
    a: "A conversation about how studies are recorded and scored today. The Aegis team then shows how the tool handles a study and how results reach your reviewers. Use is currently limited to pilot evaluation.",
  },
  {
    q: "Will it change how my staff work?",
    a: "The aim is minimal disruption. Staff keep their role in review. The tool prepares the first draft, and your clinicians correct it and sign off.",
  },
  {
    q: "Is patient data secure?",
    a: "Data is handled in a secured, SOC-certified environment with encryption and audit logging. See Security & Compliance.",
  },
  {
    q: "Can we use it for routine diagnosis today?",
    a: "Not yet. The Sleep Tool is limited to validation, pilot evaluation and investigational research while MDEL and FDA requirements are completed.",
  },
]

export default function ForClinicsPage() {
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
                Sleep Tool &middot; For Clinics
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                For sleep clinics
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                Aegis is built with Canadian sleep centres to take the first
                pass of manual scoring off your team, so skilled staff can
                spend their time on review and patients.
              </p>
              <div className="mt-9">
                <Button
                  size="lg"
                  render={
                    <Link href="mailto:info@aaegis-ai.com?subject=Demo%20request%20from%20a%20sleep%20clinic" />
                  }
                >
                  Request a demo: info@aaegis-ai.com
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Benefits — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-card p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <benefit.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {benefit.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notice + Clinic questions — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <div className="rounded-xl border border-border bg-card p-7 shadow-sm">
                <h3 className="text-base font-semibold text-foreground">
                  Intended use
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The Aegis Sleep Tool is not currently offered for
                  independent commercial diagnostic use. It is limited to
                  validation, pilot evaluation and investigational research
                  while Health Canada MDEL and FDA requirements are
                  completed.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-14">
              <p className="eyebrow text-accent">Questions</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Clinic questions
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
        <section
          id="contact"
          className="bg-primary text-primary-foreground scroll-mt-16"
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow text-primary-foreground/70">
                  Request a demo
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  See Aegis run a study
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/85">
                  Describe how your clinic records and scores studies today.
                  Our clinical team will show how Aegis scores a study and
                  how it fits with your systems.
                </p>
                <a
                  href="mailto:info@aaegis-ai.com"
                  className="mt-4 inline-block text-sm text-primary-foreground/85 underline transition-colors hover:text-primary-foreground"
                >
                  info@aaegis-ai.com
                </a>
              </Reveal>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
