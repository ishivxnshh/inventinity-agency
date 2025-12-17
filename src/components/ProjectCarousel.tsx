import { useEffect, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const PROJECT_METADATA: Record<
    string,
    { title: string; category: string; link: string }
> = {
    "work0.png": {
        title: "The Angaar Batch",
        category: "EdTech / Community",
        link: "https://theangaarbatch.in/",
    },
    "work1.png": {
        title: "Chef Dhundho",
        category: "Marketplace / Hiring",
        link: "https://chefdhundho.com",
    },
    "work2.png": {
        title: "Shrinidhi Capital",
        category: "Finance / Research",
        link: "https://shrinidhicapital.com",
    },
    "work3.png": {
        title: "GenZDealZ.ai",
        category: "AI E-commerce / Deals",
        link: "https://genzdealz.ai",
    },
    "work4.png": {
        title: "Trynex",
        category: "AI Fashion / Virtual Try-On",
        link: "https://trynex.vercel.app"
    }
};

interface Project {
    image: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
    const items = projects.map((p) => {
        const filename = p.image.split("/").pop() ?? "";
        const meta = PROJECT_METADATA[filename] ?? {
            title: "Digital Product",
            category: "Web / AI",
            link: "#",
        };

        return { ...p, ...meta };
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(600);

    useEffect(() => {
        const updateWidth = () => {
            setCardWidth(window.innerWidth >= 768 ? 600 : 300);
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const handleDragEnd = (_: any, info: PanInfo) => {
        const swipeThreshold = 80;

        if (info.offset.x < -swipeThreshold) {
            setActiveIndex((i) => Math.min(i + 1, items.length - 1));
        }
        else if (info.offset.x > swipeThreshold) {
            setActiveIndex((i) => Math.max(i - 1, 0));
        }
    };

    return (
        <div className="relative w-full py-14 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">

                {/* Header */}
                <div className="text-center mb-12 px-6 relative">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        Selected Cases
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        Our Work
                    </h2>

                    <div className="hidden md:flex absolute right-6 bottom-0 gap-4">
                        <button
                            onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
                            disabled={activeIndex === 0}
                            className="p-3 rounded-full border border-primary/20 hover:bg-primary/5 disabled:opacity-30"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() =>
                                setActiveIndex((i) => Math.min(i + 1, items.length - 1))
                            }
                            disabled={activeIndex === items.length - 1}
                            className="p-3 rounded-full border border-primary/20 hover:bg-primary/5 disabled:opacity-30"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="px-4 md:px-0">
                    <motion.div
                        className="flex gap-8 cursor-grab active:cursor-grabbing w-fit"
                        drag="x"
                        dragConstraints={{
                            left: -(items.length - 1) * (cardWidth + 32),
                            right: 0,
                        }}
                        animate={{ x: -activeIndex * (cardWidth + 32) }}
                        transition={{ type: "spring", stiffness: 260, damping: 30 }}
                        onDragEnd={handleDragEnd}
                    >
                        {items.map((project, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <motion.div
                                    key={index}
                                    className={`relative flex-shrink-0 
                    w-[300px] md:w-[600px] 
                    h-[200px] md:h-[360px] 
                    rounded-2xl overflow-hidden
                    ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-80"}
                  `}
                                    whileHover={{ y: -6 }}
                                    onClick={() => {
                                        if (!isActive) setActiveIndex(index);
                                        else window.open(project.link, "_blank");
                                    }}
                                >
                                    <div className="absolute inset-0 bg-card border border-border/50 shadow-xl rounded-2xl overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />

                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                            <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-1">
                                                {project.category}
                                            </p>
                                            <h3 className="text-2xl font-display font-bold">
                                                {project.title}
                                            </h3>

                                            {isActive && (
                                                <button className="inline-flex items-center gap-2 mt-2 text-sm hover:underline">
                                                    View Case Study <ExternalLink className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
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
