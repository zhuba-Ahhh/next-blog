(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{31011:function(e,t,r){Promise.resolve().then(r.bind(r,93145)),Promise.resolve().then(r.bind(r,67442)),Promise.resolve().then(r.bind(r,31667)),Promise.resolve().then(r.bind(r,49966))},31667:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(62842),a=r(75414),s=r(48561);function l(e){let{post:t,readingTime:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-4xl font-bold mb-4",children:t.title}),(0,n.jsxs)("div",{className:"mb-4 text-muted-foreground",children:[(0,n.jsx)("span",{children:t.date})," | ",(0,n.jsx)("span",{children:t.author})," |",(0,n.jsxs)("span",{children:["预计阅读时间: ",r," 分钟"]})]}),t.coverImage&&(0,n.jsx)(s.default,{src:t.coverImage,alt:t.title,width:800,height:400,layout:"responsive",className:"rounded-lg mb-6"})]})}var i=r(96519),o=r(79853),c=r(43685);function d(){return e=>{(0,c.Vn)(e,"element",e=>{"code"===e.tagName&&e.properties&&!e.properties.className&&(e.properties.className=["inline-code"])})}}var u=r(19762),f=r(3468);function m(e){let{content:t,components:r}=e;return(0,n.jsx)(i.R,{source:t,components:r,options:{mdxOptions:{remarkPlugins:[o.Z],rehypePlugins:[u.Z,[f.Z,{behavior:"wrap"}],d]},parseFrontmatter:!0}})}var x=r(4496),p=r(56275);function g(e){let{post:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mb-6 flex flex-wrap gap-2",children:t.tags.map(e=>(0,n.jsx)(x.default,{href:"/blog?tag=".concat(encodeURIComponent(e)),children:(0,n.jsx)(p.Ct,{variant:"secondary",className:"cursor-pointer hover:bg-secondary-hover",children:e})},e))}),(0,n.jsx)(p.zx,{asChild:!0,variant:"outline",children:(0,n.jsx)(x.default,{href:"/blog",children:"← 返回博客列表"})})]})}var h=function(e){let{posts:t}=e;return 0===t.length?null:(0,n.jsxs)(p.Zb,{className:"mt-12",children:[(0,n.jsx)(p.Ol,{children:(0,n.jsx)(p.ll,{children:"相关文章"})}),(0,n.jsx)(p.aY,{children:(0,n.jsx)("ul",{className:"space-y-2",children:t.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(x.default,{href:"/blog/".concat(e.id),className:"text-primary",children:e.title})},e.id))})})]})},b=r(88044);function v(e){let{url:t,title:r}=e;return(0,n.jsxs)("div",{className:"flex space-x-4 mt-6",children:[(0,n.jsx)(x.default,{href:"https://twitter.com/intent/tweet?url=".concat(t,"&text=").concat(r),target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-500","aria-label":"在Twitter上分享",children:(0,n.jsx)(b.fWC,{size:24})}),(0,n.jsx)(x.default,{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(t),target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:text-blue-700","aria-label":"在Facebook上分享",children:(0,n.jsx)(b.Am9,{size:24})}),(0,n.jsx)(x.default,{href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(t,"&title=").concat(r),target:"_blank",rel:"noopener noreferrer",className:"text-blue-700 hover:text-blue-800","aria-label":"在LinkedIn上分享",children:(0,n.jsx)(b.ltd,{size:24})})]})}var j=r(36856);let y=j.memo(function(e){let{headings:t}=e;return(0,n.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-700 p-4 rounded-lg sticky top-20 w-[240px] mr-2",children:[(0,n.jsx)("h2",{className:"text-lg font-bold mb-3 text-gray-900 dark:text-white",children:"目录"}),(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:"space-y-1",children:t.map((e,t)=>(0,n.jsx)("li",{className:"".concat(3===e.level?"ml-2":""),children:(0,n.jsx)("a",{href:"#".concat(e.slug),className:"text-primary dark:text-primary-light text-sm block truncate",title:e.text,children:e.text.length>20?e.text.slice(0,20)+"...":e.text})},t))})})]})});var N=r(31326),w=r(77058),k=r(33022),S=r(44863);function C(){let[e,t]=(0,j.useState)([]),[r,a]=(0,j.useState)({author:"",content:""}),[s,l]=(0,j.useState)("newest"),i=(0,j.useMemo)(()=>[...e].sort((e,t)=>"newest"===s?new Date(t.date).getTime()-new Date(e.date).getTime():new Date(e.date).getTime()-new Date(t.date).getTime()),[e,s]),o=(0,j.useCallback)(e=>{e.preventDefault();let n={...r,id:Date.now(),date:new Date().toISOString()};t(e=>[...e,n]),a({author:"",content:""})},[r]),c=(0,j.useCallback)(e=>{let{name:t,value:r}=e.target;a(e=>({...e,[t]:r}))},[]),d=(0,j.useCallback)(()=>{l(e=>"newest"===e?"oldest":"newest")},[]);return(0,n.jsxs)("div",{className:"mt-12",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"评论"}),(0,n.jsxs)("form",{onSubmit:o,className:"mb-8 space-y-4",children:[(0,n.jsx)(N.I,{type:"text",name:"author",placeholder:"您的名字",value:r.author,onChange:c,required:!0}),(0,n.jsx)(w.g,{name:"content",placeholder:"您的评论",value:r.content,onChange:c,rows:4,required:!0}),(0,n.jsx)(k.z,{type:"submit",children:"提交评论"})]}),(0,n.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,n.jsx)("h3",{className:"text-xl font-semibold",children:"评论列表"}),(0,n.jsx)(k.z,{onClick:d,variant:"outline",children:"newest"===s?"最新优先":"最早优先"})]}),(0,n.jsx)("div",{className:"space-y-4",children:i.map(e=>{var t,r;return(0,n.jsxs)(S.Zb,{children:[(0,n.jsxs)(S.Ol,{children:[(0,n.jsx)(S.ll,{children:e.author}),(0,n.jsx)(S.SZ,{children:e.date})]}),(0,n.jsx)(S.aY,{children:(0,n.jsx)("p",{children:e.content})}),(null==e?void 0:e.replies)&&(null==e?void 0:null===(t=e.replies)||void 0===t?void 0:t.length)>0&&(0,n.jsx)(S.eW,{children:null==e?void 0:null===(r=e.replies)||void 0===r?void 0:r.map(e=>(0,n.jsxs)(S.Zb,{className:"mt-2 w-full",children:[(0,n.jsxs)(S.Ol,{children:[(0,n.jsx)(S.ll,{children:e.author}),(0,n.jsx)(S.SZ,{children:e.date})]}),(0,n.jsx)(S.aY,{children:(0,n.jsx)("p",{children:e.content})})]},e.id))})]},e.id)})})]})}var Z=r(92814),R=r(18768);let _=(0,r(49616).default)(()=>r.e(996).then(r.bind(r,32996)),{loadableGenerated:{webpack:()=>[32996]},ssr:!1}),z={h1:e=>(0,n.jsx)("h1",{className:"text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white scroll-mt-20",...e}),h2:e=>(0,n.jsx)("h2",{className:"text-2xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200 scroll-mt-20",...e}),h3:e=>(0,n.jsx)("h3",{className:"text-xl font-medium mt-4 mb-2 text-gray-700 dark:text-gray-300 scroll-mt-20",...e}),p:e=>(0,n.jsx)("p",{className:"mb-4 text-gray-600 dark:text-gray-400",...e}),a:e=>(0,n.jsx)("a",{className:"text-blue-500 dark:text-blue-400",...e}),ol:e=>(0,n.jsx)("ol",{className:"list-decimal list-inside mb-4 text-gray-600 dark:text-gray-400",...e}),li:e=>(0,n.jsx)("li",{className:"mb-2 text-gray-600 dark:text-gray-400",...e}),code:e=>{let{className:t,...r}=e,a=/language-(\w+)/.exec(t||""),s=a?a[1]:"text";return"inline-code"===t?(0,n.jsx)("code",{className:"bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm",...r}):(0,n.jsxs)("div",{className:"relative group",children:[(0,n.jsx)(Z.Z,{language:s,style:R.Z,className:"bg-code-light dark:bg-code-dark rounded-lg p-4 my-4 overflow-auto",codeTagProps:{className:"text-code-light dark:text-code-dark"},customStyle:{backgroundColor:"var(--code-bg)",color:"var(--code-text)",paddingRight:"7rem"},...r}),(0,n.jsx)(_,{text:r.children,language:s})]})},pre:e=>(0,n.jsx)("div",{...e})};function T(e){let{post:t,headings:r,readingTime:s,relatedPosts:i}=e;return(0,n.jsx)(a.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"container mx-auto px-4 py-8",children:(0,n.jsxs)("div",{className:"flex flex-col md:flex-row gap-8",children:[(0,n.jsx)("aside",{className:"md:w-1/4",children:(0,n.jsx)(a.E.div,{initial:{x:-50,opacity:0},animate:{x:0,opacity:1},transition:{duration:.5,delay:.2},children:(0,n.jsx)(y,{headings:r})})}),(0,n.jsxs)(a.E.article,{className:"md:w-3/4",initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,delay:.3},children:[(0,n.jsx)(l,{post:t,readingTime:s}),(0,n.jsx)(m,{content:t.content,components:z}),(0,n.jsx)(g,{post:t}),(0,n.jsx)(h,{posts:i}),(0,n.jsx)(v,{url:"https://yourblog.com/blog/".concat(t.id),title:t.title}),(0,n.jsx)("div",{className:"mt-16",children:(0,n.jsx)(C,{})})]})]})})}},49966:function(e,t,r){"use strict";r.d(t,{default:function(){return s}});var n=r(62842),a=r(36856);function s(){let[e,t]=(0,a.useState)(0),[r,s]=(0,a.useState)(!1),l=()=>document.documentElement.scrollHeight-document.documentElement.clientHeight,i=(0,a.useCallback)(()=>{let e=document.documentElement.scrollTop;t(e/l()*100),s(e>0)},[]);return((0,a.useEffect)(()=>(window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)),[i]),r)?(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full h-1 bg-gray-200 z-50",children:(0,n.jsx)("div",{style:{width:"".concat(e,"%")},className:"h-full bg-primary transition-all duration-300 ease-out"})}):null}},33022:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(62842),a=r(36856),s=r(76370),l=r(37756),i=r(26134);let o=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:r,variant:a,size:l,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(o({variant:a,size:l,className:r})),ref:t,...d})});c.displayName="Button"},44863:function(e,t,r){"use strict";r.d(t,{Ol:function(){return i},SZ:function(){return c},Zb:function(){return l},aY:function(){return d},eW:function(){return u},ll:function(){return o}});var n=r(62842),a=r(36856),s=r(26134);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm","transition-transform duration-200 ease-in-out","hover:scale-105 active:scale-95",r),...a})});l.displayName="Card";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...a})});i.displayName="CardHeader";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});o.displayName="CardTitle";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...a})});c.displayName="CardDescription";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...a})});d.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},56275:function(e,t,r){"use strict";r.d(t,{bZ:function(){return x},X:function(){return g},Cd:function(){return p},Ct:function(){return o},zx:function(){return c.z},Zb:function(){return f.Zb},aY:function(){return f.aY},SZ:function(){return f.SZ},eW:function(){return f.eW},Ol:function(){return f.Ol},ll:function(){return f.ll},II:function(){return d.I},__:function(){return b.Label},Ph:function(){return h.Select},Bw:function(){return h.SelectContent},Ql:function(){return h.SelectItem},i4:function(){return h.SelectTrigger},ki:function(){return h.SelectValue},Od:function(){return u}});var n=r(62842),a=r(36856),s=r(37756),l=r(26134);let i=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary/70",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 active:bg-destructive/70",outline:"text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/90"}},defaultVariants:{variant:"default"}});function o(e){let{className:t,variant:r,...a}=e;return(0,n.jsx)("div",{className:(0,l.cn)(i({variant:r}),t),...a})}var c=r(33022),d=r(31326);function u(e){let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,l.cn)("animate-pulse rounded-md bg-muted",t),...r})}r(77058);var f=r(44863);let m=(0,s.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),x=a.forwardRef((e,t)=>{let{className:r,variant:a,...s}=e;return(0,n.jsx)("div",{ref:t,role:"alert",className:(0,l.cn)(m({variant:a}),r),...s})});x.displayName="Alert";let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h5",{ref:t,className:(0,l.cn)("mb-1 font-medium leading-none tracking-tight",r),...a})});p.displayName="AlertTitle";let g=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,l.cn)("text-sm [&_p]:leading-relaxed",r),...a})});g.displayName="AlertDescription";var h=r(49414),b=r(28064)},31326:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var n=r(62842),a=r(36856),s=r(26134);let l=a.forwardRef((e,t)=>{let{className:r,type:a,...l}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});l.displayName="Input"},28064:function(e,t,r){"use strict";r.r(t),r.d(t,{Label:function(){return c}});var n=r(62842),a=r(36856),s=r(11453),l=r(37756),i=r(26134);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.f,{ref:t,className:(0,i.cn)(o(),r),...a})});c.displayName=s.f.displayName},49414:function(e,t,r){"use strict";r.r(t),r.d(t,{Select:function(){return d},SelectContent:function(){return g},SelectGroup:function(){return u},SelectItem:function(){return b},SelectLabel:function(){return h},SelectScrollDownButton:function(){return p},SelectScrollUpButton:function(){return x},SelectSeparator:function(){return v},SelectTrigger:function(){return m},SelectValue:function(){return f}});var n=r(62842),a=r(36856),s=r(93832),l=r(86533),i=r(46830),o=r(84972),c=r(26134);let d=s.fC,u=s.ZA,f=s.B4,m=a.forwardRef((e,t)=>{let{className:r,children:a,...i}=e;return(0,n.jsxs)(s.xz,{ref:t,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...i,children:[a,(0,n.jsx)(s.JO,{asChild:!0,children:(0,n.jsx)(l.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=s.xz.displayName;let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.u_,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(i.Z,{className:"h-4 w-4"})})});x.displayName=s.u_.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.$G,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(l.Z,{className:"h-4 w-4"})})});p.displayName=s.$G.displayName;let g=a.forwardRef((e,t)=>{let{className:r,children:a,position:l="popper",...i}=e;return(0,n.jsx)(s.h_,{children:(0,n.jsxs)(s.VY,{ref:t,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:l,...i,children:[(0,n.jsx)(x,{}),(0,n.jsx)(s.l_,{className:(0,c.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,n.jsx)(p,{})]})})});g.displayName=s.VY.displayName;let h=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.__,{ref:t,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...a})});h.displayName=s.__.displayName;let b=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e;return(0,n.jsxs)(s.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...l,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(s.wU,{children:(0,n.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,n.jsx)(s.eT,{children:a})]})});b.displayName=s.ck.displayName;let v=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",r),...a})});v.displayName=s.Z0.displayName},77058:function(e,t,r){"use strict";r.d(t,{g:function(){return l}});var n=r(62842),a=r(36856),s=r(26134);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("textarea",{className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});l.displayName="Textarea"},26134:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(75023),a=r(78453);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[885,969,838,413,470,561,204,949,785,744],function(){return e(e.s=31011)}),_N_E=e.O()}]);
//# sourceMappingURL=page-395726d086c99df5.js.map