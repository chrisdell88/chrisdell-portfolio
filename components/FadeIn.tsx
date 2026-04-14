"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export default function FadeIn({
  children,
  delay = 0,
  style,
  id,
  className,
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  id?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      id={id}
      className={`fade-in ${visible ? "visible" : ""} ${className || ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
