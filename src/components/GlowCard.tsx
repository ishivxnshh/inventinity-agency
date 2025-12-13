import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "accent";
  delay?: number;
}

export const GlowCard = ({
  children,
  className = "",
  glowColor = "primary",
  delay = 0,
}: GlowCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut",
      }}
      className={`
        relative rounded-lg border border-border bg-card shadow-sm
        hover:shadow-md hover:border-primary/20 transition-all duration-300
        ${className}
      `}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
