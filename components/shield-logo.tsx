import Image from "next/image"
import { cn } from "@/lib/utils"

export function ShieldLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Ascend Aegis"
      width={40}
      height={40}
      className={cn("h-10 w-10 object-contain", className)}
    />
  )
}
