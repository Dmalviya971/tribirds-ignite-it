import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Code, Smartphone, Gamepad2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tribirds
              </span>{" "}
              <span className="text-card-foreground">IT</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Innovative IT solutions for your business. We specialize in web development, 
              mobile apps, and game development.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Code className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Smartphone className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Gamepad2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Services</h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "Game Development",
                "UI/UX Design",
                "E-commerce Solutions",
                "Custom Software"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
                { label: "Portfolio", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-card-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 95892 88541</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@tribirdsit.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Your Location Here</span>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="font-medium text-card-foreground mb-2">Business Hours</h5>
              <p className="text-sm text-muted-foreground">
                Mon-Fri: 9AM - 6PM<br />
                Sat: 10AM - 4PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Tribirds IT Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;