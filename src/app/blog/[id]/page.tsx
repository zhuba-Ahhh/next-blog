import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import Comments from "@/components/Comments";
import ReadingProgress from "@/components/ReadingProgress";
import { extractHeadings, estimateReadingTime } from "@/utils/blogHelpers";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogFooter from "./BlogFooter";
import RelatedPosts from "./RelatedPosts";
import ShareButtons from "./ShareButtons";
import TableOfContents from "./TableOfContents";
import { mdxComponents } from "./MdxComponents";
import type { BlogPost, Heading } from "./types";

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
    <div className="container mx-auto px-4 py-8">
      <ReadingProgress />
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <TableOfContents headings={headings} />
        </aside>
        <article className="md:w-3/4">
          <BlogHeader post={post} readingTime={readingTime} />
          <BlogContent
            content={post.content}
            components={mdxComponents}
          />
          <BlogFooter post={post} />
          <RelatedPosts posts={relatedPosts} />
          <ShareButtons
            url={`https://yourblog.com/blog/${post.id}`}
            title={post.title}
          />
          <div className="mt-16">
            <Comments />
          </div>
        </article>
      </div>
    </div>
  );
}
