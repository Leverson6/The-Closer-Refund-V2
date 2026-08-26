"use client";

import { useState } from "react";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;
const BAR = "absolute block h-[2px] w-5 rounded-full bg-primary-foreground";

function BurgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative flex size-5 items-center justify-center">
      <motion.span
        className={BAR}
        animate={{ y: isOpen ? 0 : -6, rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3, ease: EASE }}
      />
      <motion.span
        className={BAR}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2, ease: EASE }}
      />
      <motion.span
        className={BAR}
        animate={{ y: isOpen ? 0 : 6, rotate: isOpen ? -45 : 0 }}
        transition={{ duration: 0.3, ease: EASE }}
      />
    </div>
  );
}

export function MobileMenu({ items }: { items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary transition-transform active:scale-95"
      >
        <BurgerIcon isOpen={isOpen} />
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="absolute left-0 right-0 top-full -mx-3 overflow-hidden sm:-mx-5"
      >
        <div className="flex flex-col gap-1 bg-primary px-6 py-6">
          {items.map((label, i) => (
            <motion.button
              key={label}
              type="button"
              onClick={() => setIsOpen(false)}
              initial={false}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 12,
              }}
              transition={{
                duration: 0.35,
                delay: isOpen ? 0.1 + i * 0.06 : 0,
                ease: EASE,
              }}
              className="border-0 bg-transparent p-0 py-2 text-left text-2xl font-bold uppercase tracking-wide text-primary-foreground"
            >
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
