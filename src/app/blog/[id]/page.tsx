import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-gray-600">
        <span>{post.date}</span> | <span>{post.author}</span>
      </div>
      <div className="prose lg:prose-xl mb-6">
        <p>{post.content}</p>
      </div>
      <div className="mb-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link href="/blog" className="text-primary hover:underline">
        &larr; 返回博客列表
      </Link>
    </article>
  );
}
