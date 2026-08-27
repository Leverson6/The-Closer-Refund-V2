"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import { fadeUp } from "./primitives";
import { cn } from "@/lib/utils";

const STEP_INTERACTIVE = "group relative hover:z-50 active:z-50 cursor-pointer";
const STEP_ZOOM = "pointer-events-none transition-all ease-linear group-hover:scale-150 group-active:scale-150";

// Vitesse du remplissage domino : décalage entre chaque segment (ligne/cercle)
// et durée de chaque remplissage individuel.
const STAGGER_MS = 70;
const FILL_DURATION_MS = 260;

// TODO: remplacer par les descriptions réelles fournies par le client.
const STEPS = [
  {
    id: 1,
    title: "Vérification",
    description: "Contrôle et validation de votre dossier avant toute action.",
  },
  {
    id: 2,
    title: "Lancement",
    description: "Mise à route officielle de votre dossier.",
  },
  {
    id: 3,
    title: "Montage",
    description: "Assemblage et préparation technique du dossier.",
  },
  {
    id: 4,
    title: "Intervention",
    description: "Notre équipe spécialisée intervient sur votre dossier.",
  },
  {
    id: 5,
    title: "Succès",
    description: "Le remboursement est obtenu et crédité sur votre compte.",
  },
  {
    id: 6,
    title: "Commission",
    description: "Finalisation, réglez la commission convenue.",
  },
];

// Délai du segment de ligne entre l'étape `gapIndex` et `gapIndex + 1`,
// selon le sens du déplacement (from -> target).
function getLineDelay(gapIndex: number, target: number, from: number) {
  if (target === from) return 0;
  if (target > from) {
    if (gapIndex >= from && gapIndex <= target - 1) {
      return (gapIndex - from) * 2 * STAGGER_MS;
    }
  } else if (gapIndex >= target && gapIndex <= from - 1) {
    return (from - gapIndex - 1) * 2 * STAGGER_MS;
  }
  return 0;
}

// Délai d'activation/désactivation du cercle `stepId`, selon le sens du
// déplacement (from -> target). Toujours juste après la ligne qui y mène.
function getCircleDelay(stepId: number, target: number, from: number) {
  if (target === from) return 0;
  if (target > from) {
    if (stepId > from && stepId <= target) {
      return ((stepId - from) * 2 - 1) * STAGGER_MS;
    }
  } else if (stepId > target && stepId <= from) {
    return ((from - stepId) * 2 + 1) * STAGGER_MS;
  }
  return 0;
}

export function Stepper() {
  const [activeStep, setActiveStep] = useState(1);
  const [animFrom, setAnimFrom] = useState(1);
  const active = STEPS.find((step) => step.id === activeStep)!;
  const rowRef = useRef<HTMLDivElement>(null);

  const goToStep = useCallback((id: number) => {
    setActiveStep((current) => {
      if (current === id) return current;
      setAnimFrom(current);
      return id;
    });
  }, []);

  // Une fois le domino terminé, on "rattrape" animFrom sur activeStep pour
  // que les prochains survols/clics ne traînent pas un délai périmé.
  useEffect(() => {
    const distance = Math.abs(activeStep - animFrom);
    if (distance === 0) return undefined;
    const totalMs = (distance * 2 - 1) * STAGGER_MS + FILL_DURATION_MS;
    const timeout = setTimeout(() => setAnimFrom(activeStep), totalMs + 30);
    return () => clearTimeout(timeout);
  }, [activeStep, animFrom]);

  const activateFromPoint = (clientX: number) => {
    const row = rowRef.current;
    if (!row) return;
    const buttons = row.querySelectorAll<HTMLButtonElement>("[data-step-id]");
    let closest: HTMLButtonElement | null = null;
    let closestDist = Infinity;
    for (const btn of buttons) {
      const rect = btn.getBoundingClientRect();
      const dist = Math.abs(clientX - (rect.left + rect.width / 2));
      if (dist < closestDist) {
        closestDist = dist;
        closest = btn;
      }
    }
    if (closest) {
      goToStep(Number(closest.dataset.stepId));
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) activateFromPoint(touch.clientX);
  };

  return (
    <section
      data-slot="stepper"
      className="mx-auto w-full max-w-[1536px] px-3 py-10 md:px-5 md:py-16"
    >
      <motion.div {...fadeUp()} className="mx-auto max-w-4xl">
        <div
          ref={rowRef}
          onTouchStart={handleTouchMove}
          onTouchMove={handleTouchMove}
          className="flex items-center"
        >
          {STEPS.map((step, index) => {
            const isCompleted = step.id < activeStep;
            const isActive = step.id === activeStep;
            const circleDelay = getCircleDelay(step.id, activeStep, animFrom);
            const lineDelay = getLineDelay(step.id, activeStep, animFrom);

            return (
              <div
                key={step.id}
                className={cn(
                  "flex items-center",
                  index < STEPS.length - 1 && "flex-1",
                )}
              >
                <button
                  type="button"
                  data-step-id={step.id}
                  onMouseEnter={() => goToStep(step.id)}
                  onClick={() => goToStep(step.id)}
                  aria-label={`Étape ${step.id} : ${step.title}`}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium md:size-10 md:text-sm",
                    STEP_INTERACTIVE,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-0 rounded-full",
                      STEP_ZOOM,
                      isCompleted || isActive ? "bg-[#9b2c2c]" : "bg-[#f0ebe8]",
                    )}
                    style={{
                      transitionDelay: `${circleDelay}ms`,
                      transitionDuration: `${FILL_DURATION_MS}ms`,
                    }}
                  />
                  <span
                    className={cn(
                      "relative",
                      STEP_ZOOM,
                      isCompleted || isActive ? "text-white" : "text-[#9b2c2c]/50",
                    )}
                    style={{
                      transitionDelay: `${circleDelay}ms`,
                      transitionDuration: `${FILL_DURATION_MS}ms`,
                    }}
                  >
                    {step.id}
                  </span>
                </button>

                {index < STEPS.length - 1 && (
                  <div className="mx-1.5 h-0.5 flex-1 overflow-hidden rounded-full bg-[#f0ebe8] md:mx-3">
                    <div
                      className={cn(
                        "h-full rounded-full bg-[#9b2c2c] transition-all ease-linear",
                        step.id < activeStep ? "w-full" : "w-0",
                      )}
                      style={{
                        transitionDelay: `${lineDelay}ms`,
                        transitionDuration: `${FILL_DURATION_MS}ms`,
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 overflow-x-auto px-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-auto flex w-fit flex-row flex-nowrap items-center gap-2"
          >
            <h3 className="whitespace-nowrap font-display text-lg font-semibold text-foreground md:text-2xl">
              {active.id}. {active.title}
            </h3>
            <span className="text-muted-foreground/40" aria-hidden="true">
              —
            </span>
            <p className="whitespace-nowrap text-xs text-muted-foreground md:text-base">
              {active.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
