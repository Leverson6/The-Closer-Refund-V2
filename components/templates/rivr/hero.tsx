"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { Navbar } from "./navbar";

export function Hero() {
  return (
    <section
      id="home"
      data-slot="hero"
      className="relative w-full overflow-hidden bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#1c63d6]/40 blur-[120px]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <Navbar />

        <div className="flex w-full max-w-4xl flex-col items-center gap-5 px-4 pb-28 pt-16 text-center sm:pt-20 lg:pb-36 lg:pt-24">
          <motion.span
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground/90"
          >
            New template!
          </motion.span>

          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display bg-linear-to-b from-sky-100 to-foreground bg-clip-text text-4xl font-medium leading-[1.1] tracking-tight text-transparent sm:text-5xl lg:text-6xl"
          >
            Beautiful Landing Page Template for SaaS Startups
          </motion.h1>

          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            Create your next landing page using this free template.
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Link
              href="#partners"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-2.5 text-sm font-semibold text-background shadow-lg transition-opacity hover:opacity-90"
            >
              See more
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
