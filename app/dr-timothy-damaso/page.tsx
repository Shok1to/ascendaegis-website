import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"
import { Button } from "@/components/ui/button"

export default function TimothyDamasoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — navy with hex */}
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
                Board of Directors
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Dr. Timothy Damaso
              </h1>
              <p className="mt-3 text-lg text-primary-foreground/85">
                Board Member | Physiomed
              </p>
            </Reveal>
          </div>
        </section>

        {/* Bio — white */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
              <Reveal>
                <div className="relative h-80 w-full overflow-hidden rounded-xl border border-border shadow-sm lg:h-96">
                  <Image
                    src="/images/Timothy.webp"
                    alt="Dr. Timothy Damaso"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
              <Reveal className="space-y-8 text-sm leading-relaxed text-muted-foreground">
                <p>
                  In the burgeoning frontier where artificial intelligence meets
                  human biology, the most critical variable is not the
                  algorithm, but the clinical truth it seeks to uncover. Dr.
                  Timothy A. Damaso, a physician whose career has been defined
                  by the rigorous pursuit of evidence-based outcomes, stands as
                  the medical conscience of Ascend Aegis Corporation. As an
                  Independent Director, he ensures that the company&apos;s
                  &quot;Diagnostic Operating System&quot; is not merely a marvel
                  of engineering, but a tool of profound clinical utility.
                </p>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    A Foundation of Diagnostic Precision
                  </h2>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">
                        The Clinical North Star:
                      </strong>{" "}
                      Dr. Damaso&apos;s professional identity is rooted in the
                      environment of patient care, where data must be translated
                      into life-altering decisions.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Medical Leadership:
                      </strong>{" "}
                      As the Medical Director of Physiomed Vaughan, he has
                      pioneered interdisciplinary care models that integrate
                      medicine, rehabilitation, and data-driven diagnostics to
                      optimize patient health.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        The MD/CCFP Standard:
                      </strong>{" "}
                      With his background as a Doctor of Medicine (MD) and a
                      member of the College of Family Physicians of Canada
                      (CCFP), he brings the &quot;gold standard&quot; of
                      clinical scrutiny to every boardroom deliberation.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Evidence-Based Stewardship
                  </h2>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">
                        Guardian of Accuracy:
                      </strong>{" "}
                      In an era of &quot;black box&quot; algorithms, Dr. Damaso
                      provides the essential oversight required to validate
                      AI-driven sleep scoring. His focus remains fixed on the
                      95.39% accuracy threshold, ensuring that technological
                      speed never compromises diagnostic integrity.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        The Bioethics Guardrail:
                      </strong>{" "}
                      He leads the oversight of clinical data sovereignty,
                      ensuring that the partnership with entities like MedSleep
                      Inc. adheres to the highest standards of medical ethics
                      and patient privacy.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Bridging Care and Code:
                      </strong>{" "}
                      Dr. Damaso possesses the rare ability to speak the
                      language of both the software engineer and the frontline
                      clinician, facilitating the translation of complex neural
                      networks into actionable medical insights.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    The Aegis Anchor: Clinical Excellence &amp; Validation
                  </h2>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">
                        Strategic Clinical Roadmap:
                      </strong>{" "}
                      As a member of the Board, Dr. Damaso oversees the clinical
                      validation protocols that are essential for the
                      company&apos;s Series A scaling and international
                      regulatory approval.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Quality Assurance:
                      </strong>{" "}
                      He is deeply integrated into the company&apos;s Medical
                      Ethics &amp; Clinical Validation reviews, providing the
                      &quot;frontline perspective&quot; that keeps the executive
                      team&apos;s vision grounded in the realities of
                      21st-century healthcare.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Intellectual Property Protection:
                      </strong>{" "}
                      He provides rigorous oversight regarding the clinical
                      efficacy of proprietary AI models, ensuring they meet the
                      stringent demands of the global medical community.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Investor Summary: The Guarantee of Clinical Integrity
                  </h2>
                  <p>
                    In the complex landscape of 2026, Dr. Damaso represents the
                    essential bridge between transformative AI and the clinical
                    discipline required to deploy it safely. His participation
                    is more than a medical advisory; it is a guarantee that the
                    technology remains servant to the patient, protecting
                    investor interests by anchoring the company&apos;s
                    innovation in the unshakeable bedrock of evidence-based
                    medicine.
                  </p>
                </div>

                <div className="pt-4">
                  <Button variant="outline" render={<Link href="/team" />}>
                    <ArrowLeft className="h-4 w-4" />
                    Back to Team
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
