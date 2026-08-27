"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  ExternalLink,
  Globe,
  Moon,
  Smile,
  Timer,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

const NAV_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

const DROPDOWN_ITEMS = [
  {
    icon: ExternalLink,
    title: "Autoscaling",
    description:
      "ACME scales apps to meet user demand, automagically, based on load.",
  },
  {
    icon: User,
    title: "Usage Metrics",
    description:
      "Real-time metrics to debug issues. Slow query added? We'll show you exactly where.",
  },
  {
    icon: Globe,
    title: "Production Ready",
    description:
      "ACME runs on ACME, join us and others serving requests at web scale.",
  },
  {
    icon: Timer,
    title: "+99% Uptime",
    description:
      "Applications stay on the grid with high availability and high uptime guarantees.",
  },
  {
    icon: Smile,
    title: "+Supreme Support",
    description:
      "Overcome any challenge with a supporting team ready to respond.",
  },
];

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1227"
      fill="none"
      className={className}
    >
      <path
        fill="currentColor"
        d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
      />
    </svg>
  );
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
      >
        Dropdown
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-30 mt-3 w-80 -translate-x-1/2 rounded-2xl border border-border bg-card p-2 shadow-xl"
          >
            {DROPDOWN_ITEMS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
              >
                <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {description}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  return (
    <nav
      data-slot="rivr-nav"
      className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
    >
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-foreground"
        >
          Acme
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          <Dropdown />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:flex"
        >
          Connect on
          <XLogo className="size-3" />
        </Link>

        <button
          type="button"
          aria-label="Toggle theme"
          className="flex size-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
        >
          <Moon className="size-4" />
        </button>

        <div className="lg:hidden">
          <MobileMenu items={["Pricing", "Testimonials"]} />
        </div>
      </div>
    </nav>
  );
}
