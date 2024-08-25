import { Link } from "next-view-transitions";
import { Badge, Button } from "@/components/ui";
import { BlogPost } from "@/data/blogPosts";

interface BlogFooterProps {
  post: BlogPost;
}

export default function BlogFooter({ post }: BlogFooterProps) {
  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
            <Badge
              variant="secondary"
              className="cursor-pointer hover:bg-secondary-hover"
            >
              {tag}
            </Badge>
          </Link>
        ))}
      </div>
      <Button asChild variant="outline">
        <Link href="/blog">&larr; 返回博客列表</Link>
      </Button>
    </>
  );
}
