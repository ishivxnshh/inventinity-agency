import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

interface VideoProject {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  client: string;
  duration: string;
}

const videoProjects: VideoProject[] = [
  {
    id: "1",
    title: "Tech Startup Launch Video",
    category: "Brand Videos",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop",
    videoUrl: "#",
    description: "High-energy launch video for a fintech startup",
    client: "TechCorp",
    duration: "1:30"
  },
  {
    id: "2",
    title: "Product Demo - AI Dashboard",
    category: "Product Demos",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop",
    videoUrl: "#",
    description: "Engaging product walkthrough with motion graphics",
    client: "AI Solutions Inc",
    duration: "2:15"
  },
  {
    id: "3",
    title: "Instagram Reels Series",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop",
    videoUrl: "#",
    description: "Viral social media content with trending audio",
    client: "Fashion Brand X",
    duration: "0:30"
  },
  {
    id: "4",
    title: "Corporate Event Highlights",
    category: "Events",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop",
    videoUrl: "#",
    description: "Professional event coverage and highlights reel",
    client: "Enterprise Corp",
    duration: "3:00"
  },
  {
    id: "5",
    title: "E-commerce Product Showcase",
    category: "Product Demos",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=450&fit=crop",
    videoUrl: "#",
    description: "Sleek product showcase with 3D transitions",
    client: "Audio Tech",
    duration: "1:45"
  },
  {
    id: "6",
    title: "YouTube Explainer Video",
    category: "Explainers",
    thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=450&fit=crop",
    videoUrl: "#",
    description: "Animated explainer with custom illustrations",
    client: "EduTech Platform",
    duration: "2:30"
  }
];

const categories = ["All", "Brand Videos", "Product Demos", "Social Media", "Events", "Explainers"];

export default function Videos() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? videoProjects 
    : videoProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Video <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Transforming ideas into stunning visual stories. From brand videos to social media content,
              we craft videos that captivate and convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "hero" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-card group cursor-pointer"
                  onClick={() => setSelectedVideo(project)}
                >
                  <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 glass-card px-3 py-1 text-xs font-medium">
                      {project.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-xs font-medium text-primary mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/50">
                        Client: {project.client}
                      </span>
                      <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-strong max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-black">
                <img 
                  src={selectedVideo.thumbnail} 
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm font-medium text-primary mb-2">
                      {selectedVideo.category}
                    </div>
                    <h2 className="text-3xl font-display font-bold gradient-text mb-2">
                      {selectedVideo.title}
                    </h2>
                    <p className="text-foreground/70">
                      {selectedVideo.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedVideo(null)}
                  >
                    Close
                  </Button>
                </div>
                <div className="flex gap-4 text-sm text-foreground/60">
                  <span>Client: {selectedVideo.client}</span>
                  <span>Duration: {selectedVideo.duration}</span>
                </div>
                <div className="mt-6">
                  <Button variant="hero" className="w-full sm:w-auto">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Full Video
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
