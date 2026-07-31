import { useState } from "react";
import Modal from "./Modal";
import { Award, Lightbulb, Users, Target } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  fullDesc: string;
}

const achievements: Achievement[] = [
  {
    id: "leadership",
    title: "Strategic Leadership",
    icon: <Users size={32} />,
    shortDesc: "Leading teams across 10+ organizations",
    fullDesc:
      "Demonstrated exceptional leadership through roles as General Secretary of Chittagong University Career Club, Governing Board Member of CUIRS, and President of SAFE. Successfully coordinated large-scale events including CU Career Connect Summit 2026 and organized the first-ever IR Week in Bangladesh. Led cross-functional teams in implementing strategic initiatives that impacted hundreds of students and professionals.",
  },
  {
    id: "research",
    title: "Data-Driven Research",
    icon: <Target size={32} />,
    shortDesc: "50+ respondents across multiple projects",
    fullDesc:
      "Conducted rigorous quantitative and qualitative research across diverse contexts including Rohingya camps, urban slums, and metropolitan areas. Proficient in using Kobo Toolbox for data collection, ensuring high-quality datasets from 45-50+ respondents per project. Specialized in climate resilience, gender-responsive healthcare, and disaster risk management research with international NGOs.",
  },
  {
    id: "innovation",
    title: "Strategic Innovation",
    icon: <Lightbulb size={32} />,
    shortDesc: "Driving sustainable development solutions",
    fullDesc:
      "Pioneered innovative approaches to international development challenges through participation in UNICEF's Passport to Earning initiative and Save the Children projects. Developed strategic communication frameworks for climate action and health equity. Organized Bangladesh's first International Model United Nations, demonstrating ability to conceptualize and execute complex initiatives.",
  },
  {
    id: "impact",
    title: "Sustainable Impact",
    icon: <Award size={32} />,
    shortDesc: "Contributing to global development goals",
    fullDesc:
      "Committed to driving measurable impact in international development through evidence-based approaches. Worked on projects addressing climate resilience, gender equality, health equity, and disaster risk management. Recognized for exceptional contributions through multiple certifications and organizational roles, with proven track record of translating research into actionable policy recommendations.",
  },
];

export default function AboutEnhanced() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:col-span-1 animate-fade-in-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-2xl glow-effect"></div>
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEf36oZN18e_Q/profile-displayphoto-crop_800_800/B56Z.xeVR2GUAI-/0/1785388947604?e=1787184000&v=beta&t=Ymy-oOiItWSxLkTM3ISMYKhLiCQU8XvJCCRZf66CrJ0"
                  alt="Umme Homaira Saika Afsar"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/30 shadow-2xl float-effect"
                />
              </div>
            </div>

            {/* About Text */}
            <div
              className="md:col-span-2 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Me
              </h2>

              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  I am a highly motivated and strategic-minded final-year
                  International Relations student at the University of
                  Chittagong, with a passion for driving sustainable impact in
                  international development and climate resilience.
                </p>

                <p className="text-lg">
                  My professional journey has been shaped by hands-on experience
                  in high-level leadership, public relations, and data-driven
                  research. I have worked extensively with international NGOs on
                  climate resilience projects and disaster risk management,
                  conducting fieldwork in diverse communities including Rohingya
                  camps and urban slums.
                </p>

                <p className="text-lg">
                  I am characterized by being energetic, data-driven, and a
                  strategic innovator. My core strengths lie in translating
                  complex research into actionable insights, leading
                  cross-functional teams, and communicating effectively with
                  diverse stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Key Achievements & Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <button
                key={achievement.id}
                onClick={() => setSelectedAchievement(achievement)}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 hover:border-primary/50 skill-card glow-effect cursor-pointer text-left group animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {achievement.title}
                    </h4>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm group-hover:text-foreground/90 transition-smooth">
                  {achievement.shortDesc}
                </p>
                <div className="mt-4 inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
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
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-primary bg-primary/10 p-4 rounded-lg">
                {selectedAchievement.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {selectedAchievement.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {selectedAchievement.shortDesc}
                </p>
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
                {selectedAchievement.fullDesc}
              </p>
            </div>

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
