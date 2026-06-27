import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Bottleneck } from "@/components/sections/bottleneck"
import { RealTime } from "@/components/sections/real-time"
import { IntegrationPipeline } from "@/components/sections/integration-pipeline"
import { CTA } from "@/components/sections/cta"
import { Partnership } from "@/components/sections/partnership"
import { Vision } from "@/components/sections/vision"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Bottleneck />
        <RealTime />
        <IntegrationPipeline />
        <CTA />
        <Partnership />
        <Vision />
      </main>
      <SiteFooter />
    </div>
  )
}
