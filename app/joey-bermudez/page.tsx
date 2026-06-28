import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"
import { Button } from "@/components/ui/button"

export default function JoeyBermudezPage() {
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
                Mr. Joey Bermudez
              </h1>
              <p className="mt-3 text-lg text-primary-foreground/85">
                Chairman of the Board of Directors | Ascend Aegis Corporation
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
                    src="/images/Joey.webp"
                    alt="Mr. Joey Bermudez"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
              <Reveal className="space-y-8 text-sm leading-relaxed text-muted-foreground">
                <p>
                  In the world of high-stakes finance and corporate strategy,
                  few figures command as much quiet authority as Mr. Joey
                  Bermudez. As the{" "}
                  <strong className="text-foreground">
                    Chairman of the Board
                  </strong>{" "}
                  for Ascend Aegis Corporation, he stands as the ultimate
                  fiduciary guardrail, ensuring that visionary innovation is
                  inextricably linked to global-standard governance and ethical
                  discipline.
                </p>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    The Architect of Trust
                  </h2>
                  <p className="mb-4">
                    Mr. Joey Bermudez is a transformative leader with a
                    four-decade career defined by transparency, integrity, and
                    relentless corporate governance. As the{" "}
                    <strong className="text-foreground">
                      Chairman of the Board
                    </strong>
                    , he serves as the definitive fiduciary guardrail for Ascend
                    Aegis Corporation, ensuring that visionary innovation is
                    grounded in world-class management.
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">
                        Institutional Revitalization:
                      </strong>{" "}
                      Previously served as President and CEO of{" "}
                      <strong className="text-foreground">
                        Chinatrust (Philippines)
                      </strong>{" "}
                      and{" "}
                      <strong className="text-foreground">
                        Philippine Veterans Bank
                      </strong>
                      , where he was recognized for revitalizing institutions
                      through ethical discipline.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Active Stewardship:
                      </strong>{" "}
                      His leadership style mirrors the &quot;beacon for
                      corporate governance&quot; that Aegis strives to be,
                      prioritizing decentralized leadership and mutual respect.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Independent Oversight:
                      </strong>{" "}
                      As an{" "}
                      <strong className="text-foreground">
                        Independent Director
                      </strong>
                      , Mr. Bermudez provides the cross-border insights and
                      &quot;regulatory rigour&quot; necessary to protect
                      investor interests in the complex waters of healthcare AI.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    The Aegis Anchor: Board &amp; Committee Leadership
                  </h2>
                  <p className="mb-4">
                    Formalized in the 2026 strategic roadmap, Mr. Bermudez
                    oversees the company&apos;s transition from a $300K pre-seed
                    &quot;de-risking bridge&quot; into a globally standardized
                    institution.
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">
                        Chairman of the AEG Committee:
                      </strong>{" "}
                      He leads the{" "}
                      <strong className="text-foreground">
                        Audit, Ethics, and Governance (AEG) Committee
                      </strong>
                      , providing &quot;Swiss-level scrutiny&quot; over internal
                      financial controls, clinical data sovereignty, and ethical
                      disclosures.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Series A Roadmap:
                      </strong>{" "}
                      He is the primary architect of the company&apos;s scaling
                      strategy, ensuring institutional reliability as Aegis
                      expands its &quot;Diagnostic Operating System&quot;.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Peer Among Giants:
                      </strong>{" "}
                      Served as the{" "}
                      <strong className="text-foreground">
                        60th President of the Management Association of the
                        Philippines (MAP)
                      </strong>
                      , leading an elite body of 850 CEOs and COOs.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Academic and Professional Foundation
                  </h2>
                  <p className="mb-4">
                    A{" "}
                    <strong className="text-foreground">
                      Certified Public Accountant (CPA)
                    </strong>
                    , Mr. Bermudez possesses a formidable background in
                    financial controllership and strategic scaling.
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">
                        Master&apos;s Degree in Business Economics:
                      </strong>{" "}
                      From the University of Asia and the Pacific.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Strategic Scaling:
                      </strong>{" "}
                      Founding Chairman and CEO of{" "}
                      <strong className="text-foreground">
                        Maybridge Financial Group
                      </strong>
                      , with successful scaling operations in both the
                      Philippines and Canada.
                    </li>
                    <li>
                      <strong className="text-foreground">Educator:</strong>{" "}
                      Taught Strategic Management at the graduate level for
                      programs collaborating with{" "}
                      <strong className="text-foreground">
                        IESE Business School
                      </strong>{" "}
                      in Barcelona.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Social Responsibility and Ethics
                  </h2>
                  <p>
                    Beyond the boardroom, Mr. Bermudez is a pioneer in social
                    enterprise, having launched{" "}
                    <strong className="text-foreground">Iskaparate.com</strong>{" "}
                    to support over 3,000 micro-entrepreneurs. This commitment
                    to the &quot;human element&quot; of business reflects the
                    ethical discipline he instills as the{" "}
                    <strong className="text-foreground">
                      &quot;Aegis Anchor&quot;
                    </strong>{" "}
                    for all stakeholders.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Investor Summary: The Guarantee of Stability
                  </h2>
                  <p>
                    &quot;In his role as{" "}
                    <strong className="text-foreground">
                      Chairman and Independent Director
                    </strong>
                    , Mr. Bermudez ensures that Ascend Aegis operates with the
                    transparency of a global financial institution. Through his
                    guidance, innovation is inextricably linked to institutional
                    reliability, providing an unshakeable guardrail for clinical
                    partnerships with{" "}
                    <strong className="text-foreground">MedSleep Inc.</strong>{" "}
                    (validated by{" "}
                    <strong className="text-foreground">95.39% accuracy</strong>{" "}
                    in recent trials) and infrastructure with{" "}
                    <strong className="text-foreground">Nuvollo</strong>.&quot;
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
