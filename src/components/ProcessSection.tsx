import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon, Rocket, Lightbulb, Code, TestTube, Upload, TrendingUp } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your needs, market, and objectives to craft a winning strategy.',
    icon: Lightbulb,
    color: 'bg-primary'
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Creating wireframes, mockups, and technical architecture that align with your vision.',
    icon: Rocket,
    color: 'bg-primary'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building with cutting-edge tech, agile methodology, and continuous communication.',
    icon: Code,
    color: 'bg-primary'
  },
  {
    number: '04',
    title: 'Testing & QA',
    description: 'Rigorous testing across devices and scenarios to ensure flawless performance.',
    icon: TestTube,
    color: 'bg-primary'
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Smooth deployment with proper monitoring, documentation, and training.',
    icon: Upload,
    color: 'bg-primary'
  },
  {
    number: '06',
    title: 'Growth & Support',
    description: 'Ongoing optimization, updates, and support to maximize your ROI.',
    icon: TrendingUp,
    color: 'bg-primary'
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="section" className="mb-4">
            Our Process
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven 6-step process that delivers results consistently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-strong h-full hover-lift group cursor-pointer relative overflow-hidden">
                  {/* Animated background */}
                  <div className={`absolute inset-0 ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <CardContent className="p-8 relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Connection line for non-last items */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute -bottom-3 left-1/2 w-0.5 h-6 bg-gradient-to-b from-border to-transparent hidden lg:block" />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline indicator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 h-1 bg-primary rounded-full max-w-4xl mx-auto origin-left"
        />
      </div>
    </section>
  );
};
