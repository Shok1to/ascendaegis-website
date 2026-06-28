"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShieldLogo } from "@/components/shield-logo"

const primaryLinks = [
  { href: "/our-solution", label: "Our Solution" },
  { href: "/clinical-validation", label: "Clinical Validation" },
  { href: "/security-compliance", label: "Security & Compliance" },
  { href: "/platform", label: "The Aegis Platform" },
]

const moreLinks = [
  { href: "/for-clinics", label: "For Clinics" },
  { href: "/investors", label: "Investors" },
  { href: "/team", label: "Team" },
  { href: "/regulatory-disclosures", label: "Regulatory Disclosures" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-primary"
          onClick={() => setOpen(false)}
        >
          <ShieldLogo />
          <span className="text-base font-semibold tracking-tight text-foreground">
            Ascend Aegis
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {primaryLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              More
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  moreOpen && "rotate-180"
                )}
              />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-1 w-52 rounded-xl border border-border bg-background shadow-lg">
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground first:rounded-t-xl last:rounded-b-xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button size="sm" render={<Link href="/for-clinics#contact" />}>
            Request a Demo
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {[...primaryLinks, ...moreLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="mt-2"
              render={
                <Link
                  href="/for-clinics#contact"
                  onClick={() => setOpen(false)}
                />
              }
            >
              Request a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
