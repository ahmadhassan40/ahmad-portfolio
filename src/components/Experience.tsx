import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "MERN Stack & Chrome Extensions – Full-time Intern",
      company: "Authority Hype",
      location: "Gujranwala, Pakistan",
      period: "March 2025 – June 2025",
      responsibilities: [
        "Assisted across MERN web apps (front-end & back-end modules)",
        "Supported website releases: release prep, deployment, and post-deployment verification",
        "Implemented and debugged Chrome extension features; enhanced functionality",
        "Demonstrated adaptability, professionalism, and strong team collaboration",
      ],
      current: false,
    },
    {
      role: "React Native Developer – Intern",
      company: "logicleaps",
      location: "Remote",
      period: "October 2024 – November 2024",
      responsibilities: [
        "Built and enhanced React Native mobile apps; delivered responsive UI screens for multiple projects",
        "Integrated backend APIs and optimized performance across devices",
        "Applied sound mobile app architecture, solved problems under deadlines, and collaborated effectively with the team",
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
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div
            ref={lineRef}
            className="hidden md:block absolute left-8 top-0 bottom-0 w-[0.4rem] timeline-line"
            aria-hidden
          >
            <span className="timeline-track" />
            <span className="timeline-fill" style={fillStyle} />
          </div>

          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="relative md:ml-20 p-6 hover:shadow-lg transition-shadow border border-border bg-card"
            >
              {/* Timeline dot (markers) */}
              <div
                ref={(el) => {
                  dotRefs.current[index] = el;
                }}
                className="hidden md:block absolute -left-[3.25rem] top-8 w-4 h-4 rounded-full bg-accent border-4 border-background"
              ></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <Briefcase className="h-4 w-4 text-accent" />
                    {exp.company}
                  </div>
                </div>
                {exp.current && (
                  <Badge className="bg-accent/10 text-accent border-accent/20 mb-2 md:mb-0">
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

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80">
                    <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                    <span>{resp}</span>
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

export default Experience;
