export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "深入理解React Hooks",
    excerpt: "探索React Hooks的工作原理和最佳实践...",
    content:
      "React Hooks是React 16.8中引入的新特性,它允许我们在函数组件中使用状态和其他React特性。本文将深入探讨Hooks的工作原理,包括useState、useEffect、useContext等常用Hooks的实现细节和使用技巧。我们还将讨论自定义Hooks的创建方法和应用场景,以及Hooks在大型应用中的性能优化策略。",
    date: "2024-03-15",
    author: "张三",
    tags: ["React", "Hooks", "前端开发"],
  },
  {
    id: 2,
    title: "Next.js 13新特性解析",
    excerpt: "深入了解Next.js 13带来的革命性变化...",
    content:
      "Next.js 13引入了许多激动人心的新特性,如App Router、服务器组件、流式渲染等。本文将详细介绍这些新特性的使用方法和优势。我们将探讨App Router��何简化路由管理,服务器组件如何提升性能和SEO,以及流式渲染如何改善大型应用的用户体验。同时,我们还将讨论从Next.js 12迁移到13版本的最佳实践和注意事项。",
    date: "2024-03-20",
    author: "李四",
    tags: ["Next.js", "服务器组件", "性能优化"],
  },
  {
    id: 3,
    title: "CSS-in-JS解决方案对比",
    excerpt: "比较流行的CSS-in-JS库的优缺点...",
    content:
      "CSS-in-JS已成为现代前端开发中的重要工具。本文将对比分析几种流行的CSS-in-JS解决方案,包括styled-components、Emotion、CSS Modules等。我们将从性能、开发体验、维护性等多个角度进行评估,并提供每种方案的最佳使用场景。此外,我们还将探讨CSS-in-JS与传统CSS方法的区别,以及如何在大型项目中有效管理样式。",
    date: "2024-03-25",
    author: "王五",
    tags: ["CSS-in-JS", "styled-components", "Emotion"],
  },
  {
    id: 4,
    title: "TypeScript高级类型技巧",
    excerpt: "掌握TypeScript中的高级类型用法...",
    content:
      "TypeScript的类型系统非常强大,但也有一定的学习曲线。本文将深入探讨TypeScript中的高级类型技巧,包括条件类型、映射类型、联合类型和交叉类型等。我们将通过实际��子展示这些高级类型的应用,如何使用它们来创建更灵活、更安全的代码。同时,我们还将讨论TypeScript的类型推断机制,以及如何编写和使用自定义类型守卫。",
    date: "2024-03-30",
    author: "赵六",
    tags: ["TypeScript", "类型系统", "前端开发"],
  },
  {
    id: 5,
    title: "深入理解JavaScript异步编程",
    excerpt: "探索JavaScript中的异步编程模式和最佳实践...",
    content: `
# JavaScript异步编程深度解析

JavaScript的异步编程是前端开发中的重要概念。本文将深入探讨各种异步编程模式及其应用。

## 回调函数

回调函数是最基本的异步编程方式:

\`\`\`javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched');
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});
\`\`\`

## Promise

Promise提供了更优雅的异步处理方式:

\`\`\`javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
}

fetchData()
  .then(result => console.log(result))
  .catch(error => console.error(error));
\`\`\`

## Async/Await

Async/Await是基于Promise的语法糖,使异步代码更易读:

\`\`\`javascript
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getData();
\`\`\`

通过掌握这些异步编程模式,我们可以更好地处理复杂的异步操作,提高代码的可读性和可维护性。
    `,
    date: "2024-04-05",
    author: "陈七",
    tags: ["JavaScript", "异步编程", "Promise", "Async/Await"],
  },
  {
    id: 6,
    title: "React性能优化实战指南",
    excerpt: "学习React应用的高级性能优化技巧...",
    content: `
# React性能优化实战指南

在构建大型React应用时,性能优化至关重要。本文将介绍一些实用的React性能优化技巧。

## 使用React.memo

React.memo可以帮助我们避免不必要的重渲染:

\`\`\`jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* 渲染使用到的props */
});
\`\`\`

## 使用useMemo和useCallback

useMemo和useCallback可以帮助我们缓存计算结果和回调函数:

\`\`\`jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
\`\`\`

## 虚拟化长列表

对于长列表,我们可以使用虚拟化技术来提高性能:

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

function Row({ index, style }) {
  return <div style={style}>Row {index}</div>;
}

function Example() {
  return (
    <List
      height={150}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}
\`\`\`

通过应用这些优化技巧,我们可以显著提升React应用的性能,为用户提供更流畅的体验。
    `,
    date: "2024-04-10",
    author: "林八",
    tags: ["React", "性能优化", "虚拟列表"],
  },
  {
    id: 7,
    title: "WebAssembly与前端的未来",
    excerpt: "探索WebAssembly如何革新Web应用开发...",
    content: `WebAssembly (Wasm) 正在改变Web应用的性能界限。本文将深入探讨Wasm的工作原理、与JavaScript的协作方式,以及在前端项目中的实际应用案例。我们还将讨论Wasm的未来发展方向,包括多线程支持和垃圾回收等特性。`,
    date: "2024-04-15",
    author: "吴九",
    tags: ["WebAssembly", "性能优化", "前端创新"],
  },
  {
    id: 8,
    title: "AI驱动的前端开发:机遇与挑战",
    excerpt: "探讨AI技术如何改变前端开发流程...",
    content: `人工智能正在深刻影响前端开发领域。本文将介绍AI在代码自动补全、UI设计生成、性能优化等方面的应用。我们将探讨GitHub Copilot等AI编程助手的使用技巧,以及如何利用机器学习模型优化用户体验。同时,我们也将讨论AI带来的伦理问题和对开发者角色的潜在影响。`,
    date: "2024-04-20",
    author: "郑十",
    tags: ["AI", "前端开发", "自动化"],
  },
  {
    id: 9,
    title: "Web3和去中心化应用(DApps)开发入门",
    excerpt: "学习构建基于区块链的Web应用...",
    content: `Web3技术正在兴起,为开发者带来新的机遇。本文将介绍Web3的核心概念,包括智能合约、去中心化存储和身份验证。我们将使用Ethereum和Solidity创建一个简单的DApp,并探讨如何将其与传统的前端框架(如React)集成。同时,我们还将讨论Web3应用面临的挑战和最佳实践。`,
    date: "2024-04-25",
    author: "黄十一",
    tags: ["Web3", "区块链", "DApps"],
  },
  {
    id: 10,
    title: "微前端架构实践与性能优化",
    excerpt: "深入理解微前端的实现原理和优化策略...",
    content: `微前端架构允许多个独立开发、部署的前端应用共存于一个页面。本文将详细介绍微前端的实现方法,包括Single-SPA、Qiankun等框架的使用。我们将探讨微前端的通信机制、样式隔离、性能优化等关键问题,并分享大型项目中的实践经验和注意事项。`,
    date: "2024-04-30",
    author: "刘十二",
    tags: ["微前端", "架构设计", "性能优化"],
  },
  {
    id: 11,
    title: "前端可视化技术的新趋势",
    excerpt: "探索数据可视化和3D渲染的最新进展...",
    content: `前端可视化技术正在快速发展。本文将介绍WebGL、Three.js等3D渲染技术的最新应用,以及D3.js、ECharts等数据可视化库的高级用法。我们将通过实例演示如何创建交互式3D场景和复杂的数据仪表板。同时,我们还将探讨WebGPU等新兴技术对前端可视化的影响。`,
    date: "2024-05-05",
    author: "赵十三",
    tags: ["数据可视化", "WebGL", "3D渲染"],
  },
];