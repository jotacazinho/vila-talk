import { Fish, Home, Bell, Hash, ShieldQuestion, Settings, Github, Linkedin } from "lucide-react";
import santosHero from "@/assets/santos-hero.jpg";

const navItems = [
  { icon: Home, label: "Início", active: true },
  { icon: Hash, label: "Trending" },
  { icon: Bell, label: "Notificações" },
  { icon: Settings, label: "Configurações" },
];

export default function LeftSidebar() {
  return (
    <nav className="w-64 shrink-0 hidden md:flex flex-col h-screen sticky top-0 border-r border-border">
      {/* Logo */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <Fish size={32} className="text-primary" />
          <span className="font-display font-bold text-xl gold-text">Vila-Talk</span>
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 px-2 py-2 space-y-1">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              active
                ? "bg-accent text-foreground font-semibold"
                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
            }`}
          >
            <Icon size={22} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Bottom card */}
      <div className="p-4 space-y-3">
        <div className="rounded-xl overflow-hidden relative h-28">
          <img src={santosHero} alt="Vila Belmiro" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-2 left-3 right-3">
            <div className="flex items-center gap-2">
              <ShieldQuestion size={16} className="text-primary" />
              <span className="text-xs text-muted-foreground">100% Anônimo</span>
            </div>
          </div>
        </div>

        {/* Creator links */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://github.com/jotacazinho"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/jotacazinho"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <span className="text-xs text-muted-foreground">by Calebi José</span>
        </div>
      </div>
    </nav>
  );
}
