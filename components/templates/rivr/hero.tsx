"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { Navbar } from "./navbar";
import { MenuButton } from "./primitives";

const TITLE_CLASSNAME =
  "mb-3 text-2xl font-semibold uppercase leading-[1.05] tracking-[0.02em] text-foreground sm:text-5xl sm:tracking-[0.08em] md:text-6xl md:tracking-[0.12em] lg:text-[80px] lg:tracking-[0.14em]";

const TYPING_DURATION_MS = 4000;

function ShimmerTypingTitle({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);
  const stepDuration = TYPING_DURATION_MS / text.length;

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, stepDuration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i, stepDuration, text]);

  return (
    <motion.h1
      data-slot="hero-title"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      className={TITLE_CLASSNAME}
    >
      <span
        className="inline-block bg-clip-text text-transparent bg-[linear-gradient(to_right,hsl(30_8%_15%)_40%,#9b2c2c_50%,hsl(30_8%_15%)_60%)] bg-[length:200%_auto] animate-[rivr-title-shimmer_8s_linear_infinite]"
      >
        {displayedText}
      </span>
    </motion.h1>
  );
}

function BottomRightCorner() {
  return (
    <motion.div
      data-slot="hero-docs"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="absolute bottom-0 end-0 flex items-center gap-3 rounded-ss-[1.5rem] bg-background p-3 ps-8 pt-5 sm:gap-4 sm:rounded-ss-[2rem] sm:p-4 sm:ps-10 sm:pt-6 md:gap-6 md:rounded-ss-[3.5rem] md:p-6 md:ps-14 md:pt-8"
    >
      <div className="pointer-events-none absolute -top-[1.5rem] end-0 size-[1.5rem] text-background sm:-top-[2rem] sm:size-[2rem] md:-top-[3.5rem] md:size-[3.5rem]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rtl:-scale-x-100"
        >
          <path
            d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute bottom-0 -start-[1.5rem] size-[1.5rem] text-background sm:-start-[2rem] sm:size-[2rem] md:-start-[3.5rem] md:size-[3.5rem]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rtl:-scale-x-100"
        >
          <path
            d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <MenuButton
        size="lg"
        ariaLabel="Nos boutiques partenaires"
        restBackground="bg-transparent"
      >
        <span className="flex flex-col items-start pe-5 leading-tight">
          <span className="text-sm font-bold uppercase tracking-wide sm:text-base md:text-lg">
            Nos Boutiques
          </span>
          <span className="text-[11px] font-normal opacity-70 sm:text-xs">
            partenaires
          </span>
        </span>
      </MenuButton>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      data-slot="hero"
      className="flex min-h-[520px] w-full items-stretch justify-center bg-background p-3 md:min-h-[80dvh] md:p-5"
    >
      <div className="group relative flex min-h-[480px] w-full max-w-[1536px] flex-col items-center overflow-hidden rounded-[1.5rem] bg-secondary md:min-h-[560px] md:rounded-[3rem]">
        <div className="relative z-10 flex size-full flex-col items-center">
          <Navbar />

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-2 text-lg font-semibold text-foreground/80 sm:text-3xl"
            >
              Récupérez votre
            </motion.p>

            <ShimmerTypingTitle text="Remboursement" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-lg font-semibold text-foreground/80 sm:text-3xl"
            >
              sur chaque commande
            </motion.p>
          </div>

          <BottomRightCorner />
        </div>
      </div>
    </section>
  );
}
