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
  const postIndex = blogPosts.findIndex((p) => p.id.toString() === params.id);
  const post = blogPosts[postIndex];

  if (!post) {
    notFound();
  }

  const headings: Heading[] = extractHeadings(post.content);
  const [readingTime, wordCount] = estimateReadingTime(post.content);

  const relatedPosts: BlogPost[] = blogPosts
    .filter(
      (p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : void 0;
  const nextPost =
    postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : void 0;

  return (
    <>
      <ReadingProgress />
      <AnimatedBlogPost
        post={post}
        headings={headings}
        readingTime={readingTime}
        wordCount={wordCount}
        relatedPosts={relatedPosts}
        prevPost={prevPost}
        nextPost={nextPost}
      />
    </>
  );
}
