"use client";

import { ArrowDown } from "lucide-react";
import { GlowButton } from "@/components/glow-button";
import gsap from "gsap";
import React from "react";

export default function HeroSection() {
  const titleRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!titleRef.current) return;

    const letters = titleRef.current.querySelectorAll("[data-hero-letter]");

    const ctx = gsap.context(() => {
      gsap.from(letters, {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.85,
        ease: "expo.out",
        stagger: 0.08,
      });

      gsap.to(letters, {
        y: "-=6",
        repeat: -1,
        yoyo: true,
        duration: 2.2,
        ease: "sine.inOut",
        stagger: {
          each: 0.12,
          repeat: -1,
          yoyo: true,
        },
      });
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center p-4 w-full">
        <div
          ref={titleRef}
          className="flex flex-wrap justify-center gap-4 text-5xl md:text-7xl lg:text-8xl font-headline uppercase tracking-[0.4em]"
          aria-label="Dany Carl"
        >
          {"DANY CARL".split("").map((char, index) =>
            char === " " ? (
              <span key={`space-${index}`} className="w-6" aria-hidden="true" />
            ) : (
              <span
                key={index}
                data-hero-letter
                className="inline-block bg-gradient-to-br from-primary via-sky-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(59,130,246,0.35)]"
              >
                {char}
              </span>
            )
          )}
        </div>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-6 mb-10 animate-fade-in animation-delay-200">
          Como DJ, mi objetivo es crear una experiencia musical inolvidable que conecte a las personas y las haga vibrar.
        </p>
        <div className="animate-fade-in animation-delay-400">
          <GlowButton href="/discography" variant="blue">
            Explorar Música
            <ArrowDown className="ml-2 h-5 w-5" />
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
