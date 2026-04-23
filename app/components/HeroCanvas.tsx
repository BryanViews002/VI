'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
  opacityDir: number;
  opacitySpeed: number;
  wobble: number;
  wobbleSpeed: number;
  wobblePhase: number;
}

const COLORS = ['#BFA06A', '#D4AF70', '#7A6540', '#EDE0C8'];

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = (fromBottom = false): Particle => {
      const canvas = canvasRef.current!;
      return {
        x: Math.random() * canvas.width,
        y: fromBottom ? canvas.height + Math.random() * 60 : Math.random() * canvas.height,
        vx: 0,
        vy: -(Math.random() * 0.3 + 0.1),
        radius: Math.random() * 1.2 + 0.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.5 + 0.1,
        opacityDir: Math.random() > 0.5 ? 1 : -1,
        opacitySpeed: Math.random() * 0.005 + 0.002,
        wobble: Math.random() * 0.3 - 0.15,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobblePhase: Math.random() * Math.PI * 2,
      };
    };

    const init = () => {
      resize();
      particles = Array.from({ length: 100 }, () => createParticle(false));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.wobblePhase += p.wobbleSpeed;
        p.x += Math.sin(p.wobblePhase) * 0.3;
        p.y += p.vy;

        p.opacity += p.opacityDir * p.opacitySpeed;
        if (p.opacity >= 0.7) { p.opacity = 0.7; p.opacityDir = -1; }
        if (p.opacity <= 0.1) { p.opacity = 0.1; p.opacityDir = 1; }

        if (p.y < -10) {
          Object.assign(p, createParticle(true));
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
}
