import { motion } from "framer-motion";

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        style={{ top: "10%", left: "10%" }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-accent/8 blur-3xl"
        style={{ top: "50%", right: "5%" }}
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        style={{ bottom: "20%", left: "20%" }}
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute w-4 h-4 border-2 border-primary/30 rotate-45"
        style={{ top: "20%", right: "20%" }}
        animate={{
          rotate: [45, 225, 45],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-6 h-6 border-2 border-accent/30 rounded-full"
        style={{ top: "60%", left: "8%" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-3 h-3 bg-primary/20 rounded-full"
        style={{ top: "30%", left: "70%" }}
        animate={{
          y: [0, -50, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-accent/30 rounded-full"
        style={{ bottom: "30%", right: "25%" }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
