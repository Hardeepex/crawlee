"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93329],{2296:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var i=a(85893),n=a(11151),r=a(93e3),s=a(14959);const o="import { PlaywrightCrawler, KeyValueStore } from 'crawlee';\n\n// Create a key value store for all images we find\nconst imageStore = await KeyValueStore.open('images');\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, page, sendRequest }) {\n        // The request should have the navigation skipped\n        if (request.skipNavigation) {\n            // Request the image and get its buffer back\n            const imageResponse = await sendRequest({ responseType: 'buffer' });\n\n            // Save the image in the key-value store\n            await imageStore.setValue(`${request.userData.key}.png`, imageResponse.body);\n\n            // Prevent executing the rest of the code as we do not need it\n            return;\n        }\n\n        // Get all the image sources in the current page\n        const images = await page.$$eval('img', (imgs) => imgs.map((img) => img.src));\n\n        // Add all the urls as requests for the crawler, giving each image a key\n        await crawler.addRequests(images.map((url, i) => ({ url, skipNavigation: true, userData: { key: i } })));\n    },\n});\n\nawait crawler.addRequests(['https://crawlee.dev']);\n\n// Run the crawler\nawait crawler.run();\n",c={id:"skip-navigation",title:"Skipping navigations for certain requests"},l=void 0,p={id:"examples/skip-navigation",title:"Skipping navigations for certain requests",description:"While crawling a website, you may encounter certain resources you'd like to save, but don't need the full power of a crawler to do so (like images delivered through a CDN).",source:"@site/versioned_docs/version-3.1/examples/skip-navigation.mdx",sourceDirName:"examples",slug:"/examples/skip-navigation",permalink:"/docs/3.1/examples/skip-navigation",draft:!1,unlisted:!1,tags:[],version:"3.1",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"skip-navigation",title:"Skipping navigations for certain requests"},sidebar:"docs",previous:{title:"Puppeteer recursive crawl",permalink:"/docs/3.1/examples/puppeteer-recursive-crawl"},next:{title:"Upgrading",permalink:"/docs/3.1/upgrading"}},d={},u=[];function g(e){const t={admonition:"admonition",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"While crawling a website, you may encounter certain resources you'd like to save, but don't need the full power of a crawler to do so (like images delivered through a CDN)."}),"\n",(0,i.jsxs)(t.p,{children:["By combining the ",(0,i.jsx)(s.Z,{to:"core/class/Request#skipNavigation",children:(0,i.jsx)(t.code,{children:"Request#skipNavigation"})})," option with ",(0,i.jsx)(s.Z,{to:"basic-crawler/interface/BasicCrawlingContext#sendRequest",children:(0,i.jsx)(t.code,{children:"sendRequest"})}),", we can fetch the image from the CDN, and save it to our key-value store without needing to use the full crawler."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["For this example, we are using the ",(0,i.jsx)(s.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,i.jsx)(t.code,{children:"PlaywrightCrawler"})})," to showcase this, but this is available on all the crawlers we provide."]})}),"\n",(0,i.jsx)(r.default,{className:"language-js",children:o})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},14959:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var i=a(39960),n=a(74477),r=a(52263),s=a(85893),o=a(50643).version.split("."),c=[o[0],o[1]].join(".");const l=function(e){var t=e.to,a=e.children,o=(0,n.E)();return(0,r.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===c?(0,s.jsx)(i.default,{to:"/api/"+t,children:a}):(0,s.jsx)(i.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:a})}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var i=a(67294);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);