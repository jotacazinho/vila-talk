import { useState } from "react";
import { Send, ShieldQuestion } from "lucide-react";

interface ComposePostProps {
  onPost: (content: string) => void;
}

export default function ComposePost({ onPost }: ComposePostProps) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content.trim());
      setContent("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  return (
    <div className="border-b border-border px-4 py-4">
      <div className="flex gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-secondary flex items-center justify-center">
          <ShieldQuestion size={20} className="text-primary" />
        </div>
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="O que tá rolando na Vila? Fala aí, anônimo..."
            className="w-full resize-none bg-transparent text-foreground placeholder:text-muted-foreground outline-none min-h-[80px] text-base"
            maxLength={280}
          />
          <div className="flex items-center justify-between mt-2">
            <span className={`text-sm ${content.length > 250 ? "text-destructive" : "text-muted-foreground"}`}>
              {content.length}/280
            </span>
            <button
              onClick={handleSubmit}
              disabled={!content.trim()}
              className="gold-gradient px-5 py-2 rounded-full font-display font-semibold text-sm text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Send size={14} />
              Postar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
