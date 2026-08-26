"use client";

import { motion } from "motion/react";

import { NumberTicker } from "@/components/animations/number-ticker";
import { cn } from "@/lib/utils";

import { fadeUp } from "./primitives";

const METRICS = [
  {
    value: 100,
    decimalPlaces: 0,
    prefix: "+ ",
    suffix: "",
    label: "Clients mensuels",
    accent: false,
  },
  {
    value: 102203.13,
    decimalPlaces: 2,
    prefix: "",
    suffix: " $",
    label: "Montant traité",
    accent: true,
  },
  {
    value: 98.5,
    decimalPlaces: 1,
    prefix: "",
    suffix: " %",
    label: "Taux de réussite",
    accent: false,
  },
];

const CELL_BORDERS = ["", "md:border-s md:border-foreground/10", "md:border-s md:border-foreground/10"];

export function Metrics() {
  return (
    <section
      data-slot="metrics"
      className="mx-auto w-full max-w-[1536px] overflow-x-hidden px-3 py-6 md:px-5 md:py-12"
    >
      <div className="rounded-[1.5rem] border border-foreground/[0.05] bg-foreground/[0.02] p-6 md:rounded-[3rem] md:p-16">
        <dl className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.4fr_1fr] md:gap-0">
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
                  "font-display whitespace-nowrap text-lg font-semibold tracking-tight tabular-nums lg:text-5xl",
                  metric.accent ? "text-primary" : "text-foreground",
                )}
              >
                <NumberTicker
                  value={metric.value}
                  decimalPlaces={metric.decimalPlaces}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </dt>
              <dd className="text-sm text-muted-foreground">{metric.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
