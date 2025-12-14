import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-primary/20 border-t-primary"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Inner pulsing circle */}
        <motion.div
          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Center dot */}
        <motion.div
          className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-background"
          animate={{
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Loading text */}
      <motion.div
        className="absolute bottom-1/3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p
          className="text-lg font-semibold text-foreground"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};
