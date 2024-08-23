import { Suspense } from "react";
import BlogClientComponent from "./BlogClientComponent";
import { Skeleton } from "@/components/ui";

export default function BlogPage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <BlogClientComponent />
    </Suspense>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
  );
}
