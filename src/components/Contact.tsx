import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 95892 88541",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@tribirdsit.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Your Location Here",
      description: "Our headquarters"
    }
  ];

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to help and answer any question you might have. 
                We look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title} 
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-3 rounded-full bg-primary/10">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-foreground font-medium">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-lg gradient-card shadow-card">
              <h4 className="font-semibold mb-2 text-card-foreground">Business Hours</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Phone</label>
                <Input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Service Interested In</label>
                <select className="w-full p-3 rounded-md border border-input bg-background text-foreground">
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Game Development</option>
                  <option>Custom Solution</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                />
              </div>
              
              <Button variant="hero" className="w-full group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;