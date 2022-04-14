"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[1232],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3642:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={},s=void 0,c={unversionedId:"Ideas/04 Securities Guardian",id:"Ideas/04 Securities Guardian",title:"04 Securities Guardian",description:"Proposal Scope",source:"@site/nfas/Ideas/04 Securities Guardian.md",sourceDirName:"Ideas",slug:"/Ideas/04 Securities Guardian",permalink:"/nfas/Ideas/04 Securities Guardian",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/nfas/Ideas/04 Securities Guardian.md",tags:[],version:"current",frontMatter:{},sidebar:"nfas",previous:{title:"Proposal Scope",permalink:"/nfas/Ideas/02 Funding"},next:{title:"05 Markdown NFT Mode",permalink:"/nfas/Ideas/05 Markdown NFT Mode"}},u=[{value:"Proposal Scope",id:"proposal-scope",children:[],level:2},{value:"Proposed Approach",id:"proposed-approach",children:[{value:"Must have",id:"must-have",children:[],level:3},{value:"Could have",id:"could-have",children:[],level:3},{value:"Should",id:"should",children:[],level:3},{value:"Must Not",id:"must-not",children:[],level:3}],level:2},{value:"Proposed Output",id:"proposed-output",children:[],level:2},{value:"Proposed Timeline",id:"proposed-timeline",children:[],level:2},{value:"Proposed Contract",id:"proposed-contract",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"proposal-scope"},"Proposal Scope"),(0,o.kt)("p",null,"This proposal covers Tactical Intent 1 of 04 Securities Guardian. It's execution will take Tactical Intents 2-4 into account as the end use. On a successful PR, certain aspects of Tactical Intents 2-4 that can be expressed by the use of the statechart will be addressed. Aspects that require integration with DC automation will be left to others."),(0,o.kt)("h2",{id:"proposed-approach"},"Proposed Approach"),(0,o.kt)("h3",{id:"must-have"},"Must have"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Be designed in all ways to protect all actors from exploitations by others, even if someone actively wanted to be exploited.")),(0,o.kt)("p",null,"The number of possible exploits is too unwieldy for a single statechart to be practically complete. As an alternative, I propose a set of state 'triggers' - transitions of state based on types of activity during the current state that trigger the Security Guardian."),(0,o.kt)("p",null,'E.g. If the Fwd NFA is in Development, has Investment and Contributors, and an Investor promotes that Fwd NFA, then the state would change to "Security Guardian Check". This would allow for a cautious approach (any activity during a state of a susceptable type will be checked), and would allow the Security Guardian checklist to be updated regularly without changes to the statechart and therefore flow.'),(0,o.kt)("p",null,"NB, the previous statechart at ",(0,o.kt)("a",{parentName:"p",href:"https://miro.com/app/board/o9J_lS2-5J4=/"},"https://miro.com/app/board/o9J_lS2-5J4=/")," can easily be re-purposed as the assessment check, as it deals not with the triggers, but an assessment of the current situation in terms of Securities Law. I'll propose using something similar to detail the assessment if this proposal is accepted."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Be versioned and upgradeable")),(0,o.kt)("p",null,"I propose UML v2.0, using Mermaid, and committed through github."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Operate synchronously with no external calls")),(0,o.kt)("p",null,"Noted. This may restrict the notification to the current state that a promotion is underway to promotions that occur only on-chain, or which are reported on-chain."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Be deterministic and repeatable")),(0,o.kt)("p",null,"Pre-requisite for this is a 'timeslice' of the current state each time the Security Guardian is triggered, which would allow the decision to be reviewed and repeated, and would remove any async input."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Be applicable to every Actor / NFT pair in the system")),(0,o.kt)("p",null,"I've identified the following Actors and NFT States. Each will have a pairing with the other:"),(0,o.kt)("p",null,"Actors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Security Guardian (Software Agent)"),(0,o.kt)("li",{parentName:"ul"},"Dreamcatcher System (Software Agent)"),(0,o.kt)("li",{parentName:"ul"},"Governance"),(0,o.kt)("li",{parentName:"ul"},"Contributor, Permissionless"),(0,o.kt)("li",{parentName:"ul"},"Contributor, Permissioned, Sweat Only"),(0,o.kt)("li",{parentName:"ul"},"Contributor, Permissioned, Hybrid, (Sweat and cash)"),(0,o.kt)("li",{parentName:"ul"},"Investor, No Participation"),(0,o.kt)("li",{parentName:"ul"},"Investor, Participant"),(0,o.kt)("li",{parentName:"ul"},"QA Service"),(0,o.kt)("li",{parentName:"ul"},"Escrow Service"),(0,o.kt)("li",{parentName:"ul"},"Arbiter")),(0,o.kt)("p",null,"Broad States to cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Idea is being formed, but not yet articulated as a Fwd NFA"),(0,o.kt)("li",{parentName:"ul"},"Fwd NFA is being developed, but is not yet available for revenue or value generation"),(0,o.kt)("li",{parentName:"ul"},"NFA is available for revenue, value generation or inclusion in another Project"),(0,o.kt)("li",{parentName:"ul"},"NFA is no longer being developed, but is being promoted for use or sale (typically only used e.g. in one-off pieces, such as a photograph.)"),(0,o.kt)("li",{parentName:"ul"},"NFA is no longer being developed or promoted (used only for state transitions back to 'promoted')")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Define allowed states with a large margin of error, beyond doubt")),(0,o.kt)("p",null,"See above note on the statechart being used as a 'trigger' for any event that could possibly result in Securities Law issues."),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Be scopable for simple high level views")),(0,o.kt)("p",null,'The above "Broad States" will have embedded states within those that show higher granularity. In my view this high granularity is indeed necessary in order to prove the statechart complete, afterwhich lower granularity views can be generated.'),(0,o.kt)("h3",{id:"could-have"},"Could have"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Include states that model specific exploits, such as pump and dump, theft, failure to deliver, did not understand what was purchasing, insider trading, sybil attack, market manipulation, and others")),(0,o.kt)("p",null,"Modelling of these would be through a series of transition flows through the statechart to be produced. E.g. a pump and dump may be modelled by"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Transition 1: S1 (Fwd NFA) -- Fwd NFA invested in by Actor: Investor --\x3e S2 (Fwd NFA in Development)"),(0,o.kt)("li",{parentName:"ol"},"Transition 2: S2 (Fwd NFA in Development) -- Actor: Investor promotes Fwd NFA --\x3e S3 (Securities Guarian Triggered)"),(0,o.kt)("li",{parentName:"ol"},"Transition 3: S3 (Securities Guarian Triggered) -- Actor: Securities Guardian Accepts content of Promotion --\x3e S2 (Fwd NFA in Development)"),(0,o.kt)("li",{parentName:"ol"},"Transition 4: S2 (Fwd NFA in Development) -- Actor: Investor sells out --\x3e S3 (Securities Guarian Triggered)"),(0,o.kt)("li",{parentName:"ol"},"Transition 5: S3 (Securities Guarian Triggered) -- Actor: Securities Guardian triggers exception on sale close to promotion --\x3e S4 (Fwd NFA Locked)"),(0,o.kt)("li",{parentName:"ol"},"Transition 6: S4 (Fwd NFA Locked) --\x3e //")),(0,o.kt)("p",null,"These is a gross example to show roughly the approach. That is, specific exploits can be modelled using the proposed statechart and a script to prove/demonstrate it's response."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Include the QA service provider as an actor in the system")),(0,o.kt)("p",null,"Agree that this is a necessary actor at v1."),(0,o.kt)("h3",{id:"should"},"Should"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Permit generation of overlay statecharts representing a specific jurisdictions classification rules")),(0,o.kt)("p",null,"With the proposed approach, any transition that could possibly result in a breach is triggered through the statechart, and passed to the securities guardian rulebase for assessment. That way, e.g. multiple jurisdictions can be assessed, the geo of the user can select one, or the sum of all jurisdictions (hardest case) can be applied and more easily updated."),(0,o.kt)("h3",{id:"must-not"},"Must Not"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Be overly influenced by any specific jurisdiction, as invulnerability is a universal goal")),(0,o.kt)("p",null,"Reference the above 'trigger approach'; I believe that meets this requirement."),(0,o.kt)("h2",{id:"proposed-output"},"Proposed Output"),(0,o.kt)("p",null,"Initial format (for ease): Matrix compatible with translation to UML v2.0 statechart.\nPR will use Mermaid syntax."),(0,o.kt)("h2",{id:"proposed-timeline"},"Proposed Timeline"),(0,o.kt)("p",null,"First PR - 2 days."),(0,o.kt)("h2",{id:"proposed-contract"},"Proposed Contract"),(0,o.kt)("p",null,"DPL in force. Attribution only."))}d.isMDXComponent=!0}}]);