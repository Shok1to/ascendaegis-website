"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { useSession, signOut } from "next-auth/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShieldLogo } from "@/components/shield-logo"

const sleepToolLinks = [
  { href: "/sleep-tool", label: "Sleep Tool overview" },
  { href: "/our-solution", label: "Our Solution" },
  { href: "/clinical-validation", label: "Clinical Validation" },
  { href: "/for-clinics", label: "For Clinics" },
]

const primaryLinks = [
  { href: "/security-compliance", label: "Security & Compliance" },
  { href: "/team", label: "Team" },
  { href: "/investors", label: "Investors" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const [open, setOpen] = useState(false)
  const [sleepToolOpen, setSleepToolOpen] = useState(false)

  const sleepToolActive = sleepToolLinks.some(
    (link) => pathname === link.href,
  )

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-primary"
          onClick={() => setOpen(false)}
        >
          <ShieldLogo />
          <span className="sr-only">Ascend Aegis</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {/* Sleep Tool dropdown */}
          <div className="relative">
            <button
              onClick={() => setSleepToolOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                sleepToolActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Sleep Tool
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  sleepToolOpen && "rotate-180",
                )}
              />
            </button>
            {sleepToolOpen && (
              <div className="absolute left-0 top-full mt-1 w-56 rounded-xl border border-border bg-background shadow-lg">
                {sleepToolLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSleepToolOpen(false)}
                    className={cn(
                      "block px-4 py-2.5 text-sm first:rounded-t-xl last:rounded-b-xl",
                      pathname === link.href
                        ? "bg-secondary text-foreground"
                        : "text-foreground/80 hover:bg-secondary hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button size="sm" render={<Link href="/for-clinics#contact" />}>
            Request a Demo
          </Button>
          {status === "authenticated" ? (
            <>
              <Link
                href="/dashboard"
                className="px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {session.user?.name}
              </Link>
              <Button size="sm" variant="outline" onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              variant="outline"
              render={<Link href="/register" />}
            >
              Sign Up
            </Button>
          )}
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
            <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Sleep Tool
            </p>
            {sleepToolLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            {primaryLinks.map((link) => (
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
            {status === "authenticated" ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {session.user?.name}
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    setOpen(false)
                    signOut()
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                render={
                  <Link href="/register" onClick={() => setOpen(false)} />
                }
              >
                Sign Up
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
