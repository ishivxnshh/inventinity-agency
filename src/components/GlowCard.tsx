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
  const glowStyles = {
    primary: "hover:shadow-[0_0_50px_-12px_hsl(var(--primary))]",
    accent: "hover:shadow-[0_0_50px_-12px_hsl(var(--accent))]",
  };

  const borderStyles = {
    primary: "hover:border-primary/40",
    accent: "hover:border-accent/40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`
        relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl
        transition-all duration-500
        ${glowStyles[glowColor]}
        ${borderStyles[glowColor]}
        ${className}
      `}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
