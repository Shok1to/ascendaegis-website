import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/parallax'
import { RegisterForm } from '@/components/register-form'

export const metadata: Metadata = {
  title: 'Create an Account | Ascend Aegis',
  description: 'Create an Ascend Aegis account.',
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-secondary/40">
        <div className="mx-auto max-w-md px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow text-center text-muted-foreground">
              Get started
            </p>
            <h1 className="mt-4 text-balance text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Create your account
            </h1>
            <p className="mt-4 text-pretty text-center leading-relaxed text-muted-foreground">
              Sign up to get started with Ascend Aegis.
            </p>
          </Reveal>
          <div className="mt-10">
            <RegisterForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
