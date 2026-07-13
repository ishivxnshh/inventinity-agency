import "./ProjectCarousel.css";
import { ExternalLink } from "lucide-react";

const PROJECT_METADATA:
    Record<string, { title: string; category: string; link: string }> = {

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
        title: "MediConnect",
        category: "HealthTech / AI Platform",
        link: "https://mediconnect-v1.vercel.app/",
    },
    "work5.png": {
        title: "Trynex",
        category: "AI Fashion / Virtual Try-On",
        link: "https://trynex.vercel.app",
    },
    "work6.png": {
        title: "NISM Smart Prep",
        category: "EdTech / SaaS Platform",
        link: "https://www.nismsmartprep.in/",
    },
    "work7.png": {
        title: "DC Link Technologies",
        category: "Corporate / Manufacturing",
        link: "https://dclink.in/",
    },
    "work8.png": {
        title: "ABCDesign Marketing Agency",
        category: "Marketing / Agency Website",
        link: "https://marketing.abcdesign.co.in/"
    },
    "work9.png": {
        title: "Qaidyn Partners – Fully Custom CMS",
        category: "Content Management System / Corporate Platform",
        link: "https://qaidyn.com"
    },
    "work10.png": {
        title: "Niva Ecotech",
        category: "Solar / Sustainability / Corporate",
        link: "https://nivaecotech.com"
    },
    "work11.png": {
        title: "Viramah",
        category: "Co-living / Co-working Community",
        link: "https://viramahstay.com"
    },
    "work12.png": {
        title: "Kanakgrih",
        category: "Personal Finance / Wealth Management",
        link: "https://kanakgrih.com"
    },
    "work13.png": {
        title: "Bastard",
        category: "Fashion / E-commerce",
        link: "https://bastard.fun"
    },
    "work14.png": {
        title: "Contrasys",
        category: "ERP / Garment Manufacturing",
        link: "https://contrasys-software-for-garment-manu.vercel.app/"
    },
    "work15.png": {
        title: "Gama LED",
        category: "LED Displays / Corporate",
        link: "https://gamaled.co.in"
    },
    "work16.png": {
        title: "Creative Advertising",
        category: "Marketing / Agency",
        link: "https://creative-advertising-vhrj.vercel.app"
    }
};

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
        const meta = PROJECT_METADATA[filename] ?? {
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