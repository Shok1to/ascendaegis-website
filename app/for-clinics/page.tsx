import type { Metadata } from "next"
import { Clock, CheckCircle2, Plug, HeartPulse } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
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
        <PageHero
          eyebrow="For Clinics"
          title="Zero-friction diagnostics for your clinic."
          description="We provide the infrastructure for diagnostic automation, eliminating manual bottlenecks so your providers can focus on patient care."
        />

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

        <section id="contact" className="bg-secondary/50 scroll-mt-16">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow text-accent">Request a demo</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  See Aegis run a study in real-time
                </h2>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                  Tell us about your clinic and current workflow. Our clinical
                  team will walk you through how Aegis automates scoring and
                  integrates with your existing systems.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
