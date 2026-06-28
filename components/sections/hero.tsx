import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParallaxLayer, Reveal } from "@/components/parallax"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <ParallaxLayer
        speed={-0.25}
        className="absolute inset-x-0 -inset-y-[20%]"
      >
        <div
          className="h-full w-full opacity-25"
          style={{
            backgroundImage: "url(/images/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      </ParallaxLayer>
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent-foreground/90">
            <span className="rounded-full bg-accent/25 px-3 py-1 text-primary-foreground ring-1 ring-inset ring-accent/40">
              Regulatory-Compliant Clinical AI
            </span>
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Turn days of manual sleep scoring into minutes.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
            Regulatory-compliant AI for clinical automation. Starting with
            sleep, scaling across the medical landscape.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              render={<Link href="/platform" />}
            >
              Explore the Aegis Platform
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={<Link href="/for-clinics#contact" />}
            >
              Request a Demo
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
