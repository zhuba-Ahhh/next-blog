(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{3223:function(e,t,r){Promise.resolve().then(r.t.bind(r,1872,23)),Promise.resolve().then(r.bind(r,5575)),Promise.resolve().then(r.bind(r,9966)),Promise.resolve().then(r.bind(r,8064)),Promise.resolve().then(r.bind(r,9414))},5575:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var n=r(2842),a=r(6856),s=r(1326),l=r(7058),i=r(3022),o=r(4863);function d(){let[e,t]=(0,a.useState)([]),[r,d]=(0,a.useState)({author:"",content:""}),[c,u]=(0,a.useState)("newest"),f=(0,a.useMemo)(()=>[...e].sort((e,t)=>"newest"===c?new Date(t.date).getTime()-new Date(e.date).getTime():new Date(e.date).getTime()-new Date(t.date).getTime()),[e,c]);(0,a.useCallback)((e,r)=>{t(t=>{let n=[...t],a=n.find(t=>t.id===e);return a&&a.replies.push({id:Date.now(),author:"匿名用户",content:r,date:new Date().toLocaleString(),replies:[]}),n})},[]);let m=(0,a.useCallback)(e=>{e.preventDefault();let n={id:Date.now(),author:r.author.trim(),content:r.content.trim(),date:new Date().toLocaleString(),replies:[]};t(e=>[...e,n]),d({author:"",content:""})},[r]),p=(0,a.useCallback)(e=>{let{name:t,value:r}=e.target;d(e=>({...e,[t]:r}))},[]),x=(0,a.useCallback)(()=>{u(e=>"newest"===e?"oldest":"newest")},[]);return(0,n.jsxs)("div",{className:"mt-12",children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"评论"}),(0,n.jsxs)("form",{onSubmit:m,className:"mb-8 space-y-4",children:[(0,n.jsx)(s.I,{type:"text",name:"author",placeholder:"您的名字",value:r.author,onChange:p,required:!0}),(0,n.jsx)(l.g,{name:"content",placeholder:"您的评论",value:r.content,onChange:p,rows:4,required:!0}),(0,n.jsx)(i.z,{type:"submit",children:"提交评论"})]}),(0,n.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,n.jsx)("h3",{className:"text-xl font-semibold",children:"评论列表"}),(0,n.jsx)(i.z,{onClick:x,variant:"outline",children:"newest"===c?"最新优先":"最早优先"})]}),(0,n.jsx)("div",{className:"space-y-4",children:f.map(e=>(0,n.jsxs)(o.Zb,{children:[(0,n.jsxs)(o.Ol,{children:[(0,n.jsx)(o.ll,{children:e.author}),(0,n.jsx)(o.SZ,{children:e.date})]}),(0,n.jsx)(o.aY,{children:(0,n.jsx)("p",{children:e.content})}),(0,n.jsx)(o.eW,{children:e.replies.map(e=>(0,n.jsxs)(o.Zb,{className:"mt-2 w-full",children:[(0,n.jsxs)(o.Ol,{children:[(0,n.jsx)(o.ll,{children:e.author}),(0,n.jsx)(o.SZ,{children:e.date})]}),(0,n.jsx)(o.aY,{children:(0,n.jsx)("p",{children:e.content})})]},e.id))})]},e.id))})]})}},9966:function(e,t,r){"use strict";r.d(t,{default:function(){return s}});var n=r(2842),a=r(6856);function s(){let[e,t]=(0,a.useState)(0),[r,s]=(0,a.useState)(!1),l=()=>document.documentElement.scrollHeight-document.documentElement.clientHeight,i=(0,a.useCallback)(()=>{let e=document.documentElement.scrollTop;t(e/l()*100),s(e>0)},[]);return((0,a.useEffect)(()=>(window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)),[i]),r)?(0,n.jsx)("div",{className:"fixed top-0 left-0 w-full h-1 bg-gray-200 z-50",children:(0,n.jsx)("div",{style:{width:"".concat(e,"%")},className:"h-full bg-primary transition-all duration-300 ease-out"})}):null}},3022:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(2842),a=r(6856),s=r(6370),l=r(7756),i=r(6134);let o=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:l,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(o({variant:a,size:l,className:r})),ref:t,...c})});d.displayName="Button"},4863:function(e,t,r){"use strict";r.d(t,{Ol:function(){return i},SZ:function(){return d},Zb:function(){return l},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var n=r(2842),a=r(6856),s=r(6134);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm","transition-transform duration-200 ease-in-out","hover:scale-105 active:scale-95",r),...a})});l.displayName="Card";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...a})});i.displayName="CardHeader";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});o.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},1326:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var n=r(2842),a=r(6856),s=r(6134);let l=a.forwardRef((e,t)=>{let{className:r,type:a,...l}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});l.displayName="Input"},8064:function(e,t,r){"use strict";r.r(t),r.d(t,{Label:function(){return d}});var n=r(2842),a=r(6856),s=r(1453),l=r(7756),i=r(6134);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.f,{ref:t,className:(0,i.cn)(o(),r),...a})});d.displayName=s.f.displayName},9414:function(e,t,r){"use strict";r.r(t),r.d(t,{Select:function(){return c},SelectContent:function(){return h},SelectGroup:function(){return u},SelectItem:function(){return g},SelectLabel:function(){return b},SelectScrollDownButton:function(){return x},SelectScrollUpButton:function(){return p},SelectSeparator:function(){return v},SelectTrigger:function(){return m},SelectValue:function(){return f}});var n=r(2842),a=r(6856),s=r(2459),l=r(6533),i=r(6830),o=r(4972),d=r(6134);let c=s.fC,u=s.ZA,f=s.B4,m=a.forwardRef((e,t)=>{let{className:r,children:a,...i}=e;return(0,n.jsxs)(s.xz,{ref:t,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...i,children:[a,(0,n.jsx)(s.JO,{asChild:!0,children:(0,n.jsx)(l.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=s.xz.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.u_,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(i.Z,{className:"h-4 w-4"})})});p.displayName=s.u_.displayName;let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.$G,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...a,children:(0,n.jsx)(l.Z,{className:"h-4 w-4"})})});x.displayName=s.$G.displayName;let h=a.forwardRef((e,t)=>{let{className:r,children:a,position:l="popper",...i}=e;return(0,n.jsx)(s.h_,{children:(0,n.jsxs)(s.VY,{ref:t,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:l,...i,children:[(0,n.jsx)(p,{}),(0,n.jsx)(s.l_,{className:(0,d.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,n.jsx)(x,{})]})})});h.displayName=s.VY.displayName;let b=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.__,{ref:t,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...a})});b.displayName=s.__.displayName;let g=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e;return(0,n.jsxs)(s.ck,{ref:t,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...l,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(s.wU,{children:(0,n.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,n.jsx)(s.eT,{children:a})]})});g.displayName=s.ck.displayName;let v=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...a})});v.displayName=s.Z0.displayName},7058:function(e,t,r){"use strict";r.d(t,{g:function(){return l}});var n=r(2842),a=r(6856),s=r(6134);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("textarea",{className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});l.displayName="Textarea"},6134:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(5023),a=r(8453);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[872,100,949,785,744],function(){return e(e.s=3223)}),_N_E=e.O()}]);