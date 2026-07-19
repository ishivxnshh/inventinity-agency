import Link from "next/link";
import { Sparkles, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "AI Integration",
    "Digital Marketing",
    "Video Editing",
    "Branding & Design",
  ];

  return (
    <footer className="relative bg-gradient-mesh border-t border-border">
      <div className="absolute inset-0 bg-gradient-spotlight opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Sululu Labs
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Full-stack digital agency delivering end-to-end tech and creative solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/ishivxnshh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ishivxnshh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:shivanshnarain@gmail.com"
                className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Ready to start your project?
              </p>
              <a
                href="mailto:shivanshnarain@gmail.com"
                className="text-sm text-foreground hover:text-primary transition-colors block"
              >
                shivanshnarain@gmail.com
              </a>
              <a
                href="tel:+919569983385"
                className="text-sm text-foreground hover:text-primary transition-colors block"
              >
                +91 95699 83385
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sululu Labs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
