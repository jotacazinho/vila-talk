import { Fish, Flame, Clock } from "lucide-react";
import { useState } from "react";

export default function FeedHeader() {
  const [tab, setTab] = useState<"trending" | "recent">("trending");

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="px-4 py-3 flex items-center gap-3">
        <Fish size={28} className="text-primary" />
        <h1 className="font-display font-bold text-xl gold-text">Vila-Talk</h1>
      </div>
      <div className="flex">
        <button
          onClick={() => setTab("trending")}
          className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
            tab === "trending" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="flex items-center justify-center gap-1.5">
            <Flame size={16} /> Em Alta
          </span>
          {tab === "trending" && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full gold-gradient" />
          )}
        </button>
        <button
          onClick={() => setTab("recent")}
          className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
            tab === "recent" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="flex items-center justify-center gap-1.5">
            <Clock size={16} /> Recentes
          </span>
          {tab === "recent" && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full gold-gradient" />
          )}
        </button>
      </div>
    </header>
  );
}
