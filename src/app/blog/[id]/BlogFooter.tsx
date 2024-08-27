import { Link } from "next-view-transitions";
import { Badge, Button } from "@/components/ui";
import { BlogPost } from "@/data/blogPosts";

interface BlogFooterProps {
  post: BlogPost;
  prevPost?: BlogPost;
  nextPost?: BlogPost;
}

export default function BlogFooter({
  post,
  prevPost,
  nextPost,
}: BlogFooterProps) {
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
      <div className="flex justify-between items-center">
        <div className="flex-1 flex justify-start">
          {prevPost && (
            <Button asChild variant="outline">
              <Link href={`/blog/${prevPost.id}`}>
                &larr; 上一篇: {prevPost.title}
              </Link>
            </Button>
          )}
        </div>
        <div className="flex-shrink-0 mx-2">
          <Button asChild variant="outline">
            <Link href="/blog">返回博客列表</Link>
          </Button>
        </div>
        <div className="flex-1 flex justify-end">
          {nextPost ? (
            <Button asChild variant="outline">
              <Link href={`/blog/${nextPost.id}`}>
                下一篇: {nextPost.title} &rarr;
              </Link>
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
