import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import ReadingProgress from "@/components/blog/id/ReadingProgress";
import { extractHeadings, estimateReadingTime } from "@/utils/blogHelpers";
import type { Heading } from "./types";
import type { BlogPost } from "@/data/blogPosts";
import dynamic from "next/dynamic";

const AnimatedBlogPost = dynamic(() => import("./AnimatedBlogPost"), {
  ssr: false,
});

interface BlogPostParams {
  params: { id: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = blogPosts.find((p) => p.id.toString() === params.id) as
    | BlogPost
    | undefined;

  if (!post) {
    notFound();
  }

  const headings: Heading[] = extractHeadings(post.content);
  const readingTime: number = estimateReadingTime(post.content);

  const relatedPosts: BlogPost[] = blogPosts
    .filter(
      (p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <AnimatedBlogPost
        post={post}
        headings={headings}
        readingTime={readingTime}
        relatedPosts={relatedPosts}
      />
    </>
  );
}
