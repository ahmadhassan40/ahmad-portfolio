import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Wrench, Users, Layers, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Primary Stack",
      description: "Daily drivers for building production-ready apps",
      skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Layers,
      title: "Comfortable With",
      description: "Tools I use regularly for specific needs",
      skills: ["Next.js", "Redux", "PostgreSQL", "Firebase", "Docker", "Git", "Laravel", "PHP"],
    },
    {
      icon: Wrench,
      title: "Tools & Testing",
      description: "Workflow optimization and quality assurance",
      skills: ["Jest", "Playwright", "Postman", "Vercel", "Netlify", "GitHub Actions"],
    },
    {
      icon: Cpu,
      title: "Exploring",
      description: "Technologies I'm currently learning",
      skills: ["Rust", "WebAssembly", "GraphQL", "AWS Lambda"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Skills</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border border-border bg-card"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-black/5 rounded-lg">
                  <category.icon className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
