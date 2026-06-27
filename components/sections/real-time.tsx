import { WorkflowDiagram } from '@/components/diagrams/workflow-diagram'
import { ParallaxLayer, Reveal } from '@/components/parallax'

const cards = [
  {
    title: 'Aegis Sleep Tool',
    body: 'Our flagship tool uses proprietary deep learning models to process raw patient data directly. By automating the scoring process, we eliminate the 2-4 hour manual bottleneck per study, delivering instant, consistent results that exceed current clinical accuracy standards.',
  },
  {
    title: 'Clinical Readiness',
    body: 'Built for the highest clinical standards, Aegis is designed for seamless integration into existing hospital and clinic workflows. We are currently validated through strategic partnerships with leading sleep centers, ensuring our AI is as reliable as it is fast.',
  },
]

export function RealTime() {
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Clinical automation in real-time</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Aegis replaces manual, error-prone workflows with high-precision AI.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Our platform is engineered to handle complex medical data in
            real-time, allowing clinicians to focus on treatment rather than
            data entry.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ParallaxLayer speed={-0.12}>
            <WorkflowDiagram />
          </ParallaxLayer>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 120}
              className="rounded-xl border border-border bg-card p-7"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
