import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Code2,
      skills: [
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "REST APIs",
        "Chrome Extensions",
        "Website Deployment",
        "Redux",
        "Tailwind CSS",
        "Git & GitHub",
      ],
    },
    {
      title: "Tools & Practices",
      icon: Wrench,
      skills: [
        "Git",
        "Testing",
        "Debugging",
        "Deployment",
        "Code Reviews",
        "Documentation",
        "Version Control",
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Adaptability",
        "Communication",
        "Growth Mindset",
        "Professionalism",
        "Time Management",
        "Problem Solving",
        "Team Collaboration",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border border-border bg-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-muted hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-colors"
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
