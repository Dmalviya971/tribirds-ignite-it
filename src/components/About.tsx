import { Button } from "@/components/ui/button";
import { Target, Users, Award, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Target, label: "Projects Completed", value: "100+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Award, label: "Years Experience", value: "5+" },
  ];

  return (
    <section className="py-20 bg-secondary/30" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tribirds</span>
              </h2>
              <div className="w-20 h-1 gradient-primary rounded-full mb-6" />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Tribirds IT Services, our mission is to empower businesses through innovative IT solutions. 
                We specialize in web development, mobile app development, and game development, ensuring 
                high-quality services tailored to your needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced developers and designers work collaboratively to transform your 
                vision into reality, delivering solutions that drive growth and success for your business.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                {[
                  "Cutting-edge technology solutions",
                  "Experienced and dedicated team",
                  "Tailored services for your business",
                  "24/7 support and maintenance"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Get In Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Side */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="p-6 rounded-lg gradient-card shadow-card hover:shadow-tech transition-smooth group animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement Card */}
            <div className="p-8 rounded-lg gradient-card shadow-card border-l-4 border-l-primary">
              <h4 className="text-xl font-semibold mb-3 text-card-foreground">Our Mission</h4>
              <p className="text-muted-foreground leading-relaxed">
                To deliver innovative, reliable, and scalable IT solutions that help businesses 
                achieve their goals and stay ahead in the competitive digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;