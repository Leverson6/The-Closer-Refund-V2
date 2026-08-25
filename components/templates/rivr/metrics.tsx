"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import { fadeUp } from "./primitives";

const METRICS = [
  { value: "+ 100", label: "Clients mensuels", accent: false },
  { value: "102 203,13 $", label: "Montant traité", accent: true },
  { value: "98,5 %", label: "Taux de réussite", accent: false },
];

const CELL_BORDERS = ["", "border-s border-foreground/10", "border-s border-foreground/10"];

export function Metrics() {
  return (
    <section
      data-slot="metrics"
      className="mx-auto w-full max-w-[1536px] px-3 py-6 md:px-5 md:py-12"
    >
      <div className="rounded-[1.5rem] border border-foreground/[0.05] bg-foreground/[0.02] p-8 md:rounded-[3rem] md:p-16">
        <dl className="grid grid-cols-[1fr_1.4fr_1fr]">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              {...fadeUp(i * 0.08)}
              className={cn(
                "flex flex-col items-center gap-2 p-3 text-center sm:p-6",
                CELL_BORDERS[i],
              )}
            >
              <dt
                className={cn(
                  "font-display whitespace-nowrap text-2xl font-semibold tracking-tight tabular-nums sm:text-4xl md:text-5xl",
                  metric.accent ? "text-primary" : "text-foreground",
                )}
              >
                {metric.value}
              </dt>
              <dd className="text-sm text-muted-foreground">{metric.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
