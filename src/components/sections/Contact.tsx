"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGSAP();
    if (!sectionRef.current || prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--ink)] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(133,129,189,0.25), transparent), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(69,66,112,0.2), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="contact-reveal">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[var(--tide)]">
            Contact
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[var(--foam)] sm:text-5xl">
            Tell us what you&apos;re building
          </h2>
          <p className="mt-5 max-w-md text-[var(--mist)]">
            Share a brief on your ERP, CRM, booking, real estate, or mobile
            product — we&apos;ll reply within two business days.
          </p>
          <div className="mt-10 space-y-3 text-sm text-[var(--mist)]">
            <p>
              <span className="text-[var(--foam)]">Email</span>
              <br />
              hello@bizwave.consultancy
            </p>
            <p>
              <span className="text-[var(--foam)]">Studio</span>
              <br />
              Remote-first · Global delivery
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="contact-reveal space-y-5 border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          {submitted ? (
            <div className="flex min-h-[280px] flex-col items-start justify-center">
              <p className="font-display text-3xl text-[var(--foam)]">
                Message received.
              </p>
              <p className="mt-3 text-[var(--mist)]">
                Thanks for reaching out — a Bizwave lead will follow up soon.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-[var(--mist)]">
                  Name
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-[var(--foam)] outline-none transition-colors focus:border-[var(--tide)]"
                  />
                </label>
                <label className="block text-sm text-[var(--mist)]">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-[var(--foam)] outline-none transition-colors focus:border-[var(--tide)]"
                  />
                </label>
              </div>
              <label className="block text-sm text-[var(--mist)]">
                Project type
                <select
                  name="type"
                  className="mt-2 w-full border border-white/15 bg-[var(--ink)] px-3 py-3 text-[var(--foam)] outline-none transition-colors focus:border-[var(--tide)]"
                  defaultValue="ERP Systems"
                >
                  <option>ERP Systems</option>
                  <option>CRM Solutions</option>
                  <option>Booking Platforms</option>
                  <option>Real Estate Apps</option>
                  <option>Mobile App Development</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="block text-sm text-[var(--mist)]">
                How can we help?
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y border border-white/15 bg-transparent px-3 py-3 text-[var(--foam)] outline-none transition-colors focus:border-[var(--tide)]"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-[var(--primary)] px-6 py-3.5 text-sm font-medium text-black transition-transform will-change-transform hover:scale-[1.01] sm:w-auto"
              >
                Send message
              </button>
            </>
          )}
        </form>
      </div>

      <footer className="relative mx-auto mt-20 max-w-6xl border-t border-white/10 px-5 pt-8 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-[var(--foam)]">
            Bizwave Consultancy
          </p>
          <p className="text-xs text-[var(--mist)]">
            © {new Date().getFullYear()} Bizwave Consultancy. All rights
            reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
