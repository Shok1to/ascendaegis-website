import type { Metadata } from "next"
import { Clock, CheckCircle2, Plug, HeartPulse } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "For Clinics | Ascend Aegis",
  description:
    "Eliminate the manual scoring bottleneck. Aegis integrates into existing clinic workflows to deliver instant, consistent sleep study results.",
}

const benefits = [
  {
    icon: Clock,
    title: "Reclaim clinician time",
    body: "Remove the 2-4 hour manual scoring bottleneck per study so your team can focus on patient care.",
  },
  {
    icon: CheckCircle2,
    title: "Consistent accuracy",
    body: "Standardized, validated scoring removes inter-scorer variability from every study.",
  },
  {
    icon: Plug,
    title: "Seamless integration",
    body: "Designed to fit into existing hospital and clinic workflows with minimal disruption.",
  },
  {
    icon: HeartPulse,
    title: "Validated partnerships",
    body: "Developed and validated with leading Canadian sleep centers from day one.",
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
              <p className="eyebrow text-primary-foreground/70">For Clinics</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Zero-friction diagnostics for your clinic.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                We provide the infrastructure for diagnostic automation,
                eliminating manual bottlenecks so your providers can focus on
                patient care.
              </p>
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
                  See Aegis run a study in real-time
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/85">
                  Tell us about your clinic and current workflow. Our clinical
                  team will walk you through how Aegis automates scoring and
                  integrates with your existing systems.
                </p>
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
