"use client";

import { useEffect, useState } from "react";

export default function TypedHeading({
  line1,
  line2,
}: {
  line1: string;
  line2: string;
}) {
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [phase, setPhase] = useState<"line1" | "pause" | "line2" | "done">("line1");

  useEffect(() => {
    if (phase === "line1") {
      if (t1.length < line1.length) {
        const id = setTimeout(() => setT1(line1.slice(0, t1.length + 1)), 55);
        return () => clearTimeout(id);
      }
      setPhase("pause");
    } else if (phase === "pause") {
      const id = setTimeout(() => setPhase("line2"), 350);
      return () => clearTimeout(id);
    } else if (phase === "line2") {
      if (t2.length < line2.length) {
        const id = setTimeout(() => setT2(line2.slice(0, t2.length + 1)), 55);
        return () => clearTimeout(id);
      }
      setPhase("done");
    }
  }, [phase, t1, t2, line1, line2]);

  return (
    <h1
      className="font-serif-heading"
      style={{
        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
        lineHeight: 1.05,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        marginBottom: "1.5rem",
        minHeight: "2.4em",
      }}
    >
      <span style={{ color: "#e5e5e5" }}>{t1}</span>
      <br />
      <span style={{ color: "#3b82f6" }}>{t2}</span>
      <span className="type-cursor"></span>
    </h1>
  );
}
