"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[7203],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var a=i(67294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,s=function(e,t){if(null==e)return{};var i,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(i),h=s,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return i?a.createElement(f,n(n({ref:t},u),{},{components:i})):a.createElement(f,n({ref:t},u))}));function h(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=i.length,n=new Array(o);n[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,n[1]=r;for(var p=2;p<o;p++)n[p]=i[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},54075:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=i(83117),s=(i(67294),i(3905));const o={},n="I19 IPFS Disassembly",r={unversionedId:"Ideas/I19",id:"Ideas/I19",title:"I19 IPFS Disassembly",description:"I19 IPFS Disassembly Libp2p Dissection",source:"@site/dust/Ideas/I19.md",sourceDirName:"Ideas",slug:"/Ideas/I19",permalink:"/dust/Ideas/I19",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/dust/Ideas/I19.md",tags:[],version:"current",frontMatter:{},sidebar:"dust",previous:{title:"I18 Interblock multithreading and isolation",permalink:"/dust/Ideas/I18"}},l={},p=[{value:"IPFS favours small sets of files that grow slowly",id:"ipfs-favours-small-sets-of-files-that-grow-slowly",level:3},{value:"IPFS intends a single open permission level for all",id:"ipfs-intends-a-single-open-permission-level-for-all",level:3},{value:"IPFS presents a stable interface to its consumers",id:"ipfs-presents-a-stable-interface-to-its-consumers",level:3},{value:"Utilized Components of IPFS",id:"utilized-components-of-ipfs",level:2},{value:"DHT from @libp2p/kad-dht",id:"dht-from-libp2pkad-dht",level:3},{value:"PubSub from @libp2p/pubsub",id:"pubsub-from-libp2ppubsub",level:3},{value:"Repo from ipfs-repo",id:"repo-from-ipfs-repo",level:3},{value:"Bitswap from ipfs-bitswap",id:"bitswap-from-ipfs-bitswap",level:3},{value:"Privacy within chains",id:"privacy-within-chains",level:2},{value:"Compatibility with IPFS",id:"compatibility-with-ipfs",level:2},{value:"Build plan",id:"build-plan",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"i19-ipfs-disassembly"},"I19 IPFS Disassembly"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"I19 IPFS Disassembly Libp2p Dissection",src:i(78110).Z,width:"1024",height:"1024"})),(0,s.kt)("p",null,"After pursuit of ",(0,s.kt)("a",{parentName:"p",href:"/dust/Ideas/I06"},"I06 IPFS Rewrite")," we have a working prototype using IPFS, but are seeing complications with the IPFS library itself, and in particular its networking facilities, and so we believe destructuring IPFS down to its core components will allow us to achieve our goals from ",(0,s.kt)("a",{parentName:"p",href:"/dust/Ideas/I06"},"I06")," as well as some secondary goals that were deemed too hard for now."),(0,s.kt)("p",null,"As anticipated in ",(0,s.kt)("a",{parentName:"p",href:"/dust/Ideas/I06"},"I06")," our design is a seamless fit for the IPFS data layer and this usage is Requested to be factored out in ",(0,s.kt)("a",{parentName:"p",href:"/dust/Requests/R24"},"R24 IPFS ORM"),", but our network layer deviates subtly and irreconciliably from IPFS in 3 ways:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"IPFS favours small sets of files that grow slowly"),(0,s.kt)("li",{parentName:"ol"},"IPFS intends a single open permission level for all"),(0,s.kt)("li",{parentName:"ol"},"IPFS presents a stable interface to its consumers")),(0,s.kt)("p",null,"The conclusion we reach is that IPFS is designed specifically for Files, where the number of files is expected to be small, and the rate of change of those files even smaller. IPFS the library represents these architectural aspirations, and implements them by bundling together modules, then dulling down the interface of each individual module to present a stable and unified whole package interface. The IPFS library also includes several other services that run by default, which we need to intercept and turn off for our purposes, such as MFS and Preload."),(0,s.kt)("p",null,"IPFS is not where the team solves problems - they solve problems in the individual bundles, then they package it up into IPFS as a single exemplary use case."),(0,s.kt)("p",null,"Conceptually if what IPFS provides is akin to a filesystem, then what we are providing is akin to ram and the structures therein, such as heap, stack, and swap space. The chatter of this activity is too great to write to disk in realtime, and so we need our own layer to handle this. There is definitely a lot of overlap, such as loading of executables and swapping out stale pieces to disk, but the high frequency nature warrants a tuned design."),(0,s.kt)("p",null,"Here are the identified deviations in more detail:"),(0,s.kt)("h3",{id:"ipfs-favours-small-sets-of-files-that-grow-slowly"},"IPFS favours small sets of files that grow slowly"),(0,s.kt)("p",null,"The primary difference that distances us from the goals of IPFS is the rapid rate of Pulse generation that we have."),(0,s.kt)("p",null,"We generate Pulses that are always assosciated with the same chainId, and higher still, with the same AppRoot. We aim to use this 'grouping' nature to reduce network traffic and peer discovery times, whereas IPFS offers no such grouping. For a particular Pulse to be discoverable on IPFS would require us to continually publish and then republish each of those Pulses to the IPFS DHT every 24 hours at minimum. This number of updates would result in throttling against our nodes. IPFS offers discovery of a random hash - but it requires regular network effort to keep this offer open. We offer discovery of an approot, then an address, and from there an individual Pulse, with each level of scoping vastly reducing the traffic required for lookup to be lively. Without this scoping, our offers would be too expensive to maintain."),(0,s.kt)("h3",{id:"ipfs-intends-a-single-open-permission-level-for-all"},"IPFS intends a single open permission level for all"),(0,s.kt)("p",null,"To this goal, IPFS tries to reach out and contact the main network with data all the time. It also makes itself available to receive requests. This can be catastrophic for confidential information. Our initial plan to provide generic permissions for IPFS using content lookup was naive. Due to the high rate of Pulse generation that we have, broadcast and discovery needs to be made specific to our use case - so too we need a permissions scheme specific to our model, as confidentiality must be absolute, and without exception."),(0,s.kt)("p",null,"The risk of leaking information using IPFS directly seems too great, and gets worse as years go by. Controlling our networking directly vastly reduces this risk."),(0,s.kt)("h3",{id:"ipfs-presents-a-stable-interface-to-its-consumers"},"IPFS presents a stable interface to its consumers"),(0,s.kt)("p",null,"Whilst IPFS is made up of many smaller reusable modules, the library strives to provide a stable and standard interface to its consumers. This means that many of the interface functions on the components that it packages up are not available to us directly. We found we were often attempting to perforate this packaging, reach inside to the components, and make modifications to suit our purposes."),(0,s.kt)("p",null,"It is far cleaner to be using the modules directly for our use case, rather than bending the IPFS library when its purposes are actually different to what we need. We get the full interface, as well as the latest updates, and we can submit pull requests directly to these libraries to fix our specific problems."),(0,s.kt)("h2",{id:"utilized-components-of-ipfs"},"Utilized Components of IPFS"),(0,s.kt)("p",null,"This is the list of modules and their purposes that we intend to pull from IPFS."),(0,s.kt)("h3",{id:"dht-from-libp2pkad-dht"},"DHT from ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/libp2p/js-libp2p-kad-dht"},"@libp2p/kad-dht")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Find peers based on a chainId, with permissions"),(0,s.kt)("li",{parentName:"ol"},"Find peers based on the chainId of an approot, with permissions"),(0,s.kt)("li",{parentName:"ol"},"Find CIDs of the ",(0,s.kt)("inlineCode",{parentName:"li"},"latest")," pulse of a chain based on its chainId, with permissions")),(0,s.kt)("h3",{id:"pubsub-from-libp2ppubsub"},"PubSub from ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/libp2p/js-libp2p-pubsub"},"@libp2p/pubsub")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Broadcast realtime updates for CIDs of the ",(0,s.kt)("inlineCode",{parentName:"li"},"latest")," pulse of a chain based on its chainId, with permissions")),(0,s.kt)("h3",{id:"repo-from-ipfs-repo"},"Repo from ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/ipfs/js-ipfs-repo"},"ipfs-repo")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Storage of data, config, and cryptographic keys securely to disk")),(0,s.kt)("h3",{id:"bitswap-from-ipfs-bitswap"},"Bitswap from ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/ipfs/js-ipfs-bitswap"},"ipfs-bitswap")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Provide and fetch blocks of data from connected peers, with permissions")),(0,s.kt)("p",null,"To preserve privacy, we would run one instance of bitswap per chain permission group we were part of. Or, possibly we could modify the decision engine to look up permissions."),(0,s.kt)("h2",{id:"privacy-within-chains"},"Privacy within chains"),(0,s.kt)("p",null,"By taking control of the networking streams directly, we can implement privacy restrictions specific to us, rather than trying to solve this generically for all of IPFS. This idea would list within a chain which public keys are allowed to access the chain, and by requiring each node to authenticate using their node key to each other, each node can check permissions before bitswap to send blocks of data to the requesting node."),(0,s.kt)("p",null,"This may require some extra effort to allow chains of chains to have access, but these seem logical to implement."),(0,s.kt)("h2",{id:"compatibility-with-ipfs"},"Compatibility with IPFS"),(0,s.kt)("p",null,"Taking this approach will remain fully compatible with IPFS, but to allow data to be browseable on the public IPFS network will require some additional coding effort. Our initial clients do not need this functionality and so this work is deferred, but we share the exact same data formats and the exact same networking protocols as the IPFS network."),(0,s.kt)("h2",{id:"build-plan"},"Build plan"),(0,s.kt)("p",null,"Using the IPFS prototype as the base guide, copy the implementation in IPFS to make our own dedicated libp2p networking module, with tests on each discrete piece of functionality and benchmarks."),(0,s.kt)("p",null,"Run with a single closed group of permissions, refusing connections from any peers who are not already entered into the system"),(0,s.kt)("p",null,"Build up functionality to be able to process the content we store to determine permissions to access that content."),(0,s.kt)("p",null,"Ultimately host our own public node and experiment with browser server functionality, achieving the long sought after ",(0,s.kt)("inlineCode",{parentName:"p"},"Announce")," capability so natural to web 2.0 applications."))}c.isMDXComponent=!0},78110:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/I19-288a90f517ef89df8f066320cb0cad3b.png"}}]);