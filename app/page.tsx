import Image from "next/image";
import {
  HERO,
  STATS,
  TICKER_ITEMS,
  FEATURED_VIDEOS,
  WORK_CARDS,
  WRITING_CARDS,
  VENTURES,
  AWARDS_APSE,
  AWARDS_INDIVIDUAL,
  CONTACTS,
} from "@/lib/content";

export default function Home() {
  return (
    <div style={{ background: "#000000", minHeight: "100vh" }}>
      {/* Fixed Top Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(0,0,0,0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid #1a1a1a",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#top"
          className="font-serif-heading"
          style={{
            color: "#3b82f6",
            fontWeight: 700,
            fontSize: "1.1rem",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Chris Dell
        </a>
        <div className="nav-links" style={{ display: "flex", gap: "2rem" }}>
          {["Work", "Ventures", "Awards", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: "#999",
                textDecoration: "none",
                fontSize: "0.88rem",
                letterSpacing: "0.02em",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        className="section-pad"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "7rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: "4rem",
            alignItems: "center",
            width: "100%",
          }}
          className="hero-grid"
        >
          <div>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              {HERO.label}
            </div>
            <h1
              className="font-serif-heading"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ color: "#e5e5e5" }}>{HERO.headlineLine1}</span>
              <br />
              <span style={{ color: "#3b82f6" }}>{HERO.headlineLine2}</span>
              <span className="type-cursor"></span>
            </h1>
            <p
              style={{
                color: "#999",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                fontWeight: 300,
                maxWidth: "560px",
                marginBottom: "2rem",
              }}
            >
              {HERO.subhead}
            </p>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              {HERO.tags.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "360px",
                aspectRatio: "1 / 1",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #1a1a1a",
                boxShadow: "0 0 60px rgba(59, 130, 246, 0.12)",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Chris Dell"
                fill
                sizes="(max-width: 768px) 80vw, 360px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section
        style={{
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
          padding: "3rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
          className="stats-grid"
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "left" }}>
              <div
                className="font-serif-heading"
                style={{
                  color: "#3b82f6",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {s.value}
              </div>
              <div style={{ color: "#555", fontSize: "0.78rem", lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section-pad">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader
            label="Selected Work"
            title="Production, products & writing"
            description="Multimedia production, digital products, and enterprise journalism — much of it produced with and by students."
          />

          {/* Featured videos */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
              marginBottom: "4rem",
            }}
            className="work-videos"
          >
            {FEATURED_VIDEOS.map((v) => (
              <div key={v.youtubeId} className="card-base" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", background: "#0a0a0a" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <span className="pill" style={{ marginBottom: "0.75rem" }}>
                    {v.tag}
                  </span>
                  <h3
                    className="font-serif-heading"
                    style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0.75rem 0 0.5rem", color: "#e5e5e5" }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: "#999", fontSize: "0.92rem", lineHeight: 1.55, marginBottom: "0.75rem" }}>
                    {v.description}
                  </p>
                  <div style={{ color: "#3b82f6", fontSize: "0.8rem", fontWeight: 500 }}>{v.metrics}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Work cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
            className="work-cards-grid"
          >
            {WORK_CARDS.map((w) => (
              <a
                key={w.label}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base"
                style={{ overflow: "hidden", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    background: w.gradient,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75))",
                    }}
                  />
                  <div
                    className="font-serif-heading"
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1.25rem",
                      right: "1.25rem",
                      color: "#fff",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {w.label}
                  </div>
                </div>
                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span className="pill" style={{ alignSelf: "flex-start", marginBottom: "0.75rem" }}>
                    {w.tag}
                  </span>
                  <p style={{ color: "#999", fontSize: "0.88rem", lineHeight: 1.55, marginBottom: "0.75rem", flex: 1 }}>
                    {w.description}
                  </p>
                  {w.metrics && (
                    <div style={{ color: "#3b82f6", fontSize: "0.76rem", marginBottom: "0.75rem", fontWeight: 500 }}>
                      {w.metrics}
                    </div>
                  )}
                  <div style={{ color: "#3b82f6", fontSize: "0.82rem", fontWeight: 500 }}>
                    {w.cta} →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Writing sub-section */}
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>
            Writing & Analysis
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="writing-grid"
          >
            {WRITING_CARDS.map((w) => (
              <a
                key={w.url}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base"
                style={{ padding: "1.5rem", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}
              >
                <span className="pill" style={{ alignSelf: "flex-start", marginBottom: "0.75rem" }}>
                  {w.tag}
                </span>
                <h4
                  className="font-serif-heading"
                  style={{ fontSize: "1.15rem", fontWeight: 700, margin: "0 0 0.5rem", color: "#e5e5e5", lineHeight: 1.3 }}
                >
                  {w.title}
                </h4>
                <p style={{ color: "#999", fontSize: "0.85rem", lineHeight: 1.5, marginBottom: "0.75rem", flex: 1 }}>
                  {w.description}
                </p>
                <div style={{ color: "#3b82f6", fontSize: "0.78rem", fontWeight: 500 }}>Read →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VENTURES */}
      <section id="ventures" className="section-pad section-divider">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader
            label="Entrepreneurial Ventures"
            title="Built from scratch"
            description="Four ventures spanning media entrepreneurship, AI-powered analytics, and sports technology."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
            className="ventures-grid"
          >
            {VENTURES.map((v) => {
              const inner = (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <h3
                      className="font-serif-heading"
                      style={{ fontSize: "1.6rem", fontWeight: 700, color: "#e5e5e5", margin: 0 }}
                    >
                      {v.name}
                    </h3>
                    {v.url && <span style={{ color: "#3b82f6", fontSize: "1.2rem" }}>→</span>}
                  </div>
                  <div className="section-label" style={{ marginBottom: "1rem", color: "#555" }}>
                    {v.subtitle}
                  </div>
                  <p style={{ color: "#999", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {v.description}
                  </p>
                  {v.stat && (
                    <div style={{ color: "#3b82f6", fontSize: "0.82rem", fontWeight: 500 }}>{v.stat}</div>
                  )}
                </>
              );
              return v.url ? (
                <a
                  key={v.name}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-base"
                  style={{ padding: "2rem", textDecoration: "none", color: "inherit" }}
                >
                  {inner}
                </a>
              ) : (
                <div key={v.name} className="card-base" style={{ padding: "2rem" }}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" className="section-pad section-divider">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader
            label="Recognition"
            title="Awards & Fellowships"
            description=""
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "3rem",
            }}
            className="awards-grid"
          >
            <AwardColumn heading="APSE" items={AWARDS_APSE} />
            <AwardColumn heading="Individual" items={AWARDS_INDIVIDUAL} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad section-divider" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            Get in Touch
          </div>
          <h2
            className="font-serif-heading"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              marginBottom: "2.5rem",
              color: "#e5e5e5",
            }}
          >
            Let&apos;s connect
          </h2>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.url}
                target={c.url.startsWith("http") ? "_blank" : undefined}
                rel={c.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn-link"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #1a1a1a",
          padding: "2.5rem 2rem 5rem",
          textAlign: "center",
          color: "#555",
          fontSize: "0.85rem",
        }}
      >
        © 2026 Chris Dell
      </footer>

      {/* STATS TICKER (fixed bottom) */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(0,0,0,0.92)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderTop: "1px solid #1a1a1a",
          height: "34px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className={item.hl ? "hl" : ""}>{item.text}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 999px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .work-videos { grid-template-columns: 1fr !important; }
          .work-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .writing-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ventures-grid { grid-template-columns: 1fr !important; }
          .awards-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .nav-links { display: none !important; }
          .work-cards-grid { grid-template-columns: 1fr !important; }
          .writing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div style={{ marginBottom: "3rem", maxWidth: "700px" }}>
      <div className="section-label" style={{ marginBottom: "1rem" }}>
        {label}
      </div>
      <h2
        className="font-serif-heading"
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "1rem",
          color: "#e5e5e5",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      {description && (
        <p style={{ color: "#999", fontSize: "1.05rem", lineHeight: 1.6, fontWeight: 300 }}>
          {description}
        </p>
      )}
    </div>
  );
}

function AwardColumn({
  heading,
  items,
}: {
  heading: string;
  items: { name: string; year: string }[];
}) {
  return (
    <div>
      <h3
        className="font-serif-heading"
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#e5e5e5",
          borderBottom: "2px solid #3b82f6",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          display: "inline-block",
        }}
      >
        {heading}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li
            key={item.name + item.year}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              padding: "0.85rem 0",
              borderBottom: "1px solid #1a1a1a",
              fontSize: "0.92rem",
            }}
          >
            <span style={{ color: "#e5e5e5" }}>{item.name}</span>
            <span style={{ color: "#555", fontVariantNumeric: "tabular-nums" }}>{item.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
