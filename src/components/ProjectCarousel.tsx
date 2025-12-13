import { useState } from "react";
import "./ProjectCarousel.css";

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
}

interface ProjectCarouselProps {
    projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
    // Rotation state in degrees
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startRotation, setStartRotation] = useState(0);

    const cellCount = projects.length;
    // Radius matches CSS logic (visually tuned in previous steps)
    const radius = 250;
    const angleStep = 360 / cellCount;

    // --- Drag Handlers ---
    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        setStartRotation(rotation);
        // Optional: stop any momentum or auto-spin if implemented later
    };

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const delta = clientX - startX;

        // Sensitivity: 0.5 degrees per pixel dragged
        const newRotation = startRotation + delta * 0.5;
        setRotation(newRotation);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="carousel-scene relative h-[400px] cursor-grab active:cursor-grabbing touch-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
        >
            <div
                className="carousel-bowl"
                style={{
                    // Dynamic rotation controlled by React state
                    // Fixed tilt of 8deg to match previous design
                    transform: `rotateX(8deg) rotateY(${rotation}deg)`
                }}
            >
                {projects.map((project, index) => {
                    const angle = angleStep * index;
                    const cellStyle: React.CSSProperties = {
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    };

                    return (
                        <div
                            key={index}
                            className="carousel-cell group"
                            style={cellStyle}
                            /* Prevent image dragging interfering with carousel drag */
                            onDragStart={(e) => e.preventDefault()}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="carousel-img pointer-events-none"
                            />

                            <div className="carousel-overlay pointer-events-none">
                                <h3 className="font-display font-bold text-lg text-foreground drop-shadow-sm mb-1">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-1.5 py-0.5 text-[10px] font-semibold bg-primary/10 text-primary rounded-md border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
