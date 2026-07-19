import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface Project {
    image: string;
    title?: string;
    description?: string;
    tags?: string[];
    link?: string;
}

interface ProjectMeta {
    title: string;
    category: string;
    link: string;
    tags: string[];
}

const PROJECT_METADATA: Record<string, ProjectMeta> = {
    "work0.png": {
        title: "The Angaar Batch",
        category: "EdTech / Community",
        link: "https://theangaarbatch.in/",
        tags: ["Web", "EdTech"],
    },
    "work1.png": {
        title: "Chef Dhundho",
        category: "Marketplace / Hiring",
        link: "https://chefdhundho.com",
        tags: ["Web", "Marketplace"],
    },
    "work2.png": {
        title: "Shrinidhi Capital",
        category: "Finance / Research",
        link: "https://shrinidhicapital.com",
        tags: ["Web", "Finance"],
    },
    "work3.png": {
        title: "GenZDealZ.ai",
        category: "AI E-commerce / Deals",
        link: "https://genzdealz.ai",
        tags: ["AI", "Web"],
    },
    "work4.png": {
        title: "MediConnect",
        category: "HealthTech / AI Platform",
        link: "https://mediconnect-v1.vercel.app/",
        tags: ["AI", "HealthTech", "Web"],
    },
    "work5.png": {
        title: "Trynex",
        category: "AI Fashion / Virtual Try-On",
        link: "https://trynex.vercel.app",
        tags: ["AI", "Web"],
    },
    "work6.png": {
        title: "NISM Smart Prep",
        category: "EdTech / SaaS Platform",
        link: "https://www.nismsmartprep.in/",
        tags: ["EdTech", "SaaS", "Web"],
    },
    "work7.png": {
        title: "DC Link Technologies",
        category: "Corporate / Manufacturing",
        link: "https://dclink.in/",
        tags: ["Solar", "Corporate", "Manufacturing", "Web"],
    },
    "work8.png": {
        title: "ABCDesign Marketing Agency",
        category: "Marketing / Agency",
        link: "https://marketing.abcdesign.co.in/",
        tags: ["Marketing", "Web"],
    },
    "work9.png": {
        title: "Qaidyn Partners – Custom CMS",
        category: "CMS / Corporate Platform",
        link: "https://qaidyn.com",
        tags: ["CMS", "Corporate", "Web"],
    },
    "work10.png": {
        title: "Niva Ecotech",
        category: "Solar / Sustainability",
        link: "https://nivaecotech.com",
        tags: ["Solar", "Corporate", "Web"],
    },
    "work11.png": {
        title: "Viramah",
        category: "Co-living / Co-working Community",
        link: "https://viramahstay.com",
        tags: ["Corporate", "Community", "Web"],
    },
    "work12.png": {
        title: "Kanakgrih",
        category: "Personal Finance / Wealth Management",
        link: "https://kanakgrih.com",
        tags: ["Finance", "Web"],
    },
    "work13.png": {
        title: "Bastard",
        category: "Fashion / E-commerce",
        link: "https://bastard.fun",
        tags: ["Marketplace", "Fashion", "Web"],
    },
    "work14.png": {
        title: "Contrasys",
        category: "ERP / Garment Manufacturing",
        link: "https://contrasys-software-for-garment-manu.vercel.app/",
        tags: ["ERP", "Manufacturing", "Web"],
    },
    "work15.png": {
        title: "Gama LED",
        category: "LED Displays / Corporate",
        link: "https://gamaled.co.in",
        tags: ["Corporate", "Manufacturing", "Web"],
    },
    "work16.png": {
        title: "Creative Advertising",
        category: "Marketing / Agency",
        link: "https://creative-advertising-vhrj.vercel.app",
        tags: ["Marketing", "Corporate", "Web"],
    },
};

const ALL_TAGS = ["All", "Corporate", "AI", "Manufacturing", "Finance", "Marketplace", "Solar"];

interface WorkShowcaseProps {
    projects: Project[];
}

export const WorkShowcase = ({ projects }: WorkShowcaseProps) => {
    const [activeFilter, setActiveFilter] = useState("All");

    const enriched = projects.map((p, i) => {
        const filename = p.image.split("/").pop() ?? "";
        const meta = PROJECT_METADATA[filename] ?? {
            title: p.title ?? "Digital Product",
            category: p.description ?? "Web / AI",
            link: p.link ?? "#",
            tags: p.tags ?? ["Web"],
        };
        return { ...p, ...meta, idx: i };
    });

    const filtered =
        activeFilter === "All"
            ? enriched
            : enriched.filter((p) => p.tags.includes(activeFilter));

    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.07 } },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 28, scale: 0.97 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
    };

    return (
        <div className="w-full py-20">
            {/* Header */}
            <div className="text-center mb-10 px-6">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-3"
                >
                    Selected Projects
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl font-display font-bold text-foreground tracking-tight"
                >
                    Our{" "}
                    <span className="relative inline-block">
                        Work
                        <svg
                            className="absolute w-full h-2 -bottom-1 left-0 text-primary/30"
                            viewBox="0 0 100 8"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 4 Q 50 8 100 4"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto"
                >
                    {enriched.length}+ live products across industries — from AI platforms to
                    enterprise dashboards.
                </motion.p>
            </div>

            {/* Filter Pills */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex overflow-x-auto justify-start md:justify-center gap-2 mb-12 px-4 pb-4 whitespace-nowrap no-scrollbar w-full max-w-full"
            >
                {ALL_TAGS.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveFilter(tag)}
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                            activeFilter === tag
                                ? "bg-foreground text-background border-foreground shadow-lg scale-105"
                                : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </motion.div>

            {/* Bento Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeFilter}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {filtered.map((project, index) => {
                            return (
                                <motion.a
                                    key={project.image + activeFilter}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    layout
                                    className="group relative overflow-hidden rounded-2xl cursor-pointer block aspect-video"
                                >
                                    {/* Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                                    />

                                    {/* Base gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                                    {/* Hover shimmer */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Category badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-white/80 border border-white/15 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Arrow icon top-right on hover */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                        <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>

                                    {/* Bottom info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 transform">
                                        {/* Tags */}
                                        <div className="flex gap-1.5 mb-2 flex-wrap">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[9px] font-bold uppercase tracking-wider text-white/50"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3
                                            className="font-display font-bold text-white leading-tight transition-all duration-300 text-xl"
                                        >
                                            {project.title}
                                        </h3>

                                        {/* View link */}
                                        <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-white/0 group-hover:text-white/90 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                            Visit live site
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </div>
                                    </div>

                                    {/* Number tag */}
                                    <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-[10px] font-mono text-white/30">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-24 text-muted-foreground"
                    >
                        <p className="text-lg">No projects in this category yet.</p>
                    </motion.div>
                )}

                {/* Footer count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 text-center"
                >
                    <p className="text-muted-foreground text-sm">
                        Showing{" "}
                        <span className="text-foreground font-semibold">{filtered.length}</span>{" "}
                        of{" "}
                        <span className="text-foreground font-semibold">{enriched.length}</span>{" "}
                        projects
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
