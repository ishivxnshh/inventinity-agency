import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, ButtonProps } from '@/components/ui/button';

interface MagneticButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const MagneticButton = ({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  onClick,
  ...props
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref as any}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove as any}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Button
        variant={variant}
        size={size}
        className={`${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};
