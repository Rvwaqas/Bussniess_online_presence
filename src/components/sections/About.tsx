"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    registerGSAP();
    if (!sectionRef.current || !imageRef.current) return;
    if (prefersReduced || isMobile) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -12, scale: 1.12 },
        {
          yPercent: 12,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".about-copy > *",
        { opacity: 0, y: 32, willChange: "transform, opacity" },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-copy",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced, isMobile]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--ink)] py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div
          ref={imageWrapRef}
          className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]"
        >
          <div
            ref={imageRef}
            className="absolute inset-[-12%] will-change-transform"
            style={{
              backgroundImage: `
                linear-gradient(160deg, rgba(133,129,189,0.4), rgba(0,0,0,0.55)),
                url("data:image/svg+xml,%3Csvg viewBox='0 0 400 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23454270'/%3E%3Cstop offset='1' stop-color='%23000000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='400' height='500'/%3E%3Cpath d='M0 320 Q100 260 200 320 T400 300 V500 H0Z' fill='%238581BD' opacity='0.35'/%3E%3Cpath d='M0 360 Q120 300 240 360 T400 340 V500 H0Z' fill='%23b4b0d9' opacity='0.2'/%3E%3Ccircle cx='300' cy='120' r='60' fill='%238581BD' opacity='0.45'/%3E%3C/svg%3E")
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        <div className="about-copy">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[var(--tide)]">
            About Bizwave
          </p>
          <h2 className="font-display text-4xl tracking-tight text-[var(--foam)] sm:text-5xl">
            We build the systems behind growing companies
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--mist)]">
            Founded as a product-minded consultancy, Bizwave partners with
            operators who need software that scales with ambition — not
            slideshows of features that never ship.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--mist)]">
            From discovery workshops to production releases, our teams stay
            close to the problem: clearer workflows, fewer handoffs, and
            interfaces your people will actually use.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {[
              { value: "80+", label: "Projects" },
              { value: "12", label: "Years" },
              { value: "98%", label: "Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl text-[var(--foam)] sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--mist)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
