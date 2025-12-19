import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { ScrollProgress } from '@/components/ScrollProgress';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Palette, Film, ExternalLink, X } from 'lucide-react';

interface GraphicProject {
  image: string;
  title: string;
  category: string;
}

interface VideoProject {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  description: string;
}

const graphicProjects: GraphicProject[] = [
  { image: '/graphics/img1.jpeg', title: 'Brand Identity Design', category: 'Branding' },
  { image: '/graphics/img2.jpeg', title: 'Social Media Campaign', category: 'Social Media' },
  { image: '/graphics/img3.jpeg', title: 'Product Packaging', category: 'Packaging' },
  { image: '/graphics/img4.jpeg', title: 'Marketing Collateral', category: 'Print Design' },
  { image: '/graphics/img5.jpeg', title: 'UI Design System', category: 'Digital' },
  { image: '/graphics/img6.jpeg', title: 'Event Poster Series', category: 'Poster Design' },
  { image: '/graphics/img7.jpeg', title: 'Logo Design Collection', category: 'Branding' },
  { image: '/graphics/img8.jpeg', title: 'Infographic Design', category: 'Illustration' },
  { image: '/graphics/img9.jpeg', title: 'Brand Guidelines', category: 'Branding' },
];

const videoProjects: VideoProject[] = [
  {
    id: '1',
    title: 'Tech Startup Launch',
    category: 'Brand Video',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop',
    description: 'High-energy launch video showcasing innovative tech solutions',
  },
  {
    id: '2',
    title: 'Product Demo - AI Platform',
    category: 'Product Demo',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop',
    description: 'Engaging walkthrough of AI-powered dashboard features',
  },
  {
    id: '3',
    title: 'Social Media Campaign',
    category: 'Social Media',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop',
    description: 'Viral Instagram Reels series for fashion brand',
  },
  {
    id: '4',
    title: 'Corporate Documentary',
    category: 'Corporate',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop',
    description: 'Behind-the-scenes look at company culture and values',
  },
  {
    id: '5',
    title: 'Motion Graphics Explainer',
    category: 'Motion Graphics',
    thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&h=450&fit=crop',
    description: 'Animated explainer video for complex SaaS product',
  },
  {
    id: '6',
    title: 'Event Highlight Reel',
    category: 'Event Coverage',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop',
    description: 'Dynamic recap of tech conference keynotes and panels',
  },
];

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicProject | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <FloatingActionButton />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="section" className="mb-4">
              Our Portfolio
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 text-foreground">
              Creative Work That <span className="text-primary">Delivers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From stunning visual designs to engaging video content and powerful web applications,
              explore our diverse portfolio of client work.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Video Production Section */}
      <section className="py-16 px-4 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="section" className="mb-4">
              <Film className="w-4 h-4 mr-2 inline" />
              Video Production
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              Stories That Move
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional video production services from concept to final cut
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(project)}
              >
                <div className="glass-strong rounded-2xl overflow-hidden hover-lift">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                        <Film className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border-slate-700/60 text-white font-semibold shadow-lg">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="section" className="mb-4">
              <Palette className="w-4 h-4 mr-2 inline" />
              Graphic Design
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Visual Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creative graphic design that captures attention and communicates your brand message
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphicProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedGraphic(project)}
              >
                <div className="glass-strong rounded-2xl overflow-hidden hover-lift">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Badge className="mb-2 bg-slate-900/80 backdrop-blur-md border-slate-700/60 text-white font-semibold shadow-lg">
                        {project.category}
                      </Badge>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-mesh">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Let's create something amazing together. Get in touch to discuss your vision.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Start a Project
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-slate-800">
          <DialogTitle className="sr-only">{selectedVideo?.title}</DialogTitle>
          <div className="relative">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            {selectedVideo && (
              <div className="space-y-4 p-8">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full aspect-video object-cover rounded-lg"
                />
                <div className="text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-slate-800 border-slate-700">{selectedVideo.category}</Badge>
                    <h3 className="text-2xl font-display font-bold">{selectedVideo.title}</h3>
                  </div>
                  <p className="text-slate-300">{selectedVideo.description}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Graphic Modal */}
      <Dialog open={!!selectedGraphic} onOpenChange={() => setSelectedGraphic(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black border-slate-800">
          <DialogTitle className="sr-only">{selectedGraphic?.title}</DialogTitle>
          <div className="relative">
            <button
              onClick={() => setSelectedGraphic(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            {selectedGraphic && (
              <div className="space-y-4 p-8">
                <img
                  src={selectedGraphic.image}
                  alt={selectedGraphic.title}
                  className="w-full max-h-[70vh] object-contain rounded-lg"
                />
                <div className="text-white">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-slate-800 border-slate-700">{selectedGraphic.category}</Badge>
                    <h3 className="text-2xl font-display font-bold">{selectedGraphic.title}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Portfolio;
