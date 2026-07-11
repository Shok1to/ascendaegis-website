import { Resend } from 'resend'

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  await resend.emails.send({
    from: process.env.EMAIL_FROM ?? 'Ascend Aegis <onboarding@resend.dev>',
    to,
    subject: 'Reset your Ascend Aegis password',
    html: `
      <p>We received a request to reset your Ascend Aegis password.</p>
      <p><a href="${resetUrl}">Click here to choose a new password</a>. This link expires in 1 hour.</p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    `,
  })
}
