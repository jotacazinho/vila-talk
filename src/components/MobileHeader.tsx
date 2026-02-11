import { useState } from "react";
import { Fish, Menu, X, Github, Linkedin, ShieldQuestion } from "lucide-react";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="md:hidden sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Fish size={24} className="text-primary" />
          <span className="font-display font-bold text-lg gold-text">Vila-Talk</span>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-foreground p-1"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/98 pt-16 px-6 animate-fade-in">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldQuestion size={18} className="text-primary" />
              <span className="text-sm">100% Anônimo</span>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground mb-3">Criador</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Vila-Talk © 2026 · Feito com 🖤 para a torcida santista
            </p>
          </div>
        </div>
      )}
    </>
  );
}
