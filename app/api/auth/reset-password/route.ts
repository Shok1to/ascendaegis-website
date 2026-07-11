import { createHash } from 'node:crypto'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { query } from '@/lib/db'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const token = typeof body?.token === 'string' ? body.token : ''
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!token || !password) {
    return NextResponse.json(
      { error: 'Token and password are required.' },
      { status: 400 },
    )
  }
  if (password.length < 8) {
    return NextResponse.json(
      { error: 'Password must be at least 8 characters.' },
      { status: 400 },
    )
  }

  const tokenHash = createHash('sha256').update(token).digest('hex')

  const result = await query<{ user_id: string }>(
    'select user_id from password_reset_tokens where token_hash = $1 and expires_at > now()',
    [tokenHash],
  )
  const row = result.rows[0]

  if (!row) {
    return NextResponse.json(
      { error: 'This reset link is invalid or has expired.' },
      { status: 400 },
    )
  }

  const passwordHash = await bcrypt.hash(password, 10)

  await query('update users set password_hash = $1 where id = $2', [
    passwordHash,
    row.user_id,
  ])
  await query('delete from password_reset_tokens where user_id = $1', [
    row.user_id,
  ])

  return NextResponse.json({ ok: true }, { status: 200 })
}
