import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users, TrendingUp } from "lucide-react";

const About = () => {
  const traits = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Strong foundation in MERN stack, mobile development, and modern web technologies.",
    },
    {
      icon: Rocket,
      title: "Proactive Approach",
      description: "Self-starter who takes initiative and delivers results without constant supervision.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration skills with experience working in diverse development teams.",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Continuously learning and adapting to new technologies and best practices.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I'm a results-oriented MERN Stack developer with hands-on experience from internships 
            and academic projects. I've worked across front-end and back-end modules of MERN web 
            apps, supported production website deployments, and built Chrome extension features.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            My experience extends to mobile app development with React Native and Flutter (Dart), 
            where I've built responsive UIs, integrated REST APIs, and optimized performance across 
            devices. I'm known for my adaptability, professionalism, and a proactive, results-focused 
            approach to software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border border-border bg-card"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <trait.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{trait.title}</h3>
                <p className="text-sm text-muted-foreground">{trait.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
