import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"
import { Button } from "@/components/ui/button"

export default function BriannaMorissettePage() {
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
                Brianna Morissette
              </h1>
              <p className="mt-3 text-lg text-primary-foreground/85">
                Board Member | President &amp; Chief Executive Officer, Ascend
                Aegis Corporation
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
                    src="/images/Brianna.webp"
                    alt="Brianna Morissette"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
              <Reveal className="space-y-8 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Brianna Morissette is the{" "}
                  <strong className="text-foreground">
                    President and Chief Executive Officer
                  </strong>{" "}
                  of Ascend Aegis Corporation, an AI startup developing a sleep
                  diagnostic tool. She joined the company in 2025 as Chief of
                  Staff and moved into the CEO role in 2026, where she leads
                  fundraising, investor relations, partnerships, and day-to-day
                  operations. The company&apos;s sleep diagnostic platform was
                  built under technical co-founder Richard Bangyay.
                </p>

                <p>
                  Before Ascend Aegis, Brianna spent more than a decade in
                  hospitality and retail management. From 2020 to 2025 she
                  worked at JOEY Restaurant Group, moving from Day Manager to
                  Bar Manager to Guest Service Manager, where she worked
                  alongside the general manager of a $9.7M store and helped lead
                  a team of 11 managers and roughly 50 staff. She is known for
                  recruiting, training, and developing leaders, and for a
                  practical, people-first approach to running operations.
                </p>

                <p>
                  Brianna holds an Honours Bachelor of Arts in Social
                  Development from the University of Waterloo, where she worked
                  as a research assistant to several department chairs and
                  co-authored a paper on online dating among Canadian
                  post-secondary students. She also volunteered for several
                  years with a counselling service, and that background in human
                  behaviour shapes how she leads and communicates.
                </p>

                <div>
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Experience
                  </h2>
                  <ul className="space-y-3 pl-4">
                    <li>
                      <strong className="text-foreground">
                        President &amp; Chief Executive Officer, Ascend Aegis
                        Corporation (2026–Present):
                      </strong>{" "}
                      Leads the company, with a focus on fundraising, investor
                      relations, and partnerships. Oversees executive operations
                      and internal and external communications. Works across
                      teams to keep company priorities moving forward.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Chief of Staff, Ascend Aegis Corporation (2025–2026):
                      </strong>{" "}
                      Served as a strategic partner to the CEO, overseeing
                      executive operations and stakeholder engagement. Managed
                      internal and external communications, investor relations,
                      and partnership coordination. Led development of
                      fundraising materials, presentations, and marketing
                      assets, and supported cross-functional execution of
                      company priorities.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Guest Service Manager, JOEY Restaurant Group
                        (2023–2025):
                      </strong>{" "}
                      Previously Bar Manager and Day Manager (2020–2025). Worked
                      alongside the general manager of a $9.7M store, with
                      responsibility for budgets, recruiting and training,
                      reservations, and event sales. Led a team of 5 salaried
                      managers, 6 hourly managers, and roughly 50 staff. Helped
                      grow sales 6% over the prior year (2024–2025) and raised
                      the store&apos;s lifetime Google rating from 4.0 to 4.5.
                      Developed staff training frameworks for new location
                      openings. As Bar Manager, kept P&amp;L variance under 0.5%
                      and developed two bartenders into salaried leaders.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Research Assistant, University of Waterloo
                        (2016–2019):
                      </strong>{" "}
                      Research assistant to the chairs of the Psychology,
                      Sociology, and Sexuality, Marriage &amp; Family Studies
                      departments. Co-authored{" "}
                      <em>
                        Digital Connections: Exploring Online Dating Among
                        Canadian Post Secondary Students
                      </em>
                      . Volunteered as an intake counsellor and children&apos;s
                      group facilitator at KW Counselling Services (2016–2019).
                    </li>
                  </ul>
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
