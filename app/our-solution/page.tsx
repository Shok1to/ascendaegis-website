import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"

export const metadata: Metadata = {
  title: "Our Solution | Aegis Sleep Tool",
  description:
    "How the Aegis Sleep Tool turns an overnight sleep study into a draft report: secure intake, preparation, AI analysis, report and clinician sign-off.",
}

const pipeline = [
  {
    step: "01",
    title: "Secure intake",
    body: "Studies arrive from the clinic over an encrypted connection. Every transfer is logged.",
  },
  {
    step: "02",
    title: "Preparation",
    body: "Recordings that were split into pieces are joined. Signals recorded at different speeds are aligned to a common timeline and cut into 30-second segments, as the AASM manual specifies.",
  },
  {
    step: "03",
    title: "Analysis",
    body: "The AI model reads the signals across the whole night, because each stage of sleep depends on what came before it. It labels each segment as wake, N1, N2, N3 or REM.",
  },
  {
    step: "04",
    title: "Draft report",
    body: "The labels are assembled into a chart of the night with summary measures such as the apnea-hypopnea index (AHI).",
  },
  {
    step: "05",
    title: "Clinician review",
    body: "Staff review and correct the draft. A physician signs off.",
  },
]

const signals = [
  {
    title: "EEG · brain activity",
    body: "Separates wake from light sleep, deep sleep and REM.",
  },
  {
    title: "EOG · eye movement",
    body: "Helps identify REM sleep.",
  },
  {
    title: "EMG · muscle tone",
    body: "Supports REM identification and arousal detection.",
  },
  {
    title: "ECG · heart rhythm",
    body: "Relates cardiac rhythm to breathing events such as apnea.",
  },
]

const faqs = [
  {
    q: "What data does the Aegis Sleep Tool need?",
    a: "A complete overnight polysomnography recording from the clinic's sleep equipment. The scoring standard relies most on brain activity (EEG), and the tool is designed to use eye (EOG), muscle (EMG) and heart (ECG) signals as validation progresses.",
  },
  {
    q: "What does the Sleep Tool output?",
    a: "A draft report with the sleep stage for each 30-second segment, a chart of the night, and summary measures, for clinician review and physician sign-off.",
  },
  {
    q: "Can the Sleep Tool connect to our existing systems?",
    a: "It is designed to fit existing clinic workflows and to exchange results using healthcare standards such as HL7 and FHIR. Integration details are agreed with each clinic.",
  },
  {
    q: "Who do I contact with technical questions?",
    a: "Email technical@aaegis-ai.com.",
  },
]

export default function OurSolutionPage() {
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
                Sleep Tool &middot; Our Solution
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                How the Aegis Sleep Tool works
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                The tool turns a raw overnight recording into a draft report.
                Each stage is checked and logged, and a clinician makes the
                final call.
              </p>
              <div className="mt-9">
                <Button
                  size="lg"
                  render={
                    <Link href="mailto:technical@aaegis-ai.com?subject=Technical%20question%20about%20the%20Sleep%20Tool" />
                  }
                >
                  Technical questions: technical@aaegis-ai.com
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* The pipeline — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-accent">The pipeline</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Five steps from recording to report
              </h2>
            </Reveal>
            <div className="mt-12 space-y-6">
              {pipeline.map((item, i) => (
                <Reveal key={item.step} delay={i * 100}>
                  <div className="flex gap-6 rounded-xl border border-border bg-card p-7">
                    <span className="font-mono text-sm font-semibold text-accent shrink-0 mt-1">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Signals — navy */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-primary-foreground/70">Signals</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                What the tool reads
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/85">
                A sleep study records many channels at once. The first
                versions focus on the brain-activity signal the scoring
                standard relies on most. Further channels are added as
                validation proceeds.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {signals.map((signal, i) => (
                <Reveal
                  key={signal.title}
                  delay={i * 120}
                  className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-7"
                >
                  <h3 className="text-lg font-semibold text-primary-foreground">
                    {signal.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                    {signal.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Signal quality — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow text-accent">Signal quality</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Clean data first
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  Sleep recordings pick up electrical interference and
                  movement. The engineering team has done this kind of work
                  before, separating real signal from interference in
                  national weather radar data. The same approach is applied
                  to physiological recordings before the AI model sees them.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Each stage keeps a record of what was done to the data, so
                  a result can be traced back to the original recording.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Deployment — navy */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow text-primary-foreground/70">
                  Deployment
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Designed to keep working
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-pretty text-lg leading-relaxed text-primary-foreground/85">
                  The Sleep Tool runs on the Aegis edge and mesh
                  architecture. Analysis can run close to the clinic, and
                  sites can connect to each other as well as to the central
                  cloud. The goal is that scoring continues when an internet
                  connection is slow or lost.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/85">
                  Data is stored and processed in a secured, SOC-certified
                  environment. See{" "}
                  <Link
                    href="/security-compliance"
                    className="underline-offset-4 hover:underline"
                  >
                    Security &amp; Compliance
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Notice + FAQ — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">
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
                Technical questions
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
                  Ask the technical team
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                  Integration, data formats, security questions and
                  validation material are handled by the technical team.
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
                    <Link href="mailto:technical@aaegis-ai.com?subject=Technical%20question%20about%20the%20Sleep%20Tool" />
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
