import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { Bottleneck } from "@/components/sections/bottleneck"
import { RealTime } from "@/components/sections/real-time"
import { IntegrationPipeline } from "@/components/sections/integration-pipeline"
import { Vision } from "@/components/sections/vision"
import { Partnership } from "@/components/sections/partnership"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Bottleneck />
        <RealTime />
        <IntegrationPipeline />
        <Vision />
        <Partnership />
        <FAQ />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
