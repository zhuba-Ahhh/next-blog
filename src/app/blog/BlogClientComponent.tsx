"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const POSTS_PER_PAGE = 6;

export default function BlogList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [expandedTags, setExpandedTags] = useState(false);
  const [expandedPostTags, setExpandedPostTags] = useState<{
    [key: string]: boolean;
  }>({});
  const [tagsContainerRef, setTagsContainerRef] =
    useState<HTMLDivElement | null>(null);
  const [showExpandButton, setShowExpandButton] = useState(false);

  useEffect(() => {
    const tag = searchParams.get("tag");
    setSelectedTag(tag || null);
    setFilteredPosts(
      tag ? blogPosts.filter((post) => post.tags.includes(tag)) : blogPosts
    );
    setExpandedTags(!!tag); // 当选中标签时，默认展开
  }, [searchParams]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredPostsMemo = useMemo(() => {
    return filteredPosts.filter(
      (post) =>
        (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!selectedTag || post.tags.includes(selectedTag))
    );
  }, [searchTerm, selectedTag, filteredPosts]);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPostsMemo.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (tagsContainerRef) {
      const isOverflowing =
        tagsContainerRef.scrollWidth > tagsContainerRef.clientWidth;
      setShowExpandButton(isOverflowing);
    }
  }, [tagsContainerRef, allTags, expandedTags]);

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
    if (tag) {
      router.push(`/blog?tag=${encodeURIComponent(tag)}`, { scroll: false });
    } else {
      router.push('/blog', { scroll: false });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">博客文章</h1>
      <div className="mb-6 relative">
        <Input
          type="text"
          placeholder="搜索文章..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Badge
          variant={selectedTag === null ? "default" : "secondary"}
          className="cursor-pointer"
          onClick={() => handleTagClick(null)}
        >
          全部
        </Badge>
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={tag === selectedTag ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
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
        ))}
      </div>
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
    </div>
  );
}