import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WorkShowcase } from "@/components/WorkShowcase";
import { CustomCursor } from "@/components/ui/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";

const Portfolio = () => {
    const portfolioProjects = [
        {
            title: "The Angaar Batch",
            description: "EdTech / Community platform",
            tags: ["Web", "EdTech"],
            image: "/projects/work0.png",
            link: "https://theangaarbatch.in/",
        },
        {
            title: "Chef Dhundho",
            description: "Marketplace for hiring chefs",
            tags: ["Web", "Marketplace"],
            image: "/projects/work1.png",
            link: "https://chefdhundho.com",
        },
        {
            title: "Shrinidhi Capital",
            description: "Finance & research platform",
            tags: ["Web", "Finance"],
            image: "/projects/work2.png",
            link: "https://shrinidhicapital.com",
        },
        {
            title: "GenZDealZ.ai",
            description: "AI-powered e-commerce deals",
            tags: ["AI", "Web"],
            image: "/projects/work3.png",
            link: "https://genzdealz.ai",
        },
        {
            title: "MediConnect",
            description: "AI-powered virtual healthcare platform",
            tags: ["AI", "HealthTech", "Web"],
            image: "/projects/work4.png",
            link: "https://mediconnect-v1.vercel.app/",
        },
        {
            title: "Trynex",
            description: "AI fashion virtual try-on",
            tags: ["AI", "Web"],
            image: "/projects/work5.png",
            link: "https://trynex.vercel.app",
        },
        {
            title: "NISM Smart Prep",
            description: "NISM exam preparation & quiz platform",
            tags: ["EdTech", "SaaS", "Web"],
            image: "/projects/work6.png",
            link: "https://www.nismsmartprep.in/",
        },
        {
            title: "DC Link Technologies",
            description: "Corporate website for solar product manufacturer",
            tags: ["Corporate", "Manufacturing", "Web"],
            image: "/projects/work7.png",
            link: "https://dclink.in/",
        },
        {
            title: "ABCDesign Marketing Agency",
            description: "Marketing & Agency Website",
            tags: ["Marketing", "Web"],
            image: "/projects/work8.png",
            link: "https://marketing.abcdesign.co.in/",
        },
        {
            title: "Qaidyn Partners – Fully Custom CMS",
            description: "Content Management System & Corporate Platform",
            tags: ["CMS", "Corporate", "Web"],
            image: "/projects/work9.png",
            link: "https://qaidyn.com",
        },
        {
            title: "Niva Ecotech",
            description: "Solar & Sustainability Solutions",
            tags: ["Solar", "Corporate", "Web"],
            image: "/projects/work10.png",
            link: "https://nivaecotech.com",
        },
        {
            title: "Viramah",
            description: "Co-living & Co-working Community Platform",
            tags: ["Corporate", "Community", "Web"],
            image: "/projects/work11.png",
            link: "https://viramahstay.com",
        },
        {
            title: "Kanakgrih",
            description: "Personal Finance & Wealth Management Platform",
            tags: ["Finance", "Web"],
            image: "/projects/work12.png",
            link: "https://kanakgrih.com",
        },
        {
            title: "Bastard",
            description: "Designer Oversized Hoodies & Fits E-commerce",
            tags: ["Marketplace", "Fashion", "Web"],
            image: "/projects/work13.png",
            link: "https://bastard.fun",
        }
    ].reverse();

    return (
        <div className="min-h-screen bg-background relative cursor-none">
            <CustomCursor />
            <ScrollProgress />
            <div className="bg-noise"></div>
            <Navbar />

            <main className="pt-24 pb-16">
                <WorkShowcase projects={portfolioProjects} />
            </main>

            <Footer />
        </div>
    );
};

export default Portfolio;
