"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[1601],{78943:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const o={published:!1,title:"Natural Language Apps",description:""},r=void 0,s={permalink:"/blog/2024/10/15/napp-package-format",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/blog/2024-10-15-napp-package-format.md",source:"@site/blog/2024-10-15-napp-package-format.md",title:"Natural Language Apps",description:"",date:"2024-10-15T00:00:00.000Z",formattedDate:"October 15, 2024",tags:[],readingTime:5.46,hasTruncateMarker:!0,authors:[],frontMatter:{published:!1,title:"Natural Language Apps",description:""},nextItem:{title:"Hurry up and Wait",permalink:"/blog/2024/09/18/hurry-up-and-wait"}},l={authorsImageUrls:[]},c=[{value:"Rationale for a New Package Format",id:"rationale-for-a-new-package-format",level:2},{value:"Bridging Programming Languages and AI through JSON",id:"bridging-programming-languages-and-ai-through-json",level:3},{value:"An AI friendly package format",id:"an-ai-friendly-package-format",level:3},{value:"The &quot;napp&quot; Format Specification",id:"the-napp-format-specification",level:2},{value:"Key Features",id:"key-features",level:3},{value:"The API gateway",id:"the-api-gateway",level:2},{value:"Use Cases and Applications",id:"use-cases-and-applications",level:2},{value:"Serverless Platform Integration",id:"serverless-platform-integration",level:3},{value:"Browser Compatibility",id:"browser-compatibility",level:3},{value:"AI and LLM Integration",id:"ai-and-llm-integration",level:3},{value:"Advantages over current package managers",id:"advantages-over-current-package-managers",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function g(e){let{components:a,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'"napps: a universal package format to make all code AI callable"')),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(54174).Z,width:"1344",height:"768"})),(0,i.kt)("br",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Give me a json function interface and an execution environment and I will\nmove the whole world")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"LLMs everywhere trying to do their jobs"))),(0,i.kt)("p",null,'The fundamental principle of the "napp" format is to provide a unified interface\nfor deterministic computing (classical code) and probabilistic computing (AI),\nenabling these two paradigms to work together effectively by presenting as a\nsingle, highly tested, reusable unit.'),(0,i.kt)("p",null,"In order for these two paradigms to merge, we can simultaneously merge in the\nweb API paradigm which is foundational to cloud computing, and add in the\nblockchain paradigm, providing a highly cohesive means of packaging\nfunctionality into composable units."),(0,i.kt)("p",null,"If we can bridge between natural language generators and conventional code\nexecution, then we can also bridge between conventional code execution flavours\nfor no extra effort, enabling python apps to call rust apps to call javascript\napps and so on."),(0,i.kt)("h2",{id:"rationale-for-a-new-package-format"},"Rationale for a New Package Format"),(0,i.kt)("h3",{id:"bridging-programming-languages-and-ai-through-json"},"Bridging Programming Languages and AI through JSON"),(0,i.kt)("p",null,"Traditional package formats are inherently tied to specific programming\nlanguages, necessitating custom tools or language-specific package managers for\ninvocation. This fragmentation introduces significant challenges, particularly\nin an era where AI systems, such as large language models (LLMs), increasingly\ninterface with code across multiple languages."),(0,i.kt)("p",null,'JSON has emerged as a universal data interchange format, both language-agnostic\nand conducive to AI integration. By standardizing function calls across all\nlanguages using JSON, the "napp" format ensures compatibility with AI and\nnatural language processing systems. This approach simplifies cross-language\ninteroperability and leverages the capabilities of LLMs in understanding and\ngenerating JSON-formatted data.'),(0,i.kt)("h3",{id:"an-ai-friendly-package-format"},"An AI friendly package format"),(0,i.kt)("p",null,"The current packaging tools were all created before AI was mainstream. The\nformats were made to cater to humans, and they made design choices for adoption\nand freedom, rather than practicality and correctness. If a package format is\nintended to be used mostly by an AI, then it must make sense to the AI\nnaturally, it must be minimal with the least number of surprises being possible\nin it, and it must favour compact units rather than large sprawling megamodules,\nwhich are torturous for both humans and AIs alike, but not really\ndisincentivized in traditional package formats."),(0,i.kt)("h2",{id:"the-napp-format-specification"},'The "napp" Format Specification'),(0,i.kt)("h3",{id:"key-features"},"Key Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Language-Agnostic Execution"),': "napp" packages will support all major\nprogramming languages, including Python, JavaScript, Go, and Rust. An\nefficient translation layer routes JSON calls to native function calls,\nenabling seamless interaction across languages.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Security and Permissions"),": Each package explicitly defines its required\npermissions (e.g., network access, filesystem operations). The execution\nenvironment enforces these permissions to ensure secure operation and prevent\nunauthorized actions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Git-Based Version Control"),": Packages are stored in Git repositories,\nenabling comprehensive version tracking, content deduplication, and efficient\nupdates through delta changes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Reproducible Builds"),": Including source code and build scripts within the\npackage ensures that builds can be reproduced locally, enhancing both security\nand transparency.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Monetization and Attribution"),": Built-in mechanisms support usage costs,\nmodification payments, and contributor attribution, fostering a fair and\nincentivized ecosystem for developers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"State Management"),": Packages manage state between invocations using isolated\nfilesystem areas and state identifiers, supporting complex interactions and\npersistent sessions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"AI-Native Interface"),': "napp" packages are designed to be "chattable,"\nsupporting natural language interfaces that allow AI systems to effectively\nperform function calls.'))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Comprehensive Documentation"),": Inclusion of descriptions, usage examples,\nAPI specifications, and metadata to facilitate developer engagement.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Testing and Validation"),": Provision of tests and example runs to assess\npackage functionality and estimate execution costs prior to deployment."))),(0,i.kt)("h2",{id:"the-api-gateway"},"The API gateway"),(0,i.kt)("p",null,"If we have a standard way to make API calls out, then a hosting platform can\nallow consumers to have a single billing relationship with the hoster, but be\nconsuming a plethora of API services that have a billing relationship with the\nhoster or some other providing party. The end consumers do not have to bother\nthemselves with half a dozen different API keys and accounts that they have to\nmanage, they simply pay the hoster for what they consume."),(0,i.kt)("p",null,"The gateway being a json interface allows mocking and switching of the gateway\ndependency, so a napp execution can be moved between hosters, and between\ngateway providers, and still be assured of correct functionality."),(0,i.kt)("h2",{id:"use-cases-and-applications"},"Use Cases and Applications"),(0,i.kt)("h3",{id:"serverless-platform-integration"},"Serverless Platform Integration"),(0,i.kt)("p",null,'"napp" packages can be deployed on serverless platforms, allowing developers to\nexecute applications at scale without managing infrastructure. They support API\ncalls over the network, facilitating integration into larger systems and\nenabling rapid deployment.'),(0,i.kt)("h3",{id:"browser-compatibility"},"Browser Compatibility"),(0,i.kt)("p",null,'"napp" packages compatible with browser environments can run directly within\nbrowsers by leveraging modern web technologies, enabling developers to build\nrich, interactive web applications with minimal configuration.'),(0,i.kt)("h3",{id:"ai-and-llm-integration"},"AI and LLM Integration"),(0,i.kt)("p",null,'By exposing functions that are optimized for AI-driven invocation, "napp"\npackages simplify interactions with LLMs. AI systems can seamlessly interface\nwith packages through JSON parameters and natural language queries, thus\nenhancing AI-driven development workflows.'),(0,i.kt)("h2",{id:"advantages-over-current-package-managers"},"Advantages over current package managers"),(0,i.kt)("p",null,"Current package manages break the provenance between the git commits that\nproduced the end result and the end result itself. They also compress the\nfinished item which gains space for this package but loses deduplication with\nother similar packages made up of some of the same components. A napp package is\na git commit, so it has no loss of fidelity from how it was made to how it is\nconsumed."),(0,i.kt)("p",null,"Being AI native, which means the discovery is intended to be done by AI on the\nfly, allows shifting cognitive burden from the developers and onto the AI.\nDeduplication of similar packages dampens namespace pollution, and a semantic\nfirewall ensures that a packages advertised functions match what the function\ncalls return."),(0,i.kt)("p",null,"Running on a blockchained execution environment, side effects can be controlled,\nand so a napp package has strong security guarantees about the leakage of\ninformation during its execution due to the strong isolated box it gets run\nwithin."),(0,i.kt)("p",null,"Cost of execution being built in to the package manager also allows control of\nrunaway code as it runs out of credits, but also incentivizes more optimal\nversions to be created, since the faster improved version will receive more\nprofit share from the hosters."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,'The "napp" format provides a comprehensive approach to package design for the\nAI-integrated development ecosystem. By unifying cross-language interfaces,\nenhancing security, and integrating deterministic and probabilistic computing\nparadigms, "napp" offers a robust framework for AI-native applications. We\nencourage developers, AI researchers, and the broader community to explore and\ncontribute to the "napp" format.'))}g.isMDXComponent=!0},54174:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2024-10-15-napps-af6860129000d12c0b6cca912cdce707.jpg"}}]);