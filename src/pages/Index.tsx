import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "@/components/LeftSidebar";
import FeedHeader from "@/components/FeedHeader";
import ComposePost from "@/components/ComposePost";
import PostCard from "@/components/PostCard";
import TrendingSidebar from "@/components/TrendingSidebar";
import MobileHeader from "@/components/MobileHeader";
import MobileNav from "@/components/MobileNav";
import { type Post } from "@/lib/mockData";
import { generateAnonymousName } from "@/lib/anonymousNames";
import { getUserRole, canPost } from "@/lib/userRole";

const Index = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const role = getUserRole();

  useEffect(() => {
    if (!role) {
      navigate("/welcome");
    }
  }, [role, navigate]);

  const handlePost = (content: string) => {
    const newPost: Post = {
      id: `post-${Date.now()}`,
      author: generateAnonymousName(),
      content,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      liked: false,
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 }
          : p
      )
    );
  };

  if (!role) return null;

  return (
    <div className="flex min-h-screen bg-background">
      <LeftSidebar />
      <main className="flex-1 max-w-[600px] border-r border-border min-h-screen pb-16 md:pb-0">
        <MobileHeader />
        <div className="hidden md:block">
          <FeedHeader />
        </div>
        {canPost(role) ? (
          <ComposePost onPost={handlePost} />
        ) : (
          <div className="border-b border-border px-4 py-6 text-center text-muted-foreground text-sm">
            Você está no modo leitura. Apenas torcedores e jornalistas verificados podem postar.
          </div>
        )}
        <div>
          {posts.length === 0 && (
            <div className="px-4 py-12 text-center text-muted-foreground">
              <p className="font-display text-lg">Nenhum post ainda</p>
              <p className="text-sm mt-1">Seja o primeiro a postar!</p>
            </div>
          )}
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onLike={handleLike} />
          ))}
        </div>
      </main>
      <TrendingSidebar />
      <MobileNav />
    </div>
  );
};

export default Index;
