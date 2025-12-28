import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FABAction {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color: string;
}

interface FloatingActionButtonProps {
  onOpenChange?: (isOpen: boolean) => void;
}

export const FloatingActionButton = ({ onOpenChange }: FloatingActionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onOpenChange?.(newState);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actions: FABAction[] = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Chat on WhatsApp',
      onClick: () => window.open('https://wa.me/919569983385?text=Hi%20Inventinity,%20I%20want%20to%20disscuss%20a%20project', '_blank'),
      color: 'bg-card border border-primary/20 text-primary hover:bg-primary/5'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Schedule Call',
      onClick: () => scrollToSection('contact'),
      color: 'bg-card border border-primary/20 text-primary hover:bg-primary/5'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email Us',
      onClick: () => window.location.href = 'mailto:shivanshnarain@gmail.com',
      color: 'bg-card border border-primary/20 text-primary hover:bg-primary/5'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="absolute bottom-20 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 justify-end"
              >
                <motion.span
                  className="bg-card/95 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-border whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  {action.label}
                </motion.span>
                <motion.button
                  onClick={action.onClick}
                  className={`${action.color} p-4 rounded-full shadow-xl transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {action.icon}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        className="relative w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-2xl flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        <div className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Sparkles className="w-6 h-6" />
          )}
        </div>
      </motion.button>
    </div>
  );
};
