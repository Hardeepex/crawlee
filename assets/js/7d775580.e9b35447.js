"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24348],{80635:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>x,default:()=>v,frontMatter:()=>m,metadata:()=>j,toc:()=>b});var a=t(85893),n=t(11151),l=t(14959),s=t(92775),i=t(65488),o=t(85162),d=t(93e3),c=t(59637);const h="import { CheerioCrawler, Dataset } from 'crawlee';\n\n// CheerioCrawler crawls the web using HTTP requests\n// and parses HTML using the Cheerio library.\nconst crawler = new CheerioCrawler({\n    // Use the requestHandler to process each of the crawled pages.\n    async requestHandler({ request, $, enqueueLinks, log }) {\n        const title = $('title').text();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n\n        // Save results as JSON to ./storage/datasets/default\n        await Dataset.pushData({ title, url: request.loadedUrl });\n\n        // Extract links from the current page\n        // and add them to the crawling queue.\n        await enqueueLinks();\n    },\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n",u="import { PlaywrightCrawler, Dataset } from 'crawlee';\n\n// PlaywrightCrawler crawls the web using a headless\n// browser controlled by the Playwright library.\nconst crawler = new PlaywrightCrawler({\n    // Use the requestHandler to process each of the crawled pages.\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n\n        // Save results as JSON to ./storage/datasets/default\n        await Dataset.pushData({ title, url: request.loadedUrl });\n\n        // Extract links from the current page\n        // and add them to the crawling queue.\n        await enqueueLinks();\n    },\n    // Uncomment this option to see the browser window.\n    // headless: false,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n",p="import { PlaywrightCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n        await Dataset.pushData({ title, url: request.loadedUrl });\n        await enqueueLinks();\n    },\n    // When you turn off headless mode, the crawler\n    // will run with a visible browser window.\n    headless: false,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n",w="import { PuppeteerCrawler, Dataset } from 'crawlee';\n\n// PuppeteerCrawler crawls the web using a headless\n// browser controlled by the Puppeteer library.\nconst crawler = new PuppeteerCrawler({\n    // Use the requestHandler to process each of the crawled pages.\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n\n        // Save results as JSON to ./storage/datasets/default\n        await Dataset.pushData({ title, url: request.loadedUrl });\n\n        // Extract links from the current page\n        // and add them to the crawling queue.\n        await enqueueLinks();\n    },\n    // Uncomment this option to see the browser window.\n    // headless: false,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n",g="import { PuppeteerCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n        await Dataset.pushData({ title, url: request.loadedUrl });\n        await enqueueLinks();\n    },\n    // When you turn off headless mode, the crawler\n    // will run with a visible browser window.\n    headless: false,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n",f="INFO  CheerioCrawler: Starting the crawl\nINFO  CheerioCrawler: Title of https://crawlee.dev/ is 'Crawlee \xb7 Build reliable crawlers. Fast. | Crawlee'\nINFO  CheerioCrawler: Title of https://crawlee.dev/docs/examples is 'Examples | Crawlee'\nINFO  CheerioCrawler: Title of https://crawlee.dev/docs/quick-start is 'Quick Start | Crawlee'\nINFO  CheerioCrawler: Title of https://crawlee.dev/docs/guides is 'Guides | Crawlee'\n",m={id:"quick-start",title:"Quick Start",description:"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn more, read the Introduction."},x=void 0,j={id:"quick-start/quick-start",title:"Quick Start",description:"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn more, read the Introduction.",source:"@site/versioned_docs/version-3.2/quick-start/index.mdx",sourceDirName:"quick-start",slug:"/quick-start/",permalink:"/docs/3.2/quick-start/",draft:!1,unlisted:!1,tags:[],version:"3.2",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"quick-start",title:"Quick Start",description:"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn more, read the Introduction."},sidebar:"docs",next:{title:"Introduction",permalink:"/docs/3.2/introduction/"}},y={},b=[{value:"Choose your crawler",id:"choose-your-crawler",level:2},{value:"CheerioCrawler",id:"cheeriocrawler",level:3},{value:"PuppeteerCrawler",id:"puppeteercrawler",level:3},{value:"PlaywrightCrawler",id:"playwrightcrawler",level:3},{value:"Installation with Crawlee CLI",id:"installation-with-crawlee-cli",level:2},{value:"Manual installation",id:"manual-installation",level:2},{value:"Crawling",id:"crawling",level:2},{value:"Running headful browsers",id:"running-headful-browsers",level:3},{value:"Results",id:"results",level:2},{value:"Examples and further reading",id:"examples-and-further-reading",level:2}];function C(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["With this short tutorial you can start scraping with Crawlee in a minute or two. To learn in-depth how Crawlee works, read the ",(0,a.jsx)(r.a,{href:"./introduction",children:"Introduction"}),", which is a comprehensive step-by-step guide for creating your first scraper."]}),"\n",(0,a.jsx)(r.h2,{id:"choose-your-crawler",children:"Choose your crawler"}),"\n",(0,a.jsxs)(r.p,{children:["Crawlee comes with three main crawler classes: ",(0,a.jsx)(l.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,a.jsx)(r.code,{children:"CheerioCrawler"})}),", ",(0,a.jsx)(l.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,a.jsx)(r.code,{children:"PuppeteerCrawler"})})," and ",(0,a.jsx)(l.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,a.jsx)(r.code,{children:"PlaywrightCrawler"})}),". All classes share the same interface for maximum flexibility when switching between them."]}),"\n",(0,a.jsx)(r.h3,{id:"cheeriocrawler",children:"CheerioCrawler"}),"\n",(0,a.jsxs)(r.p,{children:["This is a plain HTTP crawler. It parses HTML using the ",(0,a.jsx)(r.a,{href:"https://github.com/cheeriojs/cheerio",target:"_blank",rel:"noopener",children:"Cheerio"})," library and crawls the web using the specialized ",(0,a.jsx)(r.a,{href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener",children:"got-scraping"})," HTTP client which masks as a browser. It's very fast and efficient, but can't handle JavaScript rendering."]}),"\n",(0,a.jsx)(r.h3,{id:"puppeteercrawler",children:"PuppeteerCrawler"}),"\n",(0,a.jsxs)(r.p,{children:["This crawler uses a headless browser to crawl, controlled by the ",(0,a.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener",children:"Puppeteer"})," library. It can control Chromium or Chrome. Puppeteer is the de-facto standard in headless browser automation."]}),"\n",(0,a.jsx)(r.h3,{id:"playwrightcrawler",children:"PlaywrightCrawler"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener",children:"Playwright"})," is a more powerful and full-featured successor to Puppeteer. It can control Chromium, Chrome, Firefox, Webkit and many other browsers. If you're not familiar with Puppeteer already, and you need a headless browser, go with Playwright."]}),"\n",(0,a.jsx)(r.admonition,{title:"before you start",type:"caution",children:(0,a.jsxs)(r.p,{children:["Crawlee requires ",(0,a.jsx)(r.a,{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener",children:"Node.js 16 or later"}),"."]})}),"\n",(0,a.jsx)(r.h2,{id:"installation-with-crawlee-cli",children:"Installation with Crawlee CLI"}),"\n",(0,a.jsxs)(r.p,{children:["The fastest way to try Crawlee out is to use the ",(0,a.jsx)(r.strong,{children:"Crawlee CLI"})," and choose the ",(0,a.jsx)(r.strong,{children:"Getting started example"}),".\nThe CLI will install all the necessary dependencies and add boilerplate code for you to play with."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npx crawlee create my-crawler\n"})}),"\n",(0,a.jsx)(r.p,{children:"After the installation is complete you can start the crawler like this:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"cd my-crawler && npm start\n"})}),"\n",(0,a.jsx)(r.h2,{id:"manual-installation",children:"Manual installation"}),"\n",(0,a.jsx)(r.p,{children:"You can add Crawlee to any Node.js project by running:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"quick_start",children:[(0,a.jsx)(o.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,children:(0,a.jsx)(d.default,{language:"bash",children:"npm install crawlee"})}),(0,a.jsxs)(o.Z,{value:"playwright",label:"PlaywrightCrawler",children:[(0,a.jsx)(r.admonition,{type:"caution",children:(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"playwright"})," is not bundled with Crawlee to reduce install size and allow greater flexibility. You need to explicitly install it with NPM. \ud83d\udc47"]})}),(0,a.jsx)(d.default,{language:"bash",children:"npm install crawlee playwright"})]}),(0,a.jsxs)(o.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:[(0,a.jsx)(r.admonition,{type:"caution",children:(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"puppeteer"})," is not bundled with Crawlee to reduce install size and allow greater flexibility. You need to explicitly install it with NPM. \ud83d\udc47"]})}),(0,a.jsx)(d.default,{language:"bash",children:"npm install crawlee puppeteer"})]})]}),"\n",(0,a.jsx)(r.h2,{id:"crawling",children:"Crawling"}),"\n",(0,a.jsx)(r.p,{children:"Run the following example to perform a recursive crawl of the Crawlee website using the selected crawler."}),"\n",(0,a.jsx)(s.Z,{type:"caution",title:"Don't forget about module imports",children:(0,a.jsxs)(r.p,{children:["To run the example, add a ",(0,a.jsx)("code",{children:'"type": "module"'})," clause into your ",(0,a.jsx)("code",{children:"package.json"})," or\ncopy it into a file with an ",(0,a.jsx)("code",{children:".mjs"})," suffix. This enables ",(0,a.jsx)("code",{children:"import"})," statements in Node.js.\nSee ",(0,a.jsx)("a",{href:"https://nodejs.org/dist/latest-v16.x/docs/api/esm.html#enabling",target:"_blank",rel:"noreferrer",children:"Node.js docs"})," for\nmore information."]})}),"\n",(0,a.jsxs)(i.Z,{groupId:"quick_start",children:[(0,a.jsx)(o.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,children:(0,a.jsx)(d.default,{language:"js",children:h})}),(0,a.jsx)(o.Z,{value:"playwright",label:"PlaywrightCrawler",children:(0,a.jsx)(d.default,{language:"js",children:u})}),(0,a.jsx)(o.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:(0,a.jsx)(d.default,{language:"js",children:w})})]}),"\n",(0,a.jsx)(r.p,{children:"When you run the example, you will see Crawlee automating the data extraction process in your terminal."}),"\n",(0,a.jsx)(d.default,{language:"log",children:f}),"\n",(0,a.jsx)(r.h3,{id:"running-headful-browsers",children:"Running headful browsers"}),"\n",(0,a.jsxs)(r.p,{children:["Browsers controlled by Puppeteer and Playwright run headless (without a visible window). You can switch to headful by adding the ",(0,a.jsx)(r.code,{children:"headless: false"})," option to the crawlers' constructor. This is useful in the development phase when you want to see what's going on in the browser."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"quick_start",children:[(0,a.jsx)(o.Z,{value:"playwright",label:"PlaywrightCrawler",children:(0,a.jsx)(d.default,{language:"js",children:p})}),(0,a.jsx)(o.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:(0,a.jsx)(d.default,{language:"js",children:g})})]}),"\n",(0,a.jsx)(r.p,{children:"When you run the example code, you'll see an automated browser blaze through the Crawlee website."}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsx)(r.p,{children:"For the sake of this show off, we've slowed down the crawler, but rest assured, it's blazing fast in real world usage."})}),"\n",(0,a.jsx)(c.Z,{alt:"An image showing off Crawlee scraping the Crawlee website using Puppeteer/Playwright and Chromium",sources:{light:"/img/chrome-scrape-light.gif",dark:"/img/chrome-scrape-dark.gif"}}),"\n",(0,a.jsx)(r.h2,{id:"results",children:"Results"}),"\n",(0,a.jsxs)(r.p,{children:["Crawlee stores data to the ",(0,a.jsx)(r.code,{children:"./storage"})," directory in your current working directory. The results of your crawl will be available under ",(0,a.jsx)(r.code,{children:"./storage/datasets/default/*.json"})," as JSON files."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",metastring:'title="./storage/datasets/default/000000001.json"',children:'{\n    "url": "https://crawlee.dev/",\n    "title": "Crawlee \xb7 The scalable web crawling, scraping and automation library for JavaScript/Node.js | Crawlee"\n}\n'})}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["You can override the storage directory by setting the ",(0,a.jsx)(r.code,{children:"CRAWLEE_STORAGE_DIR"})," environment variable."]})}),"\n",(0,a.jsx)(r.h2,{id:"examples-and-further-reading",children:"Examples and further reading"}),"\n",(0,a.jsxs)(r.p,{children:["You can find more examples showcasing various features of Crawlee in the ",(0,a.jsx)(r.a,{href:"./examples",children:"Examples"})," section of the documentation. To better understand Crawlee and its components you should read the ",(0,a.jsx)(r.a,{href:"./introduction",children:"Introduction"})," step-by-step guide."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Related links"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./guides/configuration",children:"Configuration"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./guides/request-storage",children:"Request storage"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./guides/result-storage",children:"Result storage"})}),"\n"]})]})}function v(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(C,{...e})}):C(e)}},14959:(e,r,t)=>{t.d(r,{Z:()=>d});t(67294);var a=t(39960),n=t(74477),l=t(52263),s=t(85893),i=t(50643).version.split("."),o=[i[0],i[1]].join(".");const d=function(e){var r=e.to,t=e.children,i=(0,n.E)();return(0,l.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===o?(0,s.jsx)(a.default,{to:"/api/"+r,children:t}):(0,s.jsx)(a.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+r,children:t})}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);