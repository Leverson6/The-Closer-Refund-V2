"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  ExternalLink,
  Globe,
  Smile,
  Timer,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import FloatingMenu from "@/components/ui/liquid-morph-floating-menu";
import { TheCloserRefundLogo } from "./closer-refund-logo";

const NAV_LINKS = [
  { label: "REVOLUT", href: "#" },
  { label: "VACANCES", href: "#" },
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
        COMMUNAUTÉ
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
      <Link href="/" className="flex items-center">
        <TheCloserRefundLogo className="h-[100px] w-auto sm:h-[120px]" />
      </Link>

      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex">
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

      <FloatingMenu items={NAV_LINKS.map(({ label }) => ({ label }))} />
    </nav>
  );
}
