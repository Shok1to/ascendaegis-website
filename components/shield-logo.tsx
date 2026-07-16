import Image from "next/image"
import { cn } from "@/lib/utils"

export function ShieldLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.svg"
      alt="Ascend Aegis"
      width={559}
      height={250}
      className={cn("h-10 w-auto object-contain", className)}
    />
  )
}
