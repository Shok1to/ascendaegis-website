import Link from "next/link"
import { ShieldLogo } from "@/components/shield-logo"

const footerNav = [
  {
    heading: "Platform",
    links: [
      { href: "/platform", label: "The Aegis Platform" },
      { href: "/platform#sleep-tool", label: "Aegis Sleep Tool" },
      { href: "/security-compliance", label: "Security & Compliance" },
      { href: "/clinical-validation", label: "Clinical Validation" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/our-solution", label: "Our Solution" },
      { href: "/for-clinics", label: "For Clinics" },
      { href: "/investors", label: "Investors" },
      { href: "/team", label: "Team" },
      { href: "/regulatory-disclosures", label: "Regulatory Disclosures" },
      { href: "/for-clinics#contact", label: "Contact" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 text-primary">
              <ShieldLogo />
              <span className="text-base font-semibold tracking-tight text-foreground">
                Ascend Aegis
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Regulatory-compliant AI for clinical automation. Starting with
              sleep, scaling across the medical landscape.
            </p>
            <address className="mt-5 text-sm not-italic leading-relaxed text-muted-foreground">
              Ascend Aegis Corporation
              <br />
              95 Mural Street, Richmond Hill, Ontario, Canada L4B 3G2
            </address>
          </div>

          {footerNav.map((group) => (
            <div key={group.heading}>
              <h3 className="eyebrow text-muted-foreground">{group.heading}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright &copy; {new Date().getFullYear()} Ascend Aegis
            Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
