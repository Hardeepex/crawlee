"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70760],{91541:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var a=r(85893),n=r(11151),s=r(93e3),i=r(14959);const o="import { Dataset, CheerioCrawler, log, LogLevel } from 'crawlee';\n\n// Crawlers come with various utilities, e.g. for logging.\n// Here we use debug level of logging to improve the debugging experience.\n// This functionality is optional!\nlog.setLevel(LogLevel.DEBUG);\n\n// Create an instance of the CheerioCrawler class - a crawler\n// that automatically loads the URLs and parses their HTML using the cheerio library.\nconst crawler = new CheerioCrawler({\n    // The crawler downloads and processes the web pages in parallel, with a concurrency\n    // automatically managed based on the available system memory and CPU (see AutoscaledPool class).\n    // Here we define some hard limits for the concurrency.\n    minConcurrency: 10,\n    maxConcurrency: 50,\n\n    // On error, retry each page at most once.\n    maxRequestRetries: 1,\n\n    // Increase the timeout for processing of each page.\n    requestHandlerTimeoutSecs: 30,\n\n    // Limit to 10 requests per one crawl\n    maxRequestsPerCrawl: 10,\n\n    // This function will be called for each URL to crawl.\n    // It accepts a single parameter, which is an object with options as:\n    // https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestHandler\n    // We use for demonstration only 2 of them:\n    // - request: an instance of the Request class with information such as the URL that is being crawled and HTTP method\n    // - $: the cheerio object containing parsed HTML\n    async requestHandler({ request, $ }) {\n        log.debug(`Processing ${request.url}...`);\n\n        // Extract data from the page using cheerio.\n        const title = $('title').text();\n        const h1texts: { text: string }[] = [];\n        $('h1').each((index, el) => {\n            h1texts.push({\n                text: $(el).text(),\n            });\n        });\n\n        // Store the results to the dataset. In local configuration,\n        // the data will be stored as JSON files in ./storage/datasets/default\n        await Dataset.pushData({\n            url: request.url,\n            title,\n            h1texts,\n        });\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries + 1 times.\n    failedRequestHandler({ request }) {\n        log.debug(`Request ${request.url} failed twice.`);\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run([\n    'https://crawlee.dev',\n]);\n\nlog.debug('Crawler finished.');\n",l={id:"cheerio-crawler",title:"Cheerio crawler"},c=void 0,d={id:"examples/cheerio-crawler",title:"Cheerio crawler",description:"This example demonstrates how to use CheerioCrawler to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the Cheerio library and extract some data from it: the page title and all h1 tags.",source:"@site/versioned_docs/version-3.3/examples/cheerio_crawler.mdx",sourceDirName:"examples",slug:"/examples/cheerio-crawler",permalink:"/docs/3.3/examples/cheerio-crawler",draft:!1,unlisted:!1,tags:[],version:"3.3",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"cheerio-crawler",title:"Cheerio crawler"},sidebar:"docs",previous:{title:"Basic crawler",permalink:"/docs/3.3/examples/basic-crawler"},next:{title:"Crawl all links on a website",permalink:"/docs/3.3/examples/crawl-all-links"}},p={},h=[];function u(e){const t={a:"a",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This example demonstrates how to use ",(0,a.jsx)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,a.jsx)(t.code,{children:"CheerioCrawler"})})," to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener",children:"Cheerio library"})," and extract some data from it: the page title and all ",(0,a.jsx)(t.code,{children:"h1"})," tags."]}),"\n",(0,a.jsx)(s.default,{className:"language-js",children:o})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},14959:(e,t,r)=>{r.d(t,{Z:()=>c});r(67294);var a=r(39960),n=r(74477),s=r(52263),i=r(85893),o=r(50643).version.split("."),l=[o[0],o[1]].join(".");const c=function(e){var t=e.to,r=e.children,o=(0,n.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===l?(0,i.jsx)(a.default,{to:"/api/"+t,children:r}):(0,i.jsx)(a.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:r})}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var a=r(67294);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);