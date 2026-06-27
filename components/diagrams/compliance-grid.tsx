import { ShieldCheck, Lock, FileBadge, Globe } from 'lucide-react'

const items = [
  {
    icon: FileBadge,
    title: 'MDEL',
    desc: 'Medical Device Establishment Licence pathway built into our regulatory framework.',
  },
  {
    icon: ShieldCheck,
    title: 'SOC 2 Type II',
    desc: 'Enterprise-grade security controls via the Nuvollo cloud infrastructure.',
  },
  {
    icon: Lock,
    title: 'Data Privacy',
    desc: 'Encrypted, access-controlled handling of protected health information.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Low-latency scaling for diagnostics run anywhere in the world.',
  },
]

export function ComplianceGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="bg-card p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <item.icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="mt-4 font-mono text-sm font-semibold uppercase tracking-wide text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  )
}
