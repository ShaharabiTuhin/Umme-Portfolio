import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none">
      <div className="fixed right-4 bottom-4 flex flex-col gap-3 pointer-events-auto z-50">
        {showTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-full bg-violet-600 text-white shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
          >
            <ArrowUp size={18} />
          </button>
        )}

        <button
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          className="w-12 h-12 rounded-full bg-gray-800 text-white/90 shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
        >
          <ArrowDown size={18} />
        </button>
      </div>
    </div>
  );
}
