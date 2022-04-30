"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[9477],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),c=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||o;return n?i.createElement(m,s(s({ref:t},h),{},{components:n})):i.createElement(m,s({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],l={},r="I06 IPFS rewrite",c={unversionedId:"Ideas/I06",id:"Ideas/I06",title:"I06 IPFS rewrite",description:"Proposal Scope",source:"@site/pool/Ideas/I06.md",sourceDirName:"Ideas",slug:"/Ideas/I06",permalink:"/pool/Ideas/I06",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/pool/Ideas/I06.md",tags:[],version:"current",frontMatter:{},sidebar:"pool",previous:{title:"Requests",permalink:"/pool/Requests/"},next:{title:"I07 Web Liquidity Pooling",permalink:"/pool/Ideas/I07"}},h={},p=[{value:"Proposal Scope",id:"proposal-scope",level:2},{value:"Liveliness",id:"liveliness",level:2},{value:"Functions required",id:"functions-required",level:3},{value:"Announce using a custom dht + pubsub",id:"announce-using-a-custom-dht--pubsub",level:4},{value:"Announcing new blocks",id:"announcing-new-blocks",level:3},{value:"Announcing new interblocks",id:"announcing-new-interblocks",level:3},{value:"Catching up",id:"catching-up",level:3},{value:"Speeding up first sync",id:"speeding-up-first-sync",level:3},{value:"Persisting app state on the clients",id:"persisting-app-state-on-the-clients",level:3},{value:"Scrubbing the chain periodically",id:"scrubbing-the-chain-periodically",level:3},{value:"Persistence",id:"persistence",level:2},{value:"Chain",id:"chain",level:3},{value:"Block",id:"block",level:3},{value:"Network",id:"network",level:3},{value:"Channel",id:"channel",level:3},{value:"Interblocks",id:"interblocks",level:3},{value:"State",id:"state",level:3},{value:"Converting existing models",id:"converting-existing-models",level:2},{value:"Network model",id:"network-model",level:3},{value:"Overlay DAGs within the App Complex",id:"overlay-dags-within-the-app-complex",level:2},{value:"Entering the system",id:"entering-the-system",level:2},{value:"Locking of chains",id:"locking-of-chains",level:2},{value:"Benefits over existing implementation",id:"benefits-over-existing-implementation",level:2},{value:"FAQs",id:"faqs",level:2},{value:"How will devs access the full block inside a reducer ?",id:"how-will-devs-access-the-full-block-inside-a-reducer-",level:4},{value:"Problems",id:"problems",level:2},{value:"Goals",id:"goals",level:2},{value:"Implementation order",id:"implementation-order",level:2}],d={toc:p};function u(e){var t=e.components,l=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"i06-ipfs-rewrite"},"I06 IPFS rewrite"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(62484).Z,width:"256",height:"256"})),(0,o.kt)("h2",{id:"proposal-scope"},"Proposal Scope"),(0,o.kt)("p",null,"Targets ",(0,o.kt)("a",{parentName:"p",href:"../Requests/R06"},"06 Interblock")," in all areas except privacy."),(0,o.kt)("p",null,"Because we have chosen to have a payload layer, and because our design treats all blocks as part of that payload layer, we are a seamless fit for IPFS which aims to be purely a payload layer. IPFS would be responsible for replacing our storage layer and network layer, which is an enormous amount of complexity that we can leverage from a popular and funded project."),(0,o.kt)("p",null,"IPFS does not currently have any sense of read permissions, nor multisig public cryptography, so we will need to add these layers in, hopefully in a way that can benefit the IPFS project as reusable components. An interim measure will be to use the private network feature of IPFS to form boundaries of non overlapping permissioned data until per chain permissioning can be implemented."),(0,o.kt)("p",null,"Some modifications to our models are required to fit this, but all the logic of chainmaking remains identical. There may be an extra step to asynchronously build up the parts of the block that are needed once we know what we need - specifically in ",(0,o.kt)("inlineCode",{parentName:"p"},"block.network")," - but the upside is that ",(0,o.kt)("inlineCode",{parentName:"p"},"block.network")," can grow to millions of chains and still function with performance being mostly a function of what changes you want to make, not what changes had previously been made."),(0,o.kt)("p",null,"During the course of this conversion we will treat permissioning and privacy as a separate layer, as it does not affect the data structure and transmission systems very much, the only exception being the layout of a block to allow interblocks to be formed that do not leak data about what other channels also received transmissions at the same block."),(0,o.kt)("p",null,"The utility of IPFS splits into two key areas: Liveliness, which is the means of propagating changes to chains, and Persistence, which is the means of storing, distributing, and retrieving chains."),(0,o.kt)("h2",{id:"liveliness"},"Liveliness"),(0,o.kt)("p",null,"Broadcasting in any network is a troublesome operation. After analysis of the protocols available in IPFS, broadcasting is significantly cheaper if a large number of different messages are sent to a single topic, rather than few messages sent to many topics. This is due to the cost of subscription to a topic. The principle we leverage to fit this model is that an AppRoot of any application is used as the topic for messages to notify a child of the AppRoot that there are new interblocks available to them to make new blocks out of."),(0,o.kt)("h3",{id:"functions-required"},"Functions required"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Announce when new blocks of a chain are made to readers"),(0,o.kt)("li",{parentName:"ol"},"Announce to destination when new interblocks are available from source"),(0,o.kt)("li",{parentName:"ol"},"Recover latest block of a chain, having missed announce"),(0,o.kt)("li",{parentName:"ol"},"Recover latest interblocks from source, having missed announce"),(0,o.kt)("li",{parentName:"ol"},"Publish a permanent end for a validator sets combined public key, signalling turnover to a new validator set")),(0,o.kt)("h4",{id:"announce-using-a-custom-dht--pubsub"},"Announce using a custom dht + pubsub"),(0,o.kt)("p",null,"We need to make a custom dht in libp2p and set the validate and select functions to only relay blocks. There is a significant weakness in that a rogue validator set can turnover and then continue to publish, which will confuse some nodes, unless each node looks up the block turnover history to validate it properly before validating."),(0,o.kt)("p",null,"Initially for our version this problem will not be tackled, and any block with a valid signature scheme will be passed. The selector will operate solely on the heights of each block, whereas later it should walk the tree and determine which is latest."),(0,o.kt)("p",null,"The key:value pair in the dht is ",(0,o.kt)("inlineCode",{parentName:"p"},"chainId:CID")," and we will walk the tree to check it. In prototyping, any publication will pass."),(0,o.kt)("h3",{id:"announcing-new-blocks"},"Announcing new blocks"),(0,o.kt)("p",null,"To avoid flooding the broadcast channels of IPFS (or any announcement system), change subscriptions are voluntarily kept to approot chains, altho they are permitted to be anything. The root of the app is guaranteed to change if any of the children change. The approot is the method of crosschain consistency for running queries."),(0,o.kt)("p",null,"Using pubsub in IPFS, each chainId is a broadcast topic. Correctly functioning validators will only broadcast when approots change. Upon receipt, each peer checks the signature of the block and if it fails it should stop gossiping the message."),(0,o.kt)("p",null,"Worst case we have a single validator, so we can just use IPNS to publish."),(0,o.kt)("p",null,"This DHT put is required for peers that missed an announcement. Each new block is also announced using pubsub. The same problems occur here as with put, and are handled the same way. Again a custom libp2p implementation may be needed."),(0,o.kt)("p",null,"Whenever a new block is received, the client and the server should pin it recursively, as this is the approot."),(0,o.kt)("h3",{id:"announcing-new-interblocks"},"Announcing new interblocks"),(0,o.kt)("p",null,"Listeners in the target chain subscribe to the topic of targetChainId:sourceChainId. Once the permissions layer is implemented, they would just listen to the sourceChainId topic, and would only receive notifications when something they can access is part of the latest block"),(0,o.kt)("p",null,"The principle is that if you have a request that you need processed, you need to keep announcing until you receive a reply. There is no point storing these values anywhere."),(0,o.kt)("p",null,"Publish by putting a value in the DHT so that if someone comes looking, they'll be able to find it, published by srcChainId-dstChainId:hash-height"),(0,o.kt)("h3",{id:"catching-up"},"Catching up"),(0,o.kt)("p",null,"Upon first seek, or periodically when a node suspects it might be behind announcements, the node needs to get the best known latest block. There are two ways to do this, which will be subject to testing."),(0,o.kt)("p",null,"Firstly, we can store the value directly in the DHT. Nodes would validate this value when received to make sure they agree with it before passing it on. This is the preferred method, provided we can stop forwarding malicious data, and we can update efficiently."),(0,o.kt)("p",null,"Secondly, we can use the IPNS system to publish versioned updates. Versions are numbered, and so these would coincide with block heights. Currently the IPNS system only supports signatures from a single key, so this method only supports single validator usage. Perhaps later we can modify it to support a set of validators, but then another problem is leaking information where the same validatorset is responsible for multiple chains."),(0,o.kt)("h3",{id:"speeding-up-first-sync"},"Speeding up first sync"),(0,o.kt)("p",null,"CAR files are a single archive of a tree of IPFS data. We should speed up time to first sync for clients by providing CAR files that snapshot the application state periodically. This will be especially useful for browser clients, however the applications should function sufficiently well if synchronization is from scratch reassembling DAGs."),(0,o.kt)("p",null,"The design of Interblock and its web components has always considered data arriving asynchronously, as all UI components are reactive, so speed of sync should be less of an issue. Browser clients currently store data in indexeddb so they will only need to sync data they missed while offline each time"),(0,o.kt)("h3",{id:"persisting-app-state-on-the-clients"},"Persisting app state on the clients"),(0,o.kt)("p",null,"IPFS has a function called pinning, and we should use this to pin the approot of each chain periodically, each time a new approot block is discovered. We may choose to unpin the previous block, but this will be a performance based decision, and not critical initially. In this way, all web clients with the webrtc protocol enabled, can help others sync faster."),(0,o.kt)("h3",{id:"scrubbing-the-chain-periodically"},"Scrubbing the chain periodically"),(0,o.kt)("p",null,"We will need to make a walker that periodically checks that latest has all its data present, then proceeds backwards in time, to ensure that all data is available."),(0,o.kt)("h2",{id:"persistence"},"Persistence"),(0,o.kt)("h3",{id:"chain"},"Chain"),(0,o.kt)("p",null,"This is a reverse trickle DAG which has as leaves pointers to every block.\nThe root hash of this DAG represents the LATEST hash. Benefit is that getting an arbitrary height can be looked up near instantly, rather than having to walk the chain one block at a time. The old version of chain was literally a chain, but this new version should be a tree, to give this rapid lookup ability based on height."),(0,o.kt)("h3",{id:"block"},"Block"),(0,o.kt)("p",null,"This stays largely the same, except internally the IPLD datamodel is applied"),(0,o.kt)("h3",{id:"network"},"Network"),(0,o.kt)("p",null,"This will be left alone if possible, but we might change firstly that we build it up asynchronously, allowing efficiency as it gets large, and secondly that we might move to a HAMT which allows millions of children. HAMT needs performance checking. We need to make sure that holes are repacked in the network tree, so the tree does not shuffle, but this might not actually matter if we use named links."),(0,o.kt)("h3",{id:"channel"},"Channel"),(0,o.kt)("p",null,"This is an interesting structure, since it acts as a splice point to connect to the DAG or another chain. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"precedent")," field, it maintains a pointer to the latest block from the remote chain that transmitted to it. Walking this DAG it finds what messages are due to it based on its chainId. This will be tricky to implement privacy on, as the content request needs to be done as tho"),(0,o.kt)("h3",{id:"interblocks"},"Interblocks"),(0,o.kt)("p",null,"These point directly at the blocks of the transmitting channel so are no longer a thing. The permissions layer will restrict how receiving chains can walk the DAG of transmitting chains."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"block.transmission")," slice points now to the CID of the channel tip"),(0,o.kt)("h3",{id:"state"},"State"),(0,o.kt)("p",null,"State allows using CIDs if the developer wants to, which can make anything in the IPLD be referenced and mutated by chains, by wrapping them in state."),(0,o.kt)("h2",{id:"converting-existing-models"},"Converting existing models"),(0,o.kt)("h3",{id:"network-model"},"Network model"),(0,o.kt)("p",null,"This was designed to be very large and fast using ImmutableJS. Using IPLD opens up a new possibility for scale, as a network object of unlimited size can be created, and walked only for the specific pieces required during blockmaking. Using tools like the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rvagg/js-ipld-hashmap"},"IPLD HAMT")," we might be able to achieve megachain without implementing the proxy pattern for chains."),(0,o.kt)("h2",{id:"overlay-dags-within-the-app-complex"},"Overlay DAGs within the App Complex"),(0,o.kt)("p",null,"A chain application is made up of an approot and any number of children. Within this tree of children, there are 3 overlay DAGs which can be navigated directly:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The state tree (the knowledge of the complex)"),(0,o.kt)("li",{parentName:"ol"},"The metadata tree (the liveliness of the complex)"),(0,o.kt)("li",{parentName:"ol"},"The binary tree (the files of the complex)")),(0,o.kt)("p",null,"Each of these is referenced and pushed up to the root. This allows the state hash to be queried for when it changes, and know that none of the child states changed either."),(0,o.kt)("h2",{id:"entering-the-system"},"Entering the system"),(0,o.kt)("p",null,"The binary data can be attached directly to a pierce chain, or it can be attached using IPFS and then a CID provided to the chain. The validators will fetch the CID and verify the hashes before including reference to this data in any blocks"),(0,o.kt)("h2",{id:"locking-of-chains"},"Locking of chains"),(0,o.kt)("p",null,"This is only required within any process that has access to the crypto keys of this node. This lock process cannot be within IPFS because it needs to be very quick, and should never leave the node. In lambda, this would probably be done through dynamodb, or it might be done as blocks in an internal chain to give high level locks, then fast local locks within each 6 core runner."),(0,o.kt)("p",null,"In an algorithm like tendermint, locking is handled loosely and within the protocol, so here locking refers to only within the node itself, to provide consistent and compliant use of the precious crypto keys."),(0,o.kt)("p",null,"The npm package ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mortice"},(0,o.kt)("inlineCode",{parentName:"a"},"mortice"))," which is used by IPFS might be useful for locking on the same machine."),(0,o.kt)("h2",{id:"benefits-over-existing-implementation"},"Benefits over existing implementation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Interblocks are not produced, nor sent, but rather the permissions layer will only give access to the destination chain from the source for the narrow slice"),(0,o.kt)("li",{parentName:"ol"},"Network size in a block can be near infinite with no overhead"),(0,o.kt)("li",{parentName:"ol"},"Whole applications of a tree of chains can be bundled up into a single archive and downloaded to sync rapidly"),(0,o.kt)("li",{parentName:"ol"},"Storage space is used nearly as efficiently as possible with very little performance overhead"),(0,o.kt)("li",{parentName:"ol"},"Lambda functions can now make their own internal high performance cache network that makes use of the temporary disk space each function gets"),(0,o.kt)("li",{parentName:"ol"},"Lambda functions can operate without S3"),(0,o.kt)("li",{parentName:"ol"},"Our public blockchain can have truly public data right from launch")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("h4",{id:"how-will-devs-access-the-full-block-inside-a-reducer-"},"How will devs access the full block inside a reducer ?"),(0,o.kt)("p",null,"They have to use an async function to query the block anyway, so they will have to make several async calls once they know what the block.network path they want is."),(0,o.kt)("p",null,"Questions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Can a UnixFS file also contain a custom IPLD format, so we can blend the payload layer tree and showing the state of each node ?"),(0,o.kt)("li",{parentName:"ol"},"Does throwing in the pubsub handler in ipfs perform the same result as a validator in libp2p pubsub ?"),(0,o.kt)("li",{parentName:"ol"},"How is the performance of the IPLD primitives ? Can we use them in the intermediate states, or should we stick to our objects and only stamp down to IPLD at blockmaking time ?"),(0,o.kt)("li",{parentName:"ol"},"How big are ints in the IPLD datamodel ? 2^53 due to implementation in JS")),(0,o.kt)("h2",{id:"problems"},"Problems"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Browser peers need access to a signalling server to use webrtc: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/libp2p/js-libp2p-webrtc-star/tree/master/packages/webrtc-star-signalling-server"},"https://github.com/libp2p/js-libp2p-webrtc-star/tree/master/packages/webrtc-star-signalling-server")," - but a desktop node might do this automatically once it gets discovered by the browsers")),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Perform well over lan on a private network - ignore public network performance")),(0,o.kt)("h2",{id:"implementation-order"},"Implementation order"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Data structures overview via writing schema"),(0,o.kt)("li",{parentName:"ol"},"Convert model system over to use IPLD models"),(0,o.kt)("li",{parentName:"ol"},"Build hash functions with rough benchmarks"),(0,o.kt)("li",{parentName:"ol"},"Check producers still operate correctly"),(0,o.kt)("li",{parentName:"ol"},"Modify Engine to use IPFS to store pools"),(0,o.kt)("li",{parentName:"ol"},"Cache ioConsistency using block.bytes.length as the capacity"),(0,o.kt)("li",{parentName:"ol"},"Modify Engine to fully resolve DAGs before blockmaking")))}u.isMDXComponent=!0},62484:function(e,t,n){t.Z=n.p+"assets/images/anime-beautiful_dreamcatcher-interplanetary-filesystem-96f21b6df587ea1e8a15b26aff152271.png"}}]);