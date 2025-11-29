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

const sidebarIcons: { icon: LucideIcon; label: string }[] = [
  { icon: FileText, label: "Explorer" },
  { icon: Search, label: "Search" },
  { icon: GitBranch, label: "Source Control" },
  { icon: Bug, label: "Run & Debug" },
  { icon: Puzzle, label: "Extensions" },
];

const flutterSnippet = [
  "import 'package:flutter/material.dart';",
  "",
  "class PortfolioCard extends StatelessWidget {",
  "  const PortfolioCard({super.key});",
  "",
  "  @override",
  "  Widget build(BuildContext context) {",
  "    return Scaffold(",
  "      backgroundColor: const Color(0xFFF6F8FF),",
  "      body: Center(",
  "        child: Hero(",
  "          tag: 'ahmad-hassan',",
  "          child: Card(",
  "            elevation: 12,",
  "            shape: RoundedRectangleBorder(",
  "              borderRadius: BorderRadius.circular(32),",
  "            ),",
  "            child: Padding(",
  "              padding: const EdgeInsets.all(32),",
  "              child: Column(",
  "                mainAxisSize: MainAxisSize.min,",
  "                crossAxisAlignment: CrossAxisAlignment.start,",
  "                children: const [",
  "                  Text(",
  "                    'Ahmad Hassan',",
  "                    style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700),",
  "                  ),",
  "                  SizedBox(height: 12),",
  "                  Text('Building delightful MERN & Flutter experiences.'),",
  "                ],",
  "              ),",
  "            ),",
  "          ),",
  "        ),",
  "      ),",
  "    );",
  "  }",
  "}",
].join("\n");

const Hero = () => {
  const [typedCode, setTypedCode] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const snippet = flutterSnippet;
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
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-vscode-container">
        <div className={`hero-vscode-window animate-fade-in ${showContent ? "show-content" : ""}`}>
          <div className="hero-vscode-toolbar">
            <div className="hero-vscode-controls" aria-hidden="true">
              <span className="close" />
              <span className="minimize" />
              <span className="expand" />
            </div>
            <div className="hero-vscode-tabs" role="tablist">
              <button className="active" role="tab" aria-selected="true">
                live-code.dart
              </button>
            </div>
            <div className="hero-vscode-status">main · VS Code</div>
          </div>

          <div className="hero-vscode-body">
            <div className="hero-vscode-sidebar" role="toolbar" aria-label="VS Code primary sidebar">
              {sidebarIcons.map((item, index) => (
                <button
                  key={item.label}
                  className={`hero-vscode-sidebar-icon ${index === 0 ? "active" : ""}`}
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </button>
              ))}
            </div>

            <div className="hero-vscode-workbench">
              <div className="hero-vscode-editor" aria-live="polite">
                <div className="hero-code-header">
                  <span className="hero-code-dot" aria-hidden="true" />
                  lib/ui/portfolio_card.dart
                </div>
                <pre className="hero-code-block">
                  <code>{typedCode || " "}</code>
                  {!showContent && <span className="hero-code-caret" aria-hidden="true" />}
                </pre>
                <div className="hero-code-status">
                  <span className={`hero-code-status-dot ${showContent ? "success" : "active"}`} />
                  Flutter · {showContent ? "Build complete" : "Rendering components"}
                </div>
              </div>

              <div className={`hero-vscode-info ${showContent ? "visible" : ""}`}>


                <div className="hero-info-text">
                  <span className="hero-info-label">// Ahmad Hassan</span>
                  <h1>Creative Full-Stack & Mobile Developer</h1>
                  <p>
                    I craft performant MERN applications, scalable APIs, and polished mobile experiences in React
                    Native & Flutter. From idea to deployment, I obsess over build quality, reliability, and delightful
                    UI that feels native everywhere.
                  </p>
                </div>

                <div className="hero-cta">
                  <Button size="lg" className="hero-primary-cta" onClick={() => scrollToSection("#projects")}>
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hero-secondary-cta"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
