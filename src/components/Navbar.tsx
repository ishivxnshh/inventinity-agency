import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Menu,
  X,
  Sparkles,
  ChevronDown,
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Server,
  Video,
  Palette,
  TrendingUp,
  ChevronRight,
  Layers,
  Film,
  User,
  Phone
} from "lucide-react";

interface ServiceItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

interface ServiceCategory {
  label: string;
  items: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    label: "Tech Services",
    items: [
      {
        name: "Web Development",
        description: "Custom websites & web applications",
        icon: <Globe className="w-5 h-5" />,
        href: "#services"
      },
      {
        name: "Mobile App Development",
        description: "iOS & Android native apps",
        icon: <Smartphone className="w-5 h-5" />,
        href: "#services"
      },
      {
        name: "AI Solutions & Integrations",
        description: "Smart automation & AI products",
        icon: <Brain className="w-5 h-5" />,
        href: "#services"
      },
      {
        name: "Cloud Services",
        description: "Scalable cloud infrastructure",
        icon: <Cloud className="w-5 h-5" />,
        href: "#services"
      },
      {
        name: "Hosting & Deployment",
        description: "Reliable hosting solutions",
        icon: <Server className="w-5 h-5" />,
        href: "#services"
      },
    ]
  },
  {
    label: "Creative & Growth",
    items: [
      {
        name: "Video Editing",
        description: "Professional video production",
        icon: <Video className="w-5 h-5" />,
        href: "/videos"
      },
      {
        name: "Graphic Designing",
        description: "Brand identity & visuals",
        icon: <Palette className="w-5 h-5" />,
        href: "#services"
      },
      {
        name: "Digital Marketing",
        description: "SEO, ads & growth strategies",
        icon: <TrendingUp className="w-5 h-5" />,
        href: "#services"
      },
    ]
  }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsServicesOpen(false);
    if (isServicesOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isServicesOpen]);

  const navLinks = [
    { name: "Services", href: "#services", hasDropdown: true, icon: <Sparkles className="w-4 h-4" /> },
    { name: "Portfolio", href: "#portfolio", icon: <Layers className="w-4 h-4" /> },
    { name: "Videos", href: "/videos", isRoute: true, icon: <Film className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Phone className="w-4 h-4" /> },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth"
          });
        }
      }, 100);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  const handleServiceClick = (href: string) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);

    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      scrollToSection(href);
    }
  };

  const isActiveService = (href: string) => {
    if (href.startsWith("/")) {
      return location.pathname === href;
    }
    return location.pathname === "/" && location.hash === href;
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className={`transition-all duration-300 ${isScrolled ? "md:scale-95 md:translate-y-2" : ""}`}>
        <div className="bg-background/80 backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-2xl rounded-full px-4 md:px-6 py-3 flex items-center gap-8 md:gap-12">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 text-primary"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96 12 12.01l8.73-5.05" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22.08V12" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden md:block">Inventinity</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-full p-1 border border-white/5">
            {navLinks.map((link) => {
              const isActive = link.isRoute
                ? location.pathname === link.href
                : (location.pathname === "/" && location.hash === link.href);

              return (
                <div key={link.name} className="relative group/nav">
                  {link.hasDropdown ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsServicesOpen(!isServicesOpen);
                      }}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isServicesOpen ? "bg-background text-primary shadow-[0_0_15px_rgba(var(--primary),0.2)]" : "hover:text-primary hover:bg-background/50 text-muted-foreground"}`}
                    >
                      {link.icon}
                      {link.name}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <button
                      onClick={() => link.isRoute ? navigate(link.href) : scrollToSection(link.href)}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${isActive ? "bg-background text-foreground shadow-[0_0_20px_rgba(var(--primary),0.15)] ring-1 ring-primary/10" : "hover:text-primary hover:bg-background/50 text-muted-foreground"}`}
                    >
                      {link.icon}
                      {link.name}
                      {/* LED Dot for active state */}
                      {isActive && (
                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]"></span>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Buttons - Compact */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div onClick={() => scrollToSection("#contact")} className="hidden md:block cursor-pointer">
              <Button size="sm" className="rounded-full px-5 bg-foreground text-background hover:bg-foreground/90 font-medium h-9">
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Services Mega Menu - Enterprise Style */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="hidden md:block absolute top-full left-0 w-full border-b border-border/10 bg-background shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-8">
              {serviceCategories.map((category) => (
                <div key={category.label} className="col-span-1 space-y-4">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">{category.label}</h3>
                  <div className="space-y-2">
                    {category.items.map((service) => (
                      <button
                        key={service.name}
                        onClick={() => handleServiceClick(service.href)}
                        className="group flex items-start gap-3 w-full p-2 -mx-2 rounded-md hover:bg-secondary/50 transition-colors text-left"
                      >
                        <div className="mt-1 text-muted-foreground group-hover:text-primary transition-colors">
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground group-hover:text-primary">{service.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{service.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="col-span-2 bg-secondary/30 rounded-lg p-6 flex flex-col justify-center">
                <h4 className="text-lg font-bold text-primary mb-2">Enterprise Solutions</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover how our full-stack agency can transform your digital presence with enterprise-grade security and scalability.
                </p>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-sm font-semibold text-primary flex items-center gap-2 hover:underline"
                >
                  Get a Custom Quote <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[calc(100%-2rem)] max-w-md rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2 max-h-[75vh] overflow-y-auto">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name} className="space-y-2">
                    <div className="text-sm font-medium text-foreground py-3 border-b border-border/10">
                      {link.name}
                    </div>
                    <div className="pl-4 flex flex-col gap-2">
                      {serviceCategories.map(cat => (
                        <div key={cat.label} className="space-y-1">
                          <div className="text-xs font-semibold text-muted-foreground pt-2 pb-1 uppercase tracking-wider">
                            {cat.label}
                          </div>
                          {cat.items.map(item => (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => handleServiceClick(item.href)}
                              className="block w-full text-left text-sm text-foreground/80 hover:text-primary py-2 transition-colors"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => link.isRoute ? navigate(link.href) : scrollToSection(link.href)}
                    className="block w-full text-left text-sm font-medium text-foreground py-3 hover:text-primary transition-colors border-b border-border/10 last:border-0"
                  >
                    {link.name}
                  </button>
                )
              ))}
              <div className="pt-4 mt-2 border-t border-border/10 flex flex-col gap-4">
                <div className="flex items-center justify-between py-1">
                  <span className="text-sm font-medium text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>

                <div 
                  onClick={() => scrollToSection("#contact")} 
                  className="w-full cursor-pointer"
                >
                  <Button type="button" className="w-full bg-primary text-primary-foreground rounded-xl py-6 text-base font-semibold shadow-lg hover:shadow-primary/25 transition-all">
                    Book a Call
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
