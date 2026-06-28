import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/parallax"

export function CTA() {
  return (
    <section className="border-b border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="eyebrow text-primary-foreground/70">Get started</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to remove your scoring bottleneck?
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/85">
            Connect with our engineering team to review our API documentation
            and plan your pipeline integration.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row justify-center">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              render={<Link href="/for-clinics#contact" />}
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={<Link href="/platform" />}
            >
              View API Specs
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
