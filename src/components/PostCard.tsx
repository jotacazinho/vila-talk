import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { generateAvatarColor } from "@/lib/anonymousNames";
import type { Post } from "@/lib/mockData";

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

interface PostCardProps {
  post: Post;
  onLike: (id: string) => void;
}

export default function PostCard({ post, onLike }: PostCardProps) {
  const avatarColor = generateAvatarColor(post.author);
  const initials = post.author.slice(0, 2).toUpperCase();

  return (
    <article className="border-b border-border px-4 py-4 transition-colors hover:bg-accent/30 animate-fade-in">
      <div className="flex gap-3">
        {/* Avatar */}
        <div
          className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground"
          style={{ backgroundColor: avatarColor }}
        >
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          {/* Header */}
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-foreground truncate">
              {post.author}
            </span>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="text-muted-foreground text-sm">{timeAgo(post.timestamp)}</span>
            <button className="ml-auto text-muted-foreground hover:text-foreground transition-colors">
              <MoreHorizontal size={16} />
            </button>
          </div>

          {/* Content */}
          <p className="mt-1 text-foreground leading-relaxed">{post.content}</p>

          {/* Actions */}
          <div className="mt-3 flex items-center gap-8">
            <button className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">{post.comments}</span>
            </button>

            <button
              onClick={() => onLike(post.id)}
              className={`group flex items-center gap-2 transition-colors ${
                post.liked ? "text-destructive" : "text-muted-foreground hover:text-destructive"
              }`}
            >
              <Heart
                size={18}
                className={`group-hover:scale-110 transition-transform ${post.liked ? "fill-current" : ""}`}
              />
              <span className="text-sm">{post.likes}</span>
            </button>

            <button className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Share2 size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
