import Link from "next/link"
import { Reveal } from "@/components/parallax"

const cards = [
  {
    title: "Clinical medicine",
    body: "Specialists certified in internal medicine, intensive care and sleep medicine, with more than 30 years of practice, hospital program leadership and clinical research that uses AI.",
  },
  {
    title: "Medical AI research",
    body: "Peer-reviewed work in clinical image analysis, including models that outline heart structures in ultrasound and estimate ejection fraction. Current work applies time-aware models to recordings such as sleep studies.",
  },
  {
    title: "Data integrity and resilience",
    body: "Experience cleaning interference out of national weather radar data and implementing a national emergency alerting standard. Both are systems that must stay accurate and available under pressure, with audit trails behind them.",
  },
  {
    title: "Product delivery",
    body: "Founders who have built, shipped and sold software, hired and trained engineers, and taken products from concept to deployment in regulated sectors.",
  },
]

export function RealTime() {
  return (
    <section className="border-b border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-primary-foreground/70">Expertise</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            What the Aegis team knows
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/85">
            Diagnostic AI struggles at the edges: noisy recordings, experts
            who disagree, systems that lose connection, and regulators who
            need a full record. The team has worked on each of these.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 120}
              className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-7"
            >
              <h3 className="text-lg font-semibold text-primary-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={480} className="mt-10">
          <Link
            href="/team"
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
          >
            Meet the team &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
