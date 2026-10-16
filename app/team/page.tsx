import Image from "next/image"
import Link from "next/link"
import { BrainCircuit, ServerCog } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/parallax"

const leadership = [
  {
    name: "Richard Bangyay",
    title: "Founder",
    bio: 'Focused on the intersection of AI-driven medical automation and scalable business unit economics, Richard founded Ascend Aegis and continues to shape its long-term direction, moving the company from a "Wedge" strategy in sleep diagnostics toward a global Diagnostic Operating System.',
    image: "/images/Richard.webp",
  },
  {
    name: "Brianna Morissette",
    title: "President · Chief Executive Officer",
    bio: 'Brianna leads the strategic vision at Ascend Aegis, driving operational excellence. She oversees project lifecycles, investor relations, and partnerships, ensuring the "Diagnostic Operating System" scales with the precision and integrity required for global medical deployment.',
    image: "/images/Brianna.webp",
  },
  {
    name: "Dr. Stephen Glazer",
    title: "Chief Medical Officer",
    bio: "A cornerstone of our clinical validation process. Dr. Glazer leads the weekly validation sessions, ensuring that every AI-driven insight meets the highest standards of sleep medicine. His oversight bridges the gap between machine learning and patient-centric care.",
    image: "/images/Stephen.webp",
  },
  {
    name: "Jeni dela Paz-Dantoc",
    title: "Country Manager · Philippines",
    bio: "Jeni drives operations and regional growth across Asia for Ascend Aegis, bringing over two decades of enterprise scaling expertise. She bridges public-private partnerships and aligns cross-functional teams, ensuring high-growth ventures scale smoothly and sustainably within competitive markets.",
    image: "/images/Jeni-portrait.jpg",
  },
]

const engineering = [
  {
    name: "Frank Cally A. Tabuco",
    icon: BrainCircuit,
    title: "Chief Data Scientist & Model-Accuracy Engine",
    bio: "Frank spearheads Ascend Aegis's diagnostic machine learning architecture, turning complex biological data into clinically precise insights. Bringing peer-reviewed expertise from BMVC 2022, he achieved 95%+ accuracy (Dice score) in high-stakes clinical segmentation. Frank now leads the deployment of advanced Transformer and sequence models (LSTM/GRU) to ensure our diagnostic OS meets the highest standards for polysomnography signal analysis.",
    image: null,
  },
  {
    name: "Lester Kim Lagrimas",
    icon: ServerCog,
    title: "Chief Engineer & Infrastructure Architect",
    bio: "Lester leads engineering resilience at Ascend Aegis, turning complex data pipelines into trusted, production-grade clinical systems. Bringing expertise from national-scale disaster alerting and radar systems, his core competence in fuzzy logic algorithms enables advanced noise reduction and quality control. Lester isolates physiological signals from noisy EDF sleep data, ensuring compliant, audit-ready pipelines built for high-uptime clinical adoption across North America.",
    image: null,
  },
  {
    name: "Shoko Takahashi",
    icon: undefined,
    title: "Full Stack Web Developer",
    bio: "Shoko leads end-to-end web engineering at Ascend Aegis, specializing in Next.js, React, TypeScript, and Node.js. She rebuilt Aegis's digital platform from scratch on Vercel with GitHub CI/CD automation. From architecting secure authentication systems and database pipelines to embedding structured data for AI/LLM discoverability, Shoko bridges complex backend infrastructure with high-performance, clinical-grade user interfaces.",
    image: "/images/Shoko.webp",
  },
]

function EngineeringCard({
  member,
  delay,
}: {
  member: (typeof engineering)[number]
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col items-center text-center">
        {member.image ? (
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-border">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
        ) : member.icon ? (
          <div className="flex h-56 w-56 items-center justify-center rounded-full border-4 border-border bg-gradient-to-br from-primary to-primary/75 shadow-inner">
            <member.icon
              className="h-20 w-20 text-accent"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        ) : null}
        <h3 className="mt-5 text-lg font-semibold text-foreground">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-accent">{member.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {member.bio}
        </p>
      </div>
    </Reveal>
  )
}

const board = [
  {
    name: "Mr. Joey Bermudez",
    title: "Chairman of the Board",
    image: "/images/Joey.webp",
    bioUrl: "/joey-bermudez",
  },
  {
    name: "Dr. Timothy Damaso",
    title: "Board Member · Physiomed",
    image: "/images/Timothy.webp",
    bioUrl: "/dr-timothy-damaso",
  },
  {
    name: "Mr. Alberto Turri",
    title: "Board Member · FNS LLC",
    image: "/images/Alberto.webp",
    bioUrl: "/alberto-turri",
  },
  {
    name: "Mr. Richard Bangyay",
    title: "Board Member",
    image: "/images/Richard.webp",
    bioUrl: "/richard-bangyay",
  },
  {
    name: "Ms. Brianna Morissette",
    title: "Board Member",
    image: "/images/Brianna.webp",
    bioUrl: "/brianna-morissette",
  },
]

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — navy with hex background */}
        <section className="relative bg-primary text-primary-foreground">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "url(/images/hero-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="eyebrow text-primary-foreground/70">Our people</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Building the Future of Diagnostics
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Leadership — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Leadership Team
              </h2>
            </Reveal>
            <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-2">
              {leadership.map((member, i) => (
                <Reveal key={member.name} delay={i * 120}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-border">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {member.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Team — white */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Engineering Team
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <EngineeringCard member={engineering[0]} delay={0} />
              <EngineeringCard member={engineering[2]} delay={120} />
              <EngineeringCard member={engineering[1]} delay={240} />
            </div>
          </div>
        </section>

        {/* Board — navy */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-primary-foreground">
                Board of Directors
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {board.map((member, i) => (
                <Reveal key={member.name + member.title} delay={i * 100}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-primary-foreground/20">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-primary-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary-foreground/70">
                      {member.title}
                    </p>
                    <Link
                      href={member.bioUrl}
                      className="mt-4 inline-flex items-center rounded-md bg-primary-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground ring-1 ring-inset ring-primary-foreground/20 transition hover:bg-primary-foreground/20"
                    >
                      Professional Biography
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
