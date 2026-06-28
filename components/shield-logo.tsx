import Image from "next/image"
import { cn } from "@/lib/utils"

export function ShieldLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Ascend Aegis"
      width={32}
      height={32}
      className={cn("h-8 w-8 object-contain", className)}
    />
  )
}
