import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import dynamic from "next/dynamic";
import { MDXComponents } from "./types";

const CopyButton = dynamic(() => import("@/components/blog/id/CopyButton"), {
  ssr: false,
});

const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = (
  props
) => <table className="min-w-full divide-y divide-gray-200" {...props} />;

const Th: React.FC<React.ThHTMLAttributes<HTMLTableHeaderCellElement>> = (
  props
) => (
  <th
    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    {...props}
  />
);

const Td: React.FC<React.TdHTMLAttributes<HTMLTableDataCellElement>> = (
  props
) => (
  <td
    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
    {...props}
  />
);

const Tr: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = (props) => (
  <tr className="bg-white" {...props} />
);

export const mdxComponents: MDXComponents = {
  h1: (props: any) => (
    <h1
      id={props.children.toString().toLowerCase().replace(/\s+/g, "-")}
      className="relative text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white scroll-mt-20 cursor-pointer before:content-['#'] before:absolute before:-left-6 before:opacity-0 hover:before:opacity-100 before:text-blue-500 dark:before:text-blue-400" // 设置 # 符号颜色与字体对齐
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      id={props.children.toString().toLowerCase().replace(/\s+/g, "-")}
      className="relative text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200 scroll-mt-20 cursor-pointer before:content-['#'] before:absolute before:-left-6 before:opacity-0 hover:before:opacity-100 before:text-blue-500 dark:before:text-blue-400" // 设置 # 符号颜色与字体对齐
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      id={props.children.toString().toLowerCase().replace(/\s+/g, "-")}
      className="relative text-xl font-medium mt-4 mb-2 text-gray-700 dark:text-gray-300 scroll-mt-20 cursor-pointer before:content-['#'] before:absolute before:-left-6 before:opacity-0 hover:before:opacity-100 before:text-blue-500 dark:before:text-blue-400" // 设置 # 符号颜色与字体对齐
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="mb-4 text-gray-600 dark:text-gray-400" {...props} />
  ),
  a: (props: any) => (
    <a className="text-blue-500 dark:text-blue-400" {...props} />
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
    if (isInline || !className) {
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
            paddingRight: "6rem",
          }}
          {...props}
        />
        <CopyButton text={props.children} language={language} />
      </div>
    );
  },
  pre: (props: any) => <div {...props} />,
  table: Table,
  th: Th,
  td: Td,
  tr: Tr,
};
