"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34305],{84411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=r(85893),a=r(11151),n=r(14959);const i={id:"first-crawler",title:"First crawler",description:"Your first steps into the world of scraping with Crawlee"},o=void 0,l={id:"introduction/first-crawler",title:"First crawler",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.3/introduction/02-first-crawler.mdx",sourceDirName:"introduction",slug:"/introduction/first-crawler",permalink:"/docs/3.3/introduction/first-crawler",draft:!1,unlisted:!1,tags:[],version:"3.3",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",sidebarPosition:2,frontMatter:{id:"first-crawler",title:"First crawler",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Setting up",permalink:"/docs/3.3/introduction/setting-up"},next:{title:"Adding more URLs",permalink:"/docs/3.3/introduction/adding-urls"}},c={},d=[{value:"How Crawlee works",id:"how-crawlee-works",level:2},{value:"The Where - <code>Request</code> and <code>RequestQueue</code>",id:"the-where---request-and-requestqueue",level:3},{value:"The What - <code>requestHandler</code>",id:"the-what---requesthandler",level:3},{value:"Building a crawler",id:"building-a-crawler",level:2},{value:"Adding requests to the crawling queue",id:"adding-requests-to-the-crawling-queue",level:3},{value:"Building a CheerioCrawler",id:"building-a-cheeriocrawler",level:3},{value:"Add requests faster",id:"add-requests-faster",level:3},{value:"Next lesson",id:"next-lesson",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In this lesson, you will build your first crawler. But before you do, let's briefly introduce the Crawlee classes involved in the process."}),"\n",(0,s.jsx)(t.h2,{id:"how-crawlee-works",children:"How Crawlee works"}),"\n",(0,s.jsxs)(t.p,{children:["There are 3 main crawler classes available for use in Crawlee. ",(0,s.jsx)(n.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,s.jsx)(t.code,{children:"CheerioCrawler"})}),", ",(0,s.jsx)(n.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,s.jsx)(t.code,{children:"PuppeteerCrawler"})})," and ",(0,s.jsx)(n.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,s.jsx)(t.code,{children:"PlaywrightCrawler"})}),". We'll talk about their differences later. Now, let's talk about what they have in common."]}),"\n",(0,s.jsxs)(t.p,{children:["The general idea of each crawler is to go to a web page, open it, do some stuff there, save some results, continue to the next page, and repeat this process until the crawler's done its job. So the crawler always needs to find answers to two questions: ",(0,s.jsx)(t.strong,{children:"Where should I go?"})," and ",(0,s.jsx)(t.strong,{children:"What should I do there?"})," Answering those two questions is the only required setup. The crawlers have reasonable defaults for everything else."]}),"\n",(0,s.jsxs)(t.h3,{id:"the-where---request-and-requestqueue",children:["The Where - ",(0,s.jsx)(t.code,{children:"Request"})," and ",(0,s.jsx)(t.code,{children:"RequestQueue"})]}),"\n",(0,s.jsxs)(t.p,{children:["All crawlers use instances of the ",(0,s.jsx)(n.Z,{to:"core/class/Request",children:(0,s.jsx)(t.code,{children:"Request"})})," class to determine where they need to go. Each request may hold a lot of information, but at the very least, it must hold a URL - a web page to open. But having only one URL would not make sense for crawling. Sometimes you have a pre-existing list of your own URLs that you wish to visit, perhaps a thousand. Other times you need to build this list dynamically as you crawl, adding more and more URLs to the list as you progress. Most of the time, you will use both options."]}),"\n",(0,s.jsxs)(t.p,{children:["The requests are stored in a ",(0,s.jsx)(n.Z,{to:"core/class/RequestQueue",children:(0,s.jsx)(t.code,{children:"RequestQueue"})}),", a dynamic queue of ",(0,s.jsx)(t.code,{children:"Request"})," instances. You can seed it with start URLs and also add more requests while the crawler is running. This allows the crawler to open one page, extract interesting URLs, such as links to other pages on the same domain, add them to the queue (called ",(0,s.jsx)(t.em,{children:"enqueuing"}),") and repeat this process to build a queue of virtually unlimited number of URLs."]}),"\n",(0,s.jsxs)(t.h3,{id:"the-what---requesthandler",children:["The What - ",(0,s.jsx)(t.code,{children:"requestHandler"})]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"requestHandler"})," you tell the crawler what to do at each and every page it visits. You can use it to handle extraction of data from the page, processing the data, saving it, calling APIs, doing calculations and so on."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"requestHandler"})," is a user-defined function, invoked automatically by the crawler for each ",(0,s.jsx)(t.code,{children:"Request"})," from the ",(0,s.jsx)(t.code,{children:"RequestQueue"}),". It always receives a single argument - a ",(0,s.jsx)(n.Z,{to:"core/interface/CrawlingContext",children:(0,s.jsx)(t.code,{children:"CrawlingContext"})}),". Its properties change depending on the crawler class used, but it always includes the ",(0,s.jsx)(t.code,{children:"request"})," property, which represents the currently crawled URL and related metadata."]}),"\n",(0,s.jsx)(t.h2,{id:"building-a-crawler",children:"Building a crawler"}),"\n",(0,s.jsxs)(t.p,{children:["Let's put the theory into practice and start with something easy. Visit a page and get its HTML title. In this tutorial, you'll scrape the Crawlee website ",(0,s.jsx)(t.a,{href:"https://crawlee.dev",children:"https://crawlee.dev"}),", but the same code will work for any website."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["We are using a JavaScript feature called ",(0,s.jsx)(t.a,{href:"https://blog.saeloun.com/2021/11/25/ecmascript-top-level-await.html",target:"_blank",rel:"noopener",children:"Top level await"})," in our examples. To be able to use that, you might need some extra setup. Namely, it requires the use of ",(0,s.jsx)(t.a,{href:"https://nodejs.org/api/esm.html",target:"_blank",rel:"noopener",children:"ECMAScript Modules"})," - this means you either need to add ",(0,s.jsx)(t.code,{children:'"type": "module"'})," to your ",(0,s.jsx)(t.code,{children:"package.json"})," file, or use ",(0,s.jsx)(t.code,{children:"*.mjs"})," extension for your files. Additionally, if you are in a TypeScript project, you need to set the ",(0,s.jsx)(t.code,{children:"module"})," and ",(0,s.jsx)(t.code,{children:"target"})," compiler options to ",(0,s.jsx)(t.code,{children:"ES2022"})," or above."]})}),"\n",(0,s.jsx)(t.h3,{id:"adding-requests-to-the-crawling-queue",children:"Adding requests to the crawling queue"}),"\n",(0,s.jsx)(t.p,{children:"Earlier you learned that the crawler uses a queue of requests as its source of URLs to crawl. Let's create it and add the first request."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/main.js"',children:"import { RequestQueue } from 'crawlee';\n\n// First you create the request queue instance.\nconst requestQueue = await RequestQueue.open();\n// And then you add one or more requests to it.\nawait requestQueue.addRequest({ url: 'https://crawlee.dev' });\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(n.Z,{to:"core/class/RequestQueue#addRequest",children:(0,s.jsx)(t.code,{children:"requestQueue.addRequest()"})})," function automatically converts the object with URL string to a ",(0,s.jsx)(n.Z,{to:"core/class/Request",children:(0,s.jsx)(t.code,{children:"Request"})})," instance. So now you have a ",(0,s.jsx)(t.code,{children:"requestQueue"})," that holds one request which points to ",(0,s.jsx)(t.code,{children:"https://crawlee.dev"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The code above is for illustration of the request queue concept. Soon you'll learn about the ",(0,s.jsx)(t.code,{children:"crawler.addRequests()"})," method which allows you to skip this initialization code, and it also supports adding a large number of requests without blocking."]})}),"\n",(0,s.jsx)(t.h3,{id:"building-a-cheeriocrawler",children:"Building a CheerioCrawler"}),"\n",(0,s.jsxs)(t.p,{children:["Crawlee comes with three main crawler classes: ",(0,s.jsx)(n.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,s.jsx)(t.code,{children:"CheerioCrawler"})}),", ",(0,s.jsx)(n.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,s.jsx)(t.code,{children:"PuppeteerCrawler"})})," and ",(0,s.jsx)(n.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,s.jsx)(t.code,{children:"PlaywrightCrawler"})}),". You can read their short descriptions in the ",(0,s.jsx)(t.a,{href:"../quick-start",children:"Quick start"})," lesson."]}),"\n",(0,s.jsxs)(t.p,{children:["Unless you have a good reason to start with a different one, you should try building a ",(0,s.jsx)(t.code,{children:"CheerioCrawler"})," first. It is an HTTP crawler with HTTP2 support, anti-blocking features and integrated HTML parser - ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener",children:"Cheerio"}),". It's fast, simple, cheap to run and does not require complicated dependencies. The only downside is that it won't work out of the box for websites which require JavaScript rendering. But you might not need JavaScript rendering at all, because many modern websites use server-side rendering."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's continue with the earlier ",(0,s.jsx)(t.code,{children:"RequestQueue"})," example."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/main.js"',children:"// Add import of CheerioCrawler\nimport { RequestQueue, CheerioCrawler } from 'crawlee';\n\nconst requestQueue = await RequestQueue.open();\nawait requestQueue.addRequest({ url: 'https://crawlee.dev' });\n\n// Create the crawler and add the queue with our URL\n// and a request handler to process the page.\nconst crawler = new CheerioCrawler({\n    requestQueue,\n    // The `$` argument is the Cheerio object\n    // which contains parsed HTML of the website.\n    async requestHandler({ $, request }) {\n        // Extract <title> text with Cheerio.\n        // See Cheerio documentation for API docs.\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n    }\n})\n\n// Start the crawler and wait for it to finish\nawait crawler.run();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When you run the example, you will see the title of ",(0,s.jsx)(t.a,{href:"https://crawlee.dev",children:"https://crawlee.dev"})," printed to the log. What really happens is that CheerioCrawler first makes an HTTP request to ",(0,s.jsx)(t.code,{children:"https://crawlee.dev"}),", then parses the received HTML with Cheerio and makes it available as the ",(0,s.jsx)(t.code,{children:"$"})," argument of the ",(0,s.jsx)(t.code,{children:"requestHandler"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-log",children:'The title of "https://crawlee.dev" is: Crawlee \xb7 The scalable web crawling, scraping and automation library for JavaScript/Node.js | Crawlee.\n'})}),"\n",(0,s.jsx)(t.h3,{id:"add-requests-faster",children:"Add requests faster"}),"\n",(0,s.jsxs)(t.p,{children:["Earlier we mentioned that you'll learn how to use the ",(0,s.jsx)(t.code,{children:"crawler.addRequests()"})," method to skip the request queue initialization. It's simple. Every crawler has an implicit ",(0,s.jsx)(t.code,{children:"RequestQueue"})," instance, and you can add requests to it with the ",(0,s.jsx)(t.code,{children:"crawler.addRequests()"})," method. In fact, you can go even further and just use the first parameter of ",(0,s.jsx)(t.code,{children:"crawler.run()"}),"!"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/main.js"',children:"// You don't need to import RequestQueue anymore\nimport { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ $, request }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n    }\n})\n\n// Start the crawler with the provided URLs\nawait crawler.run(['https://crawlee.dev']);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When you run this code, you'll see exactly the same output as with the earlier, longer example. The ",(0,s.jsx)(t.code,{children:"RequestQueue"})," is still there, it's just managed by the crawler automatically."]}),"\n",(0,s.jsx)(t.h2,{id:"next-lesson",children:"Next lesson"}),"\n",(0,s.jsxs)(t.p,{children:["In the next lesson you'll learn about crawling links. That means finding new URLs on the pages you crawl and adding them to the ",(0,s.jsx)(t.code,{children:"RequestQueue"})," for the crawler to visit."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},14959:(e,t,r)=>{r.d(t,{Z:()=>c});r(67294);var s=r(39960),a=r(74477),n=r(52263),i=r(85893),o=r(50643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var t=e.to,r=e.children,o=(0,a.E)();return(0,n.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,i.jsx)(s.default,{to:"/api/"+t,children:r}):(0,i.jsx)(s.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:r})}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var s=r(67294);const a={},n=s.createContext(a);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);