"use client";
import { useState, useCallback, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  replies: Comment[];
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: "", content: "" });
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortedComments = useMemo(() => {
    return [...comments].sort((a, b) => {
      return sortOrder === "newest"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [comments, sortOrder]);

  const addReply = useCallback((parentId: number, replyContent: string) => {
    setComments((prevComments) => {
      const newComments = [...prevComments];
      const parentComment = newComments.find((c) => c.id === parentId);
      if (parentComment) {
        parentComment.replies.push({
          id: Date.now(),
          author: "匿名用户",
          content: replyContent,
          date: new Date().toLocaleString(),
          replies: [],
        });
      }
      return newComments;
    });
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const comment: Comment = {
        id: Date.now(),
        author: newComment.author.trim(),
        content: newComment.content.trim(),
        date: new Date().toLocaleString(),
        replies: [],
      };
      setComments((prevComments) => [...prevComments, comment]);
      setNewComment({ author: "", content: "" });
    },
    [newComment]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setNewComment((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const toggleSortOrder = useCallback(() => {
    setSortOrder((prevOrder) => (prevOrder === "newest" ? "oldest" : "newest"));
  }, []);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">评论</h2>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <Input
          type="text"
          name="author"
          placeholder="您的名字"
          value={newComment.author}
          onChange={handleInputChange}
          required
        />
        <Textarea
          name="content"
          placeholder="您的评论"
          value={newComment.content}
          onChange={handleInputChange}
          rows={4}
          required
        />
        <Button type="submit">提交评论</Button>
      </form>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">评论列表</h3>
        <Button onClick={toggleSortOrder} variant="outline">
          {sortOrder === "newest" ? "最新优先" : "最早优先"}
        </Button>
      </div>
      <div className="space-y-4">
        {sortedComments.map((comment) => (
          <Card key={comment.id}>
            <CardHeader>
              <CardTitle>{comment.author}</CardTitle>
              <CardDescription>{comment.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{comment.content}</p>
            </CardContent>
            <CardFooter>
              {comment.replies.map((reply) => (
                <Card key={reply.id} className="mt-2 w-full">
                  <CardHeader>
                    <CardTitle>{reply.author}</CardTitle>
                    <CardDescription>{reply.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{reply.content}</p>
                  </CardContent>
                </Card>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
