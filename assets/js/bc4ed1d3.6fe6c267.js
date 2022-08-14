"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[3570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const o={},i="I12 WebDOS framework",l={unversionedId:"Ideas/I12",id:"Ideas/I12",title:"I12 WebDOS framework",description:"Need a web UI framework that interacts with the blockchain natively.",source:"@site/dust/Ideas/I12.md",sourceDirName:"Ideas",slug:"/Ideas/I12",permalink:"/dust/Ideas/I12",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/dust/Ideas/I12.md",tags:[],version:"current",frontMatter:{},sidebar:"dust",previous:{title:"I11 Request-Idea",permalink:"/dust/Ideas/I11"},next:{title:"I13 Patent Pooling",permalink:"/dust/Ideas/I13"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"i12-webdos-framework"},"I12 WebDOS framework"),(0,r.kt)("p",null,"Need a web UI framework that interacts with the blockchain natively."),(0,r.kt)("p",null,"DOS describes an application as a filesystem like tree of objects and links to objects."),(0,r.kt)("p",null,"Turning this into a UI framework can remove much of the burden of building a UI by harmonising with the application backend."),(0,r.kt)("p",null,"There should be a basic version so that a commandline app will be interpreted automatically and be useable."),(0,r.kt)("p",null,"This should tie in to the ORM style interface."),(0,r.kt)("p",null,"Must be able to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Subscribe to a path"),(0,r.kt)("li",{parentName:"ol"},"Render some default components"),(0,r.kt)("li",{parentName:"ol"},"User supply components that override some paths"),(0,r.kt)("li",{parentName:"ol"},"Update the location in the browser when navigating to different parts of the app"),(0,r.kt)("li",{parentName:"ol"},"Provide easy means of conflict resolution - may prohibit moving forwards until sync has occured, but should attempt auto merge and present a UI to the user")),(0,r.kt)("p",null,"ORM style features:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Automatically determine what actions can be called on each object, and with what parameters")),(0,r.kt)("p",null,"Layout must:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Lay out react components in a tree the same way that React-Router does"),(0,r.kt)("li",{parentName:"ol"},"Provide speculatively executed feedback by way of displaying uncommited changes, and visual cues about the state of the remote application, being: synced, pending, discconnected, or rejected")),(0,r.kt)("p",null,"Less critical features:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Provide a loading screen while the blockchain is initializing"),(0,r.kt)("li",{parentName:"ol"},"Provide a loading screen while connecting to a remote application complex"),(0,r.kt)("li",{parentName:"ol"},"Provide busy screen while operations are pending")),(0,r.kt)("p",null,"Also includes some basic tasks that an app must do, like login, persisting visual config like table column widths."),(0,r.kt)("p",null,"We do not need to worry about setting ip addresses, authenticating to a database, etc.\nWe might need to be able to authenticate to a private ipfs network ?\nMay wish to spec resource limits on the local machine - cpu, ram, disk"))}u.isMDXComponent=!0}}]);