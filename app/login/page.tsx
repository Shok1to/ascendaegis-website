import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/parallax'
import { LoginForm } from '@/components/login-form'

export const metadata: Metadata = {
  title: 'Sign In | Ascend Aegis',
  description: 'Sign in to your Ascend Aegis account.',
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-secondary/40">
        <div className="mx-auto max-w-md px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow text-center text-muted-foreground">
              Welcome back
            </p>
            <h1 className="mt-4 text-balance text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Sign in to your account
            </h1>
          </Reveal>
          <div className="mt-10">
            <LoginForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
