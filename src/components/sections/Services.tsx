"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP, ScrollTrigger } from "@/lib/gsap";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const services = [
  {
    title: "ERP Systems",
    desc: "Unified operations platforms that connect finance, inventory, and people in one calm system of record.",
    tag: "01",
  },
  {
    title: "CRM Solutions",
    desc: "Pipeline tools your sales team actually opens — automation without the noise, clarity without the clutter.",
    tag: "02",
  },
  {
    title: "Booking Platforms",
    desc: "Availability, payments, and reminders woven into frictionless booking experiences your customers trust.",
    tag: "03",
  },
  {
    title: "Real Estate Apps",
    desc: "Listing, lead, and portfolio products built for agents and developers who move markets daily.",
    tag: "04",
  },
  {
    title: "Mobile App Development",
    desc: "Native-feel iOS and Android apps with offline resilience and interfaces that earn repeat opens.",
    tag: "05",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    registerGSAP();
    const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
    if (!cards.length) return;

    if (prefersReduced) {
      gsap.set(cards, { opacity: 1, y: 0 });
      return;
    }

    const reduceMotion = isMobile;
    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: reduceMotion ? 24 : 56,
            willChange: "transform, opacity",
          },
          {
            opacity: 1,
            y: 0,
            duration: reduceMotion ? 0.45 : 0.75,
            ease: "power3.out",
            delay: reduceMotion ? 0 : i * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
            onComplete: () => {
              card.style.willChange = "auto";
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll()
        .filter((t) => cards.includes(t.trigger as HTMLElement))
        .forEach((t) => t.kill());
    };
  }, [prefersReduced, isMobile]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[var(--foam)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[var(--tide-deep)]">
            Services
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
            What we ship
          </h2>
          <p className="mt-4 text-[var(--slate)]">
            Five product lanes. One standard: software that earns its place in
            the workday.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={`group border border-[var(--line)] bg-white/60 p-7 backdrop-blur-sm transition-[border-color,transform] duration-300 hover:border-[var(--tide)] ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="font-display text-sm text-[var(--primary)]">
                {service.tag}
              </span>
              <h3 className="font-display mt-4 text-2xl tracking-tight text-[var(--ink)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--slate)]">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
