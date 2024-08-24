import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
} from "@/components/ui";
import { BlogPost } from "@/data/blogPosts";

interface BlogPostCardProps {
  post: BlogPost;
  onTagClick: (tag: string) => void;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export function BlogPostCard({ post, onTagClick, index }: BlogPostCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3, delay: index * 0.1 }}
      layout
    >
      <Card>
        <CardHeader>
          <CardTitle>
            <Link href={`/blog/${post.id}`}>
              <p className="line-clamp-1 overflow-hidden">{post.title}</p>
            </Link>
          </CardTitle>
          <CardDescription>
            {post.date} | {post.author}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-1 overflow-hidden">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs px-2 py-1 h-6 cursor-pointer"
              onClick={() => onTagClick(tag)}
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
