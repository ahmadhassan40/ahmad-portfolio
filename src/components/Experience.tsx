import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "MERN Stack & Chrome Extensions – Full-time Job",
      company: "Authority Hype",
      location: "Gujranwala, Pakistan",
      period: "March 2025 – On-going",
      tech: ["React", "Node.js", "MongoDB", "Chrome Extensions"],
      responsibilities: [
        "Assisted across MERN web apps (front-end & back-end modules)",
        "Supported website releases: release prep, deployment, and post-deployment verification",
        "Implemented and debugged Chrome extension features; enhanced functionality",
      ],
      impact: [
        "Reduced extension error rate by 15% through rigorous debugging",
        "Improved onboarding time by 20% with new documentation",
      ],
      current: false,
    },
    {
      role: "Full-Stack Developer – Freelance (Volnyn)",
      company: "US-Based Client (Remote)",
      location: "Remote – United States",
      period: "February 2026 – March 2026",
      tech: ["Laravel", "PHP", "MySQL", "OpenAI API", "REST APIs"],
      responsibilities: [
        "Maintained and enhanced a production real-estate platform (volnyn.com) for a US-based client",
        "Integrated AI-powered features including smart property descriptions and intelligent listing recommendations",
        "Implemented new feature modules per client requirements, ensuring seamless UX across the platform",
        "Performed codebase maintenance, bug fixes, and performance optimizations on the Laravel backend",
      ],
      impact: [
        "Successfully shipped AI feature upgrades, boosting platform engagement and user satisfaction",
        "Delivered all milestones on schedule, earning repeat collaboration with the client",
      ],
      current: false,
    },
    {
      role: "Full-Stack Developer – Freelance (LogoAiPro)",
      company: "US-Based Client (Remote)",
      location: "Remote – United States",
      period: "March 2026 – April 2026",
      tech: ["Next.js", "Node.js", "OpenAI API", "Canvas API", "MongoDB"],
      responsibilities: [
        "Built a full-stack AI-powered logo and image generation platform from the ground up",
        "Developed an interactive logo editor allowing users to customize AI-generated logos (colors, fonts, layout)",
        "Integrated OpenAI image generation API for creating high-quality logos and brand assets",
        "Designed intuitive UI/UX for the generation and editing workflows",
      ],
      impact: [
        "Delivered a polished AI creative tool with a seamless generate → edit → download workflow",
        "Built a custom canvas-based editor enabling granular logo customization beyond standard AI output",
      ],
      current: false,
    },

  ];

  const [lineFill, setLineFill] = useState(0);
  const [segmentRatios, setSegmentRatios] = useState({ first: 0.35, second: 0.7 });
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // === SCROLL → FILL LOGIC (3 PHASES) ===
  useEffect(() => {
    const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

    const updateFill = () => {
      const section = sectionRef.current;
      const lineEl = lineRef.current;
      if (!section || !lineEl) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      // Section completely below viewport → no fill
      if (rect.top >= viewportHeight) {
        setLineFill(0);
        return;
      }

      // Section completely above viewport → full fill
      if (rect.bottom <= 0) {
        setLineFill(1);
        return;
      }

      // 3 different progress values
      const enterProgress = clamp((viewportHeight - rect.top) / viewportHeight); // 0→1 as section enters
      const middleProgress = clamp(-rect.top / Math.max(rect.height, 1));        // 0→1 while scrolling through
      const exitProgress = clamp((viewportHeight - rect.bottom) / viewportHeight); // 0→1 as section leaves

      const { first, second } = segmentRatios;
      const firstClamped = clamp(first);
      const secondClamped = clamp(second);

      const middleSpan = Math.max(secondClamped - firstClamped, 0); // first→second
      const exitSpan = Math.max(1 - secondClamped, 0);               // second→bottom

      // Phase 1: 0 → first dot
      // Phase 2: first dot → second dot
      // Phase 3: second dot → bottom
      const fill =
        enterProgress * firstClamped +
        middleProgress * middleSpan +
        exitProgress * exitSpan;

      setLineFill(clamp(fill));
    };

    updateFill();
    window.addEventListener("scroll", updateFill, { passive: true });
    window.addEventListener("resize", updateFill);
    return () => {
      window.removeEventListener("scroll", updateFill);
      window.removeEventListener("resize", updateFill);
    };
  }, [segmentRatios]);

  // === MEASURE DOT POSITIONS ON THE LINE ===
  useEffect(() => {
    const measureDots = () => {
      const lineEl = lineRef.current;
      if (!lineEl) return;
      const lineRect = lineEl.getBoundingClientRect();
      if (!lineRect.height) return;

      const ratios = dotRefs.current
        .map((dot) => {
          if (!dot) return null;
          const dotRect = dot.getBoundingClientRect();
          const relative = dotRect.top - lineRect.top + dotRect.height / 2;
          return Math.min(Math.max(relative / lineRect.height, 0), 1);
        })
        .filter((val): val is number => val !== null);

      const first = ratios[0] ?? 0.35;
      const second = ratios[1] ? Math.max(ratios[1], first + 0.08) : Math.min(0.95, first + 0.3);
      setSegmentRatios({ first, second: Math.min(second, 0.98) });
    };

    measureDots();
    window.addEventListener("resize", measureDots);
    return () => window.removeEventListener("resize", measureDots);
  }, []);

  const fillStyle: CSSProperties = {
    height: `${Math.min(Math.max(lineFill, 0), 1) * 100}%`,
  };

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Experience</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
        </div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div
            ref={lineRef}
            className="absolute left-[14px] md:left-[25px] top-8 bottom-8 w-1.5 bg-border/30 rounded-full"
          >
            <span className="timeline-track block w-full h-full absolute top-0 left-0 rounded-full" />
            <span className="timeline-fill block w-full absolute top-0 left-0 bg-primary rounded-full" style={fillStyle} />
          </div>

          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="relative ml-12 md:ml-20 p-6 hover:shadow-lg transition-shadow border border-border bg-card"
            >
              {/* Timeline dot (markers) */}
              <div
                ref={(el) => {
                  dotRefs.current[index] = el;
                }}
                className="absolute -left-[2.05rem] md:-left-[3.25rem] top-8 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10"
              ></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{exp.role}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <Briefcase className="h-4 w-4 text-black" />
                    {exp.company}
                  </div>
                </div>
                {exp.current && (
                  <Badge className="bg-black text-white border-black mb-2 md:mb-0">
                    Current
                  </Badge>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {exp.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80">
                        <span className="text-black mt-1.5 flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.impact && (
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Key Impact</h4>
                    <ul className="space-y-2">
                      {exp.impact.map((imp, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/80">
                          <span className="text-green-600 mt-1.5 flex-shrink-0">✓</span>
                          <span className="font-medium text-foreground/90">{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
