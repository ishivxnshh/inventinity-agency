"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { GlowCard } from "@/components/GlowCard";
import { StackingCards } from "@/components/StackingCards";
import { WorkShowcase } from "@/components/WorkShowcase";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MagneticButton } from "@/components/MagneticButton";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ProcessSection } from "@/components/ProcessSection";
import { Scene } from "@/components/ui/Scene";
import { TextReveal } from "@/components/ui/TextReveal";
import { CustomCursor } from "@/components/ui/Cursor";
import { ContactPopup } from "@/components/ContactPopup";

import {
  CodeXml,
  Smartphone,
  Sparkles,
  Video,
  Palette,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Star,
  Linkedin,
  Zap,
  Clock,
  Users,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Landing = () => {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectType: "",
    message: "",
  });

  const services = [
    {
      icon: CodeXml,
      title: "Website Development",
      description: "Stunning, responsive websites built with modern frameworks and best practices.",
      deliverables: ["Custom design", "SEO optimization", "CMS integration"],
      color: "accent",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that users love.",
      deliverables: ["iOS & Android", "Cloud integration", "Push notifications"],
      color: "accent",
    },
    {
      icon: Sparkles,
      title: "AI Integration & Products",
      description: "Cutting-edge AI solutions that add real value to your business.",
      deliverables: ["AI chatbots", "Automation", "Custom AI tools"],
      color: "accent",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing and post-production services.",
      deliverables: ["Motion graphics", "Color grading", "Sound design"],
      color: "accent",
    },
    {
      icon: Palette,
      title: "Graphic Design & Branding",
      description: "Memorable brand identities and stunning visual designs.",
      deliverables: ["Logo design", "Brand kits", "Marketing materials"],
      color: "accent",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that drive real growth.",
      deliverables: ["SEO & SEM", "Social media", "Performance ads"],
      color: "accent",
    },
  ];

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
      tags: ["Solar", "Corporate", "Manufacturing", "Web"],
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
    },
    {
      title: "Contrasys",
      description: "ERP Software for Garment Manufacturing",
      tags: ["ERP", "Manufacturing", "Web"],
      image: "/projects/work14.png",
      link: "https://contrasys-software-for-garment-manu.vercel.app/",
    },
    {
      title: "Gama LED",
      description: "LED Displays & Visual Solutions",
      tags: ["Corporate", "Manufacturing", "Web"],
      image: "/projects/work15.png",
      link: "https://gamaled.co.in",
    },
    {
      title: "Creative Advertising",
      description: "Creative Advertising Agency Website",
      tags: ["Marketing", "Corporate", "Web"],
      image: "/projects/work16.png",
      link: "https://creative-advertising-vhrj.vercel.app",
    }
  ];

  const teamMembers = [
    {
      name: "Shivansh Mittal",
      role: "Founder & Lead Engineer",
      bio: "Full-stack developer passionate about AI and modern web tech",
      linkedin: "https://linkedin.com/in/ishivxnshh",
    },
    {
      name: "Shivam Mishra",
      role: "Marketing Lead",
      bio: "Strategic growth specialist driving digital marketing success",
      linkedin: "#",
    },
    {
      name: "Shaurya Manoj",
      role: "Video Editor",
      bio: "Crafting compelling visual stories through motion and editing",
      linkedin: "#",
    },
    {
      name: "Shivansh Narain",
      role: "Graphic Designer",
      bio: "Creating stunning visual experiences that captivate audiences",
      linkedin: "#",
    },
  ];

  const whyChooseUs = [
    {
      title: "Full-Stack Tech + Creative",
      description: "One team for all your digital needs",
    },
    {
      title: "AI-Native Approach",
      description: "We integrate AI where it actually adds value",
    },
    {
      title: "Competitive Pricing",
      description: "Quality work without breaking the bank",
    },
    {
      title: "Fast Execution",
      description: "Rapid iteration and transparent communication",
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mrenkpqo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          projectType: "",
          message: "",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Formspree error:", errorData);
        toast.error("Failed to send message.", {
          description: "Please try again or contact us directly."
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong.", {
        description: "Please check your connection and try again."
      });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 cursor-none">
      <ScrollProgress />
      <FloatingActionButton onOpenChange={setIsFabOpen} />
      <div className="bg-noise"></div>
      <Navbar />

      {/* --- HERO SECTION WITH 3D SCENE --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 bg-background overflow-hidden">
        {/* The 3D Background */}
        <Scene />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <Badge variant="outline" className="mb-8 px-4 py-2 border-white/10 bg-white/5 backdrop-blur-md">
                <Zap className="w-3 h-3 mr-2 text-primary" /> Full-Stack Digital Agency
              </Badge>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-foreground">
              <span className="block">We Build Scalable</span>
              <span className="text-primary relative inline-block">
                Digital Products
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none"></path>
                </svg>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="flex flex-col gap-4 mb-12"
            >
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Sit Back. Feel Sululu. Bring Your Vision to Life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <MagneticButton
                size="lg"
                variant="hero"
                onClick={() => scrollToSection("contact")}
                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base shadow-lg shadow-primary/20 glow-primary font-semibold transition-all hover:scale-105 rounded-md"
              >
                <span className="relative z-10 flex items-center">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </MagneticButton>

              <MagneticButton
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="border-2 bg-transparent text-foreground hover:border-primary rounded-md h-12 px-8 text-base border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300 font-medium"
              >
                View Selected Work
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-white/10 pt-12"
            >
              <AnimatedCounter end={50} suffix="+" label="Projects" />
              <AnimatedCounter end={98} suffix="%" label="Satisfaction" />
              <AnimatedCounter end={24} suffix="h" label="Support" />
              <AnimatedCounter end={15} suffix="+" label="Experts" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose <span className="text-primary">Sululu Labs</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard delay={index * 0.1} glowColor={index === 1 ? "accent" : "primary"} className="hover-lift cursor-pointer">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      {index === 0 && <Users className="w-6 h-6 text-primary" />}
                      {index === 1 && <Sparkles className="w-6 h-6 text-primary" />}
                      {index === 2 && <Trophy className="w-6 h-6 text-primary" />}
                      {index === 3 && <Clock className="w-6 h-6 text-primary" />}
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gradient-mesh relative overflow-hidden scroll-mt-24">
        <ParallaxSection offset={30}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12 md:mb-16"
            >
              <Badge variant="section" className="mb-4">
                What We Do
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your needs
              </p>
            </motion.div>

            <div className="flex justify-center mt-12 mb-20">
              <StackingCards items={services} />
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* AI Integration Highlight */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-spotlight"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 md:mb-16"
          >
            <Badge variant="section" className="mb-4">
              ✨ AI-Powered Solutions
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              AI Integration & Development
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build AI solutions that actually solve problems and drive business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI Chatbots for Business",
                description:
                  "Intelligent conversational AI that handles customer support, lead qualification, and FAQs 24/7.",
                icon: Sparkles,
              },
              {
                title: "AI-Powered Automation",
                description:
                  "Custom workflows and automations that save time and reduce manual errors.",
                icon: CodeXml,
              },
              {
                title: "AI-Enhanced Dashboards",
                description:
                  "Internal tools with AI insights, predictive analytics, and smart recommendations.",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlowCard delay={index * 0.1} glowColor="accent" className="hover-lift spotlight cursor-pointer">
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-gradient-mesh">
        <WorkShowcase projects={portfolioProjects} />
      </section>

      {/* About & Team Section */}
      <section id="about" className="py-16 md:py-24 bg-gradient-mesh relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Sululu Labs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a full-stack digital agency that believes in end-to-end execution.
              From initial concept to final launch, we handle every aspect of your digital presence.
              Our AI-first mindset and competitive pricing make us the perfect partner for
              startups and growing businesses.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="mt-20">
            <motion.h3
              className="font-display text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Meet the <span className="text-primary">Team</span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <GlowCard key={member.name} delay={index * 0.1} className="text-center">
                  <div className="p-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/40">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                          <span className="text-3xl font-bold text-primary">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      {index === 0 && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-foreground" />
                        </div>
                      )}
                    </div>

                    <h4 className="font-display font-semibold text-lg mb-1">
                      {member.name}
                    </h4>

                    <p className="text-sm text-primary mb-3">{member.role}</p>

                    <p className="text-sm text-muted-foreground mb-4">
                      {member.bio}
                    </p>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect
                    </a>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 md:mb-16"
          >
            <Badge variant="section" className="mb-4">
              Transparent Pricing
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Flexible Plans for Every Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Value over vanity. We care about ROI, not just aesthetics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tier: "Starter",
                description: "Perfect for small projects and MVPs",
                features: ["Single service focus", "2-week turnaround", "Basic support", "1 revision round"],
                popular: false,
              },
              {
                tier: "Growth",
                description: "For growing businesses",
                features: ["Multi-service packages", "Priority support", "Unlimited revisions", "Ongoing optimization"],
                popular: true,
              },
              {
                tier: "Scale",
                description: "Enterprise solutions",
                features: ["End-to-end execution", "Dedicated team", "24/7 support", "Custom SLAs"],
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <GlowCard
                  delay={index * 0.1}
                  glowColor={plan.popular ? "accent" : "primary"}
                  className={`h-full hover-lift spotlight ${plan.popular ? "ring-2 ring-accent/50" : ""}`}
                >
                  <div className="p-8 pt-12 relative">
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="font-display text-2xl font-bold mb-2">{plan.tier}</h3>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      className="w-full"
                      onClick={() => scrollToSection("contact")}
                    >
                      Get Quote
                    </Button>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative bg-gradient-mesh overflow-hidden scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your project? Get in touch with us.
            </p>
          </motion.div>

          <Card className="glass-strong p-8 rounded-2xl border border-white/10">
            <CardContent className="p-0">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-secondary/50 border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-secondary/50 border-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="bg-secondary/50 border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Input
                      id="budget"
                      placeholder="$5k - $10k"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="bg-secondary/50 border-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Input
                    id="projectType"
                    placeholder="Website, Mobile App, AI Solution, etc."
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="bg-secondary/50 border-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="bg-secondary/50 border-primary/20 resize-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full cursor-pointer"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <ArrowRight className="ml-2" />
                  </span>
                </MagneticButton>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-center space-y-3">
                  <p className="text-muted-foreground">Or reach us directly</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="mailto:shivanshmittalsde@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      shivanshmittalsde@gmail.com
                    </a>
                    <span className="hidden sm:inline text-muted-foreground">•</span>
                    <a
                      href="tel:+917452862988"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +91 74528 62988
                    </a>
                  </div>

                  <Button variant="accent" size="lg" className="mt-4">
                    Book a Discovery Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactPopup />
      <Footer />
    </div>
  );
};

export default Landing;
