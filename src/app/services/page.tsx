import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enterprise Services & Engineering — Markslink Solutions",
  description:
    "Comprehensive enterprise software engineering: Custom ERPs, Cloud Architecture, AI Automation, Mobile Platforms, Cybersecurity, and Legacy Modernization.",
};

const services = [
  {
    id: "erp",
    tag: "SERVICE 01 // CORE PLATFORMS",
    title: "Custom ERP & CRM Enterprise Systems",
    subtitle: "Consolidate operations, eliminate silos, and drive automated workflows at scale.",
    image: "/images/case-studies/erp-system.jpg",
    description:
      "We design and build bespoke Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) architectures tailored precisely to your unique organizational processes. Unlike off-the-shelf software with bloated licensing fees and rigid constraints, our systems provide modular extensibility, strict role-based access control (RBAC), and high-throughput transactional throughput.",
    features: [
      "Modular supply chain & inventory control engines",
      "Automated multi-currency billing, invoicing & taxation pipelines",
      "Real-time executive BI dashboards with sub-second analytics",
      "Bi-directional ERP sync with SAP, Oracle, NetSuite, and Salesforce",
      "Strict data isolation and auditable revision history logs",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Node.js / Go", "Redis", "Kafka"],
    outcome: "Reduced manual reporting overhead by 70% across 50,000+ internal users",
  },
  {
    id: "cloud",
    tag: "SERVICE 02 // DISTRIBUTED INFRASTRUCTURE",
    title: "Cloud Native Architecture & DevOps CI/CD",
    subtitle: "Bulletproof scalability, zero-downtime deployments, and automated infrastructure as code.",
    image: "/images/case-studies/cloud-devops.jpg",
    description:
      "Modernize your cloud infrastructure with enterprise Kubernetes clusters, Terraform-defined environments, and automated GitOps pipelines. We architect multi-region, fault-tolerant distributed topologies on AWS, Google Cloud, and Microsoft Azure that guarantee 99.99% availability under massive seasonal traffic spikes.",
    features: [
      "Multi-region Kubernetes (EKS, GKE, AKS) container orchestration",
      "Infrastructure as Code (IaC) with Terraform, Pulumi & Ansible",
      "Automated GitOps CI/CD pipelines via GitHub Actions & ArgoCD",
      "Full-stack observability with OpenTelemetry, Datadog & Prometheus",
      "FinOps cloud optimization reducing monthly infrastructure spend by up to 45%",
    ],
    tech: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "ArgoCD", "Grafana"],
    outcome: "99.99% SLA achieved with deployment velocity accelerated from bi-weekly to 15x daily",
  },
  {
    id: "ai",
    tag: "SERVICE 03 // INTELLIGENT AUTOMATION",
    title: "AI-Driven Automation & Autonomous Agents",
    subtitle: "Transform unstructured data into automated decisions and intelligent enterprise workflows.",
    image: "/images/case-studies/real-estate-ai.jpg",
    description:
      "Bridge the gap between experimental AI and dependable enterprise production systems. We develop proprietary LLM fine-tunes, Retrieval-Augmented Generation (RAG) vector pipelines, and autonomous agent loops that process complex documents, automate customer support, and forecast operational bottlenecks with deterministic accuracy.",
    features: [
      "Enterprise Retrieval-Augmented Generation (RAG) with hybrid search",
      "Autonomous agent workflows powered by LangChain & LlamaIndex",
      "Document intelligence OCR for automated contract & invoice processing",
      "Predictive machine learning models for customer churn and demand forecasting",
      "Zero-data-leakage private on-premise or VPC model hosting",
    ],
    tech: ["Python", "PyTorch", "FastAPI", "Pinecone", "Qdrant", "vLLM", "Hugging Face"],
    outcome: "Processed 1.2M+ document pages automatically with 99.4% extraction accuracy",
  },
  {
    id: "mobile",
    tag: "SERVICE 04 // CROSS-PLATFORM APPS",
    title: "High-Scale Web & Mobile Engineering",
    subtitle: "Fluid 60FPS mobile applications and responsive web platforms designed for millions of daily active users.",
    image: "/images/case-studies/mobile-suite.jpg",
    description:
      "Deliver native-grade mobile experiences on iOS and Android alongside responsive, lightning-fast web applications. Utilizing React Native, Flutter, and Next.js, our mobile engineering team builds offline-first apps, hardware-accelerated interfaces, and synchronized real-time data feeds.",
    features: [
      "Offline-first sync architectures with SQLite, WatermelonDB & RxDB",
      "Hardware integrations: Bluetooth LE, camera OCR, NFC, and geolocation",
      "End-to-end encryption for sensitive mobile enterprise communications",
      "Automated App Store and Google Play deployment via Fastlane",
      "Sub-100ms API response latency with edge caching",
    ],
    tech: ["React Native", "Flutter", "TypeScript", "Swift", "Kotlin", "WebSockets"],
    outcome: "4.8+ App Store rating across 3.5M+ combined consumer and enterprise downloads",
  },
  {
    id: "security",
    tag: "SERVICE 05 // COMPLIANCE & DEFENSE",
    title: "Cybersecurity, DevSecOps & Enterprise Audits",
    subtitle: "Fortify your attack surface with zero-trust architectures and continuous penetration testing.",
    image: "/images/case-studies/booking-fintech.jpg",
    description:
      "Enterprise software demands enterprise security. We embed automated security gates into your software development lifecycle (SDLC), conduct static/dynamic code analysis (SAST/DAST), and implement zero-trust identity authentication to ensure compliance with strict industry mandates.",
    features: [
      "Automated vulnerability detection and dependency license auditing",
      "Zero-Trust Network Access (ZTNA) and single sign-on (SAML/Okta/Azure AD)",
      "Continuous compliance readiness for SOC 2 Type II, HIPAA, and PCI-DSS",
      "Secrets management with HashiCorp Vault and AWS KMS",
      "Third-party penetration testing and threat modeling",
    ],
    tech: ["HashiCorp Vault", "SonarQube", "Snyk", "Trivy", "OIDC/OAuth2", "WireGuard"],
    outcome: "100% compliance pass rate across all external client SOC 2 & HIPAA third-party audits",
  },
  {
    id: "modernization",
    tag: "SERVICE 06 // ARCHITECTURAL EVOLUTION",
    title: "Legacy Modernization & Database Re-architecting",
    subtitle: "Deconstruct brittle monoliths into resilient, event-driven microservices without operational downtime.",
    image: "/images/case-studies/crm-platform.jpg",
    description:
      "Don't let legacy technical debt throttle business velocity. We safely strangle legacy codebases using proven phased patterns (Strangler Fig), migrating fragile monolithic SQL databases to distributed event-sourced architectures while maintaining 100% data consistency.",
    features: [
      "Phased Strangler Fig migration with zero business interruption",
      "Database schema migration, sharding, and real-time CDC replication",
      "Decoupled event-driven messaging with Apache Kafka and RabbitMQ",
      "API gateway routing and legacy facade abstraction layers",
      "Automated legacy test-harness coverage and regression validation",
    ],
    tech: ["Apache Kafka", "Debezium", "PostgreSQL", "Go", "Docker", "Node.js"],
    outcome: "Successfully replaced a 12-year-old banking core monolith with zero downtime",
  },
];

const methodology = [
  {
    step: "01",
    title: "Discovery & Architecture Blueprint",
    desc: "We analyze technical constraints, SLAs, data schemas, and domain logic to formulate an immutable technical specification.",
  },
  {
    step: "02",
    title: "Proof of Concept & Prototyping",
    desc: "We validate mission-critical hypotheses with functional spikes, benchmarking throughput, latency, and integrations.",
  },
  {
    step: "03",
    title: "Agile Sprint Delivery",
    desc: "Bi-weekly sprint iterations backed by automated unit, integration, and end-to-end test suites with transparent Git commits.",
  },
  {
    step: "04",
    title: "Security & Penetration Hardening",
    desc: "Rigorous SAST/DAST scans, OWASP Top 10 mitigation, load stress testing, and compliance documentation verification.",
  },
  {
    step: "05",
    title: "Blue/Green Zero-Downtime Launch",
    desc: "Canary deployments and automated rollback triggers ensure production releases occur with zero disruption to active users.",
  },
  {
    step: "06",
    title: "Continuous 24/7 SRE & SLA Evolution",
    desc: "Proactive telemetry monitoring, incident response, performance profiling, and continuous feature expansion.",
  },
];

const techDisciplines = [
  {
    name: "Frontend & Interfaces",
    items: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS", "Three.js / WebGL", "State Machines"],
  },
  {
    name: "Backend & Microservices",
    items: ["Node.js", "Python / FastAPI", "Go (Golang)", "Java / Spring Boot", "GraphQL", "gRPC / Protobuf"],
  },
  {
    name: "Cloud & Distributed Systems",
    items: ["Amazon Web Services", "Google Cloud", "Kubernetes (K8s)", "Terraform IaC", "Docker", "Cloudflare Workers"],
  },
  {
    name: "Data & Artificial Intelligence",
    items: ["PostgreSQL", "Redis Enterprise", "Pinecone Vector DB", "Apache Kafka", "LangChain", "PyTorch / vLLM"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--foam)]">
      <Navigation />

      {/* Hero Header */}
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
            <span>Enterprise Engineering Services</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            Architecting Resilient, High-Velocity Software Systems
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[var(--mist)] leading-relaxed">
            From custom enterprise ERPs and distributed multi-cloud infrastructures to autonomous AI workflows and mission-critical mobile platforms — engineered with zero tech-debt.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-[var(--primary)] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(133,129,189,0.5)]"
            >
              Request Architecture Consultation &rarr;
            </Link>
            <a
              href="#erp"
              className="rounded-lg border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--foam)] hover:bg-white/10 transition-colors"
            >
              Explore Solutions Below
            </a>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto border-t border-white/10 pt-10">
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-white">100+</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Enterprise Systems</p>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-[var(--primary)]">99.99%</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Guaranteed SLA Uptime</p>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-white">15x</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Faster Deployment</p>
            </div>
            <div>
              <span className="font-display text-3xl sm:text-4xl font-bold text-[var(--primary)]">24/7/365</span>
              <p className="mt-1 text-xs text-[var(--mist)] uppercase tracking-wider">Active SRE Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Deep Dive */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-32 grid gap-12 lg:grid-cols-12 items-center rounded-3xl border border-white/10 bg-[#090A12] p-6 sm:p-10 shadow-xl transition-all duration-300 hover:border-white/20`}
              >
                {/* Visual Image Column */}
                <div
                  className={`relative h-80 sm:h-96 lg:h-full min-h-[340px] w-full overflow-hidden rounded-2xl border border-white/10 lg:col-span-5 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-4 inset-x-4 rounded-xl border border-white/15 bg-black/80 p-3.5 backdrop-blur-md">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--primary)] block">
                      Proven Business Impact
                    </span>
                    <p className="mt-1 text-xs font-medium text-[var(--foam)]">
                      {service.outcome}
                    </p>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`flex flex-col lg:col-span-7 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                    {service.tag}
                  </span>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {service.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[var(--mist)] italic">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--mist)]">
                    {service.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-6 space-y-2.5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-xs text-[var(--foam)]">
                        <svg
                          className="h-4 w-4 shrink-0 text-[var(--primary)] mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Chips & CTA */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[var(--mist)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--primary)] hover:underline"
                    >
                      <span>Inquire for {service.title.split(" ")[0]}</span>
                      &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering Methodology */}
      <section className="relative bg-[#05060A] py-24 sm:py-32 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Quality Standards
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              The Markslink Delivery Lifecycle
            </h2>
            <p className="mt-4 text-sm text-[var(--mist)] leading-relaxed">
              Every project follows our battle-tested engineering framework designed to eliminate technical risk and ensure on-time delivery.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {methodology.map((m) => (
              <div
                key={m.step}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-[var(--primary)] hover:bg-white/[0.04]"
              >
                <span className="font-display text-3xl font-black text-white/20 group-hover:text-[var(--primary)] transition-colors">
                  {m.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">
                  {m.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--mist)]">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Matrix */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Modern Foundations
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
              Enterprise Technology Ecosystem
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[var(--mist)]">
              Curated, production-tested frameworks selected for performance, type-safety, and long-term maintainability.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techDisciplines.map((discipline) => (
              <div
                key={discipline.name}
                className="rounded-2xl border border-white/10 bg-[#0A0B13] p-6"
              >
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--primary)]">
                  {discipline.name}
                </h3>
                <ul className="mt-5 space-y-2.5 text-xs text-[var(--foam)]">
                  {discipline.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Proposal CTA */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-[#090A13] to-[var(--ink)] py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Ready to Build Your Enterprise Platform?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--mist)] max-w-xl mx-auto">
            Schedule a technical consultation with our principal solutions architects. We respond within 24 hours with an NDA and initial architectural roadmap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-[var(--primary)] px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(133,129,189,0.5)]"
            >
              Get a Proposal &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
