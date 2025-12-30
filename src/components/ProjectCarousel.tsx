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
    "work5.png": {
        title: "NISM Smart Prep",
        category: "EdTech / SaaS Platform",
        link: "https://www.nismsmartprep.in/",
    },
    "work6.png": {
        title: "DC Link Technologies",
        category: "Corporate / Manufacturing",
        link: "https://dclinktechnologies.vercel.app/",
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

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: false,
            dragFree: false,
            containScroll: "trimSnaps",
            duration: 25,
            inViewThreshold: 0.9,
        },
        [
            AutoScroll({
                speed: 2,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: false,
            }),
        ]
    );

    const [slidesInView, setSlidesInView] = useState<number[]>([]);

    const updateSlidesInView = useCallback((api: any) => {
        setSlidesInView((prev) => {
            const newSlidesInView = api.slidesInView();
            if (newSlidesInView.length === prev.length && newSlidesInView.every((v: number, i: number) => v === prev[i])) {
                return prev;
            }
            return newSlidesInView;
        });
    }, []);

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
        }, 50);
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
        }, 50);
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
        emblaApi.on("slidesInView", updateSlidesInView);
        emblaApi.on("reInit", updateSlidesInView);

        // Initial check
        updateSlidesInView(emblaApi);

        // Also listen to scroll for continuous updates
        emblaApi.on("scroll", updateSlidesInView);

        return () => {
            emblaApi.off("settle", onSettle);
            emblaApi.off("slidesInView", updateSlidesInView);
            emblaApi.off("reInit", updateSlidesInView);
            emblaApi.off("scroll", updateSlidesInView);
        };
    }, [emblaApi, updateSlidesInView]);

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
                            const isInView = slidesInView.includes(index);

                            return (
                                <div
                                    key={index}
                                    className={`relative flex-[0_0_85%] md:flex-[0_0_600px] pr-4 md:pr-8 h-[250px] md:h-[360px] rounded-2xl transition-all duration-300 ease-out cursor-pointer ${isInView
                                            ? "scale-100 opacity-100"
                                            : "scale-[0.97] opacity-60"
                                        }`}
                                    onClick={() => {
                                        window.open(project.link, "_blank");
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

                                            {isInView && (
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