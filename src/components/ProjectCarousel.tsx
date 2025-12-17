import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
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
        link: "https://trynex.vercel.app",
    },
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

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: false,
            dragFree: false,
            containScroll: "trimSnaps",
            duration: 25,
            inViewThreshold: 0.7,
        },
        [
            AutoScroll({
                speed: 1.2,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
            }),
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (autoScroll) autoScroll.stop();
        
        emblaApi.scrollPrev();
        
        // Resume autoscroll after a delay
        setTimeout(() => {
            if (autoScroll && !autoScroll.isPlaying()) {
                autoScroll.play();
            }
        }, 3000);
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (!emblaApi) return;
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (autoScroll) autoScroll.stop();
        
        emblaApi.scrollNext();
        
        // Resume autoscroll after a delay
        setTimeout(() => {
            if (autoScroll && !autoScroll.isPlaying()) {
                autoScroll.play();
            }
        }, 3000);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        
        const autoScroll = emblaApi.plugins().autoScroll;
        
        const onSettle = () => {
            if (autoScroll && !autoScroll.isPlaying()) {
                autoScroll.play();
            }
        };
        
        emblaApi.on("settle", onSettle);
        
        return () => {
            emblaApi.off("settle", onSettle);
        };
    }, [emblaApi]);

    const onSelect = useCallback((api: any) => {
        setSelectedIndex(api.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect(emblaApi);
    }, [emblaApi, onSelect]);



    return (
        <div className="relative w-full py-14 overflow-hidden">
            <div className="max-w-7xl mx-auto relative px-4 md:px-0">
                {/* Header */}
                <div className="text-center mb-12 px-6 relative">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        Selected Cases
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        Our Work
                    </h2>

                    <div className="hidden md:flex absolute right-6 bottom-0 gap-4 z-20">
                        <button
                            onClick={scrollPrev}
                            className="p-3 rounded-full border border-primary/20 hover:bg-primary/5 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="p-3 rounded-full border border-primary/20 hover:bg-primary/5 transition-colors"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex">
                        {items.map((project, index) => {
                            const isActive = index === selectedIndex;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex-[0_0_85%] md:flex-[0_0_600px] pr-4 md:pr-8 h-[250px] md:h-[360px] rounded-2xl transition-all duration-300 ease-out cursor-pointer ${isActive
                                        ? "scale-100 opacity-100"
                                        : "scale-[0.97] opacity-60"
                                        }`}
                                    onClick={() => {
                                        if (isActive) {
                                            window.open(project.link, "_blank");
                                        } else {
                                            emblaApi?.scrollTo(index);
                                        }
                                    }}
                                >
                                    <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 relative group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                                            <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-2">
                                                {project.category}
                                            </p>
                                            <h3 className="text-2xl font-display font-bold mb-1">
                                                {project.title}
                                            </h3>

                                            {isActive && (
                                                <div className="flex items-center gap-2 text-sm text-primary/90 mt-2 font-medium">
                                                    View Project <ExternalLink className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};