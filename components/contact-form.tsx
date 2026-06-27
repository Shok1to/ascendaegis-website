'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border border-border bg-secondary/60 p-8">
        <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-foreground">
          Thank you &mdash; we&apos;ll be in touch.
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A member of the Ascend Aegis clinical team will reach out to schedule
          your demo and discuss integration with your workflow.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" autoComplete="name" required />
        <Field
          id="email"
          label="Work email"
          type="email"
          autoComplete="email"
          required
        />
        <Field id="clinic" label="Clinic / organization" required />
        <Field id="role" label="Your role" />
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none ring-ring/40 placeholder:text-muted-foreground focus-visible:ring-2"
          placeholder="Tell us about your current sleep scoring workflow."
        />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Request a Demo
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  type = 'text',
  required,
  autoComplete,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none ring-ring/40 placeholder:text-muted-foreground focus-visible:ring-2"
      />
    </div>
  )
}
