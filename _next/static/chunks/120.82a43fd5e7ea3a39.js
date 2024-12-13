"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[120],{58120:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var o=n(86412),r=n(3832),a=n(23626),c=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},i="object"==typeof global&&global&&global.Object===Object&&global,l="object"==typeof self&&self&&self.Object===Object&&self,s=i||l||Function("return this")(),u=function(){return s.Date.now()},d=/\s/,m=function(e){for(var t=e.length;t--&&d.test(e.charAt(t)););return t},f=/^\s+/,h=s.Symbol,y=Object.prototype,v=y.hasOwnProperty,g=y.toString,b=h?h.toStringTag:void 0,p=function(e){var t=v.call(e,b),n=e[b];try{e[b]=void 0;var o=!0}catch(e){}var r=g.call(e);return o&&(t?e[b]=n:delete e[b]),r},x=Object.prototype.toString,w=h?h.toStringTag:void 0,T=function(e){var t;return"symbol"==typeof e||null!=e&&"object"==typeof e&&"[object Symbol]"==(null==(t=e)?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?p(t):x.call(t))},S=0/0,k=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,E=/^0o[0-7]+$/i,C=parseInt,O=function(e){if("number"==typeof e)return e;if(T(e))return S;if(c(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=c(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,m(t)+1).replace(f,""):t;var o=j.test(e);return o||E.test(e)?C(e.slice(2),o?2:8):k.test(e)?S:+e},M=Math.max,N=Math.min,L=function(e,t,n){var o,r,a,i,l,s,d=0,m=!1,f=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function y(t){var n=o,a=r;return o=r=void 0,d=t,i=e.apply(a,n)}function v(e){var n=e-s,o=e-d;return void 0===s||n>=t||n<0||f&&o>=a}function g(){var e,n,o,r=u();if(v(r))return b(r);l=setTimeout(g,(e=r-s,n=r-d,o=t-e,f?N(o,a-n):o))}function b(e){return(l=void 0,h&&o)?y(e):(o=r=void 0,i)}function p(){var e,n=u(),a=v(n);if(o=arguments,r=this,s=n,a){if(void 0===l)return d=e=s,l=setTimeout(g,t),m?y(e):i;if(f)return clearTimeout(l),l=setTimeout(g,t),y(s)}return void 0===l&&(l=setTimeout(g,t)),i}return t=O(t)||0,c(n)&&(m=!!n.leading,a=(f="maxWait"in n)?M(O(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),p.cancel=function(){void 0!==l&&clearTimeout(l),d=0,o=s=r=l=void 0},p.flush=function(){return void 0===l?i:b(u())},p},I=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw TypeError("Expected a function");return c(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),L(e,t,{leading:o,maxWait:t,trailing:r})},_=n(92610),A=e=>{let{text:t,language:n}=e,[c,i]=(0,r.useState)("idle"),[l,s]=(0,r.useState)(!1),{theme:u}=(0,_.O)(),d=(0,r.useMemo)(()=>I(async()=>{if("copied"!==c)try{await navigator.clipboard.writeText(t),i("copied"),setTimeout(()=>i("idle"),1e3)}catch(e){console.error("复制失败:",e),i("idle")}},300),[t,c]),m=(0,r.useCallback)(()=>{d()},[d]),f=(0,r.useMemo)(()=>"\n      absolute top-2 right-2 p-1.5 rounded-md\n      bg-gray-100 dark:bg-gray-800\n      border border-gray-200 dark:border-gray-700\n      hover:bg-gray-200 dark:hover:bg-gray-700\n      transition-all duration-300 ease-in-out\n      flex items-center justify-center\n      shadow-sm hover:shadow-md dark:shadow-gray-900\n      overflow-hidden\n      h-[30px]\n    ",[]),h=e=>"dark"===u?"/svg/".concat(e,"-dark.svg"):"/svg/".concat(e,".svg");return(0,o.jsxs)("button",{onClick:m,onMouseEnter:()=>{s(!0),i(e=>"idle"===e?"copy":e)},onMouseLeave:()=>{s(!1),i(e=>"copy"===e?"idle":e)},className:f,title:"idle"===c?n:"copy"===c?"复制":"已复制",children:[(0,o.jsx)("div",{className:"flex items-center transition-transform duration-300 ".concat(l?"-translate-y-[200%]":"translate-y-0"),children:(0,o.jsx)("span",{className:"text-xs font-mono text-gray-700 dark:text-gray-300",children:n})}),(0,o.jsxs)("div",{className:"absolute inset-0 flex items-center justify-center transition-transform duration-300 ".concat(l?"translate-y-0":"translate-y-[200%]"),children:["copy"===c&&(0,o.jsx)(a.default,{src:h("copy"),alt:"复制",width:16,height:16}),"copied"===c&&(0,o.jsx)(a.default,{src:h("check"),alt:"已复制",width:16,height:16,className:"text-green-600 dark:text-green-400"})]})]})}},92610:function(e,t,n){n.d(t,{O:function(){return r}});var o=n(85882);function r(){let{theme:e,setTheme:t}=(0,o.F)();return{theme:e,setTheme:t}}},85882:function(e,t,n){n.d(t,{F:function(){return s},ThemeProvider:function(){return u}});var o=n(3832),r=["light","dark"],a="(prefers-color-scheme: dark)",c="undefined"==typeof window,i=o.createContext(void 0),l={setTheme:e=>{},themes:[]},s=()=>{var e;return null!=(e=o.useContext(i))?e:l},u=e=>o.useContext(i)?e.children:o.createElement(m,{...e}),d=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:c=!0,enableColorScheme:l=!0,storageKey:s="theme",themes:u=d,defaultTheme:m=c?"system":"light",attribute:g="data-theme",value:b,children:p,nonce:x}=e,[w,T]=o.useState(()=>h(s,m)),[S,k]=o.useState(()=>h(s)),j=b?Object.values(b):u,E=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&c&&(t=v());let o=b?b[t]:t,a=n?y():null,i=document.documentElement;if("class"===g?(i.classList.remove(...j),o&&i.classList.add(o)):o?i.setAttribute(g,o):i.removeAttribute(g),l){let e=r.includes(m)?m:null,n=r.includes(t)?t:e;i.style.colorScheme=n}null==a||a()},[]),C=o.useCallback(e=>{let t="function"==typeof e?e(e):e;T(t);try{localStorage.setItem(s,t)}catch(e){}},[t]),O=o.useCallback(e=>{k(v(e)),"system"===w&&c&&!t&&E("system")},[w,t]);o.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),o.useEffect(()=>{let e=e=>{e.key===s&&C(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),o.useEffect(()=>{E(null!=t?t:w)},[t,w]);let M=o.useMemo(()=>({theme:w,setTheme:C,forcedTheme:t,resolvedTheme:"system"===w?S:w,themes:c?[...u,"system"]:u,systemTheme:c?S:void 0}),[w,C,t,S,c,u]);return o.createElement(i.Provider,{value:M},o.createElement(f,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:c,enableColorScheme:l,storageKey:s,themes:u,defaultTheme:m,attribute:g,value:b,children:p,attrs:j,nonce:x}),p)},f=o.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:c,enableSystem:i,enableColorScheme:l,defaultTheme:s,value:u,attrs:d,nonce:m}=e,f="system"===s,h="class"===c?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(c,"',s='setAttribute';"),y=l?(r.includes(s)?s:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(s,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=u?u[e]:e,a=t?e+"|| ''":"'".concat(o,"'"),i="";return l&&n&&!t&&r.includes(e)&&(i+="d.style.colorScheme = '".concat(e,"';")),"class"===c?t||o?i+="c.add(".concat(a,")"):i+="null":o&&(i+="d[s](n,".concat(a,")")),i},g=t?"!function(){".concat(h).concat(v(t),"}()"):i?"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(f,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(v(u?"x[e]":"e",!0),"}").concat(f?"":"else{"+v(s,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(v(u?"x[e]":"e",!0),"}else{").concat(v(s,!1,!1),";}").concat(y,"}catch(t){}}();");return o.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:g}})}),h=(e,t)=>{let n;if(!c){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);
//# sourceMappingURL=120.82a43fd5e7ea3a39.js.map