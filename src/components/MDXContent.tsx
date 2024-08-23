import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold my-3" {...props} />,
  p: (props: any) => <p className="my-2" {...props} />,
  // 添加更多自定义组件...
};

interface MDXContentProps {
  children: ReactNode;
}

export default function MDXContent({ children }: MDXContentProps) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}