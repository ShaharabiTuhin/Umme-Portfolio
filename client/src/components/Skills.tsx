import { Zap } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Technical Skills',
    skills: [
      'Microsoft Office',
      'Excel',
      'Capcut',
      'PowerPoint',
      'Canva',
      'Kobo Toolbox',
      'Data Collection'
    ]
  },
  {
    name: 'Core Competencies',
    skills: [
      'Strategic Planning',
      'Data Analytics',
      'Insights Optimization',
      'Partnership Management',
      'Team Leadership',
      'Project Management'
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      'Emotional Intelligence',
      'Problem-Solving',
      'Analytical Reasoning',
      'Curiosity',
      'Adaptiveness',
      'Communication',
      'Public Relations',
      'Stakeholder Engagement'
    ]
  },
  {
    name: 'Domain Expertise',
    skills: [
      'Climate Resilience',
      'Disaster Risk Management',
      'International Development',
      'Gender Responsive Approaches',
      'Health Systems',
      'Qualitative Research',
      'Quantitative Research'
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
          Skills & Expertise
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIdx) => (
              <div
                key={categoryIdx}
                className="bg-white p-6 rounded-lg border border-border/50 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${categoryIdx * 0.15}s` }}
              >
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Zap size={24} />
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 rounded-full text-sm font-medium hover:shadow-md transition-smooth animate-fade-in-up"
                      style={{ animationDelay: `${(categoryIdx * 7 + skillIdx) * 0.05}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Strengths */}
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-lg border border-primary/20 animate-fade-in-up">
            <h3 className="text-xl font-bold text-foreground mb-4">Key Strengths</h3>
            <p className="text-foreground/90 leading-relaxed">
              I combine strategic thinking with hands-on execution, translating complex research into 
              actionable insights. My strength lies in bridging the gap between data and decision-making, 
              leading cross-functional teams, and communicating effectively with diverse stakeholders. 
              I am particularly skilled at designing and implementing data collection methodologies, 
              managing international development projects, and driving organizational initiatives that 
              create sustainable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
