"use client";

import Image from "next/image";
import { useThemeType } from "@/hooks";

export default function About() {
  const { theme } = useThemeType();

  return (
    <div
      className={`max-w-4xl mx-auto rounded-lg shadow-lg p-8 my-10 
      ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800"
      }`}
    >
      <h1
        className={`text-4xl font-bold mb-6 ${
          theme === "dark" ? "text-indigo-300" : "text-indigo-800"
        }`}
      >
        关于我的博客
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className={`md:col-span-2 prose lg:prose-xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <p>欢迎来到我的博客！这里是我分享想法、经验和技术见解的地方。</p>
          <p>
            我是一名热爱编程和技术的开发者，专注于前端和全栈开发。我的目标是通过这个博客与大家分享知识，共同成长。
          </p>
          <p>在这里，你可以找到关于：</p>
          <ul>
            <li>Web开发最佳实践</li>
            <li>新兴技术趋势分析</li>
            <li>编程技巧和工具推荐</li>
            <li>个人项目经验分享</li>
          </ul>
          <p>
            如果你有任何问题、建议或合作意向，欢迎随时与我联系。让我们一起在编程的世界里探索和创新！
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/img/avatar.png"
            alt="博主头像"
            width={200}
            height={200}
            className="rounded-full shadow-md mb-4"
          />
          <div className="text-center">
            <h2
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-indigo-300" : "text-indigo-700"
              }`}
            >
              {process.env.NEXT_PUBLIC_AUTHOR_NAME}
            </h2>
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              前端开发者 / 技术博主
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
