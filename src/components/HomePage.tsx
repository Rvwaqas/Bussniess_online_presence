"use client";

import { useCallback, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const onRevealStart = useCallback(() => {
    setReady(true);
  }, []);

  const onLoadComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <>
      {showLoader && (
        <LoadingScreen
          onRevealStart={onRevealStart}
          onComplete={onLoadComplete}
        />
      )}
      <SmoothScroll>
        <div className={ready ? "opacity-100" : "opacity-0"}>
          <Navigation />
          <main>
            <Hero ready={ready} />
            <Services />
            <About />
            <CaseStudies />
            <Contact />
          </main>
        </div>
      </SmoothScroll>
    </>
  );
}
