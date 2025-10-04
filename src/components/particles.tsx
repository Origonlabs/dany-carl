'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const Particles = ({
  className,
  quantity = 150,
}: {
  className?: string;
  quantity?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w: number, h: number;
    let particles: Particle[] = [];

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < quantity; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: `hsla(182, 100%, 74%, ${Math.random() * 0.5 + 0.2})`, // Electric blue with alpha
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > w) p.x = 0;
        else if (p.x < 0) p.x = w;

        if (p.y > h) p.y = 0;
        else if (p.y < 0) p.y = h;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      createParticles();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [quantity]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 z-10', className)}
    />
  );
};

export default Particles;
