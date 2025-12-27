import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Play, Palette, ExternalLink } from "lucide-react";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  type: "video" | "graphic";
  thumbnail: string;
  link?: string;
  description: string;
}

const workItems: WorkItem[] = [
  // Video Work
  {
    id: "v1",
    title: "Tech Startup Launch Video",
    category: "Brand Video",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop",
    link: "#",
    description: "High-energy launch video for a fintech startup showcasing their innovative platform"
  },
  {
    id: "v2",
    title: "Product Demo - AI Dashboard",
    category: "Product Demo",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop",
    link: "#",
    description: "Engaging walkthrough with motion graphics highlighting key features"
  },
  {
    id: "v3",
    title: "Social Media Campaign",
    category: "Social Content",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop",
    link: "#",
    description: "Viral social media series with dynamic editing and trending audio"
  },
  {
    id: "v4",
    title: "Corporate Event Highlights",
    category: "Event Coverage",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop",
    link: "#",
    description: "Professional coverage capturing the energy and impact of corporate events"
  },

  // Graphic Design Work
  {
    id: "g1",
    title: "Brand Identity Design",
    category: "Branding",
    type: "graphic",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    link: "#",
    description: "Complete brand identity system with logo, colors, and visual guidelines"
  },
  {
    id: "g2",
    title: "Social Media Graphics",
    category: "Social Media",
    type: "graphic",
    thumbnail: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=450&fit=crop",
    link: "#",
    description: "Eye-catching social media post designs optimized for engagement"
  },
  {
    id: "g3",
    title: "Marketing Collateral",
    category: "Print Design",
    type: "graphic",
    thumbnail: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=450&fit=crop",
    link: "#",
    description: "Professional brochures, flyers, and marketing materials"
  },
  {
    id: "g4",
    title: "UI/UX Design System",
    category: "Digital Design",
    type: "graphic",
    thumbnail: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=800&h=450&fit=crop",
    link: "#",
    description: "Comprehensive design system for web and mobile applications"
  },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState<"all" | "video" | "graphic">("all");

  const filteredWork = activeTab === "all"
    ? workItems
    : workItems.filter(item => item.type === activeTab);

  const videoWork = workItems.filter(item => item.type === "video");
  const graphicWork = workItems.filter(item => item.type === "graphic");

  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <FloatingActionButton />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="section" className="mb-6">
              Our Portfolio
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Creative Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of our video production and graphic design projects
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mt-12"
          >
            {[
              { value: "all", label: "All Work" },
              { value: "video", label: "Video", icon: Play },
              { value: "graphic", label: "Design", icon: Palette }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value as any)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${activeTab === tab.value
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary/50 text-foreground hover:bg-secondary"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Video Work Section */}
      {(activeTab === "all" || activeTab === "video") && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-mesh">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <Play className="w-8 h-8 text-primary" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  Video Production
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Compelling visual stories that capture attention and drive engagement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(activeTab === "all" ? videoWork : filteredWork.filter(i => i.type === "video")).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <Badge className="mb-3">{item.category}</Badge>
                    <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                      >
                        View Project <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Graphic Design Section */}
      {(activeTab === "all" || activeTab === "graphic") && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-8 h-8 text-accent" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  Graphic Design
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Beautiful, strategic designs that elevate your brand identity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(activeTab === "all" ? graphicWork : filteredWork.filter(i => i.type === "graphic")).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <Badge variant="outline" className="mb-3 border-accent/30 text-accent">
                      {item.category}
                    </Badge>
                    <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                      >
                        View Project <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-mesh">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's bring your vision to life with exceptional video and design work
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
