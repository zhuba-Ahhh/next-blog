"use client";
import { useState, useCallback, useMemo } from "react";

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
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const sortedComments = useMemo(() => {
    return [...comments].sort((a, b) => {
      return sortOrder === 'newest'
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [comments, sortOrder]);

  const addReply = useCallback((parentId: number, replyContent: string) => {
    setComments(prevComments => {
      const newComments = [...prevComments];
      const parentComment = newComments.find(c => c.id === parentId);
      if (parentComment) {
        parentComment.replies.push({
          id: Date.now(),
          author: "匿名用户",
          content: replyContent,
          date: new Date().toLocaleString(),
          replies: []
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
        replies: []
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

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">评论</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="author"
          placeholder="您的名字"
          value={newComment.author}
          onChange={handleInputChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          required
        />
        <textarea
          name="content"
          placeholder="您的评论"
          value={newComment.content}
          onChange={handleInputChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition duration-300"
        >
          提交评论
        </button>
      </form>
      <div>
        {sortedComments.map((comment) => (
          <div
            key={comment.id}
            className="mb-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
          >
            <p className="font-bold text-lg mb-1 dark:text-white">
              {comment.author}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {comment.content}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {comment.date}
            </p>
            {comment.replies.map((reply) => (
              <div
                key={reply.id}
                className="mt-2 ml-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm"
              >
                <p className="font-bold text-sm mb-1 dark:text-white">
                  {reply.author}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {reply.content}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {reply.date}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}