
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/MagneticButton";
import { ArrowRight, X } from "lucide-react";
import { toast } from "sonner";

export function ContactPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        budget: "",
        projectType: "",
        message: "",
    });

    // Check conditions and trigger popup
    // Check conditions and trigger popup
    useEffect(() => {
        // Debug logging
        console.log("Popup Logic Mounted");

        // 1. Check if already shown/dismissed in this session
        const alreadyShown = sessionStorage.getItem("popupInteractionComplete");
        if (alreadyShown) {
            console.log("Popup blocked: already shown/dismissed");
            return;
        }

        // 2. Check if user navigated internally
        const isInternal = sessionStorage.getItem("isInternalNav");
        if (isInternal) {
            console.log("Popup blocked: internal navigation detected");
            return;
        }

        let timer: NodeJS.Timeout;

        // Trigger 1: Timer (20 seconds)
        console.log("Popup timer started");
        timer = setTimeout(() => {
            console.log("Popup triggered by timer");
            openPopup();
        }, 20000);

        // Trigger 2: Scroll (35%)
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;

            if (scrollPercent > 0.35) {
                console.log("Popup triggered by scroll");
                openPopup();
            }
        };

        window.addEventListener("scroll", handleScroll);

        function openPopup() {
            // Check keys again just in case
            if (!sessionStorage.getItem("popupInteractionComplete") && !sessionStorage.getItem("isInternalNav")) {
                setIsOpen(true);
            }
            // Cleanup once triggered
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        }

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // MARK: - Event Handlers

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        // If user closes it (via ESC, backdrop click, or X), mark as seen
        if (!open) {
            console.log("Popup closed by user interaction");
            sessionStorage.setItem("popupInteractionComplete", "true");
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Mimic the main contact form submission
            const response = await fetch("https://formspree.io/f/xgvggdgg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Message sent successfully!", {
                    description: "We'll get back to you within 24 hours.",
                });
                setIsOpen(false);
                // Explicitly mark as complete on success
                sessionStorage.setItem("popupInteractionComplete", "true");

                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    budget: "",
                    projectType: "",
                    message: "",
                });
            } else {
                toast.error("Failed to send message.", {
                    description: "Please try again or contact us directly.",
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Something went wrong.", {
                description: "Please check your connection and try again.",
            });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent
                className="w-[95vw] sm:max-w-[600px] max-h-[90dvh] overflow-y-auto border-white/10 bg-background/95 backdrop-blur-xl p-0 gap-0 shadow-2xl rounded-xl"
                onInteractOutside={(e) => {
                    // Optional: if we want to force interaction, prevent closing. 
                    // But instructions say "Close via: Close icon, ESC key".
                    // Dialog default behavior covers ESC and outside click.
                    // We'll allow output click to close.
                }}
            >
                <div className="relative p-6 sm:p-8">
                    {/* Background noise/texture opacity check */}
                    <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none z-0"></div>

                    <div className="relative z-10">
                        <DialogHeader className="mb-6 text-left">
                            <DialogTitle className="text-3xl font-display font-bold">Let's Build Something Amazing</DialogTitle>
                            <DialogDescription className="text-base text-muted-foreground mt-2">
                                Tell us about your project and we’ll get back to you within 24 hours.
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="popup-name" className="text-xs uppercase tracking-wider text-muted-foreground">Name *</Label>
                                    <Input
                                        id="popup-name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="bg-secondary/40 border-white/5 focus:border-primary/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="popup-email" className="text-xs uppercase tracking-wider text-muted-foreground">Email *</Label>
                                    <Input
                                        id="popup-email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="bg-secondary/40 border-white/5 focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="popup-company" className="text-xs uppercase tracking-wider text-muted-foreground">Company</Label>
                                    <Input
                                        id="popup-company"
                                        placeholder="Acme Inc."
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="bg-secondary/40 border-white/5 focus:border-primary/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="popup-budget" className="text-xs uppercase tracking-wider text-muted-foreground">Budget Range</Label>
                                    <Input
                                        id="popup-budget"
                                        placeholder="$5k - $10k"
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="bg-secondary/40 border-white/5 focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="popup-projectType" className="text-xs uppercase tracking-wider text-muted-foreground">Project Type</Label>
                                <Input
                                    id="popup-projectType"
                                    placeholder="Website, Mobile App, AI Solution, etc."
                                    value={formData.projectType}
                                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                    className="bg-secondary/40 border-white/5 focus:border-primary/50 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="popup-message" className="text-xs uppercase tracking-wider text-muted-foreground">Message *</Label>
                                <Textarea
                                    id="popup-message"
                                    placeholder="How can we help you?"
                                    rows={3}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="bg-secondary/40 border-white/5 focus:border-primary/50 transition-colors resize-none"
                                />
                            </div>

                            <div className="pt-2">
                                <MagneticButton
                                    type="submit"
                                    variant="hero"
                                    size="lg"
                                    className="w-full cursor-pointer group"
                                >
                                    <span className="flex items-center justify-center font-semibold">
                                        Send Message
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </MagneticButton>
                                <p className="text-center text-xs text-muted-foreground mt-3">
                                    No spam. One-time conversation.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
