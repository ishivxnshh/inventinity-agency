import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

// Intelligent Project Metadata
const PROJECT_METADATA: Record<string, { title: string; category: string; link: string }> = {
    "work0.png": {
        title: "The Angaar Batch",
        category: "EdTech / Community",
        link: "https://theangaarbatch.in/"
    },
    "work1.png": {
        title: "Chef Dhundho",
        category: "Marketplace / Hiring",
        link: "https://chefdhundho.com"
    },
    "work2.png": {
        title: "Shrinidhi Capital",
        category: "Finance / Research",
        link: "https://shrinidhicapital.com"
    },
    "work3.png": {
        title: "GenZDealZ.ai",
        category: "AI E-commerce / Offers",
        link: "https://genzdealz.ai"
    }
};

interface Project {
    image: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

export const ProjectCarousel = ({ projects: rawProjects }: ProjectCarouselProps) => {
    // Enhance projects with metadata
    const items = rawProjects.map(p => {
        // Extract filename from path (e.g. /assets/work0.png -> work0.png)
        const filename = p.image.split('/').pop() || "";
        const meta = PROJECT_METADATA[filename] || { title: "Digital Project", category: "Development", link: "#" };
        return { ...p, ...meta };
    });

    const [activeIndex, setActiveIndex] = useState(0);

    const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
        const swipe = Math.abs(offset.x) * velocity.x;
        let newIndex = activeIndex;

        if (swipe < -100) {
            newIndex = Math.min(items.length - 1, activeIndex + 1);
        } else if (swipe > 100) {
            newIndex = Math.max(0, activeIndex - 1);
        }

        setActiveIndex(newIndex);
    };

    return (
        <div className="relative w-full py-10 overflow-hidden group/carousel">
            {/* Antigravity Background removed as per request to not affect whole site */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Centered */}
                <div className="text-center mb-12 relative px-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Selected Cases</h3>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="gradient-text">Our Work</span>
                    </h2>

                    {/* Navigation Controls - Absolute Right on Desktop, Hidden/Below on Mobile? 
                        Let's keep them near the carousel or floating.
                        Actually, moving them to be inline with the centered header is tricky. 
                        Let's place them to the right of the header title if possible, or just keep them as a separate control bar?
                        
                        If "keep heading in the middle", the structure should probably be:
                        [             Centered Heading             ]
                        [ < Prev                               Next > ] of just cards?

                        Let's center the text block. And put buttons absolute right?
                    */}
                    <div className="hidden md:flex absolute right-6 bottom-0 gap-4">
                        <button
                            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                            disabled={activeIndex === 0}
                            className="p-3 rounded-full border border-primary/20 hover:bg-primary/5 disabled:opacity-30 transition-all text-foreground"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setActiveIndex(Math.min(items.length - 1, activeIndex + 1))}
                            disabled={activeIndex === items.length - 1}
                            className="p-3 rounded-full border border-primary/20 hover:bg-primary/5 disabled:opacity-30 transition-all text-foreground"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Cards Container */}
                <div className="overflow-visible px-4 md:px-0">
                    <motion.div
                        className="flex gap-8 cursor-grab active:cursor-grabbing w-fit touch-pan-x"
                        animate={{ x: -activeIndex * 340 + (typeof window !== 'undefined' && window.innerWidth > 768 ? 100 : 20) }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        drag="x"
                        dragConstraints={{ left: -((items.length - 1) * 340), right: 0 }}
                        onDragEnd={handleDragEnd}
                    >
                        {items.map((project, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <motion.div
                                    key={index}
                                    className={`relative flex-shrink-0 w-[300px] md:w-[400px] h-[450px] rounded-2xl overflow-hidden transition-all duration-500
                                    ${isActive ? 'opacity-100 scale-100' : 'opacity-80 scale-95 hover:opacity-100'}
                                `}
                                    onClick={() => {
                                        if (!isActive) {
                                            setActiveIndex(index);
                                        } else {
                                            window.open(project.link, '_blank');
                                        }
                                    }}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Image Container - No Background/Square Section */}
                                    <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 bg-card border border-border/50 shadow-xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                                        />

                                        {/* Gradient Overlay for Text Visibility Only */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

                                        {/* Active/Hover State Content */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 p-6 text-white text-left"
                                            initial={{ opacity: 0.9, y: 0 }}
                                            animate={{ opacity: isActive ? 1 : 0.9 }}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="text-xs font-bold tracking-widest uppercase mb-1 text-white/70">
                                                    {project.category}
                                                </p>
                                                <h3 className="text-2xl font-display font-bold mb-2 text-white">
                                                    {project.title}
                                                </h3>

                                                <motion.div
                                                    className="h-0 overflow-hidden group-hover/carousel:h-auto"
                                                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                                                >
                                                    <button className="inline-flex items-center gap-2 text-sm font-medium text-white/90 mt-2 hover:text-white hover:underline decoration-white/50 underline-offset-4 transition-all">
                                                        View Case Study <ExternalLink className="w-4 h-4" />
                                                    </button>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
