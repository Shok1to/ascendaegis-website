import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  const { name, email, clinic, role, message } = await req.json()

  if (!name || !email || !clinic) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    )
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: "support@ascendaegis.com",
      subject: `New Demo Request from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Clinic/Organization:</strong> ${clinic}</p>
        <p><strong>Role:</strong> ${role || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send contact email:", error)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}
