(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{2486:function(e,t,r){Promise.resolve().then(r.t.bind(r,1872,23)),Promise.resolve().then(r.bind(r,3145)),Promise.resolve().then(r.bind(r,7442)),Promise.resolve().then(r.bind(r,5575)),Promise.resolve().then(r.bind(r,2996)),Promise.resolve().then(r.bind(r,9966)),Promise.resolve().then(r.bind(r,8064)),Promise.resolve().then(r.bind(r,9414))},3145:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let n=r(9970);function a(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},7442:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let n=r(2842),a=r(9877);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,a.getExpectedRequestStore)("next/dynamic css"),i=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,n.jsx)(n.Fragment,{children:i.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},5575:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var n=r(2842),a=r(6856),i=r(1326),o=r(7058),s=r(3022),l=r(4863);function d(){let[e,t]=(0,a.useState)([]),[r,d]=(0,a.useState)({author:"",content:""}),[c,u]=(0,a.useState)("newest"),f=(0,a.useMemo)(()=>[...e].sort((e,t)=>"newest"===c?new Date(t.date).getTime()-new Date(e.date).getTime():new Date(e.date).getTime()-new Date(t.date).getTime()),[e,c]);(0,a.useCallback)((e,r)=>{t(t=>{let n=[...t],a=n.find(t=>t.id===e);return a&&a.replies.push({id:Date.now(),author:"匿名用户",content:r,date:new Date().toLocaleString(),replies:[]}),n})},[]);let m=(0,a.useCallback)(e=>{e.preventDefault();let n={id:Date.now(),author:r.author.trim(),content:r.content.trim(),date:new Date().toLocaleString(),replies:[]};t(e=>[...e,n]),d({author:"",content:""})},[r]),p=(0,a.useCallback)(e=>{let{name:t,value:r}=e.target;d(e=>({...e,[t]:r}))},[]),g=(0,a.useCallback)(()=>{u(e=>"newest"===e?"oldest":"newest")},[]);return(0,n.jsxs)("div",{className:"mt-12",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"评论"}),(0,n.jsxs)("form",{onSubmit:m,className:"mb-8 space-y-4",children:[(0,n.jsx)(i.I,{type:"text",name:"author",placeholder:"您的名字",value:r.author,onChange:p,required:!0}),(0,n.jsx)(o.g,{name:"content",placeholder:"您的评论",value:r.content,onChange:p,rows:4,required:!0}),(0,n.jsx)(s.z,{type:"submit",children:"提交评论"})]}),(0,n.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,n.jsx)("h3",{className:"text-xl font-semibold",children:"评论列表"}),(0,n.jsx)(s.z,{onClick:g,variant:"outline",children:"newest"===c?"最新优先":"最早优先"})]}),(0,n.jsx)("div",{className:"space-y-4",children:f.map(e=>(0,n.jsxs)(l.Zb,{children:[(0,n.jsxs)(l.Ol,{children:[(0,n.jsx)(l.ll,{children:e.author}),(0,n.jsx)(l.SZ,{children:e.date})]}),(0,n.jsx)(l.aY,{children:(0,n.jsx)("p",{children:e.content})}),(0,n.jsx)(l.eW,{children:e.replies.map(e=>(0,n.jsxs)(l.Zb,{className:"mt-2 w-full",children:[(0,n.jsxs)(l.Ol,{children:[(0,n.jsx)(l.ll,{children:e.author}),(0,n.jsx)(l.SZ,{children:e.date})]}),(0,n.jsx)(l.aY,{children:(0,n.jsx)("p",{children:e.content})})]},e.id))})]},e.id))})]})}},2996:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var n=r(2842),a=r(6856),i=r(8561),o=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},s="object"==typeof global&&global&&global.Object===Object&&global,l="object"==typeof self&&self&&self.Object===Object&&self,d=s||l||Function("return this")(),c=function(){return d.Date.now()},u=/\s/,f=function(e){for(var t=e.length;t--&&u.test(e.charAt(t)););return t},m=/^\s+/,p=d.Symbol,g=Object.prototype,h=g.hasOwnProperty,x=g.toString,b=p?p.toStringTag:void 0,y=function(e){var t=h.call(e,b),r=e[b];try{e[b]=void 0;var n=!0}catch(e){}var a=x.call(e);return n&&(t?e[b]=r:delete e[b]),a},v=Object.prototype.toString,j=p?p.toStringTag:void 0,w=function(e){var t;return"symbol"==typeof e||null!=e&&"object"==typeof e&&"[object Symbol]"==(null==(t=e)?void 0===t?"[object Undefined]":"[object Null]":j&&j in Object(t)?y(t):v.call(t))},N=0/0,S=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,C=/^0o[0-7]+$/i,T=parseInt,R=function(e){if("number"==typeof e)return e;if(w(e))return N;if(o(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=o(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,f(t)+1).replace(m,""):t;var n=k.test(e);return n||C.test(e)?T(e.slice(2),n?2:8):S.test(e)?N:+e},O=Math.max,_=Math.min,E=function(e,t,r){var n,a,i,s,l,d,u=0,f=!1,m=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var r=n,i=a;return n=a=void 0,u=t,s=e.apply(i,r)}function h(e){var r=e-d,n=e-u;return void 0===d||r>=t||r<0||m&&n>=i}function x(){var e,r,n,a=c();if(h(a))return b(a);l=setTimeout(x,(e=a-d,r=a-u,n=t-e,m?_(n,i-r):n))}function b(e){return(l=void 0,p&&n)?g(e):(n=a=void 0,s)}function y(){var e,r=c(),i=h(r);if(n=arguments,a=this,d=r,i){if(void 0===l)return u=e=d,l=setTimeout(x,t),f?g(e):s;if(m)return clearTimeout(l),l=setTimeout(x,t),g(d)}return void 0===l&&(l=setTimeout(x,t)),s}return t=R(t)||0,o(r)&&(f=!!r.leading,i=(m="maxWait"in r)?O(R(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),y.cancel=function(){void 0!==l&&clearTimeout(l),u=0,n=d=a=l=void 0},y.flush=function(){return void 0===l?s:b(c())},y},P=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw TypeError("Expected a function");return o(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),E(e,t,{leading:n,maxWait:t,trailing:a})},Z=e=>{let{text:t,language:r}=e,[o,s]=(0,a.useState)("idle"),l=P(async()=>{if("copied"!==o)try{await navigator.clipboard.writeText(t),s("copied"),setTimeout(()=>s("idle"),1e3)}catch(e){console.error("复制失败:",e),s("idle")}},300),d=(0,a.useCallback)(l,[l,t,o]);return(0,n.jsxs)("button",{onClick:d,onMouseEnter:()=>s(e=>"idle"===e?"copy":e),onMouseLeave:()=>s(e=>"copy"===e?"idle":e),className:"\n        absolute top-2 right-2 p-1.5 rounded-md\n        bg-gray-200 dark:bg-gray-800\n        border border-gray-300 dark:border-gray-700\n        hover:bg-gray-300 dark:hover:bg-gray-700\n        transition-all duration-300 ease-in-out\n        flex items-center justify-center\n        shadow-sm hover:shadow-md dark:shadow-gray-900\n      ",title:"idle"===o?r:"copy"===o?"复制":"已复制",children:["idle"===o&&(0,n.jsx)("span",{className:"text-xs font-mono text-gray-700 dark:text-gray-300",children:r}),"copy"===o&&(0,n.jsx)(i.default,{src:"/svg/copy.svg",alt:"复制",width:18,height:18,className:"text-gray-700 dark:text-gray-300"}),"copied"===o&&(0,n.jsx)(i.default,{src:"/svg/check.svg",alt:"已复制",width:18,height:18,className:"text-green-600 dark:text-green-400"})]})}},9966:function(e,t,r){"use strict";r.d(t,{default:function(){return i}});var n=r(2842),a=r(6856);function i(){let[e,t]=(0,a.useState)(0),[r,i]=(0,a.useState)(!1),o=()=>document.documentElement.scrollHeight-document.documentElement.clientHeight,s=(0,a.useCallback)(()=>{let e=document.documentElement.scrollTop;t(e/o()*100),i(e>0)},[]);return((0,a.useEffect)(()=>(window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)),[s]),r)?(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full h-1 bg-gray-200 z-50",children:(0,n.jsx)("div",{style:{width:"".concat(e,"%")},className:"h-full bg-primary transition-all duration-300 ease-out"})}):null}},3022:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(2842),a=r(6856),i=r(6370),o=r(7756),s=r(6134);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:o,asChild:d=!1,...c}=e,u=d?i.g7:"button";return(0,n.jsx)(u,{className:(0,s.cn)(l({variant:a,size:o,className:r})),ref:t,...c})});d.displayName="Button"},4863:function(e,t,r){"use strict";r.d(t,{Ol:function(){return s},SZ:function(){return d},Zb:function(){return o},aY:function(){return c},eW:function(){return u},ll:function(){return l}});var n=r(2842),a=r(6856),i=r(6134);let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm","transition-transform duration-200 ease-in-out","hover:scale-105 active:scale-95",r),...a})});o.displayName="Card";let s=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...a})});s.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});l.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},1326:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(2842),a=r(6856),i=r(6134);let o=a.forwardRef((e,t)=>{let{className:r,type:a,...o}=e;return(0,n.jsx)("input",{type:a,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},8064:function(e,t,r){"use strict";r.r(t),r.d(t,{Label:function(){return d}});var n=r(2842),a=r(6856),i=r(1453),o=r(7756),s=r(6134);let l=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(i.f,{ref:t,className:(0,s.cn)(l(),r),...a})});d.displayName=i.f.displayName},9414:function(e,t,r){"use strict";r.r(t),r.d(t,{Select:function(){return c},SelectContent:function(){return h},SelectGroup:function(){return u},SelectItem:function(){return b},SelectLabel:function(){return x},SelectScrollDownButton:function(){return g},SelectScrollUpButton:function(){return p},SelectSeparator:function(){return y},SelectTrigger:function(){return m},SelectValue:function(){return f}});var n=r(2842),a=r(6856),i=r(3832),o=r(6533),s=r(6830),l=r(4972),d=r(6134);let c=i.fC,u=i.ZA,f=i.B4,m=a.forwardRef((e,t)=>{let{className:r,children:a,...s}=e;return(0,n.jsxs)(i.xz,{ref:t,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...s,children:[a,(0,n.jsx)(i.JO,{asChild:!0,children:(0,n.jsx)(o.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=i.xz.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(i.u_,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(s.Z,{className:"h-4 w-4"})})});p.displayName=i.u_.displayName;let g=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(i.$G,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(o.Z,{className:"h-4 w-4"})})});g.displayName=i.$G.displayName;let h=a.forwardRef((e,t)=>{let{className:r,children:a,position:o="popper",...s}=e;return(0,n.jsx)(i.h_,{children:(0,n.jsxs)(i.VY,{ref:t,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===o&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:o,...s,children:[(0,n.jsx)(p,{}),(0,n.jsx)(i.l_,{className:(0,d.cn)("p-1","popper"===o&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,n.jsx)(g,{})]})})});h.displayName=i.VY.displayName;let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(i.__,{ref:t,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...a})});x.displayName=i.__.displayName;let b=a.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return(0,n.jsxs)(i.ck,{ref:t,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...o,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(i.wU,{children:(0,n.jsx)(l.Z,{className:"h-4 w-4"})})}),(0,n.jsx)(i.eT,{children:a})]})});b.displayName=i.ck.displayName;let y=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(i.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...a})});y.displayName=i.Z0.displayName},7058:function(e,t,r){"use strict";r.d(t,{g:function(){return o}});var n=r(2842),a=r(6856),i=r(6134);let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("textarea",{className:(0,i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});o.displayName="Textarea"},6134:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(5023),a=r(8453);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[872,470,561,949,785,744],function(){return e(e.s=2486)}),_N_E=e.O()}]);