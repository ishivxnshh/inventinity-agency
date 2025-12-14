import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Trail {
  x: number;
  y: number;
  id: number;
}

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasMovedMouse, setHasMovedMouse] = useState(false);
  const [trail, setTrail] = useState<Trail[]>([]);
  const [trailId, setTrailId] = useState(0);

  useEffect(() => {
    let lastTrailTime = 0;
    const trailInterval = 30; // Add trail particle every 30ms

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setHasMovedMouse(true);

      // Add trail particles
      const now = Date.now();
      if (now - lastTrailTime > trailInterval) {
        setTrail(prev => [
          ...prev.slice(-8), // Keep last 8 particles
          { x: e.clientX, y: e.clientY, id: trailId }
        ]);
        setTrailId(prev => prev + 1);
        lastTrailTime = now;
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        "button, a, input, textarea, select, [role='button'], .cursor-glow, .cursor-pointer"
      );
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [trailId]);

  // Clean up trail particles
  useEffect(() => {
    if (trail.length > 0) {
      const timer = setTimeout(() => {
        setTrail(prev => prev.slice(1));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [trail]);

  if (!hasMovedMouse) return null;

  return (
    <>
      {/* Trail particles */}
      <AnimatePresence>
        {trail.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="fixed top-0 left-0 pointer-events-none z-[9997]"
            initial={{ 
              x: particle.x - 3, 
              y: particle.y - 3,
              opacity: 0.6,
              scale: 1
            }}
            animate={{ 
              opacity: 0,
              scale: 0.5
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <div 
              className="w-1.5 h-1.5 rounded-full bg-accent/40"
              style={{
                opacity: index / trail.length
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border-2 border-accent/50"
        style={{
          boxShadow: isHovering
            ? "0 0 30px hsl(var(--accent) / 0.6)"
            : "0 0 15px hsl(var(--accent) / 0.3)",
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />

      {/* Outer ripple effect on hover */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9997] border border-accent/30"
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </>
  );
};
