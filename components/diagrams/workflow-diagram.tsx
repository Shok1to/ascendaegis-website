import { Activity, Cpu, FileCheck2, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Activity,
    label: 'Raw Patient Data',
    desc: 'Polysomnography signals ingested directly from the study.',
  },
  {
    icon: Cpu,
    label: 'Aegis AI Scoring',
    desc: 'Proprietary deep learning models score the study in real time.',
  },
  {
    icon: FileCheck2,
    label: 'Physician Report',
    desc: 'Consistent, validated results delivered to the clinician.',
  },
]

export function WorkflowDiagram() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-1 items-center gap-4">
            <div className="flex-1 rounded-lg border border-border bg-background p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {step.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight
                className="hidden h-5 w-5 shrink-0 text-accent lg:block"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-2 rounded-lg bg-secondary px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-secondary-foreground">
          Eliminates the manual scoring bottleneck
        </p>
        <p className="font-mono text-sm font-semibold text-primary">
          2&ndash;4 hrs &rarr; minutes per study
        </p>
      </div>
    </div>
  )
}
