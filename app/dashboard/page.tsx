import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import { query } from '@/lib/db'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SignOutButton } from '@/components/sign-out-button'

export const metadata: Metadata = {
  title: 'My Account | Ascend Aegis',
  description: 'Your Ascend Aegis account.',
}

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user) {
    redirect('/login?callbackUrl=/dashboard')
  }

  const result = await query<{ created_at: string }>(
    'select created_at from users where id = $1',
    [session.user.id],
  )
  const memberSince = result.rows[0]?.created_at
    ? new Date(result.rows[0].created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-secondary/40">
        <div className="mx-auto max-w-md px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="eyebrow text-center text-muted-foreground">
            My account
          </p>
          <h1 className="mt-4 text-balance text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Welcome, {session.user.name}
          </h1>

          <div className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8">
            <dl className="grid gap-5">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Name
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  {session.user.name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  {session.user.email}
                </dd>
              </div>
              {memberSince && (
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Member since
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">
                    {memberSince}
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-6">
              <SignOutButton />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
