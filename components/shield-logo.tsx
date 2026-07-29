import Image from "next/image"
import { cn } from "@/lib/utils"

export function ShieldLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Ascend Aegis"
      width={80}
      height={80}
      className={cn("h-16 w-16 object-contain", className)}
    />
  )
}
