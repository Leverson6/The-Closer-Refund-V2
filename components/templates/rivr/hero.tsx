"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { Navbar } from "./navbar";
import { MenuButton } from "./primitives";

const TITLE_CLASSNAME =
  "mb-2 text-xl font-semibold uppercase leading-[1.05] tracking-[0.02em] text-foreground lg:mb-3 lg:text-[80px] lg:tracking-[0.14em]";

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
      className="mt-4 flex items-center justify-center gap-3 pb-6 lg:absolute lg:bottom-0 lg:end-0 lg:mt-0 lg:justify-start lg:gap-6 lg:rounded-ss-[3.5rem] lg:bg-background lg:p-6 lg:ps-14 lg:pt-8 lg:pb-0"
    >
      <div className="pointer-events-none absolute -top-[3.5rem] end-0 hidden size-[3.5rem] text-background lg:block">
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

      <div className="pointer-events-none absolute bottom-0 -start-[3.5rem] hidden size-[3.5rem] text-background lg:block">
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
          <span className="text-sm font-bold uppercase tracking-wide lg:text-lg">
            Nos Boutiques
          </span>
          <span className="text-[11px] font-normal opacity-70 lg:text-xs">
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
      className="flex w-full items-stretch justify-center bg-background p-3 lg:min-h-[80dvh] lg:p-5"
    >
      <div className="group relative flex w-full max-w-[1536px] flex-col items-center overflow-hidden rounded-[1.5rem] bg-secondary lg:min-h-[560px] lg:rounded-[3rem]">
        <div className="relative z-10 flex size-full flex-col items-center">
          <Navbar />

          <div className="flex flex-col items-center px-6 pt-3 text-center lg:pointer-events-none lg:absolute lg:inset-0 lg:justify-center lg:pt-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-1 text-base font-semibold text-foreground/80 lg:mb-2 lg:text-3xl"
            >
              Récupérez votre
            </motion.p>

            <ShimmerTypingTitle text="Remboursement" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-base font-semibold text-foreground/80 lg:text-3xl"
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
