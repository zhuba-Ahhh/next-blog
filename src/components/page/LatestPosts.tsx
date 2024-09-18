"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "React", icon: "/svg/react.svg" },
  { name: "Next.js", icon: "/next.svg" },
  { name: "TypeScript", icon: "/svg/typescript.svg" },
  { name: "Tailwind CSS", icon: "/svg/tailwindcss.svg" },
  // 添加更多你使用的技术
];

const TechStack: React.FC = () => {
  return (
    <motion.section
      className="mt-16 w-full max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">我的技术栈</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={50}
              height={50}
              className="mb-2"
            />
            <span className="text-sm">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;
