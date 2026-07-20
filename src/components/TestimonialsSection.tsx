import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Akshay Shah',
    role: 'Founder GenZdealZ.ai',
    company: 'GenZdealZ.ai',
    rating: 5,
    text: 'Sululu Labs transformed our digital presence completely. Their AI integration saved us 40% on customer support costs while improving satisfaction scores.',
    image: 'AS',
    highlight: 'Saved 40% costs'
  },
  {
    name: 'Naman Sharma',
    role: 'Founder The Angaar Batch',
    company: 'The Angaar Batch',
    rating: 5,
    text: 'The team delivered our web app 2 weeks ahead of schedule with zero bugs. Their communication and technical expertise are unmatched.',
    image: 'NS',
    highlight: 'Zero bugs, early delivery'
  },
  {
    name: 'Manas Daruka',
    role: 'Founder Gama LED',
    company: 'Gama LED',
    rating: 5,
    text: 'Their full-stack approach meant we only needed one partner for everything - design, development, and marketing. ROI was 3x our investment in 6 months.',
    image: 'MD',
    highlight: '3x ROI in 6 months'
  },
  {
    name: 'Shreyas Karade',
    role: 'Founder ChefDhundo',
    company: 'ChefDhundo',
    rating: 5,
    text: 'Working with Sululu Labs felt like having an in-house team. They understood our vision and executed flawlessly with cutting-edge technology.',
    image: 'SK',
    highlight: 'Perfect execution'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="section" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses that trusted us with their digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Card className="glass-strong h-full group hover:scale-[1.02] transition-transform duration-300">
                <CardContent className="p-6 relative flex flex-col h-full">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10 group-hover:text-accent/20 transition-colors" />
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-base font-bold text-primary-foreground">
                        {testimonial.image}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-base mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/90 text-sm mb-4 leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>

                  <Badge variant="outline" className="border-accent/20 text-accent self-start mt-auto">
                    {testimonial.highlight}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-40">
            {['GenZdealZ.ai', 'The Angaar Batch', 'Gama LED', 'ChefDhundo'].map((company) => (
              <div key={company} className="text-xl font-semibold text-foreground/30">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
