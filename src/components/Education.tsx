import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <Card className="p-8 max-w-4xl mx-auto hover:shadow-lg transition-shadow border border-border bg-card">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="flex items-start gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-lg font-medium text-foreground">Gift University</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Gujranwala, Pakistan
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              August 2021 – August 2025
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-primary mb-2">Academic Foundation</h4>
                <p className="text-foreground/80">
                  Comprehensive foundation in algorithms, data structures, operating systems, 
                  databases, and networks. Strong theoretical and practical knowledge of computer 
                  science fundamentals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-primary mb-2">Project Experience</h4>
                <p className="text-foreground/80">
                  Built multiple academic projects demonstrating end-to-end software development 
                  from planning and UI design to implementation and basic deployment. Applied 
                  classroom concepts to real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-primary mb-2">Key Strengths</h4>
                <p className="text-foreground/80">
                  Proven problem-solving and analytical thinking abilities. Clear written and 
                  verbal communication skills. Growth mindset with the ability to quickly learn 
                  new tools and technologies and apply them to practical projects.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
