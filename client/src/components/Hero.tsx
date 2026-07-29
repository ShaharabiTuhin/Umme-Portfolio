import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-[1px]"
        style={{
          backgroundImage: "url(/manus-storage/hero-background_10bc9e29.png)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.28),transparent_35%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_32%),linear-gradient(180deg,transparent,rgba(11,7,24,0.82))]" />
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <Sparkles size={14} />
              Strategic Communicator
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
              <span className="text-gradient block">Umme Homaira</span>
              <span className="block">Saika Afsar</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground font-medium">
              Strategic communicator and data-driven innovator shaping climate
              resilience, research, and international development.
            </p>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground/90 leading-relaxed">
              Driving sustainable impact through evidence-based storytelling,
              cross-functional leadership, and work that bridges policy, people,
              and measurable outcomes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection("experience")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-smooth btn-active hover:shadow-[0_0_28px_rgba(168,85,247,0.48)]"
              >
                Explore My Work
                <ArrowRight size={18} />
              </button>
              <a
                href="mailto:saikaafsar@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-card/70 px-8 py-3.5 font-medium text-foreground transition-smooth hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <a
                href="tel:+8801609509025"
                className="rounded-full border border-border/70 bg-card/60 px-4 py-2 transition-smooth hover:border-primary/40 hover:text-primary"
              >
                +880 1609509025
              </a>
              <a
                href="mailto:saikaafsar@gmail.com"
                className="rounded-full border border-border/70 bg-card/60 px-4 py-2 transition-smooth hover:border-primary/40 hover:text-primary"
              >
                saikaafsar@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/UmmeSaika"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border/70 bg-card/60 px-4 py-2 transition-smooth hover:border-primary/40 hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/70 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_42%)]" />
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQE5F-QSj-DLkQ/profile-displayphoto-shrink_400_400/B56ZPk7FhDGsAg-/0/1734712516083?e=2147483647&v=beta&t=3_cLslc7c-J4JBMPw9qj2VjrQFf5qF5AKB-drAKmxJA"
                alt="Umme Homaira Saika Afsar"
                className="relative z-10 aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
              <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Communication, climate resilience, research
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">
                    Available
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    For strategic collaborations and roles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce rounded-full border border-primary/20 bg-background/70 p-2 text-primary shadow-[0_0_24px_rgba(168,85,247,0.22)] backdrop-blur transition-smooth hover:text-primary/80"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
