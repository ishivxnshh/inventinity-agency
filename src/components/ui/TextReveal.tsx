import { motion } from "framer-motion";

export const TextReveal = ({ children, className = "" }: { children: string, className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="block"
      >
        {children}
      </motion.div>
    </div>
  );
};