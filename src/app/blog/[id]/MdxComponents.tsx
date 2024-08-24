import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import dynamic from "next/dynamic";
import { MDXComponents } from "./types";

const CopyButton = dynamic(() => import("@/components/CopyButton"), {
  ssr: false,
});

export const mdxComponents: MDXComponents = {
  h1: (props: any) => (
    <h1
      className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white scroll-mt-20"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200 scroll-mt-20"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-xl font-medium mt-4 mb-2 text-gray-700 dark:text-gray-300 scroll-mt-20"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="mb-4 text-gray-600 dark:text-gray-400" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-blue-500 hover:underline dark:text-blue-400"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-inside mb-4 text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
  li: (props: any) => (
    <li className="mb-2 text-gray-600 dark:text-gray-400" {...props} />
  ),
  code: ({ className, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "text";
    const isInline = className === "inline-code";
    if (isInline) {
      return (
        <code
          className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm"
          {...props}
        />
      );
    }
    return (
      <div className="relative group">
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          className="bg-code-light dark:bg-code-dark rounded-lg p-4 my-4 overflow-auto"
          codeTagProps={{
            className: "text-code-light dark:text-code-dark",
          }}
          customStyle={{
            backgroundColor: "var(--code-bg)",
            color: "var(--code-text)",
          }}
          {...props}
        />
        <CopyButton text={props.children} language={language} />
      </div>
    );
  },
  pre: (props: any) => <div {...props} />,
};
