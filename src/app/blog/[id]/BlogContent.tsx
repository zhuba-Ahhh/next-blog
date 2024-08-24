import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "./types";

import remarkGfm from "remark-gfm";
import rehypeInlineCode from "@/lib/rehypeInlineCode";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface BlogContentProps {
  content: string;
  components: MDXComponents;
}

export default function BlogContent({ content, components }: BlogContentProps) {
  return (
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
  );
}
