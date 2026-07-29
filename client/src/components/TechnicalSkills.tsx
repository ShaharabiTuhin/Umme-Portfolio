import { useState } from "react";
import Modal from "./Modal";
import { Code2, Database, Briefcase } from "lucide-react";

interface TechnicalSkill {
  id: string;
  name: string;
  category: string;
  proficiency: string;
  description: string;
  tools?: string[];
}

const technicalSkills: TechnicalSkill[] = [
  {
    id: "ms-office",
    name: "Microsoft Office Suite",
    category: "Productivity Tools",
    proficiency: "Advanced",
    description:
      "Expert-level proficiency in Microsoft Office applications including Word for document creation, Excel for data analysis and spreadsheet management, and PowerPoint for professional presentations.",
    tools: [
      "Word",
      "Excel",
      "PowerPoint",
      "Data Analysis",
      "Pivot Tables",
      "Formulas",
    ],
  },
  {
    id: "excel",
    name: "Excel Data Analysis",
    category: "Data Tools",
    proficiency: "Advanced",
    description:
      "Advanced Excel skills for data manipulation, analysis, and visualization. Proficient in creating complex formulas, pivot tables, charts, and data-driven reports for research and organizational needs.",
    tools: [
      "Pivot Tables",
      "VLOOKUP",
      "Data Visualization",
      "Statistical Functions",
      "Data Cleaning",
    ],
  },
  {
    id: "kobo-toolbox",
    name: "Kobo Toolbox",
    category: "Data Collection",
    proficiency: "Advanced",
    description:
      "Proficient in using Kobo Toolbox for structured data collection in field research settings. Experience in designing surveys, managing respondent data, and ensuring data quality in diverse contexts including Rohingya camps and urban slums.",
    tools: [
      "Survey Design",
      "Data Collection",
      "Quality Control",
      "Data Export",
      "Field Management",
    ],
  },
  {
    id: "canva",
    name: "Canva Graphic Design",
    category: "Design Tools",
    proficiency: "Intermediate",
    description:
      "Skilled in using Canva for creating professional graphics, social media content, promotional materials, and organizational communications. Used extensively for CUCC and Our Green Campus social media campaigns.",
    tools: [
      "Social Media Graphics",
      "Posters",
      "Infographics",
      "Presentations",
      "Brand Materials",
    ],
  },
  {
    id: "capcut",
    name: "Capcut Video Editing",
    category: "Media Production",
    proficiency: "Intermediate",
    description:
      "Proficient in video editing using Capcut for creating engaging multimedia content. Used for organizational promotions, event coverage, and social media content creation.",
    tools: [
      "Video Editing",
      "Transitions",
      "Effects",
      "Audio Management",
      "Social Media Optimization",
    ],
  },
  {
    id: "survey-design",
    name: "Survey Design & Research Methodology",
    category: "Research Tools",
    proficiency: "Advanced",
    description:
      "Expert in designing structured surveys and implementing quantitative research methodologies. Experience with diverse respondent groups including vulnerable populations, ensuring ethical data collection and quality assurance.",
    tools: [
      "Questionnaire Design",
      "Sampling Methods",
      "Data Quality",
      "Ethical Research",
      "FGD Facilitation",
    ],
  },
  {
    id: "qualitative-research",
    name: "Qualitative Research Methods",
    category: "Research Tools",
    proficiency: "Advanced",
    description:
      "Skilled in qualitative research methodologies including focus group discussions, note-taking, and thematic analysis. Experience documenting participant responses and extracting key insights for policy recommendations.",
    tools: [
      "Focus Group Discussions",
      "In-depth Interviews",
      "Note-taking",
      "Thematic Analysis",
      "Narrative Analysis",
    ],
  },
  {
    id: "data-management",
    name: "Data Management & Analysis",
    category: "Data Tools",
    proficiency: "Advanced",
    description:
      "Comprehensive data management skills including collection, cleaning, organization, and analysis. Proficient in ensuring data accuracy, quality control, and compliance with research protocols.",
    tools: [
      "Data Cleaning",
      "Database Management",
      "Quality Assurance",
      "Data Validation",
      "Reporting",
    ],
  },
];

export default function TechnicalSkills() {
  const [selectedSkill, setSelectedSkill] = useState<TechnicalSkill | null>(
    null
  );

  const categories = [
    "Productivity Tools",
    "Data Tools",
    "Data Collection",
    "Design Tools",
    "Media Production",
    "Research Tools",
  ];

  return (
    <section id="technical-skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Technical Skills & Tools
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Proficiency in industry-standard tools and software for data
          collection, analysis, design, and research
        </p>

        <div className="max-w-6xl mx-auto">
          {categories.map((category, categoryIdx) => {
            const categorySkills = technicalSkills.filter(
              s => s.category === category
            );
            return (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  {categoryIdx < 2 ? (
                    <Code2 size={28} />
                  ) : categoryIdx < 4 ? (
                    <Database size={28} />
                  ) : (
                    <Briefcase size={28} />
                  )}
                  {category}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categorySkills.map((skill, skillIdx) => (
                    <button
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      className="bg-card/80 backdrop-blur-sm p-5 rounded-2xl border border-primary/20 hover:border-primary/50 skill-card glow-effect cursor-pointer text-left group animate-fade-in-up transition-all"
                      style={{
                        animationDelay: `${(categoryIdx * 2 + skillIdx) * 0.08}s`,
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

            {selectedSkill.tools && (
              <div>
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Tools & Capabilities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

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
