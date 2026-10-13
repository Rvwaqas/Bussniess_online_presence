"use client";

import { FormEvent, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projectTypes = [
  "Custom ERP / CRM System",
  "Cloud Architecture & DevOps",
  "AI & Workflow Automation",
  "Web & Mobile Engineering",
  "Legacy Modernization",
  "Dedicated Engineering Squad",
];

const budgetRanges = [
  "$15,000 - $30,000",
  "$30,000 - $75,000",
  "$75,000 - $150,000",
  "$150,000+",
];

const timelines = [
  "Immediate (< 1 Month)",
  "1 - 3 Months",
  "3 - 6 Months",
  "Long-term Retainer",
];

const offices = [
  {
    city: "New York",
    region: "Americas Hub",
    address: "One World Trade Center, Suite 8500",
    timezone: "UTC-5 (EST)",
    email: "rvwaqas602@gmail.com",
  },
  {
    city: "London",
    region: "EMEA Headquarters",
    address: "30 St Mary Axe, City of London",
    timezone: "UTC+0 (GMT)",
    email: "rvwaqas602@gmail.com",
  },
  {
    city: "Dubai",
    region: "MENA Innovation Hub",
    address: "DIFC Gate Precinct 4, Level 5",
    timezone: "UTC+4 (GST)",
    email: "rvwaqas602@gmail.com",
  },
  {
    city: "Singapore",
    region: "APAC Operations",
    address: "Marina Bay Financial Centre, Tower 2",
    timezone: "UTC+8 (SGT)",
    email: "rvwaqas602@gmail.com",
  },
];

const faqs = [
  {
    q: "How quickly can an engineering squad commence work?",
    a: "Following NDA execution and initial architecture scoping, our dedicated teams typically onboard and integrate within 5 to 10 business days.",
  },
  {
    q: "Do you sign a Non-Disclosure Agreement (NDA)?",
    a: "Yes, universally. We provide a mutual NDA prior to reviewing any proprietary codebase, architecture specs, or database schemas.",
  },
  {
    q: "Who retains ownership of the intellectual property?",
    a: "Your organization maintains 100% full intellectual property ownership of all source code, design assets, and infrastructure configurations created during the engagement.",
  },
  {
    q: "How do you manage cross-timezone collaboration?",
    a: "Our global distributed model guarantees at least a 4-hour daily overlap with your core team, complemented by asynchronous Git documentation and 24/7 SRE coverage.",
  },
];

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedBudget, setSelectedBudget] = useState(budgetRanges[1]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelines[1]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span>Direct Technical Consultation</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            Let&apos;s Build Your Enterprise Solution
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[var(--mist)] leading-relaxed">
            Connect directly with our solutions architects. Whether you need a custom ERP platform, intelligent AI automation, or a dedicated software engineering team, we deliver within your timeline and budget.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--mist)]">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Architects Available Now
            </span>
            <span>·</span>
            <span>Guaranteed Response &lt; 24h</span>
            <span>·</span>
            <span>Protected by Mutual NDA</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Info Grid */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Left Column: Direct Info & Steps */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                  The Onboarding Journey
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                  What Happens Next?
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-[var(--mist)] leading-relaxed">
                  We don&apos;t subject you to weeks of sales pitches. You interface directly with hands-on systems architects who understand technical requirements.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[var(--primary)] font-display font-bold text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">
                      Mutual NDA & Brief Review
                    </h3>
                    <p className="mt-1 text-xs text-[var(--mist)] leading-relaxed">
                      We execute a bilateral NDA within hours to protect your trade secrets, architecture schemas, and business requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[var(--primary)] font-display font-bold text-sm">
                    02
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">
                      Technical Discovery Call
                    </h3>
                    <p className="mt-1 text-xs text-[var(--mist)] leading-relaxed">
                      A 45-minute deep dive with a Principal Solutions Architect to evaluate constraints, SLAs, security gates, and integrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[var(--primary)] font-display font-bold text-sm">
                    03
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">
                      Architectural Blueprint & Proposal
                    </h3>
                    <p className="mt-1 text-xs text-[var(--mist)] leading-relaxed">
                      You receive a detailed technical proposal including architecture diagrams, tech stack choices, milestone deliverables, and fixed pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Correspondence Card */}
              <div className="rounded-2xl border border-white/10 bg-[#090A13] p-6 space-y-4">
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                  Direct Inquiries
                </h3>
                <div className="space-y-3 text-xs text-[var(--mist)]">
                  <div>
                    <span className="text-[var(--foam)] font-medium block">Executive Desk & Email:</span>
                    <a href="mailto:rvwaqas602@gmail.com" className="hover:text-[var(--primary)] transition-colors">
                      rvwaqas602@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-[var(--foam)] font-medium block">Direct Phone & WhatsApp:</span>
                    <a href="tel:+923480227414" className="hover:text-[var(--primary)] transition-colors">
                      +92 348 0227414
                    </a>
                  </div>
                  <div>
                    <span className="text-[var(--foam)] font-medium block">Emergency SRE Hotline:</span>
                    <a href="tel:+923480227414" className="hover:text-[var(--primary)] transition-colors">
                      +923480227414
                    </a>
                  </div>
                  <div>
                    <span className="text-[var(--foam)] font-medium block">Global Hours:</span>
                    <span>24/7/365 Dedicated Systems Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Proposal Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/15 bg-[#0A0B15] p-6 sm:p-10 shadow-2xl">
                {submitted ? (
                  <div className="py-16 text-center animate-in fade-in zoom-in-95 duration-300">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                      <svg
                        className="h-8 w-8"
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
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-white">
                      Project Brief Received
                    </h3>
                    <p className="mt-3 max-w-md mx-auto text-xs sm:text-sm text-[var(--mist)] leading-relaxed">
                      Thank you for reaching out to Jawa Solutions. A principal solutions architect is reviewing your specifications and will respond within 24 hours under mutual NDA.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 rounded-lg border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-semibold text-[var(--foam)] hover:bg-white/10 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        Project Scope Builder
                      </h3>
                      <p className="mt-1 text-xs text-[var(--mist)]">
                        Select your project parameters to help us assign the best domain specialists.
                      </p>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)] mb-2.5">
                        1. Select Solution Discipline *
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {projectTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`rounded-lg p-2.5 text-left text-xs font-medium transition-all ${
                              selectedType === type
                                ? "border border-[var(--primary)] bg-[var(--primary)]/15 text-white font-bold"
                                : "border border-white/10 bg-white/[0.03] text-[var(--mist)] hover:bg-white/[0.06]"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)] mb-2.5">
                        2. Approximate Budget Range *
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {budgetRanges.map((budget) => (
                          <button
                            type="button"
                            key={budget}
                            onClick={() => setSelectedBudget(budget)}
                            className={`rounded-lg p-2.5 text-center text-xs font-medium transition-all ${
                              selectedBudget === budget
                                ? "border border-[var(--primary)] bg-[var(--primary)]/15 text-white font-bold"
                                : "border border-white/10 bg-white/[0.03] text-[var(--mist)] hover:bg-white/[0.06]"
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Target Timeline */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)] mb-2.5">
                        3. Target Deployment Velocity *
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {timelines.map((timeline) => (
                          <button
                            type="button"
                            key={timeline}
                            onClick={() => setSelectedTimeline(timeline)}
                            className={`rounded-lg p-2.5 text-center text-xs font-medium transition-all ${
                              selectedTimeline === timeline
                                ? "border border-[var(--primary)] bg-[var(--primary)]/15 text-white font-bold"
                                : "border border-white/10 bg-white/[0.03] text-[var(--mist)] hover:bg-white/[0.06]"
                            }`}
                          >
                            {timeline}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name and Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)]">
                        Full Name *
                        <input
                          type="text"
                          required
                          placeholder="e.g. Marcus Vance"
                          className="mt-2 w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-xs sm:text-sm text-[var(--foam)] outline-none transition-colors focus:border-[var(--primary)] placeholder:text-white/20"
                        />
                      </label>

                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)]">
                        Work Email *
                        <input
                          type="email"
                          required
                          placeholder="marcus@enterprise.com"
                          className="mt-2 w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-xs sm:text-sm text-[var(--foam)] outline-none transition-colors focus:border-[var(--primary)] placeholder:text-white/20"
                        />
                      </label>
                    </div>

                    {/* Company and Phone */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)]">
                        Company Name *
                        <input
                          type="text"
                          required
                          placeholder="Apex Global Systems"
                          className="mt-2 w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-xs sm:text-sm text-[var(--foam)] outline-none transition-colors focus:border-[var(--primary)] placeholder:text-white/20"
                        />
                      </label>

                      <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)]">
                        Direct Phone (Optional)
                        <input
                          type="tel"
                          placeholder="+1 (555) 019-2834"
                          className="mt-2 w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-xs sm:text-sm text-[var(--foam)] outline-none transition-colors focus:border-[var(--primary)] placeholder:text-white/20"
                        />
                      </label>
                    </div>

                    {/* Project Details */}
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--mist)]">
                      Project Requirements & Target Deliverables *
                      <textarea
                        required
                        rows={4}
                        placeholder="Detail your architectural requirements, system integrations, expected user volume, or current bottlenecks..."
                        className="mt-2 w-full rounded-lg resize-y border border-white/15 bg-white/[0.04] px-4 py-3 text-xs sm:text-sm text-[var(--foam)] outline-none transition-colors focus:border-[var(--primary)] placeholder:text-white/20"
                      />
                    </label>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-[var(--primary)] px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(133,129,189,0.6)]"
                    >
                      Transmit Project Brief to Solutions Architect &rarr;
                    </button>

                    <div className="text-center text-[11px] text-[var(--mist)]">
                      🔒 Guaranteed Strict Bilateral NDA · No Spam · Response &lt; 24h
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Engineering Hubs */}
      <section className="relative bg-[#05060A] py-24 sm:py-32 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Follow-the-Sun Operations
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Global Engineering Hubs
            </h2>
            <p className="mt-4 text-sm text-[var(--mist)] leading-relaxed">
              Providing round-the-clock enterprise systems monitoring, SLA guarantees, and multi-timezone collaborative delivery.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <div
                key={office.city}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[var(--primary)] transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]">
                  {office.region}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  {office.city}
                </h3>
                <p className="mt-2 text-xs text-[var(--mist)] leading-relaxed">
                  {office.address}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 text-[11px] text-[var(--mist)] space-y-1">
                  <p><span className="text-[var(--foam)]">Timezone:</span> {office.timezone}</p>
                  <p className="truncate"><span className="text-[var(--foam)]">Contact:</span> {office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement FAQ */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Common Inquiries
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-[#0A0B13] p-6"
              >
                <h3 className="font-display text-base font-bold text-white">
                  {faq.q}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-[var(--mist)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
