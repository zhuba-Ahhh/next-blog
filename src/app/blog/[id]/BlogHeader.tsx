import Image from "next/image";
import { BlogPost } from "./types";

interface BlogHeaderProps {
  post: BlogPost;
  readingTime: number;
}

export default function BlogHeader({ post, readingTime }: BlogHeaderProps) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-muted-foreground">
        <span>{post.date}</span> | <span>{post.author}</span> |
        <span>预计阅读时间: {readingTime} 分钟</span>
      </div>
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={400}
          layout="responsive"
          className="rounded-lg mb-6"
        />
      )}
    </>
  );
}
