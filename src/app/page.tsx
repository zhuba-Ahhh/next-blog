"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-4">
      {/* 标题和介绍 */}
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        欢迎来到我的博客
      </motion.h1>
      <motion.p
        className="text-lg mb-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        你好,我是[zhuba-Ahhh]。作为一名前端开发者,我热衷于探索和分享Web开发的最新趋势、技巧和最佳实践。
      </motion.p>

      {/* 探索博客按钮 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="/blog"
          className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >
          探索博客文章
        </Link>
      </motion.div>

      {/* 最新文章预览 */}
      <motion.div
        className="mt-12 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4">最新文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "React 18新特性解析", date: "2023-04-01" },
            { title: "Next.js 13性能优化指南", date: "2023-03-15" },
          ].map((post, index) => (
            <motion.div
              key={post.title}
              className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-lg cursor-pointer border border-white border-opacity-20"
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm opacity-80">{post.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 技术栈展示 */}
      <motion.div
        className="mt-12 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-4">技术栈</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
            (tech, index) => (
              <motion.span
                key={tech}
                className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            )
          )}
        </div>
      </motion.div>

      {/* 联系方式 */}
      <motion.div
        className="mt-12 text-sm opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <p>
          联系我: 3477826311@qq.com |{" "}
          <a href="https://github.com/zhuba-Ahhh" className="underline">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://twitter.com/yourusername" className="underline">
            Twitter
          </a>
        </p>
      </motion.div>
    </div>
  );
}
