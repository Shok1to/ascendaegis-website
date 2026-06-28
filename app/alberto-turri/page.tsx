import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"
import { Button } from "@/components/ui/button"

export default function AlbertoTurriPage() {
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
                Mr. Alberto Turri
              </h1>
              <p className="mt-3 text-lg text-primary-foreground/85">
                Board Member | FNS LLC
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
                    src="/images/Alberto.webp"
                    alt="Mr. Alberto Turri"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
              <Reveal className="space-y-8 text-sm leading-relaxed text-muted-foreground">
                <p>
                  In the arena of global health technology, where innovation
                  often outpaces oversight, the presence of Mr. Alberto Turri
                  serves as a definitive statement on corporate integrity. A
                  veteran of the Swiss financial and corporate sectors, Mr.
                  Turri has built a career defined by the rigorous standards of
                  governance, transparency, and strategic stewardship. As an{" "}
                  <strong className="text-foreground">
                    Independent Director
                  </strong>
                  , he provides the &quot;Swiss-level scrutiny&quot; required to
                  protect investor interests and ensure that visionary
                  technology remains grounded in disciplined, transparent
                  governance.
                </p>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Current Leadership Roles
                  </h2>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">
                        Director &amp; Chief Financial Officer (CFO), Bumba
                        Global:
                      </strong>{" "}
                      Leads financial operations and strategy for a
                      next-generation digital assets platform engineered for
                      institutional-grade security and regulatory alignment.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Independent Director, Ascend Aegis Corporation:
                      </strong>{" "}
                      Serves on the Board of Directors, overseeing institutional
                      stability, regulatory compliance, and the protection of
                      proprietary AI models and clinical partnerships.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Strategic Lead, Foundry Network Services LLC (Dubai):
                      </strong>{" "}
                      Bridges the gap between North American innovation and
                      international capital markets, providing critical guidance
                      on Series A scaling and long-term strategic roadmaps.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Professional Expertise &amp; Background
                  </h2>
                  <p className="mb-4">
                    With over 25 years of experience in business and tax
                    planning, Mr. Turri brings a legacy of precision to global
                    entities.
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">
                        Regulatory DNA:
                      </strong>{" "}
                      Expert in operating within the world&apos;s most demanding
                      regulatory environments, particularly at the intersection
                      of international business and stringent Swiss legal
                      frameworks.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Institutional Governance:
                      </strong>{" "}
                      Previously managed complex corporate structures at PTA
                      Dynamix and Vella and Associates in Lugano, Switzerland,
                      maintaining the highest levels of fiduciary
                      responsibility.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Fiduciary Stewardship:
                      </strong>{" "}
                      Acts as a proactive &quot;fiduciary guardrail,&quot;
                      ensuring work product integrity and transparency across
                      diverse clinical and financial sectors.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Education &amp; Certifications
                  </h2>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">MBA:</strong>{" "}
                      SDA-Bocconi
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Certified Swiss Fiduciary
                      </strong>
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Chartered Accountant
                      </strong>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Strategic Impact
                  </h2>
                  <p>
                    In the complex global landscape of 2026, Mr. Turri serves as
                    an essential bridge between visionary technology and the
                    disciplined governance required for mass-market adoption.
                    His participation acts as a guarantee of professional
                    excellence, anchoring executive visions in reality while
                    facilitating connectivity between innovative tech and global
                    capital markets.
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
