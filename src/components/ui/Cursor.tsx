import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop (pointer: fine)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setLinkHovered(
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null
      );
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference"
        initial={false}
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full mix-blend-difference"
        initial={false}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.9 : linkHovered ? 2.5 : 1,
          opacity: linkHovered ? 1 : 0.5
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.6 }}
      />
    </div>
  );
};