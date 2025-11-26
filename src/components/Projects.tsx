import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Petlinx – Animal Welfare Mobile App",
      period: "October 2024 – August 2025",
      type: "Final Year Project",
      tech: ["Flutter", "Dart", "REST APIs"],
      description:
        "Community-driven animal welfare app built with Flutter (Dart) to report and coordinate rescue of lost/injured/stray pets.",
      highlights: [
        "Implemented end-to-end flows for case creation/tracking and volunteer coordination",
        "Integrated REST APIs for auth, listings, and status updates",
        "Built responsive UI components with robust form validation and error handling",
        "Collaborated via Git and code reviews; maintained clear documentation",
        "Mission-focused: enables a 100% volunteer network to improve pet rescue outcomes",
      ],
    },
    {
      title: "UTMage – Campaign URL Builder",
      period: "May 2025 – July 2025",
      type: "MERN Stack Project",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      description:
        "Tool to create clean UTM-tagged links with instant checks for required fields, casing, and separators.",
      highlights: [
        "Added presets by channel, copy-to-clipboard, short-link/QR placeholders",
        "One-click 'open report' buttons with demo functionality",
        "Included bulk build from CSV, history table, and policies editor",
        "Full site structure (Home, Product, Pricing, Docs, Status, Auth)",
        "Clear writing, responsive layout, and fast interactions",
      ],
    },
    {
      title: "PixelPing – Uptime & Web Vitals Monitor",
      period: "February 2025 – March 2025",
      type: "MERN Stack Project",
      tech: ["MERN", "Web Performance APIs"],
      description:
        "Monitors website uptime and Core Web Vitals so owners know when a site slows or goes down.",
      highlights: [
        "Polished marketing site plus dashboard demo with uptime sparkline",
        "Vitals gauges (LCP/CLS/INP) and incidents list",
        "Public status page for transparency",
        "Fast, mobile-friendly design with clear CTAs",
        "Pages for pricing, docs, and sign-in",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all border border-border bg-card hover:border-accent/30"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-muted-foreground">
                <Badge variant="outline" className="w-fit">
                  {project.type}
                </Badge>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {project.period}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <Badge key={i} className="bg-accent/10 text-accent border-accent/20">
                    {tech}
                  </Badge>
                ))}
              </div>

              <p className="text-foreground/80 mb-4">{project.description}</p>

              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                    <span className="text-accent mt-1 flex-shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
