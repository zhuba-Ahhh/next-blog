"use client";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import dynamic from "next/dynamic";

// 延迟加载非关键组件
const TechStack = dynamic(() => import("@/components/page/TechStack"), {
  ssr: false,
});
const LatestPosts = dynamic(() => import("@/components/page/LatestPosts"), {
  ssr: false,
});

export default function Home() {
  // 根据日期排序博客文章,并取最新的两篇
  const sortedPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-4">
      {/* 标题和介绍 - 保持优先级高 */}
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        欢迎来到我的博客
      </motion.h1>
      <motion.p
        className="text-lg mb-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        你好,我是[Zhuba-Ahhh]。作为一名前端开发者,我热衷于探索和分享Web开发的最新趋势、技巧和最佳实践。
      </motion.p>

      {/* 探索博客按钮 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Link
          href="/blog"
          className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
        >
          探索博客文章
        </Link>
      </motion.div>

      {/* 最新文章预览 - 延迟加载 */}
      <LatestPosts />

      {/* 技术栈展示 - 延迟加载 */}
      <TechStack posts={sortedPosts} />

      {/* 联系方式 */}
      <motion.div
        className="mt-12 text-sm opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
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
