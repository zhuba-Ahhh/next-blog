"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-primary to-secondary text-white">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        欢迎来到我的博客
      </motion.h1>
      <motion.p
        className="text-xl mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        这里是我分享想法和经验的地方。探索前端开发的最新趋势、技巧和最佳实践。
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="/blog"
          className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          探索博客文章
        </Link>
      </motion.div>
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        {["React", "Next.js", "TypeScript"].map((tech, index) => (
          <motion.div
            key={tech}
            className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{tech}</h3>
            <p className="text-sm">深入探讨{tech}的高级技巧和最佳实践</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
