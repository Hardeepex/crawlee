"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10744],{67486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(85893),s=n(11151),i=n(14959);const o={id:"experiments-request-locking",title:"Request Locking",description:"Parallelize crawlers with ease using request locking"},l=void 0,a={id:"experiments/experiments-request-locking",title:"Request Locking",description:"Parallelize crawlers with ease using request locking",source:"@site/versioned_docs/version-3.6/experiments/request_locking.mdx",sourceDirName:"experiments",slug:"/experiments/experiments-request-locking",permalink:"/docs/3.6/experiments/experiments-request-locking",draft:!1,unlisted:!1,tags:[],version:"3.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"experiments-request-locking",title:"Request Locking",description:"Parallelize crawlers with ease using request locking"},sidebar:"docs",previous:{title:"Experiments",permalink:"/docs/3.6/experiments"},next:{title:"Upgrading",permalink:"/docs/3.6/upgrading"}},c={},u=[{value:"How to enable the experiment",id:"how-to-enable-the-experiment",level:2},{value:"In crawlers",id:"in-crawlers",level:3},{value:"Outside crawlers (to setup your own request queue that supports locking)",id:"outside-crawlers-to-setup-your-own-request-queue-that-supports-locking",level:3},{value:"Using the new request queue in crawlers",id:"using-the-new-request-queue-in-crawlers",level:3},{value:"Other changes",id:"other-changes",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsx)(t.p,{children:"This is an experimental feature. While we welcome testers, keep in mind that it is currently not recommended to use this in production."}),(0,r.jsx)(t.p,{children:"The API is subject to change, and we might introduce breaking changes in the future."}),(0,r.jsxs)(t.p,{children:["Should you be using this, feel free to open issues on our ",(0,r.jsx)(t.a,{href:"https://github.com/apify/crawlee",target:"_blank",rel:"noopener",children:"GitHub repository"}),", and we'll take a look."]})]}),"\n",(0,r.jsxs)(t.p,{children:["Starting with ",(0,r.jsx)(t.code,{children:"crawlee"})," version ",(0,r.jsx)(t.code,{children:"3.5.5"}),", we have introduced a new crawler option that lets you enable using a new request locking\nAPI. With this API, you will be able to pass a ",(0,r.jsx)(t.code,{children:"RequestQueue"})," to multiple crawlers to parallelize the crawling process."]}),"\n",(0,r.jsx)(t.admonition,{title:"Keep in mind",type:"info",children:(0,r.jsxs)(t.p,{children:["The request queue that supports request locking is currently exported via the ",(0,r.jsx)(t.code,{children:"RequestQueue2"})," class. Once the experiment is over, this class will replace\nthe current ",(0,r.jsx)(t.code,{children:"RequestQueue"})," class"]})}),"\n",(0,r.jsx)(t.h2,{id:"how-to-enable-the-experiment",children:"How to enable the experiment"}),"\n",(0,r.jsx)(t.h3,{id:"in-crawlers",children:"In crawlers"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["This example shows how to enable the experiment in the ",(0,r.jsx)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,r.jsx)(t.code,{children:"CheerioCrawler"})}),",\nbut you can apply this to any crawler type."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // highlight-next-line\n    experiments: {\n        // highlight-next-line\n        requestLocking: true,\n        // highlight-next-line\n    },\n    async requestHandler({ $, request }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n    },\n});\n\nawait crawler.run(['https://crawlee.dev']);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"outside-crawlers-to-setup-your-own-request-queue-that-supports-locking",children:"Outside crawlers (to setup your own request queue that supports locking)"}),"\n",(0,r.jsxs)(t.p,{children:["Previously, you would import ",(0,r.jsx)(t.code,{children:"RequestQueue"})," from ",(0,r.jsx)(t.code,{children:"crawlee"}),". To switch to the queue that supports locking, you need to import ",(0,r.jsx)(t.code,{children:"RequestQueue2"})," instead."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// highlight-next-line\nimport { RequestQueue2 } from 'crawlee';\n\nconst queue = await RequestQueue2.open('my-locking-queue');\nawait queue.addRequests([\n    { url: 'https://crawlee.dev' },\n    { url: 'https://crawlee.dev/docs' },\n    { url: 'https://crawlee.dev/api' },\n]);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"using-the-new-request-queue-in-crawlers",children:"Using the new request queue in crawlers"}),"\n",(0,r.jsx)(t.p,{children:"If you make your own request queue that supports locking, you will also need to enable the experiment in your crawlers."}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsx)(t.p,{children:"If you do not enable the experiment, you will receive a runtime error and the crawler will not start."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { CheerioCrawler, RequestQueue2 } from 'crawlee';\n\n// highlight-next-line\nconst queue = await RequestQueue2.open('my-locking-queue');\n\nconst crawler = new CheerioCrawler({\n    // highlight-next-line\n    experiments: {\n        // highlight-next-line\n        requestLocking: true,\n        // highlight-next-line\n    },\n    // highlight-next-line\n    requestQueue: queue,\n    async requestHandler({ $, request }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n    },\n});\n\nawait crawler.run();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"This section is only useful if you're a tinkerer and want to see what's going on under the hood."})}),"\n",(0,r.jsxs)(t.p,{children:["In order to facilitate the new request locking API, as well as keep both the current request queue logic and the new, locking based request queue\nlogic, we have implemented a common starting point called ",(0,r.jsx)(t.code,{children:"RequestProvider"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["This class implements almost all functions by default, but expects you, the developer, to implement the following methods:\n",(0,r.jsx)(t.code,{children:"fetchNextRequest"})," and ",(0,r.jsx)(t.code,{children:"ensureHeadIsNotEmpty"}),". These methods are responsible for loading and returning requests to process,\nand tell crawlers if there are more requests to process."]}),"\n",(0,r.jsx)(t.p,{children:"You can use this base class to implement your own request providers if you need to fetch requests from a different source."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"We recommend you use TypeScript when implementing your own request provider, as it comes with suggestions for the abstract methods, as well as\ngiving you the exact types you need to return."})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},14959:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var r=n(39960),s=n(74477),i=n(52263),o=n(85893),l=n(50643).version.split("."),a=[l[0],l[1]].join(".");const c=function(e){var t=e.to,n=e.children,l=(0,s.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===a?(0,o.jsx)(r.default,{to:"/api/"+t,children:n}):(0,o.jsx)(r.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t,children:n})}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);