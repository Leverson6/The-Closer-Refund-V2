"use client";

import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { MotionProps } from "motion/react";

import { cn } from "@/lib/utils";

export function fadeUp(delay = 0): MotionProps {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: "easeOut" },
  };
}

export function RivrMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.3"
      />
      <circle cx="12" cy="12" r="5.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function PillButton({
  label,
  href = "#",
  variant = "solid",
  className,
}: {
  label: string;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full py-1.5 pe-1.5 ps-5 text-sm font-medium transition-colors",
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "border border-border bg-card/60 text-foreground backdrop-blur-sm hover:bg-card",
        className,
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "flex size-7 items-center justify-center rounded-full",
          variant === "solid" ? "bg-white/20" : "bg-foreground/10",
        )}
      >
        <ArrowUpRight className="size-4 rtl:-scale-x-100" />
      </span>
    </a>
  );
}

const MENU_BUTTON_CHIP = {
  md: "size-8 sm:size-10 md:size-11",
  lg: "size-10 sm:size-12 md:size-14",
};

const MENU_BUTTON_ICON = {
  md: "size-3 sm:size-3.5 md:size-4",
  lg: "size-4 sm:size-5 md:size-6",
};

const MENU_BUTTON_TEXT_GAP = {
  md: "-ms-1",
  lg: "ms-3 sm:ms-4",
};

export function MenuButton({
  className,
  size = "md",
  ariaLabel = "Menu",
  restBackground = "bg-secondary",
  children = (
    <span className="pe-4 text-sm font-semibold uppercase tracking-wide sm:text-base md:text-lg">
      Menu
    </span>
  ),
}: {
  className?: string;
  size?: "md" | "lg";
  ariaLabel?: string;
  restBackground?: string;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={cn(
        "group relative inline-flex w-fit cursor-pointer items-center overflow-hidden rounded-full border-0 bg-transparent p-0 outline-none",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 top-0 rounded-full border-0 transition-all duration-500 ease-out group-hover:w-full group-hover:bg-primary group-active:w-full group-active:bg-primary group-active:duration-150",
          restBackground,
          MENU_BUTTON_CHIP[size],
        )}
      />
      <span
        className={cn(
          "relative z-10 flex shrink-0 items-center justify-center text-foreground transition-colors duration-500 ease-out group-hover:text-primary-foreground group-active:text-[#faf7f5] group-active:duration-150",
          MENU_BUTTON_CHIP[size],
        )}
      >
        <ArrowRight className={cn("rtl:-scale-x-100", MENU_BUTTON_ICON[size])} />
      </span>
      <span
        className={cn(
          "relative z-10 whitespace-nowrap text-foreground transition-colors duration-500 ease-out group-hover:text-primary-foreground group-active:text-[#faf7f5] group-active:duration-150",
          MENU_BUTTON_TEXT_GAP[size],
        )}
      >
        {children}
      </span>
    </button>
  );
}
