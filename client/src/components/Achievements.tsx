import { useState } from "react";
import Modal from "./Modal";
import { Award, Trophy, Star } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    id: "ir-week",
    title: "First IR Week in Bangladesh",
    category: "Organizational Achievement",
    year: "2025",
    description:
      "Organized and executed the first-ever International Relations Week in the history of any IR Department in Bangladesh. This groundbreaking initiative brought together students, faculty, and professionals to celebrate international relations and diplomacy.",
    icon: <Trophy size={32} />,
  },
  {
    id: "career-summit",
    title: "CU Career Connect Summit 2026",
    category: "Event Management",
    year: "2026",
    description:
      "Successfully planned and executed a major career development summit connecting students with industry professionals, featuring keynote speakers, workshops, and networking sessions.",
    icon: <Star size={32} />,
  },
  {
    id: "rohingya-research",
    title: "Rohingya Camp Research Leadership",
    category: "Research Achievement",
    year: "2024-2025",
    description:
      "Led data collection efforts in Rohingya camps, Ukhiya, Cox's Bazar for the DFAT-AHP-IV Endline Survey Project. Managed diverse respondent groups including caregivers, adolescent girls, and persons with disabilities.",
    icon: <Award size={32} />,
  },
  {
    id: "climate-research",
    title: "Youth Transformative Climate Actions",
    category: "Research Achievement",
    year: "2024",
    description:
      "Conducted comprehensive survey research on climate awareness and behavioral practices across Chattogram Metropolitan Area. Assessed climate-related vulnerabilities and resilience strategies.",
    icon: <Star size={32} />,
  },
  {
    id: "gender-health",
    title: "Gender-Responsive Healthcare Research",
    category: "Research Achievement",
    year: "2024",
    description:
      "Conducted field research in urban slums collecting data from 45 women on healthcare access, health challenges, and climate-related vulnerabilities. Analyzed barriers to medical services and developed recommendations.",
    icon: <Award size={32} />,
  },
  {
    id: "unicef-passport",
    title: "UNICEF Passport to Earning Campus Associate",
    category: "Professional Achievement",
    year: "2025",
    description:
      "Served as Campus Associate for UNICEF's Passport to Earning initiative, bridging communication between international organization and university students. Supported student onboarding and contributed to KPI achievement.",
    icon: <Trophy size={32} />,
  },
  {
    id: "cucc-leadership",
    title: "CUCC General Secretary & PR Head",
    category: "Leadership Achievement",
    year: "2023-Present",
    description:
      "Led Public Relations and Communications for Chittagong University Career Club. Organized multiple major events including Speakup 2.0, Grameenphone Futuremakers, IDLC Campus to Corporate, and UNDP Futurenations.",
    icon: <Star size={32} />,
  },
  {
    id: "cuirs-board",
    title: "CUIRS Governing Board Member",
    category: "Leadership Achievement",
    year: "2024-Present",
    description:
      "Served on governing board of Chittagong University International Relations Society. Coordinated PR activities and contributed to organizing the historic IR Week 2025.",
    icon: <Award size={32} />,
  },
  {
    id: "safe-president",
    title: "SAFE President - International Development",
    category: "Leadership Achievement",
    year: "2025-Present",
    description:
      "President of Social Anticipation and Forecast Enterprise. Engaged with Save The Children and YPSA in BOOT camp programs. Organized International Model United Nations events.",
    icon: <Trophy size={32} />,
  },
  {
    id: "green-campus",
    title: "Our Green Campus Leadership",
    category: "Leadership Achievement",
    year: "2025-2026",
    description:
      "Head of Eco Community and Admin for Our Green Campus initiative. Managed organizational documentation, social media promotions, and executed innovative environmental awareness campaigns.",
    icon: <Star size={32} />,
  },
  {
    id: "child-rights",
    title: "Child Rights Advocacy - World Child & Youth Forum",
    category: "Social Impact",
    year: "2020-2021",
    description:
      "Served as Country Representative for Nigeria and Divisional Volunteer for Chittagong. Advocated for child and human rights, led protests, organized events, and collaborated with law enforcement to protect children from abuse, early marriage, and harassment.",
    icon: <Award size={32} />,
  },
  {
    id: "cadet-service",
    title: "Bangladesh National Cadet Corps Service",
    category: "Military Service",
    year: "2019-2021",
    description:
      "Served as Cadet Sergeant and Cadet In Charge in BN College Chittagong Platoon. Participated in military trainings and camps, developing leadership and discipline.",
    icon: <Trophy size={32} />,
  },
  {
    id: "first-aid",
    title: "First Aid & Medical Camp Organization",
    category: "Community Service",
    year: "2018-2019",
    description:
      "Red Crescent Youth Society volunteer. Organized free medical camps in corporation schools and provided First Aid training to fellow students, contributing to community health awareness.",
    icon: <Star size={32} />,
  },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  const categories = [
    "Organizational Achievement",
    "Event Management",
    "Research Achievement",
    "Professional Achievement",
    "Leadership Achievement",
    "Social Impact",
    "Military Service",
    "Community Service",
  ];

  return (
    <section id="achievements" className="py-20 bg-background/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Achievements & Milestones
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Key accomplishments and milestones in professional development,
          research, leadership, and community service
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <button
                key={achievement.id}
                onClick={() => setSelectedAchievement(achievement)}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 hover:border-primary/50 skill-card glow-effect cursor-pointer text-left group animate-fade-in-up transition-all"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                      {achievement.title}
                    </h4>
                    <p className="text-xs font-medium text-primary mt-1">
                      {achievement.year}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {achievement.category}
                </p>
                <div className="inline-flex items-center text-primary text-xs font-medium group-hover:gap-2 gap-1 transition-all">
                  View Details
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <Modal
          isOpen={!!selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          title={selectedAchievement.title}
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-primary bg-primary/10 p-4 rounded-lg flex-shrink-0">
                {selectedAchievement.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {selectedAchievement.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {selectedAchievement.category}
                  </span>
                  <span className="text-xs font-medium bg-accent text-foreground px-3 py-1 rounded-full">
                    {selectedAchievement.year}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-foreground/90 leading-relaxed">
              {selectedAchievement.description}
            </p>

            <div className="mt-6 pt-6 border-t border-border">
              <button
                onClick={() => setSelectedAchievement(null)}
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
