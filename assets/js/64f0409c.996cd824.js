"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[342],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),b=i,h=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3350:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c=["components"],a={},s=void 0,u={unversionedId:"Architecture_Dictionary/Objects/Attribution",id:"Architecture_Dictionary/Objects/Attribution",title:"Attribution",description:"Attribution captures the agreed method of dispersing funds controlled by a Project to its Governors and Contributors. When triggered, Attribution takes as input the entire Project data set (which may also link to external data sets), and the amount to be dispersed, generates an Attribution Table, and moves the appropriate amounts from the Project\u2019s Bank to the Banks of the beneficiaries.",source:"@site/docs/Architecture_Dictionary/Objects/Attribution.md",sourceDirName:"Architecture_Dictionary/Objects",slug:"/Architecture_Dictionary/Objects/Attribution",permalink:"/docs/Architecture_Dictionary/Objects/Attribution",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/docs/Architecture_Dictionary/Objects/Attribution.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Attribution Algorithm",permalink:"/docs/Architecture_Dictionary/Objects/Attribution Algorithm"},next:{title:"Origin",permalink:"/docs/Architecture_Dictionary/Objects/Origin"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Attribution captures the agreed method of dispersing funds controlled by a Project to its Governors and Contributors. When triggered, Attribution takes as input the entire Project data set (which may also link to external data sets), and the amount to be dispersed, generates an Attribution Table, and moves the appropriate amounts from the Project\u2019s Bank to the Banks of the beneficiaries."),(0,o.kt)("p",null,"To achieve this, Attribution contains one or more algorithms which calculate how the revenue or funds received by a project is to be dispersed, and parameters describing the relative weighting between each algorithm."),(0,o.kt)("p",null,"Dispersal is triggered by Project events or external events linked to a specific algorithm."))}d.isMDXComponent=!0}}]);