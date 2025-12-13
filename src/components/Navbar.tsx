import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      name: "Services", 
      href: "#services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Web Development", description: "Custom websites & web apps" },
        { name: "Mobile Apps", description: "iOS & Android development" },
        { name: "AI Integration", description: "Smart automation solutions" },
      ]
    },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Videos", href: "/videos", isRoute: true },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    
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
                    className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
                  >
                    {link.name}
                  </Link>
                ) : link.hasDropdown ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
                  >
                    {link.name}
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-72 p-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl"
                    >
                      <div className="space-y-1">
                        {link.dropdownItems?.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => {
                              scrollToSection(link.href);
                              setOpenDropdown(null);
                            }}
                            className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors text-left group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <Sparkles className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 md:hidden bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                    className="block w-full px-4 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors"
                  >
                    {link.name}
                  </Link>
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
              
              <div className="pt-4 space-y-2 border-t border-border/50">
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
