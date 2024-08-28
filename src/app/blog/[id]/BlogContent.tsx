import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "./types";

import remarkGfm from "remark-gfm";
import rehypeInlineCode from "@/lib/rehypeInlineCode";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import BlogPostMDXContent from "@/data/BlogPostMDXContent";

interface BlogContentProps {
  content: string;
  components: MDXComponents;
  contentFile?: string;
}

export default function BlogContent({
  content,
  components,
  contentFile,
}: BlogContentProps) {
  console.log(content, "content111111");
  return (
    <>
      {contentFile ? (
        <BlogPostMDXContent contentFile={contentFile} components={components} />
      ) : (
        <MDXRemote
          source={content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeInlineCode,
              ],
            },
            parseFrontmatter: true,
          }}
        />
      )}
    </>
  );
}
