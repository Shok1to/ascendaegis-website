import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Aegis Sleep Tool | Ascend Aegis",
  description:
    "The Aegis Sleep Tool scores overnight sleep studies following AASM rules and prepares a draft report for physician review. In validation with Canadian sleep clinics.",
}

const status = [
  {
    area: "Clinical validation",
    detail:
      "In progress with Canadian sleep centres. Weekly validation sessions are led by our Chief Medical Officer, a board-certified sleep physician.",
    statusColor: "bg-yellow-500",
  },
  {
    area: "Training data",
    detail: "4,000 patient files ingested for training.",
    statusColor: "bg-green-500",
  },
  {
    area: "Health Canada MDEL",
    detail: "In progress.",
    statusColor: "bg-yellow-500",
  },
  {
    area: "FDA",
    detail: "510(k) pre-submission scheduled.",
    statusColor: "bg-blue-500",
  },
  {
    area: "Availability",
    detail: "Validation, pilot evaluation and investigational research only.",
    statusColor: "bg-blue-500",
  },
]

const faqs = [
  {
    q: "What is the Aegis Sleep Tool?",
    a: "The Aegis Sleep Tool is software that scores overnight sleep studies (polysomnography) and prepares a draft report for a sleep physician to review and sign off.",
  },
  {
    q: "What is sleep study scoring?",
    a: "A sleep study records brain activity, eye movement, muscle tone, heart rhythm and breathing through the night. Scoring divides the recording into 30-second segments and labels each one as wake, light sleep, deep sleep or REM sleep, following American Academy of Sleep Medicine (AASM) rules. Done by hand, it can take a technologist hours per study.",
  },
  {
    q: "Does the Sleep Tool replace sleep technologists or physicians?",
    a: "No. It prepares a draft. Clinical staff review the result and a physician signs off.",
  },
  {
    q: "Is the Sleep Tool approved for clinical use?",
    a: "Not yet. It is limited to validation, pilot evaluation and investigational research while Health Canada MDEL and FDA requirements are completed.",
  },
]

export default function SleepToolPage() {
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
              <p className="eyebrow text-primary-foreground/70">Sleep Tool</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Sleep study scoring, prepared for clinician review.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                The Aegis Sleep Tool reads an overnight sleep study, scores it
                following AASM rules and prepares a draft report. Clinical
                staff review it and a physician signs off.
              </p>
              <div className="mt-9">
                <Button size="lg" render={<Link href="#contact" />}>
                  Request a demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* The problem — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow text-accent">The problem</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Scoring by hand is slow and varies between scorers
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  Every sleep study has to be divided into 30-second segments
                  and labelled by a trained technologist. For a full night
                  that is around a thousand segments, and the work can take
                  hours per study.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Two expert scorers do not always agree on every segment. A
                  consistent first draft gives clinics a common starting
                  point and frees skilled staff for review and patient care.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* How it fits — navy */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-primary-foreground/70">How it fits</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                From recording to signed report
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/85">
                The clinic sends a study over a secured connection, the tool
                scores it, and clinical staff review the draft before a
                physician signs off.
              </p>
              <p className="mt-6">
                <Link
                  href="/our-solution"
                  className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
                >
                  See the full pipeline &rarr;
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Where it stands — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-accent">Where it stands</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Status of the Sleep Tool
              </h2>
            </Reveal>
            <div className="mt-10 overflow-hidden rounded-xl border border-border">
              {status.map((row, i) => (
                <Reveal
                  key={row.area}
                  delay={i * 80}
                  className={`flex flex-col gap-3 bg-card p-6 sm:flex-row sm:items-start sm:gap-6 ${
                    i !== status.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 sm:w-56 sm:shrink-0">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${row.statusColor}`}
                    />
                    <span className="text-sm font-semibold text-foreground">
                      {row.area}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {row.detail}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8">
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <div className="flex gap-4">
                  <FileCheck className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Intended use
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      The Aegis Sleep Tool is not currently offered for
                      independent commercial diagnostic use. It is limited to
                      validation, pilot evaluation and investigational
                      research while Health Canada MDEL and FDA requirements
                      are completed.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-8">
              <p className="text-sm text-muted-foreground">
                <Link
                  href="/clinical-validation"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Clinical validation &rarr;
                </Link>
                <span className="mx-3">&middot;</span>
                <Link
                  href="/security-compliance"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Security &amp; compliance &rarr;
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ — navy */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-primary-foreground/70">Questions</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Sleep Tool questions
              </h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {faqs.map((item, i) => (
                <Reveal key={item.q} delay={i * 100}>
                  <details className="group rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-primary-foreground marker:content-none">
                      {item.q}
                      <span className="shrink-0 text-primary-foreground/60 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                      {item.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact — white */}
        <section
          id="contact"
          className="bg-background scroll-mt-16"
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow text-accent">Request a demo</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Request a demo or ask a question
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                  Tell us about your clinic and how studies are scored today.
                  We will show how the Sleep Tool handles a study.
                </p>
                <a
                  href="mailto:info@aaegis-ai.com?subject=Sleep%20Tool%20demo%20request"
                  className="mt-4 inline-block text-sm text-foreground/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
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
