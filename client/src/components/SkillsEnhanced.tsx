import { useState } from "react";
import Modal from "./Modal";
import { Zap } from "lucide-react";

interface SkillDetail {
  id: string;
  name: string;
  category: string;
  proficiency: string;
  description: string;
  applications: string[];
}

const skillDetails: SkillDetail[] = [
  {
    id: "strategic-planning",
    name: "Strategic Planning",
    category: "Core Competencies",
    proficiency: "Expert",
    description:
      "Expertise in developing long-term strategies for organizational initiatives and international development projects.",
    applications: [
      "Designed strategic frameworks for CU Career Club initiatives",
      "Planned and executed CU Career Connect Summit 2026",
      "Developed project implementation strategies for UNICEF and Save the Children",
      "Created communication strategies for climate action campaigns",
    ],
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    category: "Core Competencies",
    proficiency: "Advanced",
    description:
      "Proficient in collecting, analyzing, and interpreting quantitative and qualitative data using industry-standard tools.",
    applications: [
      "Conducted surveys with 50+ respondents using Kobo Toolbox",
      "Analyzed climate awareness patterns across metropolitan areas",
      "Processed healthcare and gender-responsive data from vulnerable populations",
      "Generated insights for policy recommendations",
    ],
  },
  {
    id: "team-leadership",
    name: "Team Leadership",
    category: "Core Competencies",
    proficiency: "Advanced",
    description:
      "Demonstrated leadership across multiple organizations with proven ability to motivate and coordinate teams.",
    applications: [
      "Led PR and Communications wing at CUCC",
      "Managed cross-functional teams for event organization",
      "Coordinated with international NGO partners",
      "Mentored junior team members and campus ambassadors",
    ],
  },
  {
    id: "emotional-intelligence",
    name: "Emotional Intelligence",
    category: "Soft Skills",
    proficiency: "Advanced",
    description:
      "Strong ability to understand and manage emotions in diverse stakeholder environments.",
    applications: [
      "Conducted sensitive interviews with vulnerable populations",
      "Managed stakeholder relationships with NGOs and government agencies",
      "Facilitated focus group discussions with diverse participant groups",
      "Built trust with Rohingya camp residents and urban slum communities",
    ],
  },
  {
    id: "problem-solving",
    name: "Problem-Solving",
    category: "Soft Skills",
    proficiency: "Advanced",
    description:
      "Creative and analytical approach to addressing complex development challenges.",
    applications: [
      "Designed solutions for climate resilience in urban settings",
      "Addressed healthcare access barriers in underserved communities",
      "Developed innovative event formats (first IR Week in Bangladesh)",
      "Created engagement strategies for student recruitment",
    ],
  },
  {
    id: "climate-resilience",
    name: "Climate Resilience",
    category: "Domain Expertise",
    proficiency: "Expert",
    description:
      "Specialized knowledge in climate change adaptation, disaster risk management, and resilience building.",
    applications: [
      "Conducted Youth Transformative Climate Actions research",
      "Assessed climate awareness and behavioral practices",
      "Analyzed climate-related vulnerabilities in health systems",
      "Contributed to climate resilience policy recommendations",
    ],
  },
  {
    id: "gender-responsive",
    name: "Gender-Responsive Approaches",
    category: "Domain Expertise",
    proficiency: "Advanced",
    description:
      "Expertise in gender-sensitive research and program implementation in development contexts.",
    applications: [
      "Conducted research on gender-responsive healthcare systems",
      "Interviewed 45 women on health and climate vulnerabilities",
      "Advocated for gender equality through organizational roles",
      "Implemented gender-sensitive data collection protocols",
    ],
  },
  {
    id: "public-relations",
    name: "Public Relations & Communication",
    category: "Soft Skills",
    proficiency: "Advanced",
    description:
      "Skilled in crafting compelling narratives and managing organizational communications.",
    applications: [
      "Headed PR and Communications at CUCC",
      "Managed social media and promotional campaigns",
      "Organized major awareness-building events",
      "Developed communication strategies for development initiatives",
    ],
  },
];

export default function SkillsEnhanced() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const categories = ["Core Competencies", "Soft Skills", "Domain Expertise"];

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          Skills & Expertise
        </h2>

        <div className="max-w-6xl mx-auto">
          {categories.map((category, categoryIdx) => {
            const categorySkills = skillDetails.filter(
              s => s.category === category
            );
            return (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Zap size={28} />
                  {category}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill, skillIdx) => (
                    <button
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      className="bg-card/80 backdrop-blur-sm p-5 rounded-2xl border border-primary/20 hover:border-primary/50 skill-card glow-effect cursor-pointer text-left group animate-fade-in-up transition-all"
                      style={{
                        animationDelay: `${(categoryIdx * 3 + skillIdx) * 0.08}s`,
                      }}
                    >
                      <div className="mb-3">
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-smooth">
                          {skill.name}
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {skill.proficiency}
                          </span>
                        </div>
                      </div>
                      <p className="text-foreground/70 text-sm group-hover:text-foreground/90 transition-smooth line-clamp-2">
                        {skill.description}
                      </p>
                      <div className="mt-4 inline-flex items-center text-primary text-xs font-medium group-hover:gap-2 gap-1 transition-all">
                        Learn More
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedSkill && (
        <Modal
          isOpen={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
          title={selectedSkill.name}
        >
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  {selectedSkill.category}
                </span>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {selectedSkill.proficiency}
                </span>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">
                Applications & Experience
              </h4>
              <ul className="space-y-3">
                {selectedSkill.applications.map((app, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/80">
                    <span className="text-primary font-bold flex-shrink-0">
                      •
                    </span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-smooth btn-active"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
