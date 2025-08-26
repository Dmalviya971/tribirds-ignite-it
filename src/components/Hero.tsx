import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Gamepad2 } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern technology and IT services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-16 h-16 bg-accent/20 rounded-full animate-float animation-delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/30 rounded-full animate-float animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Company Logo/Name */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Tribirds
              </span>{" "}
              <span className="text-foreground">IT Services</span>
            </h1>
          </div>

          {/* Main Tagline */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-foreground/90">
            Innovative IT Solutions for Your Business
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert web and mobile development services tailored for you. We transform your ideas into powerful digital solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex items-center justify-center p-6 rounded-lg gradient-card shadow-card transition-smooth hover:shadow-tech group">
              <Code className="w-8 h-8 text-primary mr-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-card-foreground">Web Development</span>
            </div>
            <div className="flex items-center justify-center p-6 rounded-lg gradient-card shadow-card transition-smooth hover:shadow-tech group">
              <Smartphone className="w-8 h-8 text-accent mr-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-card-foreground">Mobile Apps</span>
            </div>
            <div className="flex items-center justify-center p-6 rounded-lg gradient-card shadow-card transition-smooth hover:shadow-tech group">
              <Gamepad2 className="w-8 h-8 text-primary mr-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-card-foreground">Game Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;