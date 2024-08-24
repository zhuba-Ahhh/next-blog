import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import Comments from "@/components/Comments";
import ReadingProgress from "@/components/ReadingProgress";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from "@/components/ui";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeInlineCode from "@/lib/rehypeInlineCode";
import dynamic from "next/dynamic";

const CopyButton = dynamic(() => import("@/components/CopyButton"), {
  ssr: false,
});

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

function TableOfContents({
  headings,
}: {
  headings: { text: string; level: number; slug: string }[];
}) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg sticky top-20 w-[240px] mr-2">
      <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
        目录
      </h2>
      <nav>
        <ul className="space-y-1">
          {headings.map((heading, index) => (
            <li key={index} className={`${heading.level === 3 ? "ml-2" : ""}`}>
              <a
                href={`#${heading.slug}`}
                className="text-primary dark:text-primary-light hover:underline text-sm block truncate"
                title={heading.text}
              >
                {heading.text.length > 20
                  ? heading.text.slice(0, 20) + "..."
                  : heading.text}
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

const components = {
  h1: (props: any) => (
    <h1
      className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white scroll-mt-20"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200 scroll-mt-20"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-xl font-medium mt-4 mb-2 text-gray-700 dark:text-gray-300 scroll-mt-20"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="mb-4 text-gray-600 dark:text-gray-400" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-blue-500 hover:underline dark:text-blue-400"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-inside mb-4 text-gray-600 dark:text-gray-400"
      {...props}
    />
  ),
  li: (props: any) => (
    <li className="mb-2 text-gray-600 dark:text-gray-400" {...props} />
  ),
  code: ({ className, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "text";
    const isInline = className === "inline-code";
    if (isInline) {
      return (
        <code
          className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm"
          {...props}
        />
      );
    }
    return (
      <div className="relative group">
        <SyntaxHighlighter
          language={language}
          style={oneLight}
          className="bg-code-light dark:bg-code-dark rounded-lg p-4 my-4 overflow-auto"
          codeTagProps={{
            className: "text-code-light dark:text-code-dark",
          }}
          customStyle={{
            backgroundColor: "var(--code-bg)",
            color: "var(--code-text)",
          }}
          {...props}
        />
        <CopyButton text={props.children} language={language} />
      </div>
    );
  },
  pre: (props: any) => <div {...props} />,
};

function extractHeadings(content: string) {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      slug: match[2].toLowerCase().replace(/\s+/g, "-"),
    });
  }

  return headings;
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeInlineCode,
      ],
    },
    parseFrontmatter: true,
  });

  const headings = extractHeadings(post.content);

  const relatedPosts = blogPosts
    .filter(
      (p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <ReadingProgress />
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <TableOfContents headings={headings} />
        </aside>
        <article className="md:w-3/4">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="mb-4 text-muted-foreground">
            <span>{post.date}</span> | <span>{post.author}</span> |
            <span>预计阅读时间: {estimateReadingTime(post.content)} 分钟</span>
          </div>

          <MDXRemote
            source={post.content}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  rehypeInlineCode,
                ],
              },
              parseFrontmatter: true,
            }}
          />

          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary-hover"
                >
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
          <Button asChild variant="outline">
            <Link href="/blog">&larr; 返回博客列表</Link>
          </Button>

          {relatedPosts.length > 0 && (
            <Card className="mt-12">
              <CardHeader>
                <CardTitle>相关文章</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {relatedPosts.map((relatedPost) => (
                    <li key={relatedPost.id}>
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="text-primary hover:underline"
                      >
                        {relatedPost.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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