import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
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
  ChevronRight
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
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Videos", href: "/videos", isRoute: true },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`w-full max-w-6xl rounded-full border transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-lg" 
            : "bg-background/60 backdrop-blur-md border-border/30"
        }`}
      >
        <div className="flex items-center justify-between h-14 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Inventinity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-secondary/50 ${
                      location.pathname === link.href ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : link.hasDropdown ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsServicesOpen(!isServicesOpen);
                    }}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-secondary/50 ${
                      isServicesOpen ? "text-foreground bg-secondary/50" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="rounded-full text-foreground/70 hover:text-foreground hover:bg-secondary/50">
                Sign In
              </Button>
            </Link>
            
            <button onClick={() => scrollToSection("#contact")}>
              <Button size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                Book a Call
              </Button>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-secondary/50 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown - Desktop */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-0">
                {serviceCategories.map((category, idx) => (
                  <div 
                    key={category.label} 
                    className={`p-6 ${idx === 0 ? 'border-r border-border/30' : ''}`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-accent'}`} />
                      <span className={`text-xs font-semibold uppercase tracking-wider ${idx === 0 ? 'text-primary' : 'text-accent'}`}>
                        {category.label}
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      {category.items.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleServiceClick(service.href)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left group ${
                            isActiveService(service.href)
                              ? 'bg-primary/10 text-foreground'
                              : 'hover:bg-secondary/50 text-foreground/80 hover:text-foreground'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                            isActiveService(service.href)
                              ? 'bg-primary/20 text-primary'
                              : 'bg-secondary/50 text-foreground/60 group-hover:bg-primary/10 group-hover:text-primary'
                          }`}>
                            {service.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">{service.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{service.description}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom CTA */}
              <div className="px-6 py-4 bg-secondary/30 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Need a custom solution?</span>
                  </div>
                  <button 
                    onClick={() => scrollToSection("#contact")}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                  >
                    Let's talk
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 md:hidden bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl overflow-hidden z-50"
          >
            <div className="p-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                    className={`block w-full px-4 py-3 rounded-xl transition-colors ${
                      location.pathname === link.href 
                        ? "bg-primary/10 text-foreground" 
                        : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                        isMobileServicesOpen 
                          ? "bg-secondary/50 text-foreground" 
                          : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-1 space-y-4">
                            {serviceCategories.map((category, idx) => (
                              <div key={category.label}>
                                <div className="flex items-center gap-2 px-4 mb-2">
                                  <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-primary' : 'bg-accent'}`} />
                                  <span className={`text-xs font-semibold uppercase tracking-wider ${idx === 0 ? 'text-primary' : 'text-accent'}`}>
                                    {category.label}
                                  </span>
                                </div>
                                
                                <div className="space-y-1">
                                  {category.items.map((service) => (
                                    <button
                                      key={service.name}
                                      onClick={() => handleServiceClick(service.href)}
                                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-left ${
                                        isActiveService(service.href)
                                          ? 'bg-primary/10 text-foreground'
                                          : 'text-foreground/70 hover:text-foreground hover:bg-secondary/30'
                                      }`}
                                    >
                                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                        isActiveService(service.href)
                                          ? 'bg-primary/20 text-primary'
                                          : 'bg-secondary/50 text-foreground/60'
                                      }`}>
                                        {service.icon}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium">{service.name}</p>
                                        <p className="text-xs text-muted-foreground truncate">{service.description}</p>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left px-4 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    {link.name}
                  </button>
                )
              ))}
              
              <div className="pt-4 space-y-2 border-t border-border/50 mt-2">
                <Link to="/auth" className="block">
                  <Button variant="outline" className="w-full rounded-full">
                    Sign In
                  </Button>
                </Link>
                
                <button onClick={() => scrollToSection("#contact")} className="block w-full">
                  <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                    Book a Call
                  </Button>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
