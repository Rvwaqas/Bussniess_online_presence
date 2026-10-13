import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — Jawa Solutions",
  description:
    "Learn about Jawa Solutions: Our engineering culture, leadership team, architectural principles, and track record delivering mission-critical enterprise systems.",
};

const values = [
  {
    title: "Architectural Rigor Over Quick Fixes",
    desc: "We write software that outlasts leadership changes. Every system is built on modular, decoupled abstractions with complete unit/integration test coverage.",
  },
  {
    title: "Velocity Through Safety",
    desc: "Speed doesn't come from cutting corners; it comes from automated CI/CD pipelines, strict code reviews, and reproducible infrastructure as code.",
  },
  {
    title: "Radical Engineering Transparency",
    desc: "No black boxes or opaque billable hours. You have direct access to Git repositories, architecture diagrams, test runs, and daily standups.",
  },
  {
    title: "Total Client IP Ownership",
    desc: "You own 100% of the code, documentation, and infrastructure keys from day one. No vendor lock-in or proprietary runtime licensing.",
  },
];

const leadership = [
  {
    name: "Tariq Ghani",
    role: "Managing Director & Principal Architect",
    specialty: "Distributed Systems & Enterprise Strategy",
    bio: "Over 15 years leading mission-critical IT transformations, ERP modernization, and enterprise cloud adoptions across Fortune 500 enterprises.",
  },
  {
    name: "Dr. Evelyn Vance",
    role: "Head of Artificial Intelligence & ML",
    specialty: "Vector Search & Autonomous Agents",
    bio: "Ph.D. in Computer Science with a focus on neural retrieval systems. Leading Jawa's enterprise LLM orchestration and private data pipelines.",
  },
  {
    name: "Marcus Sterling",
    role: "VP of Cloud Architecture & SRE",
    specialty: "Multi-Cloud Kubernetes & FinOps",
    bio: "Former Principal DevOps Engineer at Tier-1 cloud providers. Architect of multi-region fault-tolerant clusters processing over 1B requests monthly.",
  },
  {
    name: "Amina Al-Mansoor",
    role: "Principal Security & Compliance Officer",
    specialty: "Zero-Trust & SOC2/HIPAA Audits",
    bio: "Specializing in threat modeling, DevSecOps pipeline automation, and regulatory governance for banking and digital health platforms.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Founding & Distributed Systems Boutique",
    desc: "Jawa Solutions was established with a focused mission: building high-performance backend engines and database architectures for high-growth tech companies.",
  },
  {
    year: "2020",
    title: "Expansion into Cloud-Native & DevOps",
    desc: "Accelerated enterprise migration to Kubernetes and multi-cloud architectures (AWS/GCP), establishing our 24/7 Site Reliability Engineering (SRE) practice.",
  },
  {
    year: "2022",
    title: "Enterprise ERP & Regulated FinTech Practice",
    desc: "Expanded into custom ERP implementations, HIPAA-compliant healthcare portals, and high-frequency banking transaction settlement engines.",
  },
  {
    year: "2024",
    title: "Enterprise AI & Autonomous Agents",
    desc: "Launched our dedicated AI practice, architecting private vector search pipelines, intelligent document automation, and agentic workflows.",
  },
  {
    year: "2026",
    title: "Global Reach & 150+ Engineers",
    desc: "Delivering world-class IT solutions and software engineering for enterprises across North America, Europe, the Middle East, and Asia.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--foam)]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(133,129,189,0.3), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)] mb-6">
            <span>About Jawa Solutions</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            The Engineering Force Behind Resilient Enterprises
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[var(--mist)] leading-relaxed">
            We are senior software architects, cloud engineers, and domain specialists dedicated to solving complex technical challenges with architectural integrity and zero tech-debt.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto border-t border-white/10 pt-10">
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-white">8+</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Years in Enterprise IT</p>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-[var(--primary)]">150+</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Engineers & Architects</p>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-white">40+</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Global Deployments</p>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-[var(--primary)]">99.8%</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Philosophy with Photography */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                Our Foundation
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Built on Engineering Rigor, Not Fluff
              </h2>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-[var(--mist)]">
                Jawa Solutions was founded by engineers who grew frustrated with traditional IT outsourcing agencies that prioritized billable hours over code quality and left clients with unmaintainable spaghetti code.
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--mist)]">
                We inverted that model. We operate as an elite extension of your internal engineering leadership, bringing principal architects who write production code alongside your teams, adhere to clean architecture patterns, and document every endpoint thoroughly.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex-1">
                  <span className="font-display text-xl font-bold text-white block">100% IP</span>
                  <span className="text-xs text-[var(--mist)] mt-1 block">
                    Full code & infrastructure ownership from day one
                  </span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex-1">
                  <span className="font-display text-xl font-bold text-[var(--primary)] block">Zero Tech-Debt</span>
                  <span className="text-xs text-[var(--mist)] mt-1 block">
                    Comprehensive automated tests & strict CI/CD gates
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/about/engineering-team.jpg"
                  alt="Jawa Engineering Team"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl border border-white/10 mt-8 sm:mt-12">
                <Image
                  src="/images/about/office-architecture.jpg"
                  alt="Jawa Architecture Studio"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Principles */}
      <section className="relative bg-[#05060A] py-24 sm:py-32 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Core Principles
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              The Tenets That Guide Our Code
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[var(--primary)] transition-colors"
              >
                <span className="font-display text-2xl font-black text-[var(--primary)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--mist)]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Principal Engineers */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Principal Architects
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Technical Leadership
            </h2>
            <p className="mt-4 text-sm text-[var(--mist)]">
              Hands-on engineering leaders with decades of experience at high-scale tech firms and enterprise consultancies.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl border border-white/10 bg-[#090A13] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[var(--primary)] font-display font-bold text-lg mb-4">
                    {leader.name.charAt(0)}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--primary)] mt-0.5">
                    {leader.role}
                  </p>
                  <p className="mt-1 text-[11px] text-[var(--mist)] uppercase tracking-wider">
                    {leader.specialty}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-[var(--mist)]">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="relative bg-[#05060A] py-24 sm:py-32 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Our Journey
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Company Milestones
            </h2>
          </div>

          <div className="mt-16 space-y-8 border-l border-white/10 pl-6 sm:pl-10 ml-4 sm:ml-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--primary)] bg-black group-hover:bg-[var(--primary)] transition-colors" />
                <span className="font-display text-lg font-bold text-[var(--primary)]">
                  {item.year}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[var(--mist)] leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-white/10 bg-gradient-to-b from-[#090A13] to-[var(--ink)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Partner With Senior Architects
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--mist)]">
            Explore how Jawa Solutions can modernize your systems and accelerate your engineering roadmap.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-[var(--primary)] px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(133,129,189,0.5)]"
            >
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
