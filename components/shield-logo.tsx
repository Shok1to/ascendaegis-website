import { cn } from '@/lib/utils'

export function ShieldLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn('h-7 w-7', className)}
      aria-hidden="true"
    >
      <path
        d="M16 2.5 5 6.5v8.2c0 6.7 4.4 11.9 11 14.8 6.6-2.9 11-8.1 11-14.8V6.5L16 2.5Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 16.5h3l2-4.5 3 8 2-5 1.5 1.5h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
