import "./ProjectCarousel.css";
import { ExternalLink } from "lucide-react";
import projectsData from "@/assets/projects.json";

interface Project {
    image: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
    // Prepare items with metadata
    const items = projects.map((p) => {
        const filename = p.image.split("/").pop() ?? "";
        const meta = projectsData.find((d) => d.imageName === filename) ?? {
            title: "Digital Product",
            category: "Web / AI",
            link: "#",
        };
        return { ...p, ...meta };
    });

    const totalItems = items.length;

    return (
        <div className="w-full py-14 overflow-hidden">
            <div className="max-w-full mx-auto relative">
                {/* Header */}
                <div className="text-center mb-12 px-6 relative z-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        Engineering
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        Our Work
                    </h2>
                </div>

                {/* CSS Marquee Carousel */}
                <div
                    className="carousel"
                    style={{
                        "--items": totalItems,
                    } as React.CSSProperties}
                >
                    {items.map((project, index) => (
                        <div
                            key={index}
                            className="carousel-item"
                            style={{
                                "--i": index,
                            } as React.CSSProperties}
                            onClick={() => window.open(project.link, "_blank")}
                        >
                            <div className="w-full h-full rounded-2xl overflow-hidden border border-primary/20 bg-background/50 relative group cursor-pointer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left transform transition-transform duration-300">
                                    <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-2">
                                        {project.category}
                                    </p>
                                    <h3 className="text-2xl font-display font-bold mb-1">
                                        {project.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-sm text-primary/90 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View Project <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};