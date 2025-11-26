import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmadxo1804@gmail.com",
      href: "mailto:ahmadxo1804@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ahmadhassan-dev",
      href: "https://linkedin.com/in/ahmadhassan-dev",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ahmadhassan40",
      href: "https://github.com/ahmadhassan40",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujranwala, Pakistan",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0334-8121288",
      href: "tel:+923348121288",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat 
            about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 border border-border bg-card">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-input"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-input"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background border-input"
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 border border-border bg-card">
              <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <link.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-accent transition-colors font-medium"
                        >
                          {link.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{link.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border border-border bg-card">
              <h3 className="text-xl font-semibold text-primary mb-4">Let's Connect</h3>
              <p className="text-foreground/80 mb-6">
                Feel free to reach out through any of these platforms. I typically respond within 
                24 hours.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:ahmadxo1804@gmail.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent text-center transition-colors font-medium"
                >
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/ahmadhassan-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent text-center transition-colors font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
