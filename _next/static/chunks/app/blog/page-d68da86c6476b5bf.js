(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{1432:function(e,t,n){Promise.resolve().then(n.bind(n,4098)),Promise.resolve().then(n.bind(n,8064)),Promise.resolve().then(n.bind(n,9414))},4496:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var r=n(1872),a=n.n(r)},1979:function(e,t,n){"use strict";var r=n(6239);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},4098:function(e,t,n){"use strict";n.d(t,{default:function(){return C}});var r=n(2842),a=n(6856),s=n(4496),l=n(1979);let i=[{id:1,title:"深入理解React Hooks",excerpt:"探索React Hooks的工作原理和最佳实践...",content:"React Hooks是React 16.8中引入的新特性,它允许我们在函数组件中使用状态和其他React特性。本文将深入探讨Hooks的工作原理,包括useState、useEffect、useContext等常用Hooks的实现细节和使用技巧。我们还将讨论自定义Hooks的创建方法和应用场景,以及Hooks在大型应用中的性能优化策略。",date:"2024-03-15",author:"张三",tags:["React","Hooks","前端开发"]},{id:2,title:"Next.js 13新特性解析",excerpt:"深入了解Next.js 13带来的革命性变化...",content:"Next.js 13引入了许多激动人心的新特性,如App Router、服务器组件、流式渲染等。本文将详细介绍这些新特性的使用方法和优势。我们将探讨App Router何���化路由管理,服务器组件如何提升性能和SEO,以及流式渲染如何改善大型应用的用户体验。同时,我们还将讨论从Next.js 12迁移到13版本的最佳实践和注意事项。",date:"2024-03-20",author:"李四",tags:["Next.js","服务器组件","性能优化"]},{id:3,title:"CSS-in-JS解决方案对比",excerpt:"比较流行的CSS-in-JS库的优缺点...",content:"CSS-in-JS已成为现代前端开发中的重要工具。本文将对比分析几种流行的CSS-in-JS解决方案,包括styled-components、Emotion、CSS Modules等。我们将从性能、开发体验、维护性等多个角度进行评估,并提供每种方案的最佳使用场景。此外,我们还将探讨CSS-in-JS与传统CSS方法的区别,以及如何在大型项目中有效管理样式。",date:"2024-03-25",author:"王五",tags:["CSS-in-JS","styled-components","Emotion"]},{id:4,title:"TypeScript高级类型技巧",excerpt:"掌握TypeScript中的高级类型用法...",content:"TypeScript的类型系统非常强大,但也有一定的学习曲线。本文将深入探讨TypeScript中的高级类型技巧,包括条件类型、映射类型、联合类型和交叉类型等。我们将通过实际子展���这些高级类型的应用,如何使用它们来创建更灵活、更安全的代码。同时,我们还将讨论TypeScript的类型推断机制,以及如何编写和使用自定义类型守卫。",date:"2024-03-30",author:"赵六",tags:["TypeScript","类型系统","前端开发"]},{id:5,title:"深入理解JavaScript异步编程",excerpt:"探索JavaScript中的异步编程模式和最佳实践...",content:"\n# JavaScript异步编程深度解析\n\nJavaScript的异步编程是前端开发中的重要概念。本文将深入探讨各种异步编程模式及其应用。\n\n## 回调函数\n\n回调函数是最基本的异步编程方式:\n\n```javascript\nfunction fetchData(callback) {\n  setTimeout(() => {\n    callback('Data fetched');\n  }, 1000);\n}\n\nfetchData((result) => {\n  console.log(result);\n});\n```\n\n## Promise\n\nPromise提供了更优雅的异步处理方式:\n\n```javascript\nfunction fetchData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('Data fetched');\n    }, 1000);\n  });\n}\n\nfetchData()\n  .then(result => console.log(result))\n  .catch(error => console.error(error));\n```\n\n## Async/Await\n\nAsync/Await是基于Promise的语法糖,使异步代码更易读:\n\n```javascript\nasync function getData() {\n  try {\n    const result = await fetchData();\n    console.log(result);\n  } catch (error) {\n    console.error(error);\n  }\n}\n\ngetData();\n```\n\n通过掌握这些异步编程模式,我们可以更好地处理复杂的异步操作,提高代码的可读性和可维护性。\n    ",date:"2024-04-05",author:"陈七",tags:["JavaScript","异步编程","Promise","Async/Await"]},{id:6,title:"React性能优化实战指南",excerpt:"学习React应用的高级性能优化技巧...",content:"\n# React性能优化实战指南\n\n在构建大型React应用时,性能优化至关重要。本文将介绍一些实用的React性能优化技巧。\n\n## 使用React.memo\n\nReact.memo可以帮助我们避免不必要的重渲染:\n\n```jsx\nconst MyComponent = React.memo(function MyComponent(props) {\n  /* 渲染使用到的props */\n});\n```\n\n## 使用useMemo和useCallback\n\nuseMemo和useCallback可以帮助我们缓存计算结果和回调函数:\n\n```jsx\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n\nconst memoizedCallback = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);\n```\n\n## 虚拟化长列表\n\n对于长列表,我们可以使用虚拟化技术来提高性能:\n\n```jsx\nimport { FixedSizeList as List } from 'react-window';\n\nfunction Row({ index, style }) {\n  return <div style={style}>Row {index}</div>;\n}\n\nfunction Example() {\n  return (\n    <List\n      height={150}\n      itemCount={1000}\n      itemSize={35}\n      width={300}\n    >\n      {Row}\n    </List>\n  );\n}\n```\n\n通过应用这些优化技巧,我们可以显著提升React应用的性能,为用户提供更流畅的体验。\n    ",date:"2024-04-10",author:"林八",tags:["React","性能优化","虚拟列表"]},{id:7,title:"WebAssembly与前端的未来",excerpt:"探索WebAssembly如何革新Web应用开发...",content:"WebAssembly (Wasm) 正在改变Web应用的性能界限。本文将深入探讨Wasm的工作原理、与JavaScript的协作方式,以及在前端项目中的实际应用案例。我们还将讨论Wasm的未来发展方向,包括多线程支持和垃圾回收等特性。",date:"2024-04-15",author:"吴九",tags:["WebAssembly","性能优化","前端创新"]},{id:8,title:"AI驱动的前端开发:机遇与挑战",excerpt:"探讨AI技术如何改变前端开发流程...",content:"人工智能正在深刻影响前端开发领域。本文将介绍AI在代码自动补全、UI设计生成、性能优化等方面的应用。我们将探讨GitHub Copilot等AI编程助手的使用技巧,以及如何利用机器学习模型优化用户体验。同时,我们也将讨论AI带来的伦理问题和对开发者角色的潜在影响。",date:"2024-04-20",author:"郑十",tags:["AI","前端开发","自动化"]},{id:9,title:"Web3和去中心化应用(DApps)开发入门",excerpt:"学习构建基于区块链的Web应用...",content:"Web3技术正在兴起,为开发者带来新的机遇。本文将介绍Web3的核心概念,包括智能合约、去中心化存储和身份验证。我们将使用Ethereum和Solidity创建一个简单的DApp,并探讨如何将其与传统的前端框架(如React)集成。同时,我们还将讨论Web3应用面临的挑战和最佳实践。",date:"2024-04-25",author:"黄十一",tags:["Web3","区块链","DApps"]},{id:10,title:"微前端架构实践与性能优化",excerpt:"深入理解微前端的实现原理和优化策略...",content:"微前端架构允许多个独立开发、部署的前端应用共存于一个页面。本文将详细介绍微前端的实现方法,包括Single-SPA、Qiankun等框架的使用。我们将探讨微前端的通信机制、样式隔离、性能优化等关键��题,并分享大型项目中的实践经验和注意事项。",date:"2024-04-30",author:"刘十二",tags:["微前端","架构设计","性能优化"]},{id:11,title:"前端可视化技术的新趋势",excerpt:"探索数据可视化和3D渲染的最新进展...",content:"前端可视化技术正在快速发展。本文将介绍WebGL、Three.js等3D渲染技术的最新应用,以及D3.js、ECharts等数据可视化库的高级用法。我们将通过实例演示如何创建交互式3D场景和复杂的数据仪表板。同时,我们还将探讨WebGPU等新兴技术对前端可视化的影响。",date:"2024-05-05",author:"赵十三",tags:["数据可视化","WebGL","3D渲染"]},{id:12,title:"渐进式Web应用(PWA)开发指南",excerpt:"学习如何构建离线可用、类原生应用体验的Web应用...",content:"\n渐进式Web应用(PWA)结合了Web和原生应用的优点,提供了卓越的用户体验。本文将深入探讨PWA的核心技术:\n\n1. Service Workers: 实现离线缓存和后台同步\n2. Web App Manifest: 定义应用图标和启动行为\n3. Push Notifications: 实现推送通知功能\n\n我们将通过一个实际项目,演示如何将现有的Web应用转换为PWA,并讨论PWA在不同平台上的表现和局限性。此外,我们还将探讨PWA的未来发展趋势,如Web Bluetooth和Web USB等新API的应用前景。\n    ",date:"2024-05-10",author:"钱十四",tags:["PWA","离线应用","移动Web"]},{id:13,title:"GraphQL与现代API设计",excerpt:"探索GraphQL如何改变前后端交互模式...",content:"\nGraphQL正在改变我们设计和使用API的方式。本文将深入讨论GraphQL的核心概念和优势:\n\n1. 类型系统: 强类型定义提高了API的可预测性\n2. 按需获取: 客户端可以精确指定所需数据,减少过度获取\n3. 实时更新: Subscriptions支持实时数据流\n\n我们将通过一个实际的全栈项目,展示如何使用Apollo Client在React应用中集成GraphQL。同时,我们还将探讨GraphQL的性能优化策略,如查询合并、缓存管理等,以及在大型项目中使用GraphQL的最佳实践。\n    ",date:"2024-05-15",author:"孙十五",tags:["GraphQL","API设计","全栈开发"]},{id:14,title:"前端安全最佳实践",excerpt:"学习保护Web应用免受常见安全威胁...",content:"\n随着Web应用日益复杂,前端安全变得越来越重要。本文将全面介绍前端安全最佳实践:\n\n1. XSS防御: 使用内容安全策略(CSP)和输入验证\n2. CSRF保护: 实现合适的CSRF令牌机制\n3. 安全的第三方库管理: 使用npm audit和Snyk等工具\n4. HTTPS: 正确配置SSL/TLS\n5. 安全的本地存储: 敏感数据加密存储\n\n我们将通过实际案例分析常见的安全漏洞,并提供具体的防御策略。同时,我们还将讨论新兴的安全威胁和防御技术,如子资源完整性(SRI)和特征策略等。\n    ",date:"2024-05-20",author:"周十六",tags:["Web安全","XSS","CSRF"]},{id:15,title:"前端工程化与构建优化",excerpt:"探索现代前端工程化实践和构建性能优化...",content:"\n前端工程化对于大型项目的可维护性和性能至关重要。本文将深入探讨前端工程化的各个方面:\n\n1. 模块化: ES6模块、CommonJS和AMD的对比\n2. 构建工具: Webpack、Rollup和Vite的选择与配置\n3. 代码分割: 实现按需加载,提高首屏加载速度\n4. Tree Shaking: 消除无用代码,减小包体积\n5. 持续集成/持续部署(CI/CD): 自动化测试和部署流程\n\n我们将通过一个复杂的前端项目,演示如何优化构建过程,提高开发效率和应用性能。同时,我们还将探讨新兴的构建工具和优化技术,如ESBuild和Rust-based工具链等。\n    ",date:"2024-05-25",author:"吴十七",tags:["工程化","构建优化","性能优化"]}];var o=n(7756),c=n(6134);let d=(0,o.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary/70",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 active:bg-destructive/70",outline:"text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/90"}},defaultVariants:{variant:"default"}});function u(e){let{className:t,variant:n,...a}=e;return(0,r.jsx)("div",{className:(0,c.cn)(d({variant:n}),t),...a})}var f=n(3022),m=n(1326);function p(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,c.cn)("animate-pulse rounded-md bg-muted",t),...n})}n(7058);var x=n(4863);let h=(0,o.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),g=a.forwardRef((e,t)=>{let{className:n,variant:a,...s}=e;return(0,r.jsx)("div",{ref:t,role:"alert",className:(0,c.cn)(h({variant:a}),n),...s})});g.displayName="Alert";let b=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("h5",{ref:t,className:(0,c.cn)("mb-1 font-medium leading-none tracking-tight",n),...a})});b.displayName="AlertTitle";let v=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,c.cn)("text-sm [&_p]:leading-relaxed",n),...a})});v.displayName="AlertDescription";var y=n(9414),j=n(8064),S=n(6830),N=n(6533);/**
 * @license lucide-react v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let w=(0,n(7882).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);function C(){let e=(0,l.useRouter)(),t=(0,l.useSearchParams)(),[n,o]=(0,a.useState)(1),[c,d]=(0,a.useState)(""),[h,C]=(0,a.useState)(null),[R,k]=(0,a.useState)(i),[A,W]=(0,a.useState)(!1),[P,L]=(0,a.useState)(!0),[D,I]=(0,a.useState)("date"),T=(0,a.useCallback)(()=>{let e=t.get("tag");C(e||null),k(e?i.filter(t=>t.tags.includes(e)):i)},[t]);(0,a.useEffect)(()=>{T(),L(!1)},[T]);let E=(0,a.useMemo)(()=>{let e=new Set;return i.forEach(t=>t.tags.forEach(t=>e.add(t))),Array.from(e)},[]),z=(0,a.useMemo)(()=>{let e=R.filter(e=>(e.title.toLowerCase().includes(c.toLowerCase())||e.content.toLowerCase().includes(c.toLowerCase()))&&(!h||e.tags.includes(h)));return e.sort((e,t)=>"date"===D?new Date(t.date).getTime()-new Date(e.date).getTime():e.title.localeCompare(t.title)),e},[c,h,R,D]),G=(0,a.useMemo)(()=>{let e=6*n;return z.slice(e-6,e)},[n,z]),Z=(0,a.useCallback)(e=>o(e),[]),_=(0,a.useCallback)(t=>{C(t),t?e.push("/blog?tag=".concat(encodeURIComponent(t)),{scroll:!1}):e.push("/blog",{scroll:!1})},[e]),J=(0,a.useMemo)(()=>A?E:E.slice(0,10),[A,E]),M=(0,a.useCallback)(e=>{let t=e.target.value;d(t),o(1),k(i.filter(e=>(e.title.toLowerCase().includes(t.toLowerCase())||e.content.toLowerCase().includes(t.toLowerCase()))&&(!h||e.tags.includes(h))))},[h]);return(0,r.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold mb-8 text-center",children:"博客文章"}),(0,r.jsxs)("div",{className:"mb-6 flex items-end space-x-4",children:[(0,r.jsxs)("div",{className:"flex-grow",children:[(0,r.jsx)(j.Label,{htmlFor:"search",className:"mb-2 block",children:"搜索文章"}),(0,r.jsx)(m.I,{id:"search",type:"text",placeholder:"输入关键词...",value:c,onChange:M})]}),(0,r.jsxs)("div",{className:"w-40",children:[(0,r.jsx)(j.Label,{htmlFor:"sort",className:"mb-2 block",children:"排序方式"}),(0,r.jsxs)(y.Select,{onValueChange:e=>I(e),defaultValue:D,children:[(0,r.jsx)(y.SelectTrigger,{id:"sort",className:"w-full",children:(0,r.jsx)(y.SelectValue,{placeholder:"选择排序方式"})}),(0,r.jsxs)(y.SelectContent,{children:[(0,r.jsx)(y.SelectItem,{value:"date",children:"按日期排序"}),(0,r.jsx)(y.SelectItem,{value:"title",children:"按标题排序"})]})]})]})]}),(0,r.jsxs)("div",{className:"mb-6 flex flex-wrap items-center gap-2",children:[(0,r.jsx)(u,{variant:null===h?"default":"secondary",className:"cursor-pointer",onClick:()=>_(null),children:"全部"}),J.map(e=>(0,r.jsx)(u,{variant:e===h?"default":"secondary",className:"cursor-pointer",onClick:()=>_(e),children:e},e)),E.length>10&&(0,r.jsx)(f.z,{variant:"ghost",size:"sm",onClick:()=>W(!A),className:"ml-2",children:A?(0,r.jsxs)(r.Fragment,{children:["收起 ",(0,r.jsx)(S.Z,{className:"ml-1 h-4 w-4"})]}):(0,r.jsxs)(r.Fragment,{children:["展开 ",(0,r.jsx)(N.Z,{className:"ml-1 h-4 w-4"})]})})]}),(0,r.jsx)("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:P?Array.from({length:6}).map((e,t)=>(0,r.jsxs)(x.Zb,{children:[(0,r.jsxs)(x.Ol,{children:[(0,r.jsx)(p,{className:"h-6 w-3/4"}),(0,r.jsx)(p,{className:"h-4 w-1/2 mt-2"})]}),(0,r.jsx)(x.aY,{children:(0,r.jsx)(p,{className:"h-20 w-full"})}),(0,r.jsxs)(x.eW,{children:[(0,r.jsx)(p,{className:"h-6 w-1/4 mr-2"}),(0,r.jsx)(p,{className:"h-6 w-1/4"})]})]},t)):G.length>0?G.map(e=>(0,r.jsxs)(x.Zb,{children:[(0,r.jsxs)(x.Ol,{children:[(0,r.jsx)(x.ll,{children:(0,r.jsx)(s.default,{href:"/blog/".concat(e.id),className:"hover:underline",children:e.title})}),(0,r.jsxs)(x.SZ,{children:[e.date," | ",e.author]})]}),(0,r.jsx)(x.aY,{children:(0,r.jsx)("p",{children:e.excerpt})}),(0,r.jsx)(x.eW,{className:"flex flex-wrap gap-2",children:e.tags.map(e=>(0,r.jsx)(u,{variant:"secondary",className:"text-xs px-2 py-1 h-6 cursor-pointer",onClick:()=>_(e),children:e},e))})]},e.id)):(0,r.jsx)("div",{className:"col-span-full",children:(0,r.jsxs)(g,{variant:"default",children:[(0,r.jsx)(w,{className:"h-4 w-4"}),(0,r.jsx)(b,{children:"未找到匹配的文章"}),(0,r.jsxs)(v,{children:["抱歉，没有找到与您的搜索条件相匹配的文章。请尝试以下操作：",(0,r.jsxs)("ul",{className:"list-disc list-inside mt-2",children:[(0,r.jsx)("li",{children:"检查您的拼写"}),(0,r.jsx)("li",{children:"使用不同的关键词"}),(0,r.jsx)("li",{children:"尝试更广泛的搜索词"}),(0,r.jsx)("li",{children:"清除所有筛选条件，重新开始搜索"})]})]})]})})}),z.length>0&&(0,r.jsx)("div",{className:"mt-8 flex justify-center",children:Array.from({length:Math.ceil(z.length/6)},(e,t)=>(0,r.jsx)(f.z,{onClick:()=>Z(t+1),variant:n===t+1?"default":"outline",className:"mx-1",children:t+1},t))})]})}},3022:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var r=n(2842),a=n(6856),s=n(6370),l=n(7756),i=n(6134);let o=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:n,variant:a,size:l,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,r.jsx)(u,{className:(0,i.cn)(o({variant:a,size:l,className:n})),ref:t,...d})});c.displayName="Button"},4863:function(e,t,n){"use strict";n.d(t,{Ol:function(){return i},SZ:function(){return c},Zb:function(){return l},aY:function(){return d},eW:function(){return u},ll:function(){return o}});var r=n(2842),a=n(6856),s=n(6134);let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm","transition-transform duration-200 ease-in-out","hover:scale-105 active:scale-95",n),...a})});l.displayName="Card";let i=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",n),...a})});i.displayName="CardHeader";let o=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",n),...a})});o.displayName="CardTitle";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",n),...a})});c.displayName="CardDescription";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",n),...a})});d.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",n),...a})});u.displayName="CardFooter"},1326:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(2842),a=n(6856),s=n(6134);let l=a.forwardRef((e,t)=>{let{className:n,type:a,...l}=e;return(0,r.jsx)("input",{type:a,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...l})});l.displayName="Input"},8064:function(e,t,n){"use strict";n.r(t),n.d(t,{Label:function(){return c}});var r=n(2842),a=n(6856),s=n(1453),l=n(7756),i=n(6134);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.f,{ref:t,className:(0,i.cn)(o(),n),...a})});c.displayName=s.f.displayName},9414:function(e,t,n){"use strict";n.r(t),n.d(t,{Select:function(){return d},SelectContent:function(){return h},SelectGroup:function(){return u},SelectItem:function(){return b},SelectLabel:function(){return g},SelectScrollDownButton:function(){return x},SelectScrollUpButton:function(){return p},SelectSeparator:function(){return v},SelectTrigger:function(){return m},SelectValue:function(){return f}});var r=n(2842),a=n(6856),s=n(2459),l=n(6533),i=n(6830),o=n(4972),c=n(6134);let d=s.fC,u=s.ZA,f=s.B4,m=a.forwardRef((e,t)=>{let{className:n,children:a,...i}=e;return(0,r.jsxs)(s.xz,{ref:t,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",n),...i,children:[a,(0,r.jsx)(s.JO,{asChild:!0,children:(0,r.jsx)(l.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=s.xz.displayName;let p=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.u_,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",n),...a,children:(0,r.jsx)(i.Z,{className:"h-4 w-4"})})});p.displayName=s.u_.displayName;let x=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.$G,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",n),...a,children:(0,r.jsx)(l.Z,{className:"h-4 w-4"})})});x.displayName=s.$G.displayName;let h=a.forwardRef((e,t)=>{let{className:n,children:a,position:l="popper",...i}=e;return(0,r.jsx)(s.h_,{children:(0,r.jsxs)(s.VY,{ref:t,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:l,...i,children:[(0,r.jsx)(p,{}),(0,r.jsx)(s.l_,{className:(0,c.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,r.jsx)(x,{})]})})});h.displayName=s.VY.displayName;let g=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.__,{ref:t,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",n),...a})});g.displayName=s.__.displayName;let b=a.forwardRef((e,t)=>{let{className:n,children:a,...l}=e;return(0,r.jsxs)(s.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...l,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.wU,{children:(0,r.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,r.jsx)(s.eT,{children:a})]})});b.displayName=s.ck.displayName;let v=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",n),...a})});v.displayName=s.Z0.displayName},7058:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var r=n(2842),a=n(6856),s=n(6134);let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("textarea",{className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...a})});l.displayName="Textarea"},6134:function(e,t,n){"use strict";n.d(t,{cn:function(){return s}});var r=n(5023),a=n(8453);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}}},function(e){e.O(0,[872,100,949,785,744],function(){return e(e.s=1432)}),_N_E=e.O()}]);