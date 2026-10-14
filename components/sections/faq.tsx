import { Reveal } from "@/components/parallax"

const faqs = [
  {
    q: "What does Ascend Aegis do?",
    a: "Ascend Aegis Corporation, based in Toronto, builds AI for medical diagnostics. Its first product, the Aegis Sleep Tool, scores overnight sleep studies and prepares a draft report for a physician to review. The product is in validation with Canadian sleep clinics.",
  },
  {
    q: "What is the difference between generative and agentic AI in diagnostics?",
    a: "Generative AI writes and summarises, for example a draft report or a plain-language summary. Agentic AI carries a task through several steps, for example checking a recording for quality problems, running the analysis and routing the result to the right person. In Aegis systems a clinician reviews and signs off on every result.",
  },
  {
    q: "Which medical fields does Aegis work in?",
    a: "Sleep medicine is the first field and the only one with a product in validation. The team also has experience in cardiac image analysis and clinical image analysis, which apply to cardiology and radiology, and in the data quality and record-keeping that cell therapy manufacturing depends on. Each new field needs its own clinical partners, data and regulatory work.",
  },
  {
    q: "What are edge computing and mesh networking, and why does Aegis use them?",
    a: "Edge computing means analysis runs close to where the data is created, such as inside a clinic. Mesh networking means sites and devices can connect to each other, not only to one central server. Together they are designed to let Aegis keep working when an internet connection is slow, interrupted or unavailable.",
  },
  {
    q: "Is the Aegis Sleep Tool approved for clinical use?",
    a: "Not yet. The Sleep Tool is limited to validation, pilot evaluation and investigational research. Aegis is working through a Health Canada Medical Device Establishment Licence (MDEL) and FDA requirements.",
  },
  {
    q: "How do I contact Aegis?",
    a: "For general enquiries, email info@aaegis-ai.com. For technical questions about the Sleep Tool, security or validation, email technical@aaegis-ai.com.",
  },
]

export function FAQ() {
  return (
    <section className="border-b border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow text-primary-foreground/70">Questions</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Common questions about Aegis
          </h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 80}>
              <details className="group rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-primary-foreground marker:content-none">
                  {item.q}
                  <span className="shrink-0 text-primary-foreground/60 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
