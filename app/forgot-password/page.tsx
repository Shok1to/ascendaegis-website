import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/parallax'
import { ForgotPasswordForm } from '@/components/forgot-password-form'

export const metadata: Metadata = {
  title: 'Reset Your Password | Ascend Aegis',
  description: 'Request a password reset link for your Ascend Aegis account.',
}

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-secondary/40">
        <div className="mx-auto max-w-md px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow text-center text-muted-foreground">
              Account recovery
            </p>
            <h1 className="mt-4 text-balance text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Reset your password
            </h1>
            <p className="mt-4 text-pretty text-center leading-relaxed text-muted-foreground">
              Enter your email and we&apos;ll send you a link to reset your
              password.
            </p>
          </Reveal>
          <div className="mt-10">
            <ForgotPasswordForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
