import { LucideIcon } from "lucide-react";
import "./StackingCards.css";

interface CardItem {
    title: string;
    description?: string;
    icon?: LucideIcon;
}

interface StackingCardsProps {
    items: CardItem[];
}

export const StackingCards = ({ items }: StackingCardsProps) => {
    return (
        <div className="stack-container overflow-x-visible px-4 md:px-10">
            {items.map((item, index) => (
                <div key={index} className="stack-card group cursor-default">
                    <h3 className="stack-title">{item.title}</h3>

                    <div className="stack-bar">
                        <div className="stack-filledbar"></div>
                    </div>

                    <div className="stack-content">
                        <p>{item.description}</p>
                    </div>

                    {/* Icon Circle */}
                    <div className="stack-circle-container">
                        <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                            {/* Background Circle */}
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-muted opacity-30"
                            />
                            {/* Animated Stroke */}
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                pathLength="1"
                                strokeDasharray="1"
                                strokeDashoffset="1"
                                className="stack-stroke text-primary transition-all duration-700 ease-in-out group-hover:stroke-dashoffset-0"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-primary">
                            {item.icon && <item.icon className="w-6 h-6" />}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
