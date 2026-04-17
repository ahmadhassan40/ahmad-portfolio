import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

// Import project images
import UTMage1 from "@/images/UTMage-1.png";
import PixelPing1 from "@/images/pixelping-1.png";
import LessonLint1 from "@/images/lessonlint-1.png";
import CronCraft1 from "@/images/croncraft-1.png";
import Volnyn1 from "@/images/volnyn-1.png";
import LogoAiPro1 from "@/images/logoaipro-1.png";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Volnyn – AI-Enhanced Real Estate Platform",
      period: "February 2026 – March 2026",
      type: "Freelance – Laravel Project",
      role: "Freelance Developer (US Client)",
      tech: ["Laravel", "PHP", "MySQL", "OpenAI API", "REST APIs"],
      description:
        "A production real-estate platform serving the US market. Performed maintenance and integrated AI-powered features including smart property descriptions and intelligent listing recommendations.",
      result: "Delivered AI feature upgrades that boosted platform engagement and earned repeat client collaboration.",
      highlights: [
        "Integrated OpenAI-powered smart property descriptions for automated listing content",
        "Built intelligent listing recommendation engine based on user preferences",
        "Implemented new feature modules per client requirements with seamless UX",
        "Performed codebase maintenance, bug fixes, and performance optimizations",
      ],
      demoUrl: "https://volnyn.com/property/",
      repoUrl: "",
      images: [Volnyn1],
    },
    {
      title: "LogoAiPro – AI Logo & Image Generator",
      period: "March 2026 – April 2026",
      type: "Freelance – Full-Stack Project",
      role: "Freelance Developer (US Client)",
      tech: ["Next.js", "Node.js", "OpenAI API", "Canvas API", "MongoDB"],
      description:
        "A full-stack AI-powered platform for generating logos and images. Features a custom interactive editor that lets users fine-tune AI-generated logos to their exact specifications.",
      result: "Delivered a polished AI creative tool with a seamless generate → edit → download workflow.",
      highlights: [
        "Built AI-powered logo generation using OpenAI image generation API",
        "Developed a custom canvas-based logo editor for colors, fonts, and layout tweaks",
        "Created AI image generation module for brand assets and marketing visuals",
        "Designed intuitive UI/UX for the full generation and editing pipeline",
      ],
      demoUrl: "",
      repoUrl: "",
      images: [LogoAiPro1],
    },
    {
      title: "PixelPing – Uptime & Web Vitals Monitor",
      period: "February 2025 – March 2025",
      type: "MERN Stack Project",
      role: "Sole Developer",
      tech: ["MERN", "Web Performance APIs"],
      description:
        "Monitors website uptime and Core Web Vitals so owners know when a site slows or goes down.",
      result: "Monitors website vitals and uptime with instant alerting.",
      highlights: [
        "Polished marketing site plus dashboard demo with uptime sparkline",
        "Vitals gauges (LCP/CLS/INP) and incidents list",
        "Public status page for transparency",
        "Fast, mobile-friendly design with clear CTAs",
      ],
      demoUrl: "https://pixelping-jet.vercel.app/",
      repoUrl: "https://github.com/ahmadhassan40/pixel-ping",
      images: [PixelPing1],
    },
    {
      title: "UTMage – Campaign URL Builder",
      period: "May 2025 – July 2025",
      type: "MERN Stack Project",
      role: "Sole Developer",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      description:
        "Tool to create clean UTM-tagged links with instant checks for required fields, casing, and separators.",
      result: "Helps marketers generate UTM links 3x faster with automated validation.",
      highlights: [
        "Added presets by channel, copy-to-clipboard, short-link/QR placeholders",
        "One-click 'open report' buttons with demo functionality",
        "Included bulk build from CSV, history table, and policies editor",
        "Full site structure (Home, Product, Pricing, Docs, Status, Auth)",
      ],
      demoUrl: "https://ut-mage.vercel.app/",
      repoUrl: "https://github.com/ahmadhassan40/utmage",
      images: [UTMage1],
    },
    {
      title: "LessonLint – AI-Powered Learning Assistant",
      period: "October 2024 – December 2024",
      type: "MERN Stack Project",
      role: "Sole Developer",
      tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
      description:
        "AI-powered platform that helps students learn faster by providing instant feedback, explanations, and personalized study plans.",
      result: "Helps students learn 2x faster with AI-powered feedback and personalized study paths.",
      highlights: [
        "Integrated OpenAI GPT-4 for intelligent tutoring and explanations",
        "Real-time feedback on student submissions and assignments",
        "Personalized learning paths based on student performance",
        "Interactive dashboard with progress tracking and analytics",
        "Supports multiple subjects including Math, Science, and Programming",
      ],
      demoUrl: "https://lessonlint.vercel.app/",
      repoUrl: "https://github.com/ahmadhassan40/lesson-lint",
      images: [LessonLint1],
    },
    {
      title: "CronCraft – Automated Task Scheduler",
      period: "August 2025 – Present",
      type: "MERN Stack Project",
      role: "Sole Developer",
      tech: ["Node.js", "React", "MongoDB", "Cron"],
      description:
        "A powerful visual interface for managing, scheduling, and monitoring cron jobs across distributed systems.",
      result: "Simplifies complex cron job management with a user-friendly GUI and real-time monitoring.",
      highlights: [
        "Visual cron expression builder and validator",
        "Real-time execution logs and status monitoring",
        "Email alerts for failed jobs and execution anomalies",
        "Secure authentication and role-based access control",
      ],
      demoUrl: "https://croncraft-phi.vercel.app/",
      repoUrl: "https://github.com/ahmadhassan40/cron-craft",
      images: [CronCraft1],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Projects</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border bg-card hover:border-black flex flex-col"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Trigger Area */}
              <div
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {/* Project Image Thumbnail - Always Visible */}
                {project.images && project.images.length > 0 && (
                  <div className="w-full h-56 overflow-hidden relative">
                    <img
                      src={project.images[0]}
                      alt={`${project.title} preview`}
                      className={`w-full h-full object-cover object-top transition-transform duration-500 ${hoveredIndex === index ? "scale-105" : ""
                        }`}
                    />
                  </div>
                )}

                {/* Title - Always Visible */}
                <div className="p-6 pb-3">
                  <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                </div>

                {/* Expandable Content - Controlled by state */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredIndex === index ? "max-h-[1000px]" : "max-h-0"
                    }`}
                >
                  <div className="px-6 pb-6 flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Badge variant="outline" className="w-fit">
                        {project.type}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {project.period}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">
                        <span className="text-muted-foreground">Role:</span> {project.role}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} className="bg-black text-white border-black">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4">{project.description}</p>

                    {project.result && (
                      <div className="mb-4 p-3 bg-green-50/50 border border-green-100 rounded-lg">
                        <p className="text-sm font-medium text-green-800">
                          <span className="font-bold">Result:</span> {project.result}
                        </p>
                      </div>
                    )}

                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                          <span className="text-black mt-1 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Buttons - Always Visible & Outside Trigger Area */}
              <div className="mt-auto p-6 pt-0 border-t border-border/50 bg-card z-10">
                <div className="flex gap-3 pt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-black/90 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub Repo
                    </a>
                  )}
                  {!project.demoUrl && !project.repoUrl && (
                    <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm font-medium cursor-default">
                      Client Project – Private
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Projects;
