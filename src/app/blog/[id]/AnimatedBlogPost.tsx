"use client";

import { motion } from "framer-motion";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogFooter from "./BlogFooter";
import RelatedPosts from "./RelatedPosts";
import ShareButtons from "./ShareButtons";
import TableOfContents from "./TableOfContents";
import Comments from "@/components/Comments";
import { mdxComponents } from "./MdxComponents";
import type { Heading } from "./types";
import type { BlogPost } from "@/data/blogPosts";

interface AnimatedBlogPostProps {
  post: BlogPost;
  headings: Heading[];
  readingTime: number;
  relatedPosts: BlogPost[];
}

export default function AnimatedBlogPost({
  post,
  headings,
  readingTime,
  relatedPosts,
}: AnimatedBlogPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TableOfContents headings={headings} />
          </motion.div>
        </aside>
        <motion.article
          className="md:w-3/4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <BlogHeader post={post} readingTime={readingTime} />
          <BlogContent content={post.content} components={mdxComponents} />
          <BlogFooter post={post} />
          <RelatedPosts posts={relatedPosts} />
          <ShareButtons
            url={`https://yourblog.com/blog/${post.id}`}
            title={post.title}
          />
          <div className="mt-16">
            <Comments />
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}
