"use client";

import { useEffect, useRef, useState } from "react";

// Parses a target string like "$404K", "53.8M", "$150K+", "#1" into:
//  - prefix (e.g. "$" or "#")
//  - number (e.g. 404, 53.8, 150, 1)
//  - suffix (e.g. "K", "M", "K+", "")
function parseTarget(target: string) {
  const match = target.match(/^([^\d.-]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: target };
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };
}

function formatNumber(n: number, original: number) {
  // Match decimal places of the original (e.g. 53.8 -> 1 decimal)
  const decimals = (original.toString().split(".")[1] || "").length;
  return n.toFixed(decimals);
}

export default function AnimatedCounter({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const startedRef = useRef(false);

  const { prefix, number, suffix } = parseTarget(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const STEPS = 35;
            const DURATION = 1000;
            const step = number / STEPS;
            let current = 0;
            let i = 0;
            const tick = () => {
              i++;
              current = step * i;
              if (i >= STEPS) {
                setDisplay(formatNumber(number, number));
              } else {
                setDisplay(formatNumber(current, number));
                setTimeout(tick, DURATION / STEPS);
              }
            };
            tick();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
