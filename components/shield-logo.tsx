import Image from "next/image"
import { cn } from "@/lib/utils"

export function ShieldLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.svg"
      alt="Ascend Aegis"
      width={100}
      height={100}
      className={cn("h-20 w-20 object-contain", className)}
    />
  )
}
