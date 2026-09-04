"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGSAP } from "@/lib/gsap";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const projects = [
  {
    title: "Northline ERP",
    sector: "Manufacturing",
    result: "42% faster order cycle",
    tone: "#8581BD",
  },
  {
    title: "Harbor CRM",
    sector: "B2B SaaS",
    result: "3.1× pipeline visibility",
    tone: "#6f6ba8",
  },
  {
    title: "Seatwave Bookings",
    sector: "Hospitality",
    result: "28% fewer no-shows",
    tone: "#454270",
  },
  {
    title: "Parcel Estate",
    sector: "Real Estate",
    result: "2× qualified leads",
    tone: "#5a5688",
  },
  {
    title: "Flux Field App",
    sector: "Field Ops",
    result: "Offline-first rollout",
    tone: "#3a3760",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const prefersReduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    registerGSAP();
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReduced && !isMobile) {
        const track = trackRef.current!;
        const distance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth + 80);

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      if (!prefersReduced) {
        cardsRef.current.forEach((card) => {
          if (!card) return;

          const onMove = (e: MouseEvent) => {
            if (window.matchMedia("(max-width: 768px)").matches) return;
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.willChange = "transform";
            gsap.to(card, {
              rotateY: x * 10,
              rotateX: -y * 10,
              transformPerspective: 900,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });
          };

          const onLeave = () => {
            gsap.to(card, {
              rotateY: 0,
              rotateX: 0,
              duration: 0.5,
              ease: "power3.out",
              onComplete: () => {
                card.style.willChange = "auto";
              },
            });
          };

          card.addEventListener("mousemove", onMove);
          card.addEventListener("mouseleave", onLeave);
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced, isMobile]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--foam)] py-24 sm:py-0"
    >
      <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pt-28 sm:pb-8">
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[var(--tide-deep)]">
          Case studies
        </p>
        <h2 className="font-display max-w-xl text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
          Products that moved the needle
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex w-max gap-5 px-5 pb-16 will-change-transform sm:px-8 sm:pb-28"
        style={{ perspective: "1200px" }}
      >
        {projects.map((project, i) => (
          <article
            key={project.title}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="relative h-[360px] w-[280px] shrink-0 overflow-hidden border border-black/5 sm:h-[420px] sm:w-[340px]"
            style={{
              background: `linear-gradient(165deg, ${project.tone} 0%, #000000 100%)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="flex h-full flex-col justify-between p-7 text-[var(--foam)]">
              <div>
                <span className="text-xs uppercase tracking-[0.22em] text-[var(--tide)]">
                  {project.sector}
                </span>
                <h3 className="font-display mt-4 text-3xl tracking-tight">
                  {project.title}
                </h3>
              </div>
              <div>
                <p className="text-sm text-[var(--mist)]">Outcome</p>
                <p className="font-display mt-1 text-xl">{project.result}</p>
              </div>
            </div>
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, var(--primary), transparent 70%)",
              }}
              aria-hidden
            />
          </article>
        ))}
      </div>
    </section>
  );
}
