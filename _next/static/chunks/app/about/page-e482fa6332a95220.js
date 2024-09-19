(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{82468:function(e,t,n){Promise.resolve().then(n.bind(n,56894))},8622:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(21298)},21298:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function c(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===c||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:c}catch(e){t=c}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s=[],l=!1,u=-1;function d(){l&&r&&(l=!1,r.length?s=r.concat(s):u=-1,s.length&&m())}function m(){if(!l){var e=a(d);l=!0;for(var t=s.length;t;){for(r=s,s=[];++u<t;)r&&r[u].run();u=-1,t=s.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||a(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=f,o.addListener=f,o.once=f,o.off=f,o.removeListener=f,o.removeAllListeners=f,o.emit=f,o.prependListener=f,o.prependOnceListener=f,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={exports:{}},i=!0;try{t[e](c,c.exports,r),i=!1}finally{i&&delete n[e]}return c.exports}r.ab="//";var o=r(229);e.exports=o}()},50366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(96304)._(n(34664)).default.createContext(null)},56894:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(14393),o=n(22706),c=n(36661),i=n(8622);function a(){let{theme:e}=(0,c.O)();return(0,r.jsxs)("div",{className:"max-w-4xl mx-auto rounded-lg shadow-lg p-8 my-10 transition-all duration-300 ease-in-out \n      ".concat("dark"===e?"bg-gray-800 text-white":"bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800"),children:[(0,r.jsx)("h1",{className:"text-4xl font-bold mb-6 transition-colors duration-300 ".concat("dark"===e?"text-indigo-300":"text-indigo-800"),children:"关于我的博客"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,r.jsxs)("div",{className:"md:col-span-2 prose lg:prose-xl transition-all duration-300 ".concat("dark"===e?"text-gray-300":"text-gray-700"),children:[(0,r.jsx)("p",{children:"欢迎来到我的博客！这里是我分享想法、经验和技术见解的地方。"}),(0,r.jsx)("p",{children:"我是一名热爱编程和技术的开发者，专注于前端和全栈开发。我的目标是通过这个博客与大家分享知识，共同成长。"}),(0,r.jsx)("p",{children:"在这里，你可以找到关于："}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Web开发最佳实践"}),(0,r.jsx)("li",{children:"新兴技术趋势分析"}),(0,r.jsx)("li",{children:"编程技巧和工具推荐"}),(0,r.jsx)("li",{children:"个人项目经验分享"})]}),(0,r.jsx)("p",{children:"如果你有任何问题、建议或合作意向，欢迎随时与我联系。让我们一起在编程的世界里探索和创新！"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105",children:[(0,r.jsx)(o.default,{src:"/img/avatar.png",alt:"博主头像",width:200,height:200,className:"rounded-full shadow-md mb-4"}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold ".concat("dark"===e?"text-indigo-300":"text-indigo-700"),children:i.env.NEXT_PUBLIC_AUTHOR_NAME}),(0,r.jsx)("p",{className:"dark"===e?"text-gray-400":"text-gray-600",children:"前端开发者 / 技术博主"})]})]})]})]})}},36661:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=n(86606);function o(){let{theme:e,setTheme:t}=(0,r.F)();return{theme:e,setTheme:t}}},86606:function(e,t,n){"use strict";n.d(t,{F:function(){return l},ThemeProvider:function(){return u}});var r=n(34664),o=["light","dark"],c="(prefers-color-scheme: dark)",i="undefined"==typeof window,a=r.createContext(void 0),s={setTheme:e=>{},themes:[]},l=()=>{var e;return null!=(e=r.useContext(a))?e:s},u=e=>r.useContext(a)?e.children:r.createElement(m,{...e}),d=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:s=!0,storageKey:l="theme",themes:u=d,defaultTheme:m=i?"system":"light",attribute:p="data-theme",value:y,children:x,nonce:b}=e,[T,w]=r.useState(()=>f(l,m)),[j,k]=r.useState(()=>f(l)),E=y?Object.values(y):u,C=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=v());let r=y?y[t]:t,c=n?g():null,a=document.documentElement;if("class"===p?(a.classList.remove(...E),r&&a.classList.add(r)):r?a.setAttribute(p,r):a.removeAttribute(p),s){let e=o.includes(m)?m:null,n=o.includes(t)?t:e;a.style.colorScheme=n}null==c||c()},[]),S=r.useCallback(e=>{let t="function"==typeof e?e(e):e;w(t);try{localStorage.setItem(l,t)}catch(e){}},[t]),N=r.useCallback(e=>{k(v(e)),"system"===T&&i&&!t&&C("system")},[T,t]);r.useEffect(()=>{let e=window.matchMedia(c);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),r.useEffect(()=>{let e=e=>{e.key===l&&S(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),r.useEffect(()=>{C(null!=t?t:T)},[t,T]);let L=r.useMemo(()=>({theme:T,setTheme:S,forcedTheme:t,resolvedTheme:"system"===T?j:T,themes:i?[...u,"system"]:u,systemTheme:i?j:void 0}),[T,S,t,j,i,u]);return r.createElement(a.Provider,{value:L},r.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:i,enableColorScheme:s,storageKey:l,themes:u,defaultTheme:m,attribute:p,value:y,children:x,attrs:E,nonce:b}),x)},h=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:i,enableSystem:a,enableColorScheme:s,defaultTheme:l,value:u,attrs:d,nonce:m}=e,h="system"===l,f="class"===i?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(i,"',s='setAttribute';"),g=s?(o.includes(l)?l:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(l,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=u?u[e]:e,c=t?e+"|| ''":"'".concat(r,"'"),a="";return s&&n&&!t&&o.includes(e)&&(a+="d.style.colorScheme = '".concat(e,"';")),"class"===i?t||r?a+="c.add(".concat(c,")"):a+="null":r&&(a+="d[s](n,".concat(c,")")),a},p=t?"!function(){".concat(f).concat(v(t),"}()"):a?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(c,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(v(u?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(l,!1,!1)+"}").concat(g,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(v(u?"x[e]":"e",!0),"}else{").concat(v(l,!1,!1),";}").concat(g,"}catch(t){}}();");return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:p}})}),f=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(c)),e.matches?"dark":"light")}},function(e){e.O(0,[706,939,255,744],function(){return e(e.s=82468)}),_N_E=e.O()}]);
//# sourceMappingURL=page-e482fa6332a95220.js.map