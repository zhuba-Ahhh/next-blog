"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import type { BlogPost } from "../../data/blogPosts";

interface LatestPostsProps {
  posts: BlogPost[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  return (
    <motion.section
      className="mt-12 w-full max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">最新文章</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <motion.article
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{post.date}</p>
                <p className="text-gray-200">{post.excerpt}</p>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default LatestPosts;
