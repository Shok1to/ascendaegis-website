import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ParallaxLayer, Reveal } from '@/components/parallax'

export function Vision() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-primary-foreground/70">
              Beyond sleep: the future of diagnostics
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              The Diagnostic Operating System.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/85">
              We are building the intelligent backbone for the next generation
              of medicine. By perfecting clinical automation in sleep, we are
              creating the blueprint to accelerate accuracy and delivery of care
              across the entire medical landscape.
            </p>
            <div className="mt-9">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                render={<Link href="/investors" />}
              >
                View the Vision
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <ParallaxLayer
            speed={-0.15}
            className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8"
          >
            <ol className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Sleep diagnostics',
                  desc: 'The validated wedge: automated, real-time PSG scoring.',
                },
                {
                  step: '02',
                  title: 'Adjacent modalities',
                  desc: 'Extending the engine to neighbouring diagnostic categories.',
                },
                {
                  step: '03',
                  title: 'The Diagnostic OS',
                  desc: 'A regulatory-compliant standard across the medical landscape.',
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-5">
                  <span className="font-mono text-sm font-semibold text-accent-foreground/90">
                    {item.step}
                  </span>
                  <div className="border-l border-primary-foreground/15 pl-5">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-primary-foreground/75">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  )
}
