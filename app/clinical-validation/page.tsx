import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ListChecks, Activity, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"

export const metadata: Metadata = {
  title: "Clinical Validation | Aegis Sleep Tool",
  description:
    "How Ascend Aegis validates the Aegis Sleep Tool against expert sleep scoring, with weekly sessions led by a board-certified sleep physician.",
}

const measures = [
  {
    icon: ListChecks,
    title: "Epoch-by-epoch agreement",
    body: "How often the tool's label for a 30-second segment matches the expert's label.",
  },
  {
    icon: Activity,
    title: "AHI correlation",
    body: "How closely the tool's apnea-hypopnea index tracks the index from physician-scored studies.",
  },
  {
    icon: Timer,
    title: "Time to draft report",
    body: "How long it takes to go from the raw recording to a report ready for review.",
  },
]

const faqs = [
  {
    q: "How is the Aegis Sleep Tool validated?",
    a: "By comparing its scoring with studies scored by experts, using measures such as epoch-by-epoch agreement, correlation of the apnea-hypopnea index (AHI), and time to a draft report. Validation sessions with clinical partners are held weekly and led by Aegis's Chief Medical Officer.",
  },
  {
    q: "Why compare against experts rather than a single correct answer?",
    a: "Two expert scorers do not always agree on every 30-second segment. Agreement between experts is therefore the realistic benchmark for an automated tool.",
  },
  {
    q: "Does Aegis publish accuracy figures?",
    a: "Results are shared with clinics, partners and investors on request, with the study design that produced them. Aegis does not publish headline figures on this site until the validation study is complete.",
  },
  {
    q: "How do I request validation data?",
    a: "Email technical@aaegis-ai.com.",
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
                Sleep Tool &middot; Clinical Validation
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Clinical validation
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                Automated scoring should not cost a clinic diagnostic
                confidence. Aegis tests the Sleep Tool against expert
                scoring, with sleep physicians in the loop.
              </p>
              <div className="mt-9">
                <Button
                  size="lg"
                  render={
                    <Link href="mailto:technical@aaegis-ai.com?subject=Request%20for%20validation%20data" />
                  }
                >
                  Request validation data: technical@aaegis-ai.com
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Method — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-accent">Method</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What we measure
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                Each measure answers a question a sleep physician would ask.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {measures.map((measure, i) => (
                <Reveal
                  key={measure.title}
                  delay={i * 120}
                  className="rounded-xl border border-border bg-card p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <measure.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {measure.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {measure.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* The benchmark — navy */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow text-primary-foreground/70">
                  The benchmark
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Experts are the reference, and experts disagree
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-pretty text-lg leading-relaxed text-primary-foreground/85">
                  Sleep scoring involves judgement. Two experienced scorers
                  rarely match on every segment, so the fair target is the
                  level of agreement between experts, not perfection.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/85">
                  The data science team has research experience in label
                  noise and disagreement between raters. That shapes how the
                  model is trained and how results are reported.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Clinical oversight — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <Reveal>
                <p className="eyebrow text-accent">Clinical oversight</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Led by a sleep physician
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  Aegis&apos;s Chief Medical Officer is board-certified in
                  internal medicine, intensive care medicine and sleep
                  medicine, and a Fellow of the American Academy of Sleep
                  Medicine. He leads weekly validation sessions with
                  clinical partners and checks that the tool&apos;s output
                  meets sleep medicine standards.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  The model has been developed with Canadian sleep centres.
                  4,000 patient files have been ingested for training.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Results — navy */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-primary-foreground/70">Results</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Validation data on request
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/85">
                We share results with clinics, partners and investors
                together with the study design behind them. Technical
                documentation is available on request.
              </p>
              <div className="mt-9">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                  render={
                    <Link href="mailto:technical@aaegis-ai.com?subject=Request%20for%20validation%20data" />
                  }
                >
                  Email technical@aaegis-ai.com
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={150} className="mt-10 max-w-2xl">
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

        {/* Validation questions — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-accent">Questions</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Validation questions
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
                  Request validation data
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                  Tell us who you are and what you need to evaluate. The
                  technical team will reply with the material that applies.
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
                    <Link href="mailto:technical@aaegis-ai.com?subject=Request%20for%20validation%20data" />
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
