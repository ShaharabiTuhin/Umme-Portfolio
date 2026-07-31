import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/95 text-foreground/80 py-16 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* About */}
            <div className="animate-fade-in-up">
              <h3 className="text-lg font-bold mb-4">Umme Saika</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Strategic communicator and data-driven innovator in
                international development and climate resilience.
              </p>
            </div>

            {/* Quick Links */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("about");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-foreground/70 hover:text-foreground transition-smooth"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("experience");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-foreground/70 hover:text-foreground transition-smooth"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("education");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-foreground/70 hover:text-foreground transition-smooth"
                  >
                    Education
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("skills");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-foreground/70 hover:text-foreground transition-smooth"
                  >
                    Skills
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-smooth">
                  <Mail size={16} />
                  <a href="mailto:saikaafsar@gmail.com">saikaafsar@gmail.com</a>
                </li>
                <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-smooth">
                  <Phone size={16} />
                  <a href="tel:+8801609509025">+880 1609509025</a>
                </li>
                <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-smooth">
                  <MapPin size={16} />
                  <span>Chattogram, Bangladesh</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-smooth">
                  <Linkedin size={16} />
                  <a
                    href="https://www.linkedin.com/in/UmmeSaika"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60 gap-4">
              <p>
                © {currentYear} Umme Homaira Saika Afsar. All rights reserved.
              </p>
              <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
                <p>
                  Crafted with care for meaningful impact in international
                  development.
                </p>
                <p>
                  Developed by{" "}
                  <a
                    href="https://www.linkedin.com/in/shaharabi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-smooth"
                  >
                    Gazi Shaharabi Anwar Tuhn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
