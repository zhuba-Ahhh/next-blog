import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import Comments from "@/components/Comments";
import ReadingProgress from "@/components/ReadingProgress";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

function ShareButtons({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex space-x-4 mt-6">
      <a
        href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-800"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}

function TableOfContents({ content }: { content: string }) {
  const headings = content.match(/#{2,3}\s.+/g) || [];
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg sticky top-8">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        目录
      </h2>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li
              key={index}
              className={`${heading.startsWith("### ") ? "ml-4" : ""}`}
            >
              <a
                href={`#${heading
                  .replace(/[^a-zA-Z0-9\s]/g, "")
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
                className="text-primary dark:text-primary-light hover:underline text-sm"
              >
                {heading.replace(/^#{2,3}\s/, "")}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export async function generateStaticParams() {
  const posts = blogPosts; // 假设这个函数可以获取所有博客文章
  return posts.map((post) => ({
    id: post.id.toString(), // 将 id 转换为字符串
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id); // 使用字符串比较

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(
      (p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <ReadingProgress />
      <div className="flex flex-col md:flex-row gap-8 relative">
        <aside className="md:w-1/3 md:sticky md:top-8 md:self-start">
          <TableOfContents content={post.content} />
        </aside>
        <article className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="mb-4 text-gray-600 dark:text-gray-400">
            <span>{post.date}</span> | <span>{post.author}</span> |
            <span>预计阅读时间: {estimateReadingTime(post.content)} 分钟</span>
          </div>
          <div className="prose dark:prose-invert lg:prose-xl mb-6 text-gray-900 dark:text-gray-200">
            <p>{post.content}</p>
          </div>
          <div className="mb-6">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="text-primary dark:text-primary-light hover:underline"
          >
            &larr; 返回博客列表
          </Link>

          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                相关文章
              </h2>
              <ul className="space-y-2">
                {relatedPosts.map((relatedPost) => (
                  <li key={relatedPost.id}>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="text-primary dark:text-primary-light hover:underline"
                    >
                      {relatedPost.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ShareButtons
            url={`https://yourblog.com/blog/${post.id}`}
            title={post.title}
          />

          <div className="mt-16">
            <Comments />
          </div>
        </article>
      </div>
    </div>
  );
}
