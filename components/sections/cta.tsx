import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/parallax"

export function CTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Talk to Aegis
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
              Clinics, clinical partners, investors and collaborators can
              write to us directly. For technical questions about the Sleep
              Tool, use technical@aaegis-ai.com.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <span className="font-mono text-sm text-primary-foreground/80">
              info@aaegis-ai.com
            </span>
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
