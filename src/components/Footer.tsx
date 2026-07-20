import Link from "next/link";
import Image from "next/image";
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
              <div className="relative flex items-center justify-center mb-4">
                <Image src="/logos/logo-dark-removebg-preview.png" alt="Sululu Labs" width={300} height={96} className="dark:hidden h-24 w-auto object-contain scale-125 origin-left" />
                <Image src="/logos/logo-light-removebg-preview.png" alt="Sululu Labs" width={300} height={96} className="hidden dark:block h-24 w-auto object-contain scale-125 origin-left" />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mt-4">
              Sit Back. Feel Sululu. Bring Your Vision to Life.
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
                href="mailto:shivanshmittalsde@gmail.com"
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
                href="mailto:shivanshmittalsde@gmail.com"
                className="text-sm text-foreground hover:text-primary transition-colors block"
              >
                shivanshmittalsde@gmail.com
              </a>
              <a
                href="tel:+917452862988"
                className="text-sm text-foreground hover:text-primary transition-colors block"
              >
                +91 74528 62988
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
