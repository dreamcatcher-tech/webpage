"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[7634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(83117),o=(n(67294),n(3905));const a={},i="I18 Interblock multithreading and isolation",l={unversionedId:"Ideas/I18",id:"Ideas/I18",title:"I18 Interblock multithreading and isolation",description:"On a single computer, whether it be a server instance, dedicated application, or a browser page - multithreading and isolation are required for speed and security.",source:"@site/dust/Ideas/I18.md",sourceDirName:"Ideas",slug:"/Ideas/I18",permalink:"/dust/Ideas/I18",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/dust/Ideas/I18.md",tags:[],version:"current",frontMatter:{},sidebar:"dust",previous:{title:"I17 DC Portal Company Formation",permalink:"/dust/nfas/Ideas/I17"}},s={},d=[{value:"Specification",id:"specification",level:3},{value:"Solution",id:"solution",level:3},{value:"SharedWorker IPFS",id:"sharedworker-ipfs",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"i18-interblock-multithreading-and-isolation"},"I18 Interblock multithreading and isolation"),(0,o.kt)("p",null,"On a single computer, whether it be a server instance, dedicated application, or a browser page - multithreading and isolation are required for speed and security.\nThey appear to be achievable via the same mechanism."),(0,o.kt)("h3",{id:"specification"},"Specification"),(0,o.kt)("p",null,"The solution should:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Allow blockmaking and crypto signing to occur concurrently on multiple threads, performing no work on the main thread, leaving this idle for things like UI and coordination."),(0,o.kt)("li",{parentName:"ol"},"Terminate cleanly on idle - as soon as the threads have no further work to do, they should terminate."),(0,o.kt)("li",{parentName:"ol"},"Be isomorphic in that the same lightweight threading mechanism is used on the server as in the browser"),(0,o.kt)("li",{parentName:"ol"},"Be compatible with Deno, at least architecturally")),(0,o.kt)("p",null,"The solution must:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Load worker code from IPFS blocks, allowing dev supplied covenants to be loaded and run."),(0,o.kt)("li",{parentName:"ol"},"Support a single instance of IPFS being used between multiple engine threads"),(0,o.kt)("li",{parentName:"ol"},"Survive a thread being totally taken over by user code but still not able to gain any escalations")),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"This proposal is for using the ",(0,o.kt)("a",{parentName:"p",href:"https://threads.js.org/getting-started"},"threads")," library as a means of creating threads as needed on both nodejs and the browser. ",(0,o.kt)("inlineCode",{parentName:"p"},"BlobWorker")," would be used to load up code from user covenants and run in isolation with resource allocation limits. This library has good control of memory limits, and can be forcibly terminated if cpu usage is too high."),(0,o.kt)("p",null,"Covenants would need to be loaded up using a wrapper function so that hooks can be applied. All IPFS queries from covenants should be done by action, to allow a security policy to be applied to each worker in a safe way, so that even if the shim is broken into, the worker isolation is the only protection we need."),(0,o.kt)("p",null,"In the browser, web workers would be used for the isolation, and on nodejs worker_threads would be used."),(0,o.kt)("p",null,"In lambda functions, this is the same mechanism that would be used for isolation and for extracting the maximum possible usage out of each lambda function.\nHow to schedule lambda functions and other nodes is a separate problem, and should be done using blockchains to model each lambda function or compute node."),(0,o.kt)("p",null,"There is a ",(0,o.kt)("inlineCode",{parentName:"p"},"pool.settled()")," function which resolves when all threads have completed, however the way pierce is constructed now, there should be no independent chains running that do not ultimately feed back to (and therefore finish before) pierce resolves."),(0,o.kt)("p",null,"Transferrable objects should be used to move blocks between the ipfs worker and the engine workers. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Uint8Arrays")," that Blocks use should be natively transferrable between threads with very little overhead."),(0,o.kt)("h3",{id:"sharedworker-ipfs"},"SharedWorker IPFS"),(0,o.kt)("p",null,"To run in multiple tabs on the browser, the ipfs instance must run in a ",(0,o.kt)("inlineCode",{parentName:"p"},"SharedWorker"),". This thread would then be reponsible for spawning multiple worker threads to do pulsemaking, as well as threads for doing isolated running if required."))}u.isMDXComponent=!0}}]);