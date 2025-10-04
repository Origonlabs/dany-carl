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
  staticity = 50,
  ease = 50,
}: {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0, prev_x: 0, prev_y: 0, v_x: 0, v_y: 0 });
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  const init = useRef(false);

  useEffect(() => {
    if (init.current) {
      return;
    }
    init.current = true;
    const canvas = canvasRef.current;
    if (!canvas || !canvasContainerRef.current) return;
    context.current = canvas.getContext('2d');

    let w = canvasContainerRef.current.offsetWidth * dpr;
    let h = canvasContainerRef.current.offsetHeight * dpr;

    const onMouseMove = (e: MouseEvent) => {
      if (canvasContainerRef.current) {
        const rect = canvasContainerRef.current.getBoundingClientRect();
        const { clientX, clientY } = e;
        mousePosition.current.x = (clientX - rect.left) * dpr;
        mousePosition.current.y = (clientY - rect.top) * dpr;
      }
    };
    
    const onResize = () => {
      if (canvasContainerRef.current && canvas) {
        w = canvasContainerRef.current.offsetWidth * dpr;
        h = canvasContainerRef.current.offsetHeight * dpr;
        canvas.width = w;
        canvas.height = h;
        circles.current = [];
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
        const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();

        for (let i = 0; i < quantity; i++) {
            const isPrimary = Math.random() > 0.5;
            const color = isPrimary ? primaryColor : secondaryColor;
            const alpha = Math.random() * 0.5 + 0.1;
            circles.current.push(
                new Circle(
                    Math.random() * w,
                    Math.random() * h,
                    Math.random() * 2 + 0.5,
                    `hsla(${color}, ${alpha})`
                )
            );
        }
      }
    };

    const animate = () => {
      if (!context.current) return;
      context.current.clearRect(0, 0, w, h);
      
      mouse.current.prev_x = mouse.current.x;
      mouse.current.prev_y = mouse.current.y;
      mouse.current.x = mousePosition.current.x;
      mouse.current.y = mousePosition.current.y;
      mouse.current.v_x = (mouse.current.x - mouse.current.prev_x) / 4;
      mouse.current.v_y = (mouse.current.y - mouse.current.prev_y) / 4;

      circles.current.forEach((circle, i) => circle.update());
      requestAnimationFrame(animate);
    };

    class Circle {
        x: number;
        y: number;
        radius: number;
        color: string;
        original_x: number;
        original_y: number;
        vx: number;
        vy: number;
        
        constructor(x: number, y: number, radius: number, color: string) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.original_x = x;
            this.original_y = y;
            this.vx = 0;
            this.vy = 0;
        }

        draw() {
            if (!context.current) return;
            context.current.beginPath();
            context.current.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            context.current.fillStyle = this.color;
            context.current.fill();
        }

        update() {
            let dx = this.x - mouse.current.x;
            let dy = this.y - mouse.current.y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            let force_x = 0;
            let force_y = 0;

            if (dist < 100) {
                let angle = Math.atan2(dy, dx);
                force_x = Math.cos(angle) * (100-dist)/8;
                force_y = Math.sin(angle) * (100-dist)/8;
            }

            this.vx += (this.original_x - this.x + force_x) / ease;
            this.vy += (this.original_y - this.y + force_y) / ease;

            this.vx *= (100 - staticity) / 100;
            this.vy *= (100 - staticity) / 100;

            this.x += this.vx;
            this.y += this.vy;
            
            this.draw();
        }
    }

    onResize();
    animate();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };

  }, [quantity, staticity, ease, dpr]);

  return (
    <div
      className={cn('absolute inset-0 z-0', className)}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default Particles;