"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[83570],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={},c="I12 WebDOS framework",s={unversionedId:"Ideas/I12",id:"Ideas/I12",title:"I12 WebDOS framework",description:"Need a web UI framework that interacts with the blockchain natively.",source:"@site/dust/Ideas/I12.md",sourceDirName:"Ideas",slug:"/Ideas/I12",permalink:"/dust/Ideas/I12",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/dust/Ideas/I12.md",tags:[],version:"current",frontMatter:{},sidebar:"nfas",previous:{title:"I11 Request-Idea",permalink:"/dust/Ideas/I11"},next:{title:"I13 Patent Pooling",permalink:"/dust/Ideas/I13"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"i12-webdos-framework"},"I12 WebDOS framework"),(0,o.kt)("p",null,"Need a web UI framework that interacts with the blockchain natively."),(0,o.kt)("p",null,"DOS describes an application as a filesystem like tree of objects and links to objects."),(0,o.kt)("p",null,"Turning this into a UI framework can remove much of the burden of building a UI by harmonising with the application backend."),(0,o.kt)("p",null,"There should be a basic version so that a commandline app will be interpreted automatically and be useable."),(0,o.kt)("p",null,"This should tie in to the ORM style interface."),(0,o.kt)("p",null,"Must be able to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Subscribe to a path"),(0,o.kt)("li",{parentName:"ol"},"Render some default components"),(0,o.kt)("li",{parentName:"ol"},"User supply components that override some paths"),(0,o.kt)("li",{parentName:"ol"},"Update the location in the browser when navigating to different parts of the app"),(0,o.kt)("li",{parentName:"ol"},"Provide easy means of conflict resolution - may prohibit moving forwards until sync has occured, but should attempt auto merge and present a UI to the user")),(0,o.kt)("p",null,"ORM style features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Automatically determine what actions can be called on each object, and with what parameters")),(0,o.kt)("p",null,"Layout must:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Lay out react components in a tree the same way that React-Router does"),(0,o.kt)("li",{parentName:"ol"},"Provide speculatively executed feedback by way of displaying uncommited changes, and visual cues about the state of the remote application, being: synced, pending, discconnected, or rejected")),(0,o.kt)("p",null,"Less critical features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provide a loading screen while the blockchain is initializing"),(0,o.kt)("li",{parentName:"ol"},"Provide a loading screen while connecting to a remote application complex"),(0,o.kt)("li",{parentName:"ol"},"Provide busy screen while operations are pending")),(0,o.kt)("p",null,"Also includes some basic tasks that an app must do, like login, persisting visual config like table column widths."),(0,o.kt)("p",null,"We do not need to worry about setting ip addresses, authenticating to a database, etc.\nWe might need to be able to authenticate to a private ipfs network ?\nMay wish to spec resource limits on the local machine - cpu, ram, disk"))}m.isMDXComponent=!0}}]);