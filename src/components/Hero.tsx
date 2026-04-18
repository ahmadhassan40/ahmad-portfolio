import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Code2, Database, Server, Terminal, Layers, Clock, Briefcase, Search, GitBranch } from "lucide-react";

const socialLinks: { icon: LucideIcon; label: string; href: string }[] = [
  { icon: Github, label: "GitHub", href: "https://github.com/ahmadhassan40" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ahmadhassan-dev" },
  { icon: Mail, label: "Email", href: "mailto:ahmadxo1804@gmail.com" },
];

const techStack = [
  { label: "MongoDB", icon: Database },
  { label: "Express", icon: Server },
  { label: "React", icon: Code2 },
  { label: "Node.js", icon: Terminal },
  { label: "Next.js", icon: Layers },
];

const heroStats = [
  { label: "7+ Projects", icon: Layers },
  { label: "1+ Years Exp", icon: Clock },
  { label: "On-site & Remote", icon: Briefcase },
];

const mernSnippet = [
  "const portfolio = {",
  "  name: 'Ahmad Hassan',",
  "  role: 'MERN Stack Developer',",
  "  bio: `I engineer robust,",
  "        scalable products with",
  "        the MERN stack.`,",
  "  stack: ['MongoDB', 'Express', 'React', 'Node', 'Next.js'],",
  "  status: 'Shipping with polish',",
  "};",
  "",
  "export default portfolio;",
].join("\n");

const Hero = () => {
  const [typedCode, setTypedCode] = useState("");
  const [showContent, setShowContent] = useState(false);



  useEffect(() => {
    let index = 0;
    let revealTimer: number | undefined;

    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedCode(mernSnippet.slice(0, index));
      if (index >= mernSnippet.length) {
        window.clearInterval(typingTimer);
        revealTimer = window.setTimeout(() => setShowContent(true), 200);
      }
    }, 25);

    return () => {
      window.clearInterval(typingTimer);
      if (typeof revealTimer !== "undefined") {
        window.clearTimeout(revealTimer);
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-gradient-bg" aria-hidden="true" />

      <div className="hero-container">
        {/* Left Column: VS Code Editor */}
        <div className="hero-left animate-fade-in-left">
          <div className="hero-vscode-window">
            {/* Toolbar */}
            <div className="hero-vscode-toolbar">
              <div className="hero-vscode-controls" aria-hidden="true">
                <span className="close" />
                <span className="minimize" />
                <span className="expand" />
              </div>
              <div className="hero-vscode-tabs">
                <div className="tab active">server.js</div>
              </div>
              <div className="hero-vscode-meta">main - VS Code</div>
            </div>

            {/* Workbench */}
            <div className="hero-vscode-workbench">
              {/* Sidebar */}
              <div className="hero-vscode-sidebar">
                <div className="sidebar-icon active">
                  <Code2 className="h-6 w-6" />
                </div>
                <div className="sidebar-icon">
                  <Database className="h-6 w-6" />
                </div>
                <div className="sidebar-icon">
                  <Terminal className="h-6 w-6" />
                </div>
                <div className="sidebar-icon">
                  <Search className="h-6 w-6" />
                </div>
              </div>

              {/* Editor Area */}
              <div className="hero-vscode-editor-area">
                {/* File Header */}
                <div className="hero-file-header">
                  <span className="file-dot" />
                  <span className="file-name">src/server.js</span>
                </div>

                {/* Code Block */}
                <div className="hero-code-block">
                  <div className="hero-code-lines" aria-hidden="true">
                    {Array.from({ length: 20 }).map((_, index) => (
                      <span key={index}>{index + 1}</span>
                    ))}
                  </div>
                  <pre>
                    <code>{typedCode || " "}</code>
                    {!showContent && <span className="hero-code-caret" aria-hidden="true" />}
                  </pre>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="hero-code-status">
              <div className="hero-code-status-dot success" />
              <span>Node.js - Server running</span>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className={`hero-right ${showContent ? "show-content" : ""}`}>
          <div className="hero-content-card">
            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              // Ahmad Hassan · MERN Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight md:whitespace-nowrap">
              MERN Stack Developer
            </h1>
            <p className="text-xl font-medium text-foreground/80">
              I focus on dashboards, Chrome extensions, and performance-focused web apps.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground mb-2">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                2+ Years Building Production Apps
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                7+ Full-Stack Projects
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Freelance · International Clients
              </span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-justify">
              I craft performant web applications and scalable APIs using
              MongoDB, Express, React, and Node.js. From database design to
              frontend polish, I build reliable full-stack solutions that drive
              business growth.
            </p>

            <div 
              className="flex flex-row overflow-x-auto gap-2 lg:gap-3 pb-2 scrollbar-hide shrink-0" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {techStack.map((tech) => (
                <span key={tech.label} className="tech-badge whitespace-nowrap flex-shrink-0">
                  <tech.icon className="h-4 w-4" />
                  {tech.label}
                </span>
              ))}
            </div>

            <div className="hero-stats">
              {heroStats.map((stat) => (
                <span key={stat.label} className="stat-chip">
                  <stat.icon className="h-4 w-4" />
                  {stat.label}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <button type="button" className="btn-primary" onClick={() => scrollToSection("#projects")}>
                View Projects
              </button>
              <button type="button" className="btn-secondary" onClick={() => scrollToSection("#contact")}>
                Contact Me
              </button>
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
