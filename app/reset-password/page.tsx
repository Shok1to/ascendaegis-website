import { Suspense } from 'react'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/parallax'
import { ResetPasswordForm } from '@/components/reset-password-form'

export const metadata: Metadata = {
  title: 'Choose a New Password | Ascend Aegis',
  description: 'Choose a new password for your Ascend Aegis account.',
}

export default function ResetPasswordPage() {
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
              Choose a new password
            </h1>
          </Reveal>
          <div className="mt-10">
            <Suspense fallback={null}>
              <ResetPasswordForm />
            </Suspense>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
