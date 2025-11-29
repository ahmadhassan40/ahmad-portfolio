import { Button } from "@/components/ui/button";
import profilePortrait from "@/images/My-Photo.png";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bug,
  FileText,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  Puzzle,
  Search,
  Terminal,
  Database,
  Server,
  Code2,
  Cpu,
  Globe,
  Layers,
  Briefcase,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";

const socialLinks: { icon: LucideIcon; label: string; href: string }[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ahmadhassan40",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahmadhassan-dev",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:ahmadxo1804@gmail.com",
  },
];

// The sidebarIcons array is no longer used as the icons are hardcoded in the JSX
// const sidebarIcons: { icon: LucideIcon; label: string }[] = [
//   { icon: FileText, label: "Explorer" },
//   { icon: Search, label: "Search" },
//   { icon: GitBranch, label: "Source Control" },
//   { icon: Bug, label: "Run & Debug" },
//   { icon: Puzzle, label: "Extensions" },
// ];

const mernSnippet = [
  "import React from 'react';",
  "import express from 'express';",
  "",
  "const app = express();",
  "const port = 3000;",
  "",
  "app.get('/api/portfolio', (req, res) => {",
  "  res.json({",
  "    developer: 'Ahmad Hassan',",
  "    stack: ['MongoDB', 'Express', 'React', 'Node.js'],",
  "    passion: 'Building scalable web applications',",
  "    status: 'Ready to code 🚀'",
  "  });",
  "});",
  "",
  "app.listen(port, () => {",
  "  console.log(`Server running at http://localhost:${port}`);",
  "});",
].join("\n");

const Hero = () => {
  const [typedCode, setTypedCode] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const snippet = mernSnippet;
    let index = 0;
    let revealTimer: number | undefined;
    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedCode(snippet.slice(0, index));
      if (index >= snippet.length) {
        window.clearInterval(typingTimer);
        revealTimer = window.setTimeout(() => {
          setShowContent(true);
        }, 450);
      }
    }, 15);

    return () => {
      window.clearInterval(typingTimer);
      if (typeof revealTimer !== "undefined") {
        window.clearTimeout(revealTimer);
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-gradient-bg" aria-hidden="true" />

      <div className="hero-container">
        {/* Left Column: VS Code Editor */}
        <div className="hero-left animate-fade-in-left">
          <div className="hero-vscode-window">
            <div className="hero-vscode-toolbar">
              <div className="hero-vscode-controls" aria-hidden="true">
                <span className="close" />
                <span className="minimize" />
                <span className="expand" />
              </div>
              <div className="hero-vscode-tabs" role="tablist">
                <button className="active" role="tab" aria-selected="true">
                  server.js
                </button>
              </div>
              <div className="hero-vscode-status">main · VS Code</div>
            </div>

            <div className="hero-vscode-body">
              <div className="hero-vscode-sidebar" role="toolbar" aria-label="VS Code primary sidebar">
                <button className="hero-vscode-sidebar-icon active" aria-label="Explorer">
                  <Code2 className="h-5 w-5" />
                </button>
                <button className="hero-vscode-sidebar-icon" aria-label="Search">
                  <Database className="h-5 w-5" />
                </button>
                <button className="hero-vscode-sidebar-icon" aria-label="Source Control">
                  <Terminal className="h-5 w-5" />
                </button>
                <button className="hero-vscode-sidebar-icon" aria-label="Extensions">
                  <Globe className="h-5 w-5" />
                </button>
              </div>

              <div className="hero-vscode-workbench">
                <div className="hero-vscode-editor" aria-live="polite">
                  <div className="hero-code-header">
                    <span className="hero-code-dot" aria-hidden="true" />
                    src/server.js
                  </div>
                  <div className="hero-code-block">
                    <div className="hero-code-lines" aria-hidden="true">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <span key={i}>{i + 1}</span>
                      ))}
                    </div>
                    <pre style={{ margin: 0, flex: 1 }}>
                      <code>{typedCode || " "}</code>
                      {!showContent && <span className="hero-code-caret" aria-hidden="true" />}
                    </pre>
                  </div>
                  <div className="hero-code-status">
                    <span className={`hero-code-status-dot ${showContent ? "success" : "active"}`} />
                    Node.js · {showContent ? "Server running" : "Starting..."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="hero-right animate-fade-in-right">
          <div className="hero-content-card">
            <div className="hero-label-row">
              <span className="hero-label-line" />
              <span className="hero-label-text">// Ahmad Hassan · MERN Stack Developer</span>
            </div>

            <h1 className="hero-title">
              MERN Stack <span className="text-gradient">Developer</span>
            </h1>

            <p className="hero-description">
              I craft performant web applications and scalable APIs using MongoDB, Express, React, and Node.js.
              From database design to frontend polish, I build reliable full-stack solutions that drive business growth.
            </p>

            <div className="hero-tech-stack">
              <div className="tech-badge" title="MongoDB">
                <Database className="w-4 h-4" />
                <span>MongoDB</span>
              </div>
              <div className="tech-badge" title="Express.js">
                <Server className="w-4 h-4" />
                <span>Express</span>
              </div>
              <div className="tech-badge" title="React">
                <Code2 className="w-4 h-4" />
                <span>React</span>
              </div>
              <div className="tech-badge" title="Node.js">
                <Terminal className="w-4 h-4" />
                <span>Node.js</span>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-chip">
                <Layers className="w-3.5 h-3.5" />
                <span>10+ Projects</span>
              </div>
              <div className="stat-chip">
                <Clock className="w-3.5 h-3.5" />
                <span>1 Years Exp</span>
              </div>
              <div className="stat-chip">
                <Briefcase className="w-3.5 h-3.5" />
                <span>On-site & Remote</span>
              </div>
            </div>

            <div className="hero-actions">
              <button
                onClick={() => scrollToSection("#projects")}
                className="btn-primary"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-secondary"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
