import { Suspense } from "react";
import BlogClientComponent from "./BlogClientComponent";

export default function BlogPage() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <BlogClientComponent />
    </Suspense>
  );
}
