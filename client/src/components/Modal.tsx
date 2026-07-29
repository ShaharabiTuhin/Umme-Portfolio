import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 modal-overlay"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl border border-border/70 max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-content shadow-2xl backdrop-blur-xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary/20 to-primary/5 px-6 py-4 border-b border-border flex items-center justify-between backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-foreground/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
