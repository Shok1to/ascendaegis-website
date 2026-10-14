import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParallaxLayer, Reveal } from "@/components/parallax"

const facts = [
  { label: "Company", value: "Ascend Aegis Corporation, Toronto" },
  { label: "Focus", value: "AI in medical diagnostics" },
  { label: "First product", value: "Aegis Sleep Tool, in validation" },
  { label: "Hosting", value: "SOC-certified, secured environment" },
  { label: "Licensing", value: "Health Canada MDEL in progress" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <ParallaxLayer
        speed={-0.25}
        className="absolute inset-x-0 -inset-y-[20%]"
      >
        <div
          className="h-full w-full opacity-45"
          style={{
            backgroundImage: "url(/images/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      </ParallaxLayer>
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <p className="eyebrow text-primary-foreground/70">
              Ascend Aegis Corporation &middot; Toronto, Canada
            </p>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              AI for medical diagnostics, built to keep running.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
              Aegis builds generative and agentic AI for diagnostic work. The
              team combines clinical medicine, medical AI research and data
              engineering. Our first product, the Aegis Sleep Tool, is in
              validation with Canadian sleep clinics.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                render={
                  <Link href="mailto:info@aaegis-ai.com?subject=Enquiry%20about%20Aegis" />
                }
              >
                Email info@aaegis-ai.com
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                render={<Link href="/sleep-tool" />}
              >
                See the Sleep Tool
              </Button>
            </div>
          </Reveal>

          <Reveal
            delay={150}
            as="dl"
            className="grid gap-5 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7"
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-wide text-primary-foreground/60">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-primary-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
