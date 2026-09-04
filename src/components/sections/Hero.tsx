"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField"),
  { ssr: false }
);

function splitWords(el: HTMLElement) {
  const text = el.textContent ?? "";
  el.setAttribute("aria-label", text);
  el.innerHTML = "";
  const words = text.split(/\s+/).filter(Boolean);

  words.forEach((word, i) => {
    const wrap = document.createElement("span");
    wrap.className = "inline-block overflow-hidden align-bottom";
    wrap.style.marginRight = i < words.length - 1 ? "0.28em" : "0";

    const inner = document.createElement("span");
    inner.className = "split-word inline-block will-change-transform";
    inner.textContent = word;
    wrap.appendChild(inner);
    el.appendChild(wrap);
  });

  return el.querySelectorAll<HTMLElement>(".split-word");
}

type HeroProps = {
  ready?: boolean;
};

export default function Hero({ ready = false }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    registerGSAP();
    if (!ready || !headlineRef.current) return;

    if (prefersReduced || isMobile) {
      gsap.set([headlineRef.current, subRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const words = splitWords(headlineRef.current);
    gsap.set(words, { yPercent: 110, opacity: 0 });
    gsap.set([subRef.current, ctaRef.current], { y: 24, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.12 });
    tl.to(words, {
      yPercent: 0,
      opacity: 1,
      duration: 0.85,
      stagger: 0.06,
      ease: "power3.out",
    })
      .to(
        subRef.current,
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .to(
        ctaRef.current,
        { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
        "-=0.35"
      );

    return () => {
      tl.kill();
    };
  }, [ready, prefersReduced, isMobile]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--ink)] pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-24"
    >
      <ParticleField />

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="mb-5 font-sans text-xs uppercase tracking-[0.32em] text-[var(--tide)]">
          Software development agency
        </p>

        <h1
          ref={headlineRef}
          className="font-display max-w-4xl text-[clamp(2.6rem,8vw,5.75rem)] leading-[0.95] tracking-tight text-[var(--foam)]"
        >
          Software that rides the next wave of your business
        </h1>

        <p
          ref={subRef}
          className="mt-6 max-w-xl text-base leading-relaxed text-[var(--mist)] sm:text-lg"
        >
          Bizwave Consultancy builds ERP, CRM, booking, real estate, and mobile
          platforms that feel inevitable — clear systems, sharp delivery.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center bg-[var(--primary)] px-6 py-3.5 text-sm font-medium text-black transition-transform will-change-transform hover:scale-[1.03]"
          >
            Talk to us
          </a>
          <a
            href="#work"
            className="inline-flex items-center border border-white/25 px-6 py-3.5 text-sm font-medium text-[var(--foam)] transition-colors hover:border-[var(--tide)] hover:text-[var(--tide)]"
          >
            View case studies
          </a>
        </div>
      </div>
    </section>
  );
}
