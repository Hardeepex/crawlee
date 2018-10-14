"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9252],{42012:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=l(85893),c=l(11151),n=l(15316),r=l(14959);const s={code:"import { Dataset, CheerioCrawler, log, LogLevel } from 'crawlee';\n\n// Crawlers come with various utilities, e.g. for logging.\n// Here we use debug level of logging to improve the debugging experience.\n// This functionality is optional!\nlog.setLevel(LogLevel.DEBUG);\n\n// Create an instance of the CheerioCrawler class - a crawler\n// that automatically loads the URLs and parses their HTML using the cheerio library.\nconst crawler = new CheerioCrawler({\n    // The crawler downloads and processes the web pages in parallel, with a concurrency\n    // automatically managed based on the available system memory and CPU (see AutoscaledPool class).\n    // Here we define some hard limits for the concurrency.\n    minConcurrency: 10,\n    maxConcurrency: 50,\n\n    // On error, retry each page at most once.\n    maxRequestRetries: 1,\n\n    // Increase the timeout for processing of each page.\n    requestHandlerTimeoutSecs: 30,\n\n    // Limit to 10 requests per one crawl\n    maxRequestsPerCrawl: 10,\n\n    // This function will be called for each URL to crawl.\n    // It accepts a single parameter, which is an object with options as:\n    // https://crawlee.dev/api/cheerio-crawler/interface/CheerioCrawlerOptions#requestHandler\n    // We use for demonstration only 2 of them:\n    // - request: an instance of the Request class with information such as the URL that is being crawled and HTTP method\n    // - $: the cheerio object containing parsed HTML\n    async requestHandler({ request, $ }) {\n        log.debug(`Processing ${request.url}...`);\n\n        // Extract data from the page using cheerio.\n        const title = $('title').text();\n        const h1texts: { text: string }[] = [];\n        $('h1').each((index, el) => {\n            h1texts.push({\n                text: $(el).text(),\n            });\n        });\n\n        // Store the results to the dataset. In local configuration,\n        // the data will be stored as JSON files in ./storage/datasets/default\n        await Dataset.pushData({\n            url: request.url,\n            title,\n            h1texts,\n        });\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries + 1 times.\n    failedRequestHandler({ request }) {\n        log.debug(`Request ${request.url} failed twice.`);\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run([\n    'https://crawlee.dev',\n]);\n\nlog.debug('Crawler finished.');\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IERhdGFzZXQsIENoZWVyaW9DcmF3bGVyLCBsb2csIExvZ0xldmVsIH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuLy8gQ3Jhd2xlcnMgY29tZSB3aXRoIHZhcmlvdXMgdXRpbGl0aWVzLCBlLmcuIGZvciBsb2dnaW5nLlxcbi8vIEhlcmUgd2UgdXNlIGRlYnVnIGxldmVsIG9mIGxvZ2dpbmcgdG8gaW1wcm92ZSB0aGUgZGVidWdnaW5nIGV4cGVyaWVuY2UuXFxuLy8gVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG9wdGlvbmFsIVxcbmxvZy5zZXRMZXZlbChMb2dMZXZlbC5ERUJVRyk7XFxuXFxuLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBDaGVlcmlvQ3Jhd2xlciBjbGFzcyAtIGEgY3Jhd2xlclxcbi8vIHRoYXQgYXV0b21hdGljYWxseSBsb2FkcyB0aGUgVVJMcyBhbmQgcGFyc2VzIHRoZWlyIEhUTUwgdXNpbmcgdGhlIGNoZWVyaW8gbGlicmFyeS5cXG5jb25zdCBjcmF3bGVyID0gbmV3IENoZWVyaW9DcmF3bGVyKHtcXG4gICAgLy8gVGhlIGNyYXdsZXIgZG93bmxvYWRzIGFuZCBwcm9jZXNzZXMgdGhlIHdlYiBwYWdlcyBpbiBwYXJhbGxlbCwgd2l0aCBhIGNvbmN1cnJlbmN5XFxuICAgIC8vIGF1dG9tYXRpY2FsbHkgbWFuYWdlZCBiYXNlZCBvbiB0aGUgYXZhaWxhYmxlIHN5c3RlbSBtZW1vcnkgYW5kIENQVSAoc2VlIEF1dG9zY2FsZWRQb29sIGNsYXNzKS5cXG4gICAgLy8gSGVyZSB3ZSBkZWZpbmUgc29tZSBoYXJkIGxpbWl0cyBmb3IgdGhlIGNvbmN1cnJlbmN5LlxcbiAgICBtaW5Db25jdXJyZW5jeTogMTAsXFxuICAgIG1heENvbmN1cnJlbmN5OiA1MCxcXG5cXG4gICAgLy8gT24gZXJyb3IsIHJldHJ5IGVhY2ggcGFnZSBhdCBtb3N0IG9uY2UuXFxuICAgIG1heFJlcXVlc3RSZXRyaWVzOiAxLFxcblxcbiAgICAvLyBJbmNyZWFzZSB0aGUgdGltZW91dCBmb3IgcHJvY2Vzc2luZyBvZiBlYWNoIHBhZ2UuXFxuICAgIHJlcXVlc3RIYW5kbGVyVGltZW91dFNlY3M6IDMwLFxcblxcbiAgICAvLyBMaW1pdCB0byAxMCByZXF1ZXN0cyBwZXIgb25lIGNyYXdsXFxuICAgIG1heFJlcXVlc3RzUGVyQ3Jhd2w6IDEwLFxcblxcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIFVSTCB0byBjcmF3bC5cXG4gICAgLy8gSXQgYWNjZXB0cyBhIHNpbmdsZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMgYXM6XFxuICAgIC8vIGh0dHBzOi8vY3Jhd2xlZS5kZXYvYXBpL2NoZWVyaW8tY3Jhd2xlci9pbnRlcmZhY2UvQ2hlZXJpb0NyYXdsZXJPcHRpb25zI3JlcXVlc3RIYW5kbGVyXFxuICAgIC8vIFdlIHVzZSBmb3IgZGVtb25zdHJhdGlvbiBvbmx5IDIgb2YgdGhlbTpcXG4gICAgLy8gLSByZXF1ZXN0OiBhbiBpbnN0YW5jZSBvZiB0aGUgUmVxdWVzdCBjbGFzcyB3aXRoIGluZm9ybWF0aW9uIHN1Y2ggYXMgdGhlIFVSTCB0aGF0IGlzIGJlaW5nIGNyYXdsZWQgYW5kIEhUVFAgbWV0aG9kXFxuICAgIC8vIC0gJDogdGhlIGNoZWVyaW8gb2JqZWN0IGNvbnRhaW5pbmcgcGFyc2VkIEhUTUxcXG4gICAgYXN5bmMgcmVxdWVzdEhhbmRsZXIoeyByZXF1ZXN0LCAkIH0pIHtcXG4gICAgICAgIGxvZy5kZWJ1ZyhgUHJvY2Vzc2luZyAke3JlcXVlc3QudXJsfS4uLmApO1xcblxcbiAgICAgICAgLy8gRXh0cmFjdCBkYXRhIGZyb20gdGhlIHBhZ2UgdXNpbmcgY2hlZXJpby5cXG4gICAgICAgIGNvbnN0IHRpdGxlID0gJCgndGl0bGUnKS50ZXh0KCk7XFxuICAgICAgICBjb25zdCBoMXRleHRzOiB7IHRleHQ6IHN0cmluZyB9W10gPSBbXTtcXG4gICAgICAgICQoJ2gxJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XFxuICAgICAgICAgICAgaDF0ZXh0cy5wdXNoKHtcXG4gICAgICAgICAgICAgICAgdGV4dDogJChlbCkudGV4dCgpLFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICAvLyBTdG9yZSB0aGUgcmVzdWx0cyB0byB0aGUgZGF0YXNldC4gSW4gbG9jYWwgY29uZmlndXJhdGlvbixcXG4gICAgICAgIC8vIHRoZSBkYXRhIHdpbGwgYmUgc3RvcmVkIGFzIEpTT04gZmlsZXMgaW4gLi9zdG9yYWdlL2RhdGFzZXRzL2RlZmF1bHRcXG4gICAgICAgIGF3YWl0IERhdGFzZXQucHVzaERhdGEoe1xcbiAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXFxuICAgICAgICAgICAgdGl0bGUsXFxuICAgICAgICAgICAgaDF0ZXh0cyxcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBpZiB0aGUgcGFnZSBwcm9jZXNzaW5nIGZhaWxlZCBtb3JlIHRoYW4gbWF4UmVxdWVzdFJldHJpZXMgKyAxIHRpbWVzLlxcbiAgICBmYWlsZWRSZXF1ZXN0SGFuZGxlcih7IHJlcXVlc3QgfSkge1xcbiAgICAgICAgbG9nLmRlYnVnKGBSZXF1ZXN0ICR7cmVxdWVzdC51cmx9IGZhaWxlZCB0d2ljZS5gKTtcXG4gICAgfSxcXG59KTtcXG5cXG4vLyBSdW4gdGhlIGNyYXdsZXIgYW5kIHdhaXQgZm9yIGl0IHRvIGZpbmlzaC5cXG5hd2FpdCBjcmF3bGVyLnJ1bihbXFxuICAgICdodHRwczovL2NyYXdsZWUuZGV2JyxcXG5dKTtcXG5cXG5sb2cuZGVidWcoJ0NyYXdsZXIgZmluaXNoZWQuJyk7XFxuXCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6MTAyNCwidGltZW91dCI6MTgwfX0.Byn0jwdNFvT3kDtnwCwrWleP1vt1Uff6TJ_zdRCoCMY"},i={id:"cheerio-crawler",title:"Cheerio crawler"},o=void 0,d={id:"examples/cheerio-crawler",title:"Cheerio crawler",description:"This example demonstrates how to use CheerioCrawler to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the Cheerio library and extract some data from it: the page title and all h1 tags.",source:"@site/versioned_docs/version-3.5/examples/cheerio_crawler.mdx",sourceDirName:"examples",slug:"/examples/cheerio-crawler",permalink:"/docs/3.5/examples/cheerio-crawler",draft:!1,unlisted:!1,tags:[],version:"3.5",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"cheerio-crawler",title:"Cheerio crawler"},sidebar:"docs",previous:{title:"Basic crawler",permalink:"/docs/3.5/examples/basic-crawler"},next:{title:"Crawl all links on a website",permalink:"/docs/3.5/examples/crawl-all-links"}},g={},h=[];function I(e){const a={a:"a",code:"code",p:"p",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example demonstrates how to use ",(0,t.jsx)(r.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,t.jsx)(a.code,{children:"CheerioCrawler"})})," to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the ",(0,t.jsx)(a.a,{href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener",children:"Cheerio library"})," and extract some data from it: the page title and all ",(0,t.jsx)(a.code,{children:"h1"})," tags."]}),"\n",(0,t.jsx)(n.Z,{className:"language-js",type:"cheerio",children:s})]})}function p(e={}){const{wrapper:a}={...(0,c.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(I,{...e})}):I(e)}},14959:(e,a,l)=>{l.d(a,{Z:()=>o});l(67294);var t=l(39960),c=l(74477),n=l(52263),r=l(85893),s=l(50643).version.split("."),i=[s[0],s[1]].join(".");const o=function(e){var a=e.to,l=e.children,s=(0,c.E)();return(0,n.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===i?(0,r.jsx)(t.default,{to:"/api/"+a,children:l}):(0,r.jsx)(t.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+a,children:l})}},15316:(e,a,l)=>{l.d(a,{Z:()=>g});var t=l(63366),c=(l(67294),l(90512)),n=l(93e3),r=l(39960);const s={button:"button_YBBj",container:"container_TGAW"};var i=l(85893),o=["children","actor","hash","type"],d={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const g=function(e){var a,l=e.children,g=e.actor,h=e.hash,I=e.type,p=(0,t.Z)(e,o);if(h=null!=(a=h)?a:l.hash,!l.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!h)return(0,i.jsx)(n.default,Object.assign({},p,{children:l.code}));var u="https://console.apify.com/actors/"+(null!=g?g:d[null!=I?I:"playwright"])+"?runConfig="+h+"&asrc=run_on_apify";return(0,i.jsxs)("div",{className:(0,c.Z)(s.container,"runnable-code-block"),children:[(0,i.jsxs)(r.default,{href:u,className:s.button,rel:"follow",children:["Run on",(0,i.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,i.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,i.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,i.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,i.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,i.jsx)(n.default,Object.assign({},p,{className:(0,c.Z)(s.codeBlock,"code-block",null!=p.title?"has-title":"no-title"),children:l.code}))]})}},11151:(e,a,l)=>{l.d(a,{Z:()=>s,a:()=>r});var t=l(67294);const c={},n=t.createContext(c);function r(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(n.Provider,{value:a},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);