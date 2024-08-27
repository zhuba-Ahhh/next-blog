import React from "react";
import { MDXProvider } from "@mdx-js/react";
import dynamic from "next/dynamic";
import { MDXComponents } from "@/app/blog/[id]/types";

interface BlogPostMDXContent {
  contentFile: string;
  components: MDXComponents;
}

const BlogPostMDXContent = ({
  contentFile,
  components,
}: BlogPostMDXContent) => {
  const MDXContent = dynamic(() => import(`./content/${contentFile}`));

  return (
    <MDXProvider components={components}>
      {/* @ts-ignore */}
      <MDXContent components={components} />
    </MDXProvider>
  );
};

export default BlogPostMDXContent;
