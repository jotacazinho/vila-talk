import { Home, Hash, Bell, Settings } from "lucide-react";

const tabs = [
  { icon: Home, label: "Início", active: true },
  { icon: Hash, label: "Trending" },
  { icon: Bell, label: "Alertas" },
  { icon: Settings, label: "Config" },
];

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="flex items-center justify-around py-2">
        {tabs.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
              active ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon size={22} />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
