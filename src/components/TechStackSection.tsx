import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const technologies = [
  // Frontend
  { name: 'React', category: 'Frontend', color: 'bg-primary' },
  { name: 'Next.js', category: 'Frontend', color: 'bg-primary' },
  { name: 'TypeScript', category: 'Frontend', color: 'bg-primary' },
  { name: 'Tailwind CSS', category: 'Frontend', color: 'bg-primary' },
  { name: 'Vue.js', category: 'Frontend', color: 'bg-primary' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', color: 'bg-primary' },
  { name: 'Python', category: 'Backend', color: 'bg-primary' },
  { name: 'Django', category: 'Backend', color: 'bg-primary' },
  { name: 'FastAPI', category: 'Backend', color: 'bg-primary' },
  { name: 'PostgreSQL', category: 'Backend', color: 'bg-primary' },
  
  // Mobile
  { name: 'React Native', category: 'Mobile', color: 'bg-primary' },
  { name: 'Flutter', category: 'Mobile', color: 'bg-primary' },
  { name: 'Swift', category: 'Mobile', color: 'bg-primary' },
  { name: 'Kotlin', category: 'Mobile', color: 'bg-primary' },
  
  // AI/ML
  { name: 'OpenAI', category: 'AI/ML', color: 'bg-primary' },
  { name: 'TensorFlow', category: 'AI/ML', color: 'bg-primary' },
  { name: 'LangChain', category: 'AI/ML', color: 'bg-primary' },
  { name: 'Anthropic', category: 'AI/ML', color: 'bg-primary' },
  
  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud', color: 'bg-primary' },
  { name: 'Docker', category: 'Cloud', color: 'bg-primary' },
  { name: 'Vercel', category: 'Cloud', color: 'bg-primary' },
  { name: 'Firebase', category: 'Cloud', color: 'bg-primary' }
];

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'AI/ML', 'Cloud'];

export const TechStackSection = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-slate-900/40 border-slate-700/50 backdrop-blur-sm">
            Technology Stack
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We leverage the best tools and frameworks to build scalable, performant solutions
          </p>
        </motion.div>

        {/* Floating tech badges in a masonry-style layout */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.03,
                duration: 0.4,
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -3, 3, 0],
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative group cursor-pointer">
                {/* Glow effect */}
                <div className={`absolute inset-0 ${tech.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full`} />
                
                {/* Tech badge */}
                <div className="relative px-6 py-3 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all">
                  <span className="font-semibold text-slate-100 text-sm">
                    {tech.name}
                  </span>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {tech.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your preferred tech stack? We're always learning and adapting.
          </p>
          <Badge variant="outline" className="text-base px-6 py-2 border-primary/30">
            And many more...
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};
