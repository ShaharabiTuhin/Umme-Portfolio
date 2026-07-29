import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutEnhanced from "@/components/AboutEnhanced";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import SkillsEnhanced from "@/components/SkillsEnhanced";
import TechnicalSkills from "@/components/TechnicalSkills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutEnhanced />
        <Experience />
        <Education />
        <Achievements />
        <SkillsEnhanced />
        <TechnicalSkills />
      </main>
      <Footer />
    </div>
  );
}
