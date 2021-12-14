"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[9842],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={published:!1,title:"Side Effect IO",description:""},s=void 0,l={permalink:"/blog/2020/10/26/side-effects",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/blog/2020-10-26-side-effects.md",source:"@site/blog/2020-10-26-side-effects.md",title:"Side Effect IO",description:"",date:"2020-10-26T00:00:00.000Z",formattedDate:"October 26, 2020",tags:[],readingTime:2.01,truncated:!1,authors:[],prevItem:{title:"Ambient Attribution",permalink:"/blog/2020/12/20/ambient-attribution"},nextItem:{title:"Zero Liability Companies",permalink:"/blog/2020/09/24/zero-liability-co"}},u={authorsImageUrls:[]},p=[],h={toc:p};function m(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'"Mixing the pure with the impure, without making everything impure"')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(283).Z})),(0,i.kt)("p",null,"The work I have been doing lately could largely be described as side effect management. This is the means by which to introduce external data into the blockchain based system, in a way that does not corrupt the key blockchain property of reproducibility. That is to say, being able to rerun blocks thru different computers and verify that the same answer came out. Side effects are any external event - something that cannot be reproduced - a simple example is receiving an email. The converse is required too - being able to use the pure, clean, secure blockchain based calculations to trigger unreproducible external events. A simple example of this is sending an email."),(0,i.kt)("p",null,"So the work is about making something unrepeatable become something repeatable in a clean way, and to a lesser extent making something repeatable trigger unrepeatable events."),(0,i.kt)("p",null,"However during the work I was doing to send internet packets between Amazon and the browser the amount of code I was writing that was not blockchain related started to increase. The problem with this is that it is not reusing the code that is used for the blockchains, and so requires extra work to build and maintain, while losing the very helpful traceability properties that blockchain based calculations afford. Traceability becomes especially useful when the software is executing on remote servers."),(0,i.kt)("p",null,"This was the trigger for the work, but it is work that would have been required later anyway."),(0,i.kt)("p",null,"I have managed to get the underlying system of side effects working in prototype form, and starting from this morning I will be applying that to the internet transport ability. I am pleased with how the system is performing, and it meets my goals of being clean and simple and easy to fault find. An example of why the fault finding aspect is useful is that if you call me and say that at roughly 10am something weird happened in the app and you can't seem to make it happen again, we would be able to see the actual interactions the application made and very quickly be able to reproduce the problem, making fixing it much faster, and giving you reassurance that we did actually know what is going on, rather than having to ask you to keep an eye out for it happening again because we can't notice anything amiss."))}m.isMDXComponent=!0},283:function(e,t,n){t.Z=n.p+"assets/images/mixing-droplet-cc99a7cf93ede713e25b9f9bd1091783.jpg"}}]);