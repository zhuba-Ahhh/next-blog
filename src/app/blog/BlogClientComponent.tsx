"use client";
import { useState, useMemo, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import {
  Skeleton,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui";
import { AlertCircle } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { BlogSearch } from "./BlogSearch";
import { TagList } from "./TagList";
import { BlogPostCard } from "./BlogPostCard";
import { Pagination } from "./Pagination";

const POSTS_PER_PAGE = 6;
const INITIAL_TAG_COUNT = 10;

// 添加新的排序选项类型
type SortOption = "date" | "title";

export default function BlogList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isTagsExpanded, setIsTagsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState<SortOption>("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleSearchParamsChange = useCallback(() => {
    const tag = searchParams.get("tag");
    setSelectedTag(tag || null);
    setFilteredPosts(
      tag ? blogPosts.filter((post) => post.tags.includes(tag)) : blogPosts
    );
  }, [searchParams]);

  useEffect(() => {
    handleSearchParamsChange();
    setIsLoading(false);
  }, [handleSearchParamsChange]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredPostsMemo = useMemo(() => {
    let posts = filteredPosts.filter(
      (post) =>
        (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!selectedTag || post.tags.includes(selectedTag))
    );

    // 根据选择的排序选项和顺序进行排序
    posts.sort((a, b) => {
      const dateComparison =
        new Date(b.date).getTime() - new Date(a.date).getTime();
      const titleComparison = a.title.localeCompare(b.title);

      if (sortOption === "date") {
        return sortOrder === "asc" ? -dateComparison : dateComparison; // 根据排序顺序调整比较结果
      } else {
        return sortOrder === "asc" ? titleComparison : -titleComparison; // 根据排序顺序调整比较结果
      }
    });

    return posts;
  }, [searchTerm, selectedTag, filteredPosts, sortOption, sortOrder]); // 添加 sortOrder 作为依赖项

  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    return filteredPostsMemo.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, filteredPostsMemo]);

  const paginate = useCallback(
    (pageNumber: number) => setCurrentPage(pageNumber),
    []
  );

  const handleTagClick = useCallback(
    (tag: string | null) => {
      setSelectedTag(tag);
      if (tag) {
        router.push(`/blog?tag=${encodeURIComponent(tag)}`, { scroll: false });
      } else {
        router.push("/blog", { scroll: false });
      }
    },
    [router]
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchTerm = e.target.value;
      setSearchTerm(newSearchTerm);
      setCurrentPage(1); // 重置到第一页

      // 立即更新过滤后的文章列表，同时考虑选中的标签
      const newFilteredPosts = blogPosts.filter(
        (post) =>
          (post.title.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(newSearchTerm.toLowerCase())) &&
          (!selectedTag || post.tags.includes(selectedTag))
      );
      setFilteredPosts(newFilteredPosts);
    },
    [selectedTag]
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">博客文章</h1>

      <BlogSearch
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
        sortOption={sortOption}
        sortOrder={sortOrder} // 添加排序顺序
        onSortChange={(option: SortOption, order: "asc" | "desc") => {
          setSortOption(option);
          setSortOrder(order); // 更新排序顺序
        }}
      />
      <TagList
        allTags={allTags}
        selectedTag={selectedTag}
        onTagClick={handleTagClick}
        isTagsExpanded={isTagsExpanded}
        onToggleExpand={() => setIsTagsExpanded(!isTagsExpanded)}
        initialTagCount={INITIAL_TAG_COUNT}
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2 mt-2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-6 w-1/4 mr-2" />
                <Skeleton className="h-6 w-1/4" />
              </CardFooter>
            </Card>
          ))
        ) : currentPosts.length > 0 ? (
          <AnimatePresence mode="wait">
            {currentPosts.map((post, index) => (
              <BlogPostCard
                key={post.id}
                post={post}
                onTagClick={handleTagClick}
                index={index}
              />
            ))}
          </AnimatePresence>
        ) : (
          <div className="col-span-full">
            <Alert variant="default">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>未找到匹配的文章</AlertTitle>
              <AlertDescription>
                抱歉，没有找到与您的搜索条件相匹配的文章。请尝试以下操作：
                <ul className="list-disc list-inside mt-2">
                  <li>检查您的拼写</li>
                  <li>使用不同的关键词</li>
                  <li>尝试更广泛的搜索词</li>
                  <li>清除所有筛选条件，重新开始搜索</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>

      {filteredPostsMemo.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredPostsMemo.length / POSTS_PER_PAGE)}
          onPageChange={paginate}
        />
      )}
    </div>
  );
}
