import Image from "next/image"
import { cn } from "@/lib/utils"

export function ShieldLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.svg"
      alt="Ascend Aegis"
      width={800}
      height={250}
      className={cn("h-14 w-auto object-contain", className)}
    />
  )
}
