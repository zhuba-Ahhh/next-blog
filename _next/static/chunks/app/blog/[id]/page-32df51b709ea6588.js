(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{5445:function(e,t,r){Promise.resolve().then(r.t.bind(r,1872,23)),Promise.resolve().then(r.bind(r,5575)),Promise.resolve().then(r.bind(r,9966))},5575:function(e,t,r){"use strict";r.d(t,{default:function(){return s}});var a=r(2842),n=r(6856);function s(){let[e,t]=(0,n.useState)([]),[r,s]=(0,n.useState)({author:"",content:""}),[l,o]=(0,n.useState)("newest"),d=(0,n.useMemo)(()=>[...e].sort((e,t)=>"newest"===l?new Date(t.date).getTime()-new Date(e.date).getTime():new Date(e.date).getTime()-new Date(t.date).getTime()),[e,l]);(0,n.useCallback)((e,r)=>{t(t=>{let a=[...t],n=a.find(t=>t.id===e);return n&&n.replies.push({id:Date.now(),author:"匿名用户",content:r,date:new Date().toLocaleString(),replies:[]}),a})},[]);let i=(0,n.useCallback)(e=>{e.preventDefault();let a={id:Date.now(),author:r.author.trim(),content:r.content.trim(),date:new Date().toLocaleString(),replies:[]};t(e=>[...e,a]),s({author:"",content:""})},[r]),c=(0,n.useCallback)(e=>{let{name:t,value:r}=e.target;s(e=>({...e,[t]:r}))},[]);return(0,a.jsxs)("div",{className:"mt-12",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-4 dark:text-white",children:"评论"}),(0,a.jsxs)("form",{onSubmit:i,className:"mb-8",children:[(0,a.jsx)("input",{type:"text",name:"author",placeholder:"您的名字",value:r.author,onChange:c,className:"w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500",required:!0}),(0,a.jsx)("textarea",{name:"content",placeholder:"您的评论",value:r.content,onChange:c,className:"w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500",rows:4,required:!0}),(0,a.jsx)("button",{type:"submit",className:"bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition duration-300",children:"提交评论"})]}),(0,a.jsx)("div",{children:d.map(e=>(0,a.jsxs)("div",{className:"mb-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm",children:[(0,a.jsx)("p",{className:"font-bold text-lg mb-1 dark:text-white",children:e.author}),(0,a.jsx)("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:e.content}),(0,a.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:e.date}),e.replies.map(e=>(0,a.jsxs)("div",{className:"mt-2 ml-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm",children:[(0,a.jsx)("p",{className:"font-bold text-sm mb-1 dark:text-white",children:e.author}),(0,a.jsx)("p",{className:"text-gray-700 dark:text-gray-300 mb-2",children:e.content}),(0,a.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:e.date})]},e.id))]},e.id))})]})}},9966:function(e,t,r){"use strict";r.d(t,{default:function(){return s}});var a=r(2842),n=r(6856);function s(){let[e,t]=(0,n.useState)(0),[r,s]=(0,n.useState)(!1),l=()=>document.documentElement.scrollHeight-document.documentElement.clientHeight,o=(0,n.useCallback)(()=>{let e=document.documentElement.scrollTop;t(e/l()*100),s(e>0)},[]);return((0,n.useEffect)(()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)),[o]),r)?(0,a.jsx)("div",{className:"fixed top-0 left-0 w-full h-1 bg-gray-200 z-50",children:(0,a.jsx)("div",{style:{width:"".concat(e,"%")},className:"h-full bg-primary transition-all duration-300 ease-out"})}):null}}},function(e){e.O(0,[872,949,785,744],function(){return e(e.s=5445)}),_N_E=e.O()}]);