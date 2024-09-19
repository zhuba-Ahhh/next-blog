"use client";

import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogFooter from "./BlogFooter";
import RelatedPosts from "./RelatedPosts";
import ShareButtons from "./ShareButtons";
import TableOfContents from "./TableOfContents";
import ScrollToTop from "@/components/blog/id/ScrollToTop";
import Comments from "@/components/blog/id/Comments";
import { mdxComponents } from "./MdxComponents";
import type { Heading } from "./types";
import type { BlogPost } from "@/data/blogPosts";

interface AnimatedBlogPostProps {
  post: BlogPost;
  headings: Heading[];
  readingTime: number;
  wordCount: number;
  relatedPosts: BlogPost[];
  prevPost?: BlogPost;
  nextPost?: BlogPost;
}

export default function AnimatedBlogPost({
  post,
  prevPost,
  nextPost,
  headings,
  wordCount,
  readingTime,
  relatedPosts,
}: AnimatedBlogPostProps) {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <div className="sticky top-20">
            <TableOfContents headings={headings} />
          </div>
        </aside>
        <article className="md:w-3/4">
          <BlogHeader
            post={post}
            readingTime={readingTime}
            wordCount={wordCount}
          />
          <BlogContent
            content={post.content}
            contentFile={post?.contentFile}
            components={mdxComponents}
          />
          <BlogFooter post={post} prevPost={prevPost} nextPost={nextPost} />
          <RelatedPosts posts={relatedPosts} />
          <ShareButtons
            url={`https://yourblog.com/blog/${post.id}`}
            title={post.title}
          />
          <div className="mt-16">
            <Comments />
          </div>
        </article>
        <ScrollToTop />
      </div>
    </div>
  );
}
