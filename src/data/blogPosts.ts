import {
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
  content8,
  content9,
  content10,
  content11,
  content12,
  content13,
  content14,
  content15,
} from "./ts";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  category?: string;
  coverImage?: string;
  contentFile?: string; // 新增字段,指向mdx文件
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "深入理解React Hooks",
    excerpt: "探索React Hooks的工作原理和最佳实践...",
    // contentFile: "1.mdx",
    content: content1,
    date: "2024-03-15",
    author: "张三",
    tags: ["React", "Hooks", "前端开发"],
  },
  {
    id: 2,
    title: "Next.js 13新特性解析",
    excerpt: "深入了解Next.js 13带来的革命性变化...",
    content: content2,
    date: "2024-03-20",
    author: "李四",
    tags: ["Next.js", "服务器组件", "性能优化"],
  },
  {
    id: 3,
    title: "CSS-in-JS解决方案对比",
    excerpt: "比较流行的CSS-in-JS库的优缺点...",
    content: content3,
    date: "2024-03-25",
    author: "王五",
    tags: ["CSS-in-JS", "styled-components", "Emotion"],
  },
  {
    id: 4,
    title: "TypeScript高级类型技巧",
    excerpt: "掌握TypeScript中的高级类型用法...",
    content: content4,
    date: "2024-03-30",
    author: "赵六",
    tags: ["TypeScript", "类型系统", "前端开发"],
  },
  {
    id: 5,
    title: "深入理解JavaScript异步编程",
    excerpt: "探索JavaScript中的异步编程模式和最佳实践...",
    content: content5,
    date: "2024-04-05",
    author: "陈七",
    tags: ["JavaScript", "异步编程", "Promise", "Async/Await"],
  },
  {
    id: 6,
    title: "React性能优化实战指南",
    excerpt: "学习React应用的高级性能优化技巧...",
    content: content6,
    date: "2024-04-10",
    author: "林八",
    tags: ["React", "性能优化", "虚拟列表"],
  },
  {
    id: 7,
    title: "WebAssembly与前端的未来",
    excerpt: "探索WebAssembly如何革新Web应用开发...",
    content: content7,
    date: "2024-04-15",
    author: "吴九",
    tags: ["WebAssembly", "性能优化", "前端创新"],
  },
  {
    id: 8,
    title: "AI驱动的前端开发:机遇与挑战",
    excerpt: "探讨AI技术如何改变前端开发流程...",
    content: content8,
    date: "2024-04-20",
    author: "郑十",
    tags: ["AI", "前端开发", "自动化"],
  },
  {
    id: 9,
    title: "Web3和去中心化应用(DApps)开发入门",
    excerpt: "学习构建基于区块链的Web应用...",
    content: content9,
    date: "2024-04-25",
    author: "黄十一",
    tags: ["Web3", "区块链", "DApps"],
  },
  {
    id: 10,
    title: "微前端架构实践与性能优化",
    excerpt: "深入理解微前端的实现原理和优化策略...",
    content: content10,
    date: "2024-04-30",
    author: "刘十二",
    tags: ["微前端", "架构设计", "性能优化"],
  },
  {
    id: 11,
    title: "前端可视化技术的新趋势",
    excerpt: "探索数据可视化和3D渲染的最新进展...",
    content: content11,
    date: "2024-05-05",
    author: "赵十三",
    tags: ["数据可视化", "WebGL", "3D渲染"],
  },
  {
    id: 12,
    title: "渐进式Web应用(PWA)开发指南",
    excerpt: "学习如何构建离线可用、类原生应用体验的Web应用...",
    content: content12,
    date: "2024-05-10",
    author: "钱十四",
    tags: ["PWA", "离线应用", "移动Web"],
  },
  {
    id: 13,
    title: "GraphQL与现代API设计",
    excerpt: "探索GraphQL如何改变前后端交互模式...",
    content: content13,
    date: "2024-05-15",
    author: "孙十五",
    tags: ["GraphQL", "API设计", "全栈开发"],
  },
  {
    id: 14,
    title: "前端安全最佳实践",
    excerpt: "学习保护Web应用免受常见安全威胁...",
    content: content14,
    date: "2024-05-20",
    author: "周十六",
    tags: ["Web安全", "XSS", "CSRF"],
  },
  {
    id: 15,
    title: "前端工程化与构建优化",
    excerpt: "探索现代前端工程化实践和构建性能优化...",
    content: content15,
    date: "2024-05-25",
    author: "吴十七",
    tags: ["工程化", "构建优化", "性能优化"],
  },
];
