"use client";
import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import {
  Input,
  Button,
  Badge,
  Skeleton,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Alert,
  AlertDescription,
  AlertTitle,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AlertCircle } from "lucide-react";

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

    // 根据选择的排序选项进行排序
    posts.sort((a, b) => {
      if (sortOption === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    return posts;
  }, [searchTerm, selectedTag, filteredPosts, sortOption]);

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

  const visibleTags = useMemo(
    () => (isTagsExpanded ? allTags : allTags.slice(0, INITIAL_TAG_COUNT)),
    [isTagsExpanded, allTags]
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
      <div className="mb-6 flex items-end space-x-4">
        <div className="flex-grow">
          <Label htmlFor="search" className="mb-2 block">
            搜索文章
          </Label>
          <Input
            id="search"
            type="text"
            placeholder="输入关键词..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="w-40">
          <Label htmlFor="sort" className="mb-2 block">
            排序方式
          </Label>
          <Select
            onValueChange={(value: SortOption) => setSortOption(value)}
            defaultValue={sortOption}
          >
            <SelectTrigger id="sort" className="w-full">
              <SelectValue placeholder="选择排序方式" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">按日期排序</SelectItem>
              <SelectItem value="title">按标题排序</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Badge
          variant={selectedTag === null ? "default" : "secondary"}
          className="cursor-pointer"
          onClick={() => handleTagClick(null)}
        >
          全部
        </Badge>
        {visibleTags.map((tag) => (
          <Badge
            key={tag}
            variant={tag === selectedTag ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Badge>
        ))}
        {allTags.length > INITIAL_TAG_COUNT && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsTagsExpanded(!isTagsExpanded)}
            className="ml-2"
          >
            {isTagsExpanded ? (
              <>
                收起 <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                展开 <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>
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
          currentPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>
                  {post.date} | {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs px-2 py-1 h-6 cursor-pointer"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))
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
        <div className="mt-8 flex justify-center">
          {Array.from(
            { length: Math.ceil(filteredPostsMemo.length / POSTS_PER_PAGE) },
            (_, i) => (
              <Button
                key={i}
                onClick={() => paginate(i + 1)}
                variant={currentPage === i + 1 ? "default" : "outline"}
                className="mx-1"
              >
                {i + 1}
              </Button>
            )
          )}
        </div>
      )}
    </div>
  );
}
