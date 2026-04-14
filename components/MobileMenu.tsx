"use client";

import { useState } from "react";

const LINKS = ["Work", "Ventures", "Awards", "Contact"];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="mobile-menu-btn"
        style={{
          display: "none",
          background: "none",
          border: "1px solid #1a1a1a",
          borderRadius: "6px",
          padding: "0.5rem 0.7rem",
          color: "#e5e5e5",
          cursor: "pointer",
        }}
      >
        <span style={{ display: "block", fontSize: "1rem", lineHeight: 1 }}>
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: "61px",
            left: 0,
            right: 0,
            background: "rgba(0,0,0,0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid #1a1a1a",
            padding: "1.5rem 1.25rem",
            zIndex: 99,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  color: "#e5e5e5",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  letterSpacing: "0.02em",
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .mobile-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
