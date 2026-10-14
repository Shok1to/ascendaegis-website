import Link from "next/link"
import { MeshDiagram } from "@/components/diagrams/mesh-diagram"
import { ParallaxLayer, Reveal } from "@/components/parallax"

const principles = [
  {
    title: "Edge computing.",
    body: "Analysis runs close to where the data is created, such as inside the clinic, and not only in a remote data centre.",
  },
  {
    title: "Mesh networking.",
    body: "Sites and devices can connect to each other, not just to one central point, so data has more than one route.",
  },
]

const goals = [
  "Work continues when an internet connection is slow or lost.",
  "No single point of failure for the whole network.",
  "Suited to remote clinics, regional hospitals and areas with unreliable infrastructure.",
]

export function Vision() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-primary-foreground/70">Architecture</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Built to keep working when networks and conditions fail
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/85">
              Many medical AI tools depend on a constant connection to one
              central server. Aegis is designed around two ideas instead.
            </p>
            <ul className="mt-6 space-y-3">
              {principles.map((item) => (
                <li key={item.title} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-primary-foreground/85">
                    <strong className="font-semibold text-primary-foreground">
                      {item.title}
                    </strong>{" "}
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-base font-semibold text-primary-foreground">
              Design goals
            </h3>
            <ul className="mt-3 space-y-2">
              {goals.map((goal) => (
                <li key={goal} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-primary-foreground/80">
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm">
              <Link
                href="/vision"
                className="font-medium text-primary-foreground underline-offset-4 hover:underline"
              >
                Read more about our vision &rarr;
              </Link>
            </p>
          </Reveal>

          <ParallaxLayer
            speed={-0.15}
            className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
          >
            <MeshDiagram />
            <p className="mt-4 text-xs leading-relaxed text-primary-foreground/60">
              If the link to the central cloud is lost, clinic sites stay
              connected to each other and keep processing studies.
            </p>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  )
}
