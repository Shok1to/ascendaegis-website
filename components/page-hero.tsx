import { ParallaxLayer, Reveal } from "@/components/parallax"

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <ParallaxLayer
        speed={-0.25}
        className="absolute inset-x-0 -inset-y-[25%]"
      >
        <div
          className="h-full w-full opacity-20"
          style={{
            backgroundImage: "url(/images/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      </ParallaxLayer>
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-primary-foreground/70">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/85">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
