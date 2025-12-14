import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '250',
    suffix: '%',
    label: 'Average ROI',
    description: 'Return on investment for our clients',
    color: 'bg-green-600'
  },
  {
    icon: Users,
    value: '50',
    suffix: '+',
    label: 'Happy Clients',
    description: 'Businesses we\'ve helped grow',
    color: 'bg-blue-600'
  },
  {
    icon: Zap,
    value: '48',
    suffix: 'h',
    label: 'Quick Turnaround',
    description: 'Average response time',
    color: 'bg-orange-600'
  },
  {
    icon: Award,
    value: '100',
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Based on recent surveys',
    color: 'bg-purple-600'
  }
];

export const EnhancedStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-mesh">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Results That Speak
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers don't lie - here's what we've achieved for our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <Card className="glass-strong p-8 hover-lift group cursor-pointer relative overflow-hidden h-full">
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-10`}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Value with counter animation */}
                    <motion.div
                      className="mb-3"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    >
                      <span className="font-display text-5xl font-bold text-primary">
                        {stat.value}
                      </span>
                      <span className="text-3xl font-bold text-foreground/60">
                        {stat.suffix}
                      </span>
                    </motion.div>

                    {/* Label */}
                    <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>

                    {/* Animated underline */}
                    <motion.div
                      className={`h-1 ${stat.color} rounded-full mt-4`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : {}}
                      transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                    />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These aren't just vanity metrics - they represent real business growth,
            improved efficiency, and tangible results for companies like yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
