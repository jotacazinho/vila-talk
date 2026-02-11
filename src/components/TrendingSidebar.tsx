import { TrendingUp, Search } from "lucide-react";
import { trendingTopics } from "@/lib/mockData";

export default function TrendingSidebar() {
  return (
    <aside className="w-80 shrink-0 hidden lg:block">
      {/* Search */}
      <div className="sticky top-4 space-y-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar no Vila-Talk"
            className="w-full bg-secondary rounded-full pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>

        {/* Trending */}
        <div className="bg-card rounded-xl card-glow overflow-hidden">
          <h2 className="font-display font-bold text-lg px-4 pt-4 pb-2 flex items-center gap-2">
            <TrendingUp size={20} className="text-primary" />
            Em alta
          </h2>
          <div>
            {trendingTopics.map((topic, i) => (
              <button
                key={topic.tag}
                className="w-full text-left px-4 py-3 hover:bg-accent/50 transition-colors"
              >
                <p className="text-sm text-muted-foreground">Tendência #{i + 1}</p>
                <p className="font-display font-semibold text-foreground">{topic.tag}</p>
                <p className="text-sm text-muted-foreground">{topic.posts.toLocaleString("pt-BR")} posts</p>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground px-4">
          Vila-Talk © 2026 · 100% Anônimo · Feito com 🖤 para a torcida santista
        </p>
      </div>
    </aside>
  );
}
