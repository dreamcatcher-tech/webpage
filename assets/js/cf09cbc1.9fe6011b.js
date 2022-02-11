"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[2532],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10828:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={},c=void 0,u={unversionedId:"NFAs/Ethereum Bridge",id:"NFAs/Ethereum Bridge",title:"Ethereum Bridge",description:"Anime-Beautiful",source:"@site/nfas/NFAs/Ethereum Bridge.md",sourceDirName:"NFAs",slug:"/NFAs/Ethereum Bridge",permalink:"/nfas/NFAs/Ethereum Bridge",tags:[],version:"current",frontMatter:{},sidebar:"nfas",previous:{title:"Roadmap",permalink:"/nfas/"},next:{title:"Web Liquidity Pooling",permalink:"/nfas/NFAs/Web Liquidity Pooling"}},s=[{value:"Requirements",id:"requirements",children:[{value:"Must",id:"must",children:[],level:3},{value:"Should",id:"should",children:[],level:3},{value:"Could",id:"could",children:[],level:3},{value:"Must Not",id:"must-not",children:[],level:3}],level:2}],d={toc:s};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Anime-Beautiful",src:r(75052).Z})),(0,o.kt)("p",null,"A bridge between Ethereum compatible chains and the Dreamcatcher Network"),(0,o.kt)("p",null,"Made up of a deployable smart contract and a deployable Dreamcatcher app. The two are bonded together and permit two way asset transfers. A third part may be an ERC1155 contract to allow these items to be tradeable on Opensea."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"must"},"Must"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Allow rejection of malformed bridging payments"),(0,o.kt)("li",{parentName:"ol"},"Allow transfers to be paused in an emergency"),(0,o.kt)("li",{parentName:"ol"},"Securely connect the depositing ETH account with a corresponding Dreamcatcher account"),(0,o.kt)("li",{parentName:"ol"},"Be terminateable with reasonable termination conditions"),(0,o.kt)("li",{parentName:"ol"},"Support DAI"),(0,o.kt)("li",{parentName:"ol"},"Behave well during Ethereum forks"),(0,o.kt)("li",{parentName:"ol"},"Pass all costs on to the users"),(0,o.kt)("li",{parentName:"ol"},"Allow withdraws without the user owning any ETH"),(0,o.kt)("li",{parentName:"ol"},"At most permit developers to pause withdrawals for a fixed period of time until bugs can be addressed"),(0,o.kt)("li",{parentName:"ol"},"Must enforce worst case damage of corrupted validators is frozen funds"),(0,o.kt)("li",{parentName:"ol"},"Allow automated auditing tool to compare allocation of NVN in Dreamcatcher to ETH allocations")),(0,o.kt)("h3",{id:"should"},"Should"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Allow depositors to pull back an unclaimed deposit they made on the DAI chain"),(0,o.kt)("li",{parentName:"ol"},"Require a signature from the account holder to withdraw their funds")),(0,o.kt)("h3",{id:"could"},"Could"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Contain within each Ethereum transaction the root hash of the Dreamcatcher"),(0,o.kt)("li",{parentName:"ol"},"Allow any ERC20 token to be transferred"),(0,o.kt)("li",{parentName:"ol"},"Allow any Ethereum NFT to be transferred"),(0,o.kt)("li",{parentName:"ol"},"Allow any kind of ETH function call to be made, and any kind of Dreamcatcher Action to be invoked")),(0,o.kt)("h3",{id:"must-not"},"Must Not"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Be controllable by the developers to steal funds"),(0,o.kt)("li",{parentName:"ol"},"Allow Dreamcatcher bugs to result in loss of funds"),(0,o.kt)("li",{parentName:"ol"},"Allow withdraws by users that have not passed KYC"),(0,o.kt)("li",{parentName:"ol"},"Allow the token to be sent to any address other than the gateway contract")))}m.isMDXComponent=!0},75052:function(e,t,r){t.Z=r.p+"assets/images/EthereumBridge-fcf23a331b44228ee26c7cf1ee047e89.png"}}]);