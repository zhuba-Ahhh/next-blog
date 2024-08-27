import { content1, content2 } from "./ts";

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
    content: `
# CSS-in-JS解决方案对比

CSS-in-JS已成为现代前端开发中的重要工具。本文将对比分析几种流行的CSS-in-JS解决方案,包括styled-components、Emotion、CSS Modules等。我们将从性能、开发体验、维护性等多个角度进行评估,并提供每种方案的最佳使用场景。此外,我们还将探讨CSS-in-JS与传统CSS方法的区别,以及如何在大型项目中有效管理样式。

## styled-components

styled-components是最流行的CSS-in-JS库之一。它结合了CSS和JavaScript的优点,使得我们可以在React组件中定义样式。

### 优点

1. 简洁的语法
2. 支持动态样式
3. 自动生成唯一的类名
4. 易于主题化
5. 良好的开发体验

### 缺点

1. 运行时性能开销
2. 学习曲线较陡
3. 不支持CSS Modules的特性

### 最佳使用场景

styled-components适用于需要动态样式和主题化的项目,尤其是中小型项目。

## Emotion

Emotion是另一种流行的CSS-in-JS库,它提供了更灵活的API和更好的性能。

### 优点

1. 高性能
2. 支持CSS Modules的特性
3. 易于主题化
4. 良好的开发体验

### 缺点

1. 学习曲线较陡
2. 不支持动态样式

### 最佳使用场景

Emotion适用于需要高性能和CSS Modules特性的项目,尤其是大型项目。

## CSS Modules

CSS Modules是一种CSS-in-JS解决方案,它将CSS模块化,并将类名作为JavaScript对象导出。

### 优点

1. 简单易用
2. 支持CSS Modules的特性
3. 良好的开发体验

### 缺点

1. 不支持动态样式
2. 不易于主题化
3. 类名不是唯一的

### 最佳使用场景

CSS Modules适用于需要简单、可维护的样式解决方案的项目,尤其是小型项目。

## CSS-in-JS与传统CSS的区别

CSS-in-JS与传统CSS有一些重要的区别:

1. 作用域隔离: CSS-in-JS可以确保样式只应用于特定的组件,而传统CSS需要手动管理类名和命名空间。
2. 动态样式: CSS-in-JS可以根据组件的状态和属性动态生成样式,而传统CSS需要使用JavaScript来切换类名。
3. 主题化: CSS-in-JS可以轻松地支持主题化,而传统CSS需要使用预处理器或后处理器来实现。

## 在大型项目中管理样式

在大型项目中,有效管理样式是一个重要的挑战。以下是一些建议:

1. 使用CSS-in-JS库: CSS-in-JS库可以提供更好的作用域隔离和动态样式支持,从而简化样式管理。
2. 使用主题化: 主题化可以使样式更易于维护和扩展,尤其是在多个项目或不同环境中。
3. 使用CSS Modules: CSS Modules可以提供简单、可维护的样式解决方案,尤其是在小型项目中。
4. 使用CSS-in-JS库的最佳实践: 每个CSS-in-JS库都有自己的最佳实践,例如styled-components的\`ThemeProvider\`和Emotion的\`css\`函数。

## 结论

CSS-in-JS是一种强大的工具,它可以提供更好的作用域隔离、动态样式支持和主题化。styled-components、Emotion和CSS Modules都是流行的解决方案,每种方案都有自己的优缺点和最佳使用场景。在选择CSS-in-JS库时,应该根据项目的需求和规模来权衡性能、开发体验和维护性。
    `,
    date: "2024-03-25",
    author: "王五",
    tags: ["CSS-in-JS", "styled-components", "Emotion"],
  },
  {
    id: 4,
    title: "TypeScript高级类型技巧",
    excerpt: "掌握TypeScript中的高级类型用法...",
    content: `
# TypeScript高级类型技巧

TypeScript的类型系统非常强大,但也有一定的学习曲线。本文将深入探讨TypeScript中的高级类型技巧,包括条件类型、映射类型、联合类型和交叉类型等。我们将通过实际子展这些高级类型的应用,如何使用它们来创建更灵活、更安全的代码。同时,我们还将讨论TypeScript的类型推断机制,以及如何编写和使用自定义类型守卫。

## 条件类型

条件类型允许我们根据条件选择不同的类型。它的语法如下：

\`\`\`
type SomeType<T> = T extends SomeCondition ? TrueType : FalseType;
\`\`\`

例如,我们可以使用条件类型来创建一个\`Nullable\`类型：

\`\`\`
type Nullable<T> = T extends null | undefined ? T : T & { notNull: true };
\`\`\`

## 映射类型

映射类型允许我们对现有类型的每个属性进行转换。它的语法如下：

\`\`\`
type MappedType<T> = {
  [P in keyof T]: TransformedType;
};
\`\`\`

例如,我们可以使用映射类型来创建一个\`Readonly\`类型：

\`\`\`
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

## 联合类型和交叉类型

联合类型允许我们表示多个类型中的任意一个。它的语法如下：

\`\`\`
type UnionType = Type1 | Type2 | Type3;
\`\`\`

交叉类型允许我们组合多个类型的属性。它的语法如下：

\`\`\`
type IntersectionType = Type1 & Type2 & Type3;
\`\`\`

例如,我们可以使用交叉类型来创建一个\`WithRequired\`类型：

\`\`\`
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
\`\`\`

## 类型推断

TypeScript的类型推断机制可以自动推断变量的类型。它基于以下规则：

1. 如果有明确的类型注释,则使用该类型
2. 如果没有类型注释,则从初始化表达式推断类型
3. 如果初始化表达式是函数调用,则使用函数返回类型

例如,以下代码中的\`x\`和\`y\`都会被推断为\`number\`类型：

\`\`\`
let x = 10;
let y = x * 2;
\`\`\`

## 自定义类型守卫

自定义类型守卫允许我们在运行时检查类型。它的语法如下：

\`\`\`
function isTypeGuard(value: any): value is Type {
  // 检查类型
}
\`\`\`

例如,我们可以使用自定义类型守卫来检查一个值是否是\`string\`类型：

\`\`\`
function isString(value: any): value is string {
  return typeof value === 'string';
}
\`\`\`

## 结论

TypeScript的高级类型技巧可以帮助我们创建更灵活、更安全的代码。通过掌握条件类型、映射类型、联合类型和交叉类型等高级类型,我们可以更好地表达复杂的类型关系。同时,通过理解TypeScript的类型推断机制和自定义类型守卫,我们可以更好地控制类型检查。
    `,
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
    content: `
# WebAssembly与前端的未来

WebAssembly (Wasm) 正在改变Web应用的性能界限。本文将深入探讨Wasm的工作原理、与JavaScript的协作方式,以及在前端项目中的实际应用案例。

## WebAssembly简介

WebAssembly是一种低级的类汇编语言,可以在现代Web浏览器中运行。它的主要特点包括:

1. 近乎原生的执行速度
2. 跨平台兼容性
3. 与JavaScript的无缝集成

## WebAssembly的工作原理

WebAssembly模块通常由C++、Rust等语言编译而来。它的执行过程如下:

1. 加载.wasm文件
2. 实例化WebAssembly模块
3. 调用WebAssembly函数

## 与JavaScript的协作

WebAssembly可以与JavaScript进行双向通信:

\`\`\`javascript
// 加载WebAssembly模块
WebAssembly.instantiateStreaming(fetch('module.wasm'))
  .then(result => {
    const exports = result.instance.exports;
    const result = exports.someFunction(42);
    console.log(result);
  });
\`\`\`

## 实际应用案例

1. 图像处理: 使用WebAssembly加速滤镜应用
2. 游戏引擎: 将复杂的游戏逻辑编译为WebAssembly
3. 加密算法: 实现高性能的加密/解密操作

## WebAssembly的未来发展

1. 多线程支持: 利用Web Workers实现并行计算
2. 垃圾回收: 简化内存管理
3. 异常处理: 改善错误处理机制

WebAssembly正在不断发展,为Web应用带来更多可能性。通过掌握WebAssembly,前端开发者可以构建更高性能、更复杂的Web应用。
    `,
    date: "2024-04-15",
    author: "吴九",
    tags: ["WebAssembly", "性能优化", "前端创新"],
  },
  {
    id: 8,
    title: "AI驱动的前端开发:机遇与挑战",
    excerpt: "探讨AI技术如何改变前端开发流程...",
    content: `
# AI驱动的前端开发:机遇与挑战

人工智能正在深刻影响前端开发领域。本文将介绍AI在代码自动补全、UI设计生成、性能优化等方面的应用。

## AI在前端开发中的应用

1. 代码自动补全
   - GitHub Copilot
   - TabNine

2. UI设计生成
   - Figma的AI功能
   - Adobe Sensei

3. 性能优化
   - 自动化性能分析
   - 智能代码重构

## AI编程助手的使用技巧

以GitHub Copilot为例:

1. 编写清晰的注释
2. 使用自然语言描述功能
3. 结合单元测试提高准确性

## 机器学习优化用户体验

1. 个性化推荐
2. 智能表单填充
3. 预测用户行为

## AI带来的伦理问题

1. 版权问题
2. 隐私保护
3. 算法偏见

## AI对开发者角色的影响

1. 重点转向高层次设计
2. 增强问题解决能力
3. 持续学习新技术

AI技术正在改变前端开发的方方面面。开发者需要拥抱这些变化,同时保持批判性思考,以充分利用AI带来的机遇并应对挑战。
    `,
    date: "2024-04-20",
    author: "郑十",
    tags: ["AI", "前端开发", "自动化"],
  },
  {
    id: 9,
    title: "Web3和去中心化应用(DApps)开发入门",
    excerpt: "学习构建基于区块链的Web应用...",
    content: `
# Web3和去中心化应用(DApps)开发入门

Web3技术正在兴起,为开发者带来新的机遇。本文将介绍Web3的核心概念,并指导如何创建一个简单的DApp。

## Web3核心概念

1. 智能合约: 自动执行的程序,运行在区块链上
2. 去中心化存储: IPFS, Filecoin等
3. 去中心化身份验证: MetaMask, WalletConnect等

## 创建简单DApp

使用Ethereum和Solidity创建一个简单的投票DApp:

1. 编写智能合约:

\`\`\`solidity
pragma solidity ^0.8.0;

contract Voting {
    mapping(string => uint256) public votes;

    function vote(string memory candidate) public {
        votes[candidate] += 1;
    }

    function getVotes(string memory candidate) public view returns (uint256) {
        return votes[candidate];
    }
}
\`\`\`

2. 使用Web3.js与合约交互:

\`\`\`javascript
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

async function vote(candidate) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.vote(candidate).send({ from: accounts[0] });
}
\`\`\`

3. 集成React前端:

\`\`\`jsx
function VotingApp() {
    const [candidate, setCandidate] = useState('');
    const [votes, setVotes] = useState(0);

    async function handleVote() {
        await vote(candidate);
        const newVotes = await contract.methods.getVotes(candidate).call();
        setVotes(newVotes);
    }

    return (
        <div>
            <input value={candidate} onChange={e => setCandidate(e.target.value)} />
            <button onClick={handleVote}>Vote</button>
            <p>Votes: {votes}</p>
        </div>
    );
}
\`\`\`

## Web3应用面临的挑战

1. 可扩展性: 处理高并发交易
2. 用户体验: 简化钱包连接和交易确认
3. 法律合规: 应对不同地区的监管要求

Web3技术为开发者提供了创新的机会,但也带来了新的挑战。通过不断学习和实践,我们可以在这个新兴领域中创造出革命性的应用。
    `,
    date: "2024-04-25",
    author: "黄十一",
    tags: ["Web3", "区块链", "DApps"],
  },
  {
    id: 10,
    title: "微前端架构实践与性能优化",
    excerpt: "深入理解微前端的实现原理和优化策略...",
    content: `
# 微前端架构实践与性能优化

微前端架构允许多个独立开发、部署的前端应用共存于一个页面。本文将详细介绍微前端的实现方法和优化策略。

## 微前端实现方法

1. 使用Single-SPA框架:

\`\`\`javascript
import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'app1',
  app: () => import('./app1/main.js'),
  activeWhen: '/app1'
});

registerApplication({
  name: 'app2',
  app: () => import('./app2/main.js'),
  activeWhen: '/app2'
});

start();
\`\`\`

2. 使用Qiankun框架:

\`\`\`javascript
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app2',
  },
]);

start();
\`\`\`

## 微前端通信机制

1. 基于CustomEvent的发布订阅模式
2. 使用Props进行父子应用通信
3. 全局状态管理(如Redux)

## 样式隔离

1. BEM命名约定
2. CSS Modules
3. Shadow DOM

## 性能优化策略

1. 应用预加载
2. 公共依赖提取
3. 按需加载子应用

## 实践经验与注意事项

1. 统一技术栈,降低维护成本
2. 制定明确的应用边界
3. 建立完善的监控体系

微前端架构为大型前端项目提供了灵活的解决方案,但也带来了额外的复杂性。通过合理的架构设计和优化策略,我们可以充分发挥微前端的优势,构建高效、可维护的大型前端应用。
    `,
    date: "2024-04-30",
    author: "刘十二",
    tags: ["微前端", "架构设计", "性能优化"],
  },
  {
    id: 11,
    title: "前端可视化技术的新趋势",
    excerpt: "探索数据可视化和3D渲染的最新进展...",
    content: `
# 前端可视化技术的新趋势

前端可视化技术正在快速发展,本文将介绍最新的3D渲染和数据可视化技术,以及它们的实际应用。

## WebGL和Three.js

WebGL是一种用于渲染交互式3D图形的JavaScript API。Three.js是基于WebGL的3D库,大大简化了3D场景的创建过程。

创建一个简单的3D场景:

\`\`\`javascript
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
\`\`\`

## 数据可视化库

1. D3.js: 强大而灵活的数据可视化库
2. ECharts: 功能丰富的图表库

使用ECharts创建交互式图表:

\`\`\`javascript
import * as echarts from 'echarts';

const chartDom = document.getElementById('main');
const myChart = echarts.init(chartDom);

const option = {
    title: {
        text: '示例图表'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};

myChart.setOption(option);
\`\`\`

## WebGPU

WebGPU是下一代图形和计算API,有望在未来取代WebGL。它提供了更低级的硬件访问,可以实现更高效的渲染和计算。

## 实际应用案例

1. 交互式数据仪表板
2. 3D产品展示
3. 虚拟现实(VR)和增强现实(AR)应用

前端可视化技术正在不断突破边界,为用户提供更丰富、更直观的数据展示和交互体验。通过掌握这些新兴技术,前端开发者可以创造出令人惊叹的视觉效果和用户体验。
    `,
    date: "2024-05-05",
    author: "赵十三",
    tags: ["数据可视化", "WebGL", "3D渲染"],
  },
  {
    id: 12,
    title: "渐进式Web应用(PWA)开发指南",
    excerpt: "学习如何构建离线可用、类原生应用体验的Web应用...",
    content: `
# 渐进式Web应用(PWA)开发指南

渐进式Web应用(PWA)结合了Web和原生应用的优点,提供了卓越的用户体验。本文将深入探讨PWA的核心技术和实现方法。

## Service Workers

Service Workers是PWA的核心,用于实现离线缓存和后台同步。

注册Service Worker:

\`\`\`javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful');
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
\`\`\`

实现离线缓存:

\`\`\`javascript
// sw.js
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
\`\`\`

## Web App Manifest

Web App Manifest定义了应用的图标、启动行为等信息。

\`\`\`json
{
  "name": "My PWA",
  "short_name": "MyPWA",
  "icons": [
    {
      "src": "icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000"
}
\`\`\`

## Push Notifications

Push Notifications允许应用向用户发送实时通知。

\`\`\`javascript
// 请求推送权限
Notification.requestPermission().then(function(permission) {
  if (permission === 'granted') {
    console.log('Notification permission granted.');
  }
});

// 监听推送事件
self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: 'icons/icon-192x192.png',
    badge: 'icons/badge-128x128.png'
  };

  event.waitUntil(
    self.registration.showNotification('My PWA', options)
  );
});
\`\`\`

## PWA的未来发展

1. Web Bluetooth: 连接蓝牙设备
2. Web USB: 访问USB设备
3. Web Share: 共享内容

PWA正在不断发展,为用户提供更多可能性。通过掌握PWA的核心技术,前端开发者可以构建出类原生的Web应用,为用户带来卓越的体验。
    `,
    date: "2024-05-10",
    author: "钱十四",
    tags: ["PWA", "离线应用", "移动Web"],
  },
  {
    id: 13,
    title: "GraphQL与现代API设计",
    excerpt: "探索GraphQL如何改变前后端交互模式...",
    content: `
# GraphQL与现代API设计

GraphQL正在改变我们设计和使用API的方式。本文将深入讨论GraphQL的核心概念和优势,并指导如何在实际项目中使用GraphQL。

## GraphQL简介

GraphQL是一种用于API的查询语言,也是一个运行时。它的主要特点包括:

1. 类型系统: 强类型定义提高了API的可预测性
2. 按需获取: 客户端可以精确指定所需数据,减少过度获取
3. 实时更新: Subscriptions支持实时数据流

## 使用GraphQL

1. 定义Schema:

\`\`\`javascript
type Query {
  getPost(id: ID!): Post
  getAllPosts: [Post]
}

type Mutation {
  createPost(input: PostInput!): Post
  updatePost(id: ID!, input: PostInput!): Post
  deletePost(id: ID!): Post
}

type Subscription {
  postCreated: Post
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: Author!
}

type Author {
  id: ID!
  name: String!
  email: String!
}

input PostInput {
  title: String!
  content: String!
  authorId: ID!
}
\`\`\`

2. 使用Apollo Client:

\`\`\`javascript
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, useMutation } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <PostList />
    </ApolloProvider>
  );
}

function PostList() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.getAllPosts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

const GET_ALL_POSTS = gql\`
  query GetAllPosts {
    getAllPosts {
      id
      title
    }
  }
\`;
\`\`\`

## 性能优化策略

1. 查询合并: 将多个查询合并为一个,减少网络请求
2. 缓存管理: 合理使用缓存,避免重复请求
3. 分页查询: 对大量数据进行分页查询,提高性能

## 实践经验与注意事项

1. 避免过度使用Subscriptions: Subscriptions可能会增加复杂性和性能开销
2. 使用Apollo Client的最佳实践: 如使用\`useQuery\`和\`useMutation\`钩子
3. 处理错误和异常: 使用GraphQL错误处理机制,如\`errors\`字段和\`onError\`回调

GraphQL为前后端交互带来了新的可能性。通过掌握GraphQL的核心概念和最佳实践,前端开发者可以构建出高性能、可维护的API,为用户提供更好的体验。
    `,
    date: "2024-05-15",
    author: "孙十五",
    tags: ["GraphQL", "API设计", "全栈开发"],
  },
  {
    id: 14,
    title: "前端安全最佳实践",
    excerpt: "学习保护Web应用免受常见安全威胁...",
    content: `
# 前端安全最佳实践

随着Web应用日益复杂,前端安全变得越来越重要。本文将全面介绍前端安全最佳实践,并指导如何在实际项目中保护Web应用免受常见安全威胁。

## XSS防御

1. 使用内容安全策略(CSP): 限制可执行脚本的来源
2. 输入验证: 对用户输入进行严格的验证和过滤

## CSRF保护

1. 使用合适的CSRF令牌机制: 如同步令牌、双重Cookie等
2. 使用HTTPS: 确保数据传输的安全性

## 安全的第三方库管理

1. 使用npm audit和Snyk等工具: 定期检查依赖库的安全漏洞
2. 使用安全的CDN: 如Google的Hosted Libraries

## HTTPS

1. 正确配置SSL/TLS: 使用强加密算法和证书
2. 启用HSTS: 强制使用HTTPS

## 安全的本地存储

1. 敏感数据加密存储: 如使用Web Crypto API
2. 使用HttpOnly Cookie: 避免JavaScript访问Cookie

## 实践经验与注意事项

1. 定期更新依赖库: 及时修补安全漏洞
2. 使用安全的编码实践: 如避免使用\`eval()\`和\`innerHTML\`
3. 使用安全的通信协议: 如使用HTTPS和TLS

前端安全是一个持续的过程。通过不断学习和实践,前端开发者可以为用户提供更安全的Web应用,保护用户数据和隐私。
    `,
    date: "2024-05-20",
    author: "周十六",
    tags: ["Web安全", "XSS", "CSRF"],
  },
  {
    id: 15,
    title: "前端工程化与构建优化",
    excerpt: "探索现代前端工程化实践和构建性能优化...",
    content: `
# 前端工程化与构建优化

前端工程化对于大型项目的可维护性和性能至关重要。本文将深入探讨前端工程化的各个方面,并指导如何优化构建过程,提高开发效率和应用性能。

## 模块化

1. ES6模块: 使用\`import\`和\`export\`语句
2. CommonJS: 使用\`require()\`和\`module.exports\`
3. AMD: 使用\`define()\`和\`require()\`

## 构建工具

1. Webpack: 强大而灵活的构建工具
2. Rollup: 用于构建库的工具
3. Vite: 基于ESM的快速构建工具

## 代码分割

1. 实现按需加载: 使用\`import()\`和\`React.lazy()\`
2. 使用动态导入: 如\`import('module').then(module => {...})\`

## Tree Shaking

1. 消除无用代码: 使用ES6模块的静态分析特性
2. 使用SideEffects标记: 避免无意义的Tree Shaking

## 持续集成/持续部署(CI/CD)

1. 自动化测试: 使用Jest、Mocha等工具
2. 自动化部署: 使用GitHub Actions、Travis CI等平台

## 实践经验与注意事项

1. 使用ESLint和Prettier等工具: 保持代码风格一致
2. 使用TypeScript: 提高代码可维护性和类型安全
3. 使用Docker: 确保构建环境的一致性

前端工程化和构建优化是一个持续的过程。通过不断学习和实践,前端开发者可以构建出高性能、可维护的大型前端应用,为用户提供更好的体验。
    `,
    date: "2024-05-25",
    author: "吴十七",
    tags: ["工程化", "构建优化", "性能优化"],
  },
];
