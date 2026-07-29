export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              I am a highly motivated and strategic-minded final-year International Relations student 
              at the University of Chittagong, with a passion for driving sustainable impact in 
              international development and climate resilience.
            </p>

            <p className="text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              My professional journey has been shaped by hands-on experience in high-level leadership, 
              public relations, and data-driven research. I have worked extensively with international 
              NGOs on climate resilience projects and disaster risk management, conducting fieldwork 
              in diverse communities including Rohingya camps and urban slums.
            </p>

            <p className="text-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              I am characterized by being energetic, data-driven, and a strategic innovator. My core 
              strengths lie in translating complex research into actionable insights, leading cross-functional 
              teams, and communicating effectively with diverse stakeholders. I am committed to leveraging 
              evidence-based approaches to address global challenges in sustainable development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center animate-fade-in-up hover-lift p-4 rounded-lg" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Survey Respondents</p>
              </div>
              <div className="text-center animate-fade-in-up hover-lift p-4 rounded-lg" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-sm text-muted-foreground">NGO Projects</p>
              </div>
              <div className="text-center animate-fade-in-up hover-lift p-4 rounded-lg" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Leadership Roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
