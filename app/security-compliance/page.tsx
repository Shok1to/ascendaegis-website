import Image from "next/image"
import { Shield, Lock, FileCheck } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"

const pillars = [
  {
    icon: Shield,
    title: "Enterprise-Grade Cloud Security",
    body: "Our flagship diagnostic environment is hosted via a strategic infrastructure partnership with Nuvollo Cloud. Data routing and storage utilize tier-3 data centre protocols backed by SOC 2 Type II and ISO 27001 physical and network security compliance certifications.",
  },
  {
    icon: Lock,
    title: "Patient Data Privacy First",
    body: "We treat Patient Health Information (PHI) with absolute security. All automated data transmission, analysis, and storage pipelines are engineered to fully comply with HIPAA (United States) and PIPEDA (Canada) end-to-end data encryption protocols.",
  },
]

const roadmap = [
  {
    step: "01",
    status: "Active",
    statusColor: "bg-green-500",
    title: "Data Infrastructure",
    body: "Implementation of secure, low-latency global cloud routing via Nuvollo. Data separation, audit logging, and automated, strict token-based authentication workflows are fully live for all active clinical evaluation systems.",
  },
  {
    step: "02",
    status: "In Progress",
    statusColor: "bg-yellow-500",
    title: "Health Canada MDEL",
    body: "Preparation of our operational Standard Operating Procedures (SOPs) for distribution tracking, systematic quality logs, and mandatory problem reporting to secure our Medical Device Establishment Licence (MDEL).",
  },
  {
    step: "03",
    status: "Scheduled",
    statusColor: "bg-blue-500",
    title: "FDA 510(k) Pre-Submission",
    body: "Compilation of our Software-as-a-Medical-Device (SaMD) documentation core. This phase initiates formal FDA 510(k) Pre-Submission dialogues to lock in clinical validation protocols directly with reviewers prior to broad commercial deployment.",
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
                Security & compliance
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Trust, Security & Regulatory Governance.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                Ascend Aegis is built from the ground up to meet the stringent
                data governance and privacy demands of enterprise healthcare
                networks.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pillars — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-accent">
                Core privacy & infrastructure
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Built for Enterprise Healthcare
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {pillars.map((pillar, i) => (
                <Reveal
                  key={pillar.title}
                  delay={i * 120}
                  className="rounded-xl border border-border bg-card p-7 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <pillar.icon className="h-5 w-5" />
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
              <p className="eyebrow text-primary-foreground/70">
                Regulatory roadmap
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                The Aegis Regulatory Roadmap
              </h2>
            </Reveal>
            <div className="mt-12 space-y-6">
              {roadmap.map((item, i) => (
                <Reveal key={item.title} delay={i * 120}>
                  <div className="flex gap-6 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-7">
                    <span className="font-mono text-sm font-semibold text-accent shrink-0 mt-1">
                      {item.step}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-semibold text-primary-foreground">
                          {item.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Notice — white */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <div className="flex gap-4">
                  <FileCheck className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Framework Notice & Intended Use
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      The Aegis Sleep Tool is engineered in strict structural
                      alignment with international consensus guidelines for
                      automated healthcare software.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
                      Regulatory Notice: The platform is currently restricted
                      exclusively to clinical validation, pilot metrics
                      evaluation, and investigational research partnerships. It
                      is not currently offered for independent commercial
                      diagnostic distribution or autonomous clinical
                      decision-making pending final MDEL issuance and FDA 510(k)
                      clearance notifications.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
