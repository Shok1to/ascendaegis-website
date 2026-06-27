import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"

const sections = [
  {
    number: "01",
    title: "Historical Administrative Disclosure",
    body: "In 2013, our founder, Richard Bangyay, entered into a settlement agreement with the Mutual Fund Dealers Association of Canada (MFDA). This settlement pertained to administrative disclosures and was fully resolved in compliance with all regulatory requirements at that time.",
  },
  {
    number: "02",
    title: "Commitment to Compliance",
    body: "Since the resolution of that matter over a decade ago, Mr. Bangyay and Ascend Aegis Corporation have maintained an unblemished record of professional conduct. We remain in good standing with all relevant oversight bodies and continue to prioritize rigorous compliance as we develop and scale our medical diagnostic platforms.",
  },
  {
    number: "03",
    title: "Data Integrity & Security",
    body: "Our commitment to transparency extends to our technology. By partnering with Nuvollo Cloud, we ensure that all Aegis diagnostic data is managed within a SOC 2 Type II compliant environment, meeting the most stringent clinical and regulatory security standards in North America.",
  },
]

export default function RegulatoryDisclosuresPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-primary-foreground/70">Transparency</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Corporate Governance & Transparency.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
                Ascend Aegis Corporation is committed to the highest standards
                of transparency and integrity. We believe that open
                communication regarding our corporate history and regulatory
                standing is essential to building lasting trust with our
                partners, investors, and the clinical community.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Disclosures */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-accent">Regulatory disclosure</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Full Disclosure
              </h2>
            </Reveal>
            <div className="mt-12 space-y-6">
              {sections.map((section, i) => (
                <Reveal key={section.title} delay={i * 120}>
                  <div className="flex gap-6 rounded-xl border border-border bg-card p-7">
                    <span className="font-mono text-sm font-semibold text-accent shrink-0 mt-1">
                      {section.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
