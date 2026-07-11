import { randomBytes, createHash } from 'node:crypto'
import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { sendPasswordResetEmail } from '@/lib/email'

const GENERIC_MESSAGE =
  "If an account with that email exists, we've sent a password reset link."

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const email =
    typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }

  const result = await query<{ id: string }>(
    'select id from users where email = $1',
    [email],
  )
  const user = result.rows[0]

  if (user) {
    const token = randomBytes(32).toString('hex')
    const tokenHash = createHash('sha256').update(token).digest('hex')
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000)

    await query(
      'insert into password_reset_tokens (user_id, token_hash, expires_at) values ($1, $2, $3)',
      [user.id, tokenHash, expiresAt],
    )

    const origin = new URL(request.url).origin
    const resetUrl = `${origin}/reset-password?token=${token}`

    if (process.env.RESEND_API_KEY) {
      try {
        await sendPasswordResetEmail(email, resetUrl)
      } catch (err) {
        console.error('Failed to send password reset email:', err)
      }
    } else {
      console.log(`[dev] RESEND_API_KEY not set — reset link: ${resetUrl}`)
    }
  }

  return NextResponse.json({ message: GENERIC_MESSAGE }, { status: 200 })
}
