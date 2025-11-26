import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

type FallingElement = {
  left: string;
  delay: string;
  duration: string;
  opacity: number;
  blur?: number;
  variant: "text" | "react" | "flutter";
  label?: string;
};

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

const baseFallingElements: FallingElement[] = [
  { left: "3%", delay: "0s", duration: "14s", opacity: 0.8, variant: "text", label: "npx" },
  { left: "9%", delay: "2s", duration: "16s", opacity: 0.85, variant: "text", label: "npm" },
  { left: "15%", delay: "4s", duration: "18s", opacity: 0.72, variant: "react" },
  { left: "21%", delay: "6s", duration: "17s", opacity: 0.7, variant: "text", label: "pnpm" },
  { left: "27%", delay: "1s", duration: "15s", opacity: 0.75, variant: "flutter" },
  { left: "33%", delay: "3s", duration: "19s", opacity: 0.8, variant: "text", label: "node" },
  { left: "39%", delay: "5s", duration: "14s", opacity: 0.65, variant: "text", label: "tsc" },
  { left: "45%", delay: "7s", duration: "20s", opacity: 0.78, variant: "react", blur: 0.4 },
  { left: "51%", delay: "9s", duration: "18s", opacity: 0.7, variant: "text", label: "vite" },
  { left: "57%", delay: "11s", duration: "16s", opacity: 0.8, variant: "flutter", blur: 0.5 },
  { left: "63%", delay: "13s", duration: "19s", opacity: 0.74, variant: "text", label: "expo" },
  { left: "69%", delay: "15s", duration: "15s", opacity: 0.72, variant: "text", label: "next" },
  { left: "75%", delay: "17s", duration: "18s", opacity: 0.78, variant: "react" },
  { left: "81%", delay: "19s", duration: "16s", opacity: 0.68, variant: "text", label: "sass" },
  { left: "87%", delay: "21s", duration: "19s", opacity: 0.8, variant: "flutter" },
  { left: "93%", delay: "23s", duration: "14s", opacity: 0.7, variant: "text", label: "api" },
  { left: "6%", delay: "12s", duration: "17s", opacity: 0.75, variant: "text", label: "cli" },
  { left: "18%", delay: "8s", duration: "15s", opacity: 0.68, variant: "react" },
  { left: "30%", delay: "10s", duration: "18s", opacity: 0.73, variant: "text", label: "ios" },
  { left: "42%", delay: "4s", duration: "16s", opacity: 0.7, variant: "text", label: "android" },
  { left: "54%", delay: "6s", duration: "19s", opacity: 0.77, variant: "text", label: "swift" },
  { left: "66%", delay: "2s", duration: "17s", opacity: 0.72, variant: "text", label: "jsx" },
  { left: "78%", delay: "9s", duration: "18s", opacity: 0.69, variant: "text", label: "hooks" },
  { left: "90%", delay: "5s", duration: "16s", opacity: 0.8, variant: "text", label: "ui" },
];

const shiftLeft = (left: string, offset: number) => {
  const numeric = (parseFloat(left) + offset) % 100;
  const safeValue = numeric < 0 ? numeric + 100 : numeric;
  return `${safeValue}%`;
};

const fallingElements: FallingElement[] = [
  ...baseFallingElements,
  ...baseFallingElements.map((element, index) => ({
    ...element,
    left: shiftLeft(element.left, 5 + index * 2.5),
    delay: `${parseFloat(element.delay) + 1.5 + index * 0.35}s`,
    duration: `${parseFloat(element.duration) + ((index % 3) + 1.5)}s`,
    opacity: Math.max(0.5, element.opacity - 0.15),
    blur: element.blur ? element.blur + 0.2 : 0.2,
  })),
];

const ReactMark = () => (
  <svg viewBox="0 0 100 100" role="img" aria-label="React logo">
    <g fill="none" stroke="currentColor" strokeWidth="4">
      <ellipse rx="32" ry="12" cx="50" cy="50" transform="rotate(60 50 50)" />
      <ellipse rx="32" ry="12" cx="50" cy="50" transform="rotate(-60 50 50)" />
      <ellipse rx="32" ry="12" cx="50" cy="50" />
    </g>
    <circle cx="50" cy="50" r="7" fill="currentColor" />
  </svg>
);

const FlutterMark = () => (
  <svg viewBox="0 0 100 100" role="img" aria-label="Flutter logo">
    <g fill="currentColor">
      <path d="M30 60 70 20h-18L22 50z" opacity="0.9" />
      <path d="M30 60 45 75l40-40h-18z" opacity="0.7" />
      <path d="M45 75 60 90l25-25h-18z" opacity="0.85" />
    </g>
  </svg>
);

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-bytes" aria-hidden="true">
        {fallingElements.map((element, index) => (
          <span
            key={`${element.left}-${index}`}
            className="hero-byte"
            style={{
              left: element.left,
              animationDelay: element.delay,
              animationDuration: element.duration,
              opacity: element.opacity,
              filter: element.blur ? `blur(${element.blur}px)` : undefined,
            }}
          >
            {element.variant === "text" && element.label && (
              <span className="hero-byte-pill">{element.label}</span>
            )}
            {element.variant === "react" && (
              <span className="hero-byte-logo react">
                <ReactMark />
              </span>
            )}
            {element.variant === "flutter" && (
              <span className="hero-byte-logo flutter">
                <FlutterMark />
              </span>
            )}
          </span>
        ))}
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="hero-classic-card animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Ahmad Hassan
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
            Software Developer – MERN Stack & Mobile
          </p>
          <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Results-oriented developer with hands-on experience in MERN Stack web development,
            React Native, and Flutter. Proven track record in building full-stack applications,
            Chrome extensions, and mobile apps with a focus on performance and user experience.
          </p>

          <div className="hero-cta justify-center">
            <Button
              size="lg"
              className="hero-primary-cta"
              onClick={() => scrollToSection("#projects")}
            >
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

          <div className="hero-socials justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
