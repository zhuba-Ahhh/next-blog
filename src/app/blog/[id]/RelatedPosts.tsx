import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { BlogPost } from "./types";

function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>相关文章</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {posts.map((relatedPost) => (
            <li key={relatedPost.id}>
              <Link
                href={`/blog/${relatedPost.id}`}
                className="text-primary hover:underline"
              >
                {relatedPost.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default RelatedPosts;