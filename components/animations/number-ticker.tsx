"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

function formatNumber(n: number, decimalPlaces: number) {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
}

export function NumberTicker({
  value,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: {
  value: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(() => formatNumber(0, decimalPlaces));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(formatNumber(latest, decimalPlaces)),
    });
    return () => controls.stop();
  }, [isInView, value, duration, decimalPlaces]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
