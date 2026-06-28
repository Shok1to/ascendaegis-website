import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"
import { Button } from "@/components/ui/button"

export default function RichardBangyayPage() {
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
                Richard Bangyay
              </h1>
              <p className="mt-3 text-lg text-primary-foreground/85">
                Board Member | Founder &amp; CEO, Ascend Aegis Corporation
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
                    src="/images/Richard.webp"
                    alt="Richard Bangyay"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
              <Reveal className="space-y-8 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Richard Bangyay is a resilient and visionary leader with over
                  30 years of experience navigating high-stakes regulatory
                  environments and delivering innovative digital solutions. As
                  the Founder and CEO of Ascend Aegis Corporation, he leverages
                  a unique intersection of financial strategy, global
                  infrastructure management, and self-taught technology
                  engineering to revolutionize AI-driven healthcare.
                </p>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Strategic Strengths &amp; Experience
                  </h2>
                  <p className="mb-4">
                    Richard&apos;s career is defined by his ability to lead
                    multidisciplinary teams through the entire lifecycle of
                    mission-critical projects. His diverse background includes:
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">
                        System Architecture &amp; AI:
                      </strong>{" "}
                      Designing complex tools for sleep scoring based on
                      American Academy of Sleep Medicine (AASM) standards.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Financial Stewardship:
                      </strong>{" "}
                      Managing high-net-worth portfolios exceeding{" "}
                      <strong className="text-foreground">$300 million</strong>{" "}
                      and leading successful pre-seed fundraising initiatives.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Global Operations:
                      </strong>{" "}
                      Directing international infrastructure and residential
                      projects across Switzerland, Gabon, and Mauritius.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Tech Entrepreneurship:
                      </strong>{" "}
                      Pioneering and successfully exiting &quot;LifeForce,&quot;
                      a tablet-based insurance application, and developing
                      peer-to-peer payment systems.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Resilience &amp; Professional Evolution
                  </h2>
                  <p>
                    True leadership is often forged through adversity, and
                    Richard&apos;s professional journey includes a pivotal
                    period of transformation. Following a highly publicized
                    regulatory challenge in the financial sector more than a
                    decade ago that resulted in a permanent ban from the MFDA,
                    Richard chose to turn a significant career setback into a
                    catalyst for growth. Rather than stepping away, he pivoted
                    toward{" "}
                    <strong className="text-foreground">
                      self-taught technology engineering
                    </strong>{" "}
                    and global problem-solving. This &quot;comeback&quot; is
                    rooted in a commitment to transparency and a relentless
                    pursuit of innovation outside of traditional legacy systems.
                    His transition from portfolio management to Med-Tech
                    architecture reflects a refined focus on creating tools that
                    provide measurable, ethical value to the healthcare
                    industry.
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Current Mission: Ascend Aegis
                  </h2>
                  <p>
                    Today, Richard is dedicated to deploying the{" "}
                    <strong className="text-foreground">
                      Aegis AI Sleep Scoring tool
                    </strong>
                    . His mission is to empower national sleep centers with
                    data-driven insights, ensuring that his legacy is defined
                    not by the obstacles of the past but by the life-saving
                    potential of AI in modern medicine.
                  </p>
                  <p className="mt-3 italic">
                    &quot;Richard excels at leading multidisciplinary teams to
                    move mission-critical projects from conceptual stages to
                    functional deployment.&quot;
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
