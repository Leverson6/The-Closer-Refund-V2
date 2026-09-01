"use client";

import { motion } from "motion/react";

import { TextRotate } from "@/components/ui/text-rotate";

import { Navbar } from "./navbar";

const HERO_ROTATING_WORDS = ["Commandes", "Réservations"];
const LONGEST_ROTATING_WORD = "Réservations";

export function Hero() {
  return (
    <section
      id="home"
      data-slot="hero"
      className="relative w-full overflow-hidden bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/8 blur-[160px]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <Navbar />

        <div className="flex w-full max-w-4xl flex-col items-center gap-5 px-4 pb-20 pt-16 text-center sm:pt-20 lg:pb-24 lg:pt-24">
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl"
          >
            Vos remboursements
            <br />
            Sur Toutes Vos{" "}
            <span className="relative inline-block overflow-x-visible overflow-y-hidden align-baseline text-[#1A1A1A] font-extrabold">
              {/* The invisible sizer is the ONLY normal-flow content here,
                  so it alone determines this box's width/height — always
                  "Réservations", never affected by which word is showing.
                  (Measured: letting the grid track auto-size across BOTH
                  the sizer and the live word was unreliable — Chromium
                  didn't consistently pin it to the sizer's max-content
                  width, causing a ~2px drift on "Sur Toutes Vos".) The
                  live word overlays via `inset-0` (sized off this single
                  box, no competing intrinsic-width source) with flexbox
                  `items-baseline`/`justify-start` for alignment — mature,
                  well-supported primitives instead of a top-0/static-
                  position hack. */}
              <span aria-hidden="true" className="invisible">
                {LONGEST_ROTATING_WORD}
              </span>
              <span className="absolute inset-0 flex items-baseline justify-start">
                <TextRotate
                  texts={HERO_ROTATING_WORDS}
                  rotationInterval={5000}
                  mainClassName="whitespace-nowrap"
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="whitespace-nowrap text-base text-[#353535] sm:text-lg"
          >
            Reprenez le contrôle de votre budget : profitez de -60 % toute l&apos;année sur vos boutiques préférées.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
