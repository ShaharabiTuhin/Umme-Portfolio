import { useState, useEffect } from "react";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(79,70,229,0.12)] border-b border-border/70"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand Name */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary hidden sm:inline tracking-[0.18em] uppercase">
            Umme Saika
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
          >
            Achievements
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
          >
            Skills
          </button>
          <a
            href="mailto:saikaafsar@gmail.com"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-[0_0_24px_rgba(168,85,247,0.45)] transition-smooth btn-active text-sm font-medium"
          >
            Contact
          </a>
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center size-10 rounded-full border border-border/80 bg-card/70 text-primary transition-smooth hover:shadow-[0_0_24px_rgba(168,85,247,0.3)]"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <SunMedium size={18} />
              ) : (
                <MoonStar size={18} />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center size-10 rounded-full border border-border/80 bg-card/70 text-primary"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <SunMedium size={18} />
              ) : (
                <MoonStar size={18} />
              )}
            </button>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/70 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              Skills
            </button>
            <a
              href="mailto:saikaafsar@gmail.com"
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-[0_0_24px_rgba(168,85,247,0.45)] transition-smooth text-center font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
