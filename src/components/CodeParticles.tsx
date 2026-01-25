"use client";

import { useEffect, useRef } from "react";

// Code syntaxes to display
const WORDS = [
    "const", "let", "var", "function", "return", "if", "else",
    "import", "export", "from", "async", "await", "=>", "{}",
    "[]", "<div>", "npm", "git", "console.log", "try", "catch"
];

class Particle {
    x: number;
    y: number;
    text: string;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    baseX: number;
    baseY: number;
    density: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(w: number, h: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.text = WORDS[Math.floor(Math.random() * WORDS.length)];
        this.size = Math.floor(Math.random() * 10) + 12; // 12px to 22px
        this.speedX = (Math.random() - 0.5) * 1; // Slow floating
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = `rgba(100, 149, 237, ${Math.random() * 0.5 + 0.1})`; // Cornflower blue with random opacity
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
    }

    draw() {
        this.ctx.font = `${this.size}px monospace`;
        this.ctx.fillStyle = this.color;
        this.ctx.fillText(this.text, this.x, this.y);
    }

    update(mouse: { x: number; y: number }) {
        // Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 150;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            // Return to floating pattern (simplified)
            this.x += this.speedX;
            this.y += this.speedY;
        }

        // Boundary check (wrap around)
        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
    }
}

export default function CodeParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        const mouse = { x: -1000, y: -1000 };

        const init = () => {
            particles = [];
            const w = canvas.width = window.innerWidth;
            const h = canvas.height = window.innerHeight;
            const numberOfParticles = Math.floor((w * h) / 25000); // Adjust density

            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle(w, h, canvas, ctx));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.draw();
                particle.update(mouse);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Adjust for canvas position if needed, but for hero bg usually clientX/Y is fine relative to fixed/absolute canvas
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-40 pointer-events-auto" // pointer-events-auto needed for mouse interaction if it's behind content? No, event listener is on window, but keeping it ensures.
            style={{ width: '100%', height: '100%' }}
        />
    );
}
