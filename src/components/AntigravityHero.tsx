import { useEffect, useRef } from 'react';
import { useTheme } from './theme-provider';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    angle: number;
    length: number;
    opacity: number;
}

export const AntigravityHero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let width = 0;
        let height = 0;

        const PARTICLE_COUNT_DESKTOP = 120;
        const PARTICLE_COUNT_MOBILE = 40;

        // Configuration
        const SPEED_SCALE = 0.1; // Extremely slow
        const BASE_OPACITY = 0.15;
        const DASH_LENGTH_MIN = 3;
        const DASH_LENGTH_MAX = 8;

        const init = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;

            const isMobile = width < 768;
            const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

            particles = [];
            for (let i = 0; i < count; i++) {
                resetParticle(i, true);
            }
        };

        const resetParticle = (index: number, initial = false) => {
            // For radial dispersion, we can spawn them somewhat centrally or randomly
            // "Random orientation"
            const angle = Math.random() * Math.PI * 2;

            // Position: random across screen
            const x = Math.random() * width;
            const y = Math.random() * height;

            // Radial Dispersion Velocity: Vector from center
            // But "subtle drifting". Let's make them move generally away from center slightly + random drift
            const centerX = width / 2;
            const centerY = height / 2;

            const dx = x - centerX;
            const dy = y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Normalized direction from center
            const nx = dist === 0 ? (Math.random() - 0.5) : dx / dist;
            const ny = dist === 0 ? (Math.random() - 0.5) : dy / dist;

            // Very subtle outward drift
            const speed = (0.05 + Math.random() * 0.1) * SPEED_SCALE;

            particles[index] = {
                x,
                y,
                vx: nx * speed,
                vy: ny * speed,
                angle: Math.random() * Math.PI * 2, // Random rotation of the dash itself
                length: DASH_LENGTH_MIN + Math.random() * (DASH_LENGTH_MAX - DASH_LENGTH_MIN),
                opacity: Math.random() * BASE_OPACITY
            };
        };

        const draw = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Color based on theme
            const isDark = document.documentElement.classList.contains('dark');
            // Blue-ish/Grey-ish tint like Antigravity
            ctx.strokeStyle = isDark ? 'rgba(100, 149, 237, ' : 'rgba(59, 130, 246, ';

            particles.forEach((p, i) => {
                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around or respawn?
                // Antigravity feels endless. Let's wrap around with a twist to avoid patterns, 
                // or just let them drift and respawn if too far.
                // Wrapping is smoother for subtle motion.
                if (p.x < -20) p.x = width + 20;
                if (p.x > width + 20) p.x = -20;
                if (p.y < -20) p.y = height + 20;
                if (p.y > height + 20) p.y = -20;

                // Draw Dash
                ctx.beginPath();

                // Calculate end points based on random angle of the dash
                const cos = Math.cos(p.angle);
                const sin = Math.sin(p.angle);

                ctx.moveTo(p.x - (p.length / 2) * cos, p.y - (p.length / 2) * sin);
                ctx.lineTo(p.x + (p.length / 2) * cos, p.y + (p.length / 2) * sin);

                // Dynamic opacity based on distance from center (fade near text areas?)
                // Actually request says "fade near text areas".
                // Let's assume text is in center. So particles near center should be LESS visible?
                // "Render behind hero content only, fade near text areas" -> This implies text needs contrast.
                // So we fade OUT near center.
                const centerX = width / 2;
                const centerY = height / 2;
                const dist = Math.hypot(p.x - centerX, p.y - centerY);
                const maxDist = Math.hypot(width / 2, height / 2);

                // Masking logic: 
                // 0 at center, 1 at edges? 
                // Let's keep it subtle.
                const mask = Math.min(1, Math.pow(dist / 300, 2)); // Fade out within 300px of center

                ctx.strokeStyle = isDark
                    ? `rgba(147, 197, 253, ${p.opacity * mask})` // Blue-300 in dark
                    : `rgba(37, 99, 235, ${p.opacity * mask})`; // Blue-600 in light

                ctx.lineWidth = 1.5;
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        init();
        draw();

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    // CSS mask to further soften edges
    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{
                maskImage: 'radial-gradient(circle at center, transparent 0%, black 60%)',
                WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, black 60%)'
            }}
        />
    );
};
