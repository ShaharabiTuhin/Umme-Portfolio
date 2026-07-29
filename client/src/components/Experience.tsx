import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: "professional" | "leadership";
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Enumerator",
    organization:
      "DFAT-AHP-IV Endline Survey Project, Chittagong Qualitative Research & Save The Children",
    period: "2024 - 2025",
    description: [
      "Conducted quantitative data collection for DFAT-AHP-IV Endline Survey in Rohingya camps, Ukhiya, Cox's Bazar using Kobo Toolbox",
      "Collected data from diverse respondent groups including caregivers, adolescent girls, and persons with disabilities (PWDs)",
      "Served as Note Taker during Focus Group Discussions (FGDs), documenting key insights for qualitative research",
    ],
    type: "professional",
  },
  {
    title: "Youth Transformative Climate Actions Researcher",
    organization: "Urban Resilience in Bangladesh Project",
    period: "2024",
    description: [
      "Collected survey data from adult respondents across Chattogram Metropolitan Area",
      "Assessed climate awareness and climate-related behavioral practices through structured interviews",
      "Ensured data accuracy, quality control, and compliance with survey protocols during 5-day fieldwork period",
    ],
    type: "professional",
  },
  {
    title: "Field Researcher",
    organization: "Gender Responsive Health Care System in Bangladesh",
    period: "2024",
    description: [
      "Conducted 5-day field survey in Tangte Pahar and Jamtoli slums in Chattogram",
      "Collected data from 45 women aged 18-60 on healthcare access and climate vulnerabilities using KoboToolbox",
      "Ensured high-quality data collection through structured face-to-face interviews and adherence to survey guidelines",
    ],
    type: "professional",
  },
  {
    title: "Project Associate",
    organization: "UNICEF Passport to Earning Initiative | SHOMVOB",
    period: "2025",
    description: [
      'Served as Campus Associate for UNICEF\'s "Project Passport to Earning" initiative',
      "Acted as bridge between project team and University of Chittagong students for effective communication",
      "Supported student onboarding and course completion, contributing to KPI achievement",
    ],
    type: "professional",
  },
];

const leadershipRoles = [
  {
    title: "General Secretary",
    organization: "Chittagong University Career Club (CUCC)",
    period: "2023 - Present",
    description: [
      "Head of Public Relations and Communications",
      "Arranged programs: Speakup 2.0, CU Career Connect Summit 2026, Grameenphone Futuremakers, IDLC presents from Campus to Corporate",
    ],
    type: "leadership" as const,
  },
  {
    title: "Governing Board Member",
    organization:
      "Chittagong University International Relations Society (CUIRS)",
    period: "2024 - Present",
    description: [
      "Assistant coordinator of PR wing",
      "Organized IR week 2025 for the first time in history of any IR Department in Bangladesh",
    ],
    type: "leadership" as const,
  },
  {
    title: "President",
    organization:
      "Social Anticipation and Forecast Enterprise (SAFE) | YPSA | Save The Children",
    period: "2025 - Present",
    description: [
      "Engaged in The BOOT camp arranged by Save The Children and YPSA in Gulshan, Dhaka",
      "Organized International Model United Nations",
    ],
    type: "leadership" as const,
  },
  {
    title: "Head of Eco Community and Admin",
    organization: "Our Green Campus, CU",
    period: "2025 - 2026",
    description: [
      "Handled all documentation of the organization",
      "Managed social media promotions and advertisements with innovative idea execution",
    ],
    type: "leadership" as const,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          Professional Experience
        </h2>

        {/* Professional Experience */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <Briefcase size={28} />
            Professional Roles
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl hover-lift border border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h4>
                    <p className="text-primary font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm whitespace-nowrap">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((desc, descIdx) => (
                    <li key={descIdx} className="text-foreground/80 flex gap-3">
                      <span className="text-primary mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <Briefcase size={28} />
            Leadership & Organizational Roles
          </h3>
          <div className="space-y-6">
            {leadershipRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl hover-lift border border-border/50 animate-fade-in-up"
                style={{
                  animationDelay: `${(experiences.length + idx) * 0.1}s`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">
                      {role.title}
                    </h4>
                    <p className="text-primary font-medium">
                      {role.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm whitespace-nowrap">
                    <Calendar size={16} />
                    {role.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {role.description.map((desc, descIdx) => (
                    <li key={descIdx} className="text-foreground/80 flex gap-3">
                      <span className="text-primary mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
