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
  quantity = 100,
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
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();

      for (let i = 0; i < quantity; i++) {
        const isPrimary = Math.random() > 0.5;
        const color = isPrimary ? primaryColor : accentColor;
        const alpha = Math.random() * 0.5 + 0.2;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: `hsla(${color}, ${alpha})`,
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
    
    // Ensure CSS variables are loaded
    setTimeout(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
      animate();
    }, 100);


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
