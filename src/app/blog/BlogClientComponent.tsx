"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

const POSTS_PER_PAGE = 6;

export default function BlogList() {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary dark:text-primary-light">
        博客文章
      </h1>
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="搜索文章..."
          className="w-full p-3 pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-base shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div
          ref={setTagsContainerRef}
          className={`flex-grow flex flex-wrap gap-2 ${
            !expandedTags ? "max-h-10 overflow-hidden" : ""
          }`}
        >
          <Link
            href="/blog"
            className={`px-3 py-1 rounded-full ${
              selectedTag === null
                ? "bg-primary text-white dark:bg-primary-dark"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => setSelectedTag(null)}
          >
            全部
          </Link>
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className={`px-3 py-1 rounded-full ${
                tag === selectedTag
                  ? "bg-primary text-white dark:bg-primary-dark"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {tag}
            </Link>
          ))}
          {showExpandButton && (
            <button
              onClick={() => setExpandedTags(!expandedTags)}
              className="text-primary dark:text-primary-light hover:underline"
            >
              {expandedTags ? "收起" : "展开更多标签"}
            </button>
          )}
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary dark:text-primary-light hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span>{post.author}</span>
              </div>
              <div
                className={`mt-4 ${
                  !expandedPostTags[post.id] ? "max-h-16 overflow-hidden" : ""
                }`}
              >
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              {post.tags.length > 4 && (
                <button
                  onClick={() =>
                    setExpandedPostTags((prev) => ({
                      ...prev,
                      [post.id]: !prev[post.id],
                    }))
                  }
                  className="mt-2 text-sm text-primary dark:text-primary-light hover:underline"
                >
                  {expandedPostTags[post.id] ? "收起" : "展开更多标签"}
                </button>
              )}
              <Link
                href={`/blog/${post.id}`}
                className="mt-4 inline-block text-primary dark:text-primary-light hover:underline"
              >
                阅读更多 &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        {Array.from(
          { length: Math.ceil(filteredPostsMemo.length / POSTS_PER_PAGE) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-4 py-2 rounded-md transition-colors duration-300 ${
                currentPage === i + 1
                  ? "bg-primary text-white dark:bg-primary-light dark:text-gray-900"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
