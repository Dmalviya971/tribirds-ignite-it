import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Gamepad2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Creating modern, responsive websites and web applications using the latest technologies. From simple landing pages to complex enterprise solutions.",
    features: ["React & Vue.js", "Node.js Backend", "E-commerce Solutions", "CMS Development"],
    color: "text-primary"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
    features: ["React Native", "iOS & Android", "UI/UX Design", "App Store Deployment"],
    color: "text-accent"
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Engaging games and interactive experiences using modern game engines and cutting-edge technologies.",
    features: ["Unity & Unreal", "2D & 3D Games", "VR/AR Experiences", "Multi-platform"],
    color: "text-primary"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-tech transition-smooth gradient-card border-0 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className={`w-8 h-8 ${service.color} group-hover:scale-110 transition-transform`} />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="tech" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;