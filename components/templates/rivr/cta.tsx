"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { fadeUp } from "./primitives";

export function Cta() {
  return (
    <section
      data-slot="cta"
      className="flex w-full items-center justify-center bg-background p-3 md:p-5"
    >
      <div className="relative flex min-h-[600px] w-full max-w-[1536px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-secondary p-8 md:min-h-[720px] md:rounded-[3rem]">
        <motion.div
          {...fadeUp()}
          className="relative z-10 flex max-w-2xl flex-col items-center gap-8 text-center"
        >
          <h2 className="font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            Melt rigid assets into fluid yield.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary py-1.5 pe-1.5 ps-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <span>Launch App</span>
              <span className="flex size-7 items-center justify-center rounded-full bg-white/20">
                <ArrowUpRight className="size-4 rtl:-scale-x-100" />
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-card/70"
            >
              Read Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
