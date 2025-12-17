
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Film, Zap, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Scene } from "@/components/ui/Scene";
import { MagneticButton } from "@/components/MagneticButton";

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
    duration: "3:45"
  },
  {
    id: "5",
    title: "Documentary Short",
    category: "Brand Videos",
    thumbnail: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&h=450&fit=crop",
    videoUrl: "#",
    description: "Heartwarming story about community impact",
    client: "NonProfit Org",
    duration: "5:20"
  },
  {
    id: "6",
    title: "App Explainer Animation",
    category: "Product Demos",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop",
    videoUrl: "#",
    description: "2D animated explainer for a new mobile app",
    client: "StartUp Y",
    duration: "1:15"
  }
];

const categories = ["All", "Brand Videos", "Product Demos", "Social Media", "Events"];

export default function Videos() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [isFabOpen, setIsFabOpen] = useState(false);

  const filteredProjects = selectedCategory === "All"
    ? videoProjects
    : videoProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 cursor-none">
      <ScrollProgress />
      <FloatingActionButton onOpenChange={setIsFabOpen} />
      <div className="bg-noise"></div>
      <Navbar />

      {/* --- HERO SECTION MATCHING LANDING --- */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-12 bg-background overflow-hidden">

        {/* Ambient Background - Replaces Scene */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <Badge variant="outline" className="mb-6 px-4 py-1.5 border-white/10 bg-white/5 backdrop-blur-md text-sm">
                <Film className="w-3.5 h-3.5 mr-2 text-primary" /> Premium Video Production
              </Badge>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-foreground">
              <span className="block mb-2">Cinematic</span>
              <span className="text-primary relative inline-block">
                Visual Stories
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none"></path>
                </svg>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="flex flex-col gap-4 mb-8"
            >
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Transforming ideas into stunning visual experiences. From brand films to social content.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER TABS --- */}
      <section className="pb-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <MagneticButton
                key={category}
                variant="ghost"
                onClick={() => setSelectedCategory(category)}
                className={`h-auto px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm ${selectedCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] scale-105 hover:bg-primary/90"
                  : "bg-white/5 border-white/10 text-foreground/70 hover:bg-white/10 hover:border-white/20 hover:text-foreground hover:scale-105"
                  }`}
              >
                {category}
              </MagneticButton>
            ))}
          </div>
        </div>
      </section>

      {/* --- VIDEO GRID --- */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 relative z-10">
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
                  className="glass-card group cursor-pointer hover-lift"
                  onClick={() => setSelectedVideo(project)}
                >
                  <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/25 scale-75 group-hover:scale-100 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 glass-card px-3 py-1 text-xs font-medium backdrop-blur-md">
                      {project.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xs text-muted-foreground">
                        {project.client}
                      </span>
                      <ExternalLink className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Video Modal */}
          <AnimatePresence>
            {selectedVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                onClick={() => setSelectedVideo(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="glass-strong max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="aspect-video bg-black relative">
                    <img
                      src={selectedVideo.thumbnail}
                      alt={selectedVideo.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-20 h-20 text-white/80" />
                    </div>
                  </div>
                  <div className="p-8 md:p-10 bg-background/95">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <Badge variant="outline" className="mb-3 border-primary/20 text-primary">
                          {selectedVideo.category}
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3">
                          {selectedVideo.title}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                          {selectedVideo.description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedVideo(null)}
                        className="rounded-full h-10 w-10 hover:bg-white/10"
                      >
                        <span className="sr-only">Close</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm text-foreground/60 pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>Client: <span className="text-foreground">{selectedVideo.client}</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Duration: <span className="text-foreground">{selectedVideo.duration}</span></span>
                      </div>
                    </div>
                    <div className="mt-8">
                      {/* Placeholder for real player */}
                      <Button variant="hero" className="w-full sm:w-auto" size="lg">
                        <Play className="w-5 h-5 mr-2" fill="currentColor" />
                        Watch Full Video
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
