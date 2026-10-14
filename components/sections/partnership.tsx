import Link from "next/link"
import { ComplianceGrid } from "@/components/diagrams/compliance-grid"
import { Reveal } from "@/components/parallax"

export function Partnership() {
  return (
    <section className="border-b border-border bg-background" id="security">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Security and certification</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A secured environment, and a path to our own certification
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Aegis runs in a secured, SOC-certified hosting environment. Aegis
            is also working toward its own SOC 2 and ISO 27001
            certification, and toward Health Canada and FDA requirements for
            the Sleep Tool.
          </p>
          <p className="mt-5">
            <Link
              href="/security-compliance"
              className="text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Security &amp; compliance details &rarr;
            </Link>
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ComplianceGrid />
        </Reveal>
      </div>
    </section>
  )
}
