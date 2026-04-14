"use client";

import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const mouse = { x: -9999, y: -9999, active: false };

    const PARTICLE_COUNT = window.innerWidth < 768 ? 35 : 60;
    const LINK_DIST = 140;
    const MOUSE_DIST = 180;

    type P = { x: number; y: number; vx: number; vy: number };
    const particles: P[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    function onResize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }
    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Update + draw particles
      for (const p of particles) {
        // gentle attraction toward mouse
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MOUSE_DIST && d > 0.1) {
            p.vx += (dx / d) * 0.015;
            p.vy += (dy / d) * 0.015;
          }
        }

        // damping
        p.vx *= 0.985;
        p.vy *= 0.985;
        // clamp velocity
        const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (sp > 0.6) {
          p.vx = (p.vx / sp) * 0.6;
          p.vy = (p.vy / sp) * 0.6;
        }

        p.x += p.vx;
        p.y += p.vy;

        // wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(59,130,246,0.55)";
        ctx!.fill();
      }

      // Lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            const op = (1 - d / LINK_DIST) * 0.25;
            ctx!.strokeStyle = `rgba(59,130,246,${op})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      // Lines from particles to cursor
      if (mouse.active) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MOUSE_DIST) {
            const op = (1 - d / MOUSE_DIST) * 0.35;
            ctx!.strokeStyle = `rgba(59,130,246,${op})`;
            ctx!.lineWidth = 0.7;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
