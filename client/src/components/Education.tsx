import { GraduationCap, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  field: string;
  period: string;
  details?: string;
}

const education: EducationItem[] = [
  {
    degree: "Bachelor of Social Science",
    institution: "University of Chittagong",
    field: "International Relations",
    period: "2022 - 2026",
    details:
      "Final-year student with focus on international development and climate resilience",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Bangladesh Navy College Chittagong",
    field: "Humanities",
    period: "2019 - 2020",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Saraipara City Corporation High School",
    field: "Humanities",
    period: "2018 - 2019",
  },
];

const certifications = [
  "UNICEF Passport to Earning - Project Associate (2025)",
  "Excel Essentials For Workplace Productivity - Awareness 360° (2025)",
  "Project Fast Fashion and its Alternative - Netcom Learning Agent X Programme (2025)",
  "Campus Ambassador - Save Youth Bangladesh CU Chapter (2025)",
  "Save Youth Core Workshop (2025)",
  "Our Green Campus - Eco-Community and Admin Lead (2025)",
  "Democracy from Theory to Practice - IFES and USAID (2025)",
  "Bangladesh National Cadet Corps - Flotilla Camping (2021)",
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          Education & Certifications
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
              <GraduationCap size={28} />
              Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl hover-lift border border-border/50 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {edu.field}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm whitespace-nowrap">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                  </div>
                  {edu.details && (
                    <p className="text-foreground/80 text-sm mt-3">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
              <GraduationCap size={28} />
              Certifications & Trainings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-card/80 backdrop-blur-sm p-4 rounded-2xl border border-border/50 hover-lift animate-fade-in-up"
                  style={{
                    animationDelay: `${(education.length + idx) * 0.05}s`,
                  }}
                >
                  <div className="flex gap-3">
                    <div className="text-primary mt-1 flex-shrink-0">✓</div>
                    <p className="text-foreground/90 text-sm">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
