import Link from "next/link"
import { Reveal } from "@/components/parallax"

const fields = [
  {
    chip: "In validation",
    chipColor: "bg-accent text-accent-foreground",
    title: "Sleep medicine",
    body: "Automated scoring of overnight sleep studies, with a draft report for physician review.",
    href: "/sleep-tool",
    linkLabel: "About the Sleep Tool",
  },
  {
    chip: "Expertise in place",
    chipColor: "bg-secondary text-secondary-foreground",
    title: "Cardiology",
    body: "The team has built models for echocardiography segmentation and ejection fraction estimation. Sleep apnea and heart disease are closely linked, which makes cardiology a natural next field.",
  },
  {
    chip: "Expertise in place",
    chipColor: "bg-secondary text-secondary-foreground",
    title: "Radiology",
    body: "Clinical image analysis is a core strength of the team's AI research. Image intake, analysis and a draft report for physician review follow the same pattern as the Sleep Tool.",
  },
  {
    chip: "Exploring",
    chipColor: "bg-muted text-muted-foreground",
    title: "Cell therapy manufacturing",
    body: "Cell therapy production depends on many measurements, strict quality control and complete records. Automating those checks calls for the data integrity and audit-trail experience on the team.",
  },
]

export function IntegrationPipeline() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Diagnostic fields</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From sleep medicine to other diagnostic fields
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Sleep medicine is where Aegis is validating its first product.
            The same foundations carry into other fields, and each one needs
            its own clinical partners, data and regulatory work before a
            product exists.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {fields.map((field, i) => (
            <Reveal
              key={field.title}
              delay={i * 120}
              className="flex flex-col rounded-xl border border-border bg-card p-7"
            >
              <span
                className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${field.chipColor}`}
              >
                {field.chip}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {field.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {field.body}
              </p>
              {field.href && (
                <Link
                  href={field.href}
                  className="mt-4 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  {field.linkLabel} &rarr;
                </Link>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={480}>
          <p className="mt-8 text-sm text-muted-foreground">
            Only the Aegis Sleep Tool is in clinical validation today.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
