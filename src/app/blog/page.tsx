import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function BlogList() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">博客文章</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.author}</span>
              </div>
              <div className="mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="mt-4 inline-block text-primary hover:underline"
              >
                阅读更多 &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
