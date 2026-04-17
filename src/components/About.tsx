import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users, TrendingUp } from "lucide-react";

const About = () => {
  const traits = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Optimized extension scripts to reduce API calls by 30%. Strong foundation in MERN stack.",
    },
    {
      icon: Rocket,
      title: "Proactive Approach",
      description: "Built internal tools to automate deployment workflows. Self-starter who delivers results.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Conducted code reviews and mentored junior peers. Excellent collaboration skills.",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Constantly exploring new patterns like Server Actions. Adaptable to new technologies.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left Column: Bio */}
          <div className="text-lg text-foreground leading-relaxed text-justify max-w-[65ch]">
            <p className="mb-6">
              I’m a <strong>MERN</strong> stack developer who enjoys turning ideas into fast, reliable web apps. I’ve built <strong>dashboards</strong>, <strong>Chrome extensions</strong>, and <strong>full-stack products</strong> using MongoDB, Express, React, and Node. I've also worked with <strong>Laravel & PHP</strong> on freelance projects for <strong>international clients</strong>, integrating AI features into production platforms. From database design to deployment, I like owning the entire flow – shipping clean code, thoughtful UX, and performance-focused features that actually solve problems.
            </p>
            <p>
              I specialize in building responsive web applications, integrating REST & AI APIs, and
              optimizing performance. I'm known for my adaptability, professionalism, and a
              proactive, results-focused approach to <strong>end-to-end full-stack apps</strong>.
            </p>
          </div>

          {/* Right Column: Stats Stack */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-6 shadow-sm">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Currently</h3>
              <p className="text-lg font-medium text-primary">Antigravity – MERN Developer</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Focus</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Full-Stack Development</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Chrome Extensions</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Freelance & AI Integration</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Performance</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Location</h3>
              <p className="text-lg font-medium text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Gujranwala, Pakistan
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary">What I'm good at</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border border-border bg-card"
            >
              <div className="flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-4">
                  <trait.icon className="h-6 w-6 text-black" />
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
