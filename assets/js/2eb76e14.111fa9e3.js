"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[5411],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,h=f["".concat(c,".").concat(m)]||f[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={},c=void 0,l={unversionedId:"Drafts/Tutorial",id:"Drafts/Tutorial",title:"Tutorial",description:"Measurement of Developer Experience",source:"@site/nfas/Drafts/Tutorial.md",sourceDirName:"Drafts",slug:"/Drafts/Tutorial",permalink:"/nfas/Drafts/Tutorial",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/nfas/Drafts/Tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"nfas",previous:{title:"Workflows for Customer",permalink:"/nfas/Drafts/Provenance Accounting/Workflows for Customer"},next:{title:"inverted-capital",permalink:"/nfas/AppData/Logs/inverted-capital"}},u={},d=[{value:"Measurement of Developer Experience",id:"measurement-of-developer-experience",level:2}],f={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"measurement-of-developer-experience"},"Measurement of Developer Experience"),(0,r.kt)("p",null,"how would you measure the DX of a particular framework ? What makes it good or bad compared to another one ? Is the best we can do to conduct a survey ?\nrexmondo \u2014 Today at 10:49 AM\nThere\u2019s some simple standard measures like cyclomatic complexity\nAlso think about it like ergonomics\nYou wouldn\u2019t sit in a chair that put huge sideways pressure in your knees\nUsing a dev framework that forces you to keep 1000 things in mind every time you\u2019re writing a line is like putting strain on your brain\nI suspect it\u2019s possible to build tests that can discriminate high mental load frameworks from low ones\nKind of roughly counting how many dependencies, layers of contextual surrounding code, special rules exist in your average code unit\nmcnasty \u2014 Today at 11:42 AM\nso if I request \"developer experience\" as a requirement for Interblock, how would I know someone had met that ?\nA simple way could be to select a collection of other stacks that can be used to build an application, and just put them in order of hard to easy ?\nso it becomes a relative measurement ?\nif someone runs some metrics on a chair, I might not know what that means, but if I can sit my ass in them, I can definitely rank them in order of preference\nthere was this programming site I saw a while back that implemented a bunch of simple apps, like todo list, using different dev frameworks, and used that to derive metrics for ?\ncan't damn well find it tho...\nrexmondo \u2014 Today at 12:46 PM\nYeah todo list is a great example of how devs sniff this stuff out\nThere\u2019s a standard ui for it but it\u2019s slightly different in each framework\nIt\u2019s going to be a bit of a tougher sell with inter lock because most of the todo list implementations are client only\nI think to do a real apples to apples DX consideration you\u2019d need to show differences in app lifecycle management including migration, scaling, refactoring\nmcnasty \u2014 Today at 12:48 PM\nmaybe theres a todolist style app we can do that is for a distributed app\nas a starting point, how about a truly decentralized todo list - that starts the test at basically impossible for conventional frameworks\nrexmondo \u2014 Today at 12:49 PM\nYes\nThat\u2019s a great idea\nmcnasty \u2014 Today at 12:50 PM\nthen we can make a bunch of metrics statements about it, and make some equivalents in other blockchains\nas a good metric, wasted data % is a good one - as a client of this app, how much data am I receiving that has nothing to do with me ?\nrexmondo \u2014 Today at 12:50 PM\nI think even if it was possible in conventional frameworks but the amount of code is staggering\nmcnasty \u2014 Today at 12:51 PM\nfor traditional blockchains this will be the majority of data\nthen we can define some contrived lifecycle events: make the todo app be multi user, upgrade one dependency library, upgrade the framework version without bugs, scale to 10k users, simulate being slashdotted\nat each stage, include costs for infrastructure, and also for dev time\nrexmondo \u2014 Today at 12:53 PM\nYes\nI love this\nLike a case study and a tutorial in one\nmcnasty \u2014 Today at 12:55 PM\nthen torture test: netsplit, slashdotted, patch the framework, and release 1 new feature while users are offline \ud83e\udd23\nlike that's not that contrived, but you're testing so much more than just a code framework there - thats software supply chain integrity and availability\nrexmondo \u2014 Today at 12:58 PM\nYeah that\u2019s the ticket\nInstead of having those all be unaddressed future concerns that everyone answers differently, you have the answer up front\nI think fear of real world conditions holds a lot of people back from trying weird stuff in dev\nAnd for those of us it doesn\u2019t, we get stung by things we didn\u2019t see coming\nmcnasty \u2014 Today at 1:00 PM\nyeah totally\nI think the final test is how easily can you get your code written, and how much will it cost you, and how much will it cost to maintain\nthose are the metrics of the dreamcatcher\nif I can take 15 minutes to drop in a spec for my todo list, $100, and review a few responses, thats the best framework of all\nplus if it automatically has people fixing bugs for me, and auto upgrading the base library after ensuring that my code executed exactly the same as it always did\n#winner\nrexmondo \u2014 Today at 1:03 PM\nYeah man\nmcnasty \u2014 Today at 1:04 PM\noh yeah and do all this offline too ! \ud83d\ude06\ndistributed offline mic drop \ud83c\udf99\ufe0f\nrexmondo \u2014 Today at 1:04 PM\nYeah that\u2019s a good point\nmcnasty \u2014 Today at 1:05 PM\nif a mic drops on the internet, but no-one is connected to hear it.....\nok well this sounds like a great case study, tutorial, spec / goal thing - I'll write it up"))}m.isMDXComponent=!0}}]);