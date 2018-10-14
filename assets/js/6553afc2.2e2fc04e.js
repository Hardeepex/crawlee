"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50846],{40707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>x,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var r=t(85893),s=t(11151),o=t(14959),i=t(93e3);const a="import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Start the crawler right away and ensure there will always be 5 concurrent requests ran at any time\n    minConcurrency: 5,\n    // Ensure the crawler doesn't exceed 15 concurrent requests ran at any time\n    maxConcurrency: 15,\n});\n",c="import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Let the crawler know it can run up to 100 requests concurrently at any time\n    maxConcurrency: 100,\n    // ...but also ensure the crawler never exceeds 250 requests per minute\n    maxRequestsPerMinute: 250,\n});\n",l="import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Pass in advanced options by providing them in the autoscaledPoolOptions\n    autoscaledPoolOptions: {\n        // ...\n    },\n});\n",d={id:"scaling-crawlers",title:"Scaling our crawlers",description:"To infinity and beyond! ...within limits"},h=void 0,u={id:"guides/scaling-crawlers",title:"Scaling our crawlers",description:"To infinity and beyond! ...within limits",source:"@site/versioned_docs/version-3.3/guides/scaling_crawlers.mdx",sourceDirName:"guides",slug:"/guides/scaling-crawlers",permalink:"/docs/3.3/guides/scaling-crawlers",draft:!1,unlisted:!1,tags:[],version:"3.3",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"scaling-crawlers",title:"Scaling our crawlers",description:"To infinity and beyond! ...within limits"},sidebar:"docs",previous:{title:"Session Management",permalink:"/docs/3.3/guides/session-management"},next:{title:"Avoid getting blocked",permalink:"/docs/3.3/guides/avoid-blocking"}},p={},m=[{value:"<code>maxRequestsPerMinute</code>",id:"maxrequestsperminute",level:2},{value:"<code>minConcurrency</code> and <code>maxConcurrency</code>",id:"minconcurrency-and-maxconcurrency",level:2},{value:"Advanced options",id:"advanced-options",level:2},{value:"<code>desiredConcurrency</code>",id:"desiredconcurrency",level:3},{value:"<code>desiredConcurrencyRatio</code>",id:"desiredconcurrencyratio",level:3},{value:"<code>scaleUpStepRatio</code> and <code>scaleDownStepRatio</code>",id:"scaleupstepratio-and-scaledownstepratio",level:3},{value:"<code>maybeRunIntervalSecs</code>",id:"mayberunintervalsecs",level:3},{value:"<code>loggingIntervalSecs</code>",id:"loggingintervalsecs",level:3},{value:"<code>autoscaleIntervalSecs</code>",id:"autoscaleintervalsecs",level:3},{value:"<code>maxTasksPerMinute</code>",id:"maxtasksperminute",level:3}];function w(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"As we build our crawler, we might want to control how many requests we do to the website at a time. Crawlee provides several options to fine tune how many parallel requests should be made at any time, how many requests should be done per minute, and how should scaling work based on the available system resources."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["All of these options are available on all crawlers Crawlee provides, but for this guide we'll be using the ",(0,r.jsx)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,r.jsx)(n.code,{children:"CheerioCrawler"})}),". We can see all options that are available ",(0,r.jsx)(o.Z,{to:"cheerio-crawler/interface/CheerioCrawlerOptions",children:(0,r.jsx)(n.code,{children:"here"})}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"maxrequestsperminute",children:(0,r.jsx)(n.code,{children:"maxRequestsPerMinute"})}),"\n",(0,r.jsxs)(n.p,{children:["This controls how many total requests can be made per minute. It counts the amount of requests done every second, to ensure there is not a burst of requests at the ",(0,r.jsx)(n.code,{children:"maxConcurrency"})," limit followed by a long period of waiting. By default, it is set to ",(0,r.jsx)(n.code,{children:"Infinity"})," which means the crawler will keep going up to the ",(0,r.jsx)(n.code,{children:"maxConcurrency"}),". We would set this if we wanted our crawler to work at full throughput, but also not keep hitting the website we're crawling with non-stop requests."]}),"\n",(0,r.jsx)(i.default,{language:"js",children:c}),"\n",(0,r.jsxs)(n.h2,{id:"minconcurrency-and-maxconcurrency",children:[(0,r.jsx)(n.code,{children:"minConcurrency"})," and ",(0,r.jsx)(n.code,{children:"maxConcurrency"})]}),"\n",(0,r.jsx)(n.p,{children:"These control how many parallel requests can be run at any time. By default, crawlers will start with one parallel request at a time and scale up over time to a maximum of 200 requests at a time."}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["Don't set ",(0,r.jsx)(n.code,{children:"minConcurrency"})," too high!"]}),(0,r.jsx)(n.p,{children:"Setting this option too high compared to the available system resources will make your crawler run extremely slow or might even crash."}),(0,r.jsx)(n.p,{children:"It's recommended to leave it at the default value that is provided and letting the crawler scale up and down automatically based on available resources instead."})]}),"\n",(0,r.jsx)(i.default,{language:"js",children:a}),"\n",(0,r.jsx)(n.h2,{id:"advanced-options",children:"Advanced options"}),"\n",(0,r.jsxs)(n.p,{children:["While the options above should be enough for most users, if we wanted to get super deep into the configuration of the autoscaling pool (the internal utility in Crawlee that helps us allow crawlers to scale up and down), we can do so through the ",(0,r.jsx)(o.Z,{to:"cheerio-crawler/interface/CheerioCrawlerOptions#autoscaledPoolOptions",children:(0,r.jsx)(n.code,{children:"autoscaledPoolOptions"})})," object available on crawler options."]}),"\n",(0,r.jsx)(n.admonition,{title:"Complex options up ahead!",type:"danger",children:(0,r.jsx)(n.p,{children:"This section is super advanced and, unless you test the changes extensively and know what you're doing, it's better to leave these options to their defaults, as they are most likely going to work fine without much fuss."})}),"\n",(0,r.jsx)(n.p,{children:"With that warning aside, if we're feeling adventurous, this is how we would pass these options when using a crawler:"}),"\n",(0,r.jsx)(i.default,{language:"js",children:l}),"\n",(0,r.jsx)(n.h3,{id:"desiredconcurrency",children:(0,r.jsx)(n.code,{children:"desiredConcurrency"})}),"\n",(0,r.jsxs)(n.p,{children:["This option specifies the amount of requests that should be running in parallel at the start of the crawler, assuming there are so many available. It defaults to the same value as ",(0,r.jsx)(n.code,{children:"minConcurrency"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"desiredconcurrencyratio",children:(0,r.jsx)(n.code,{children:"desiredConcurrencyRatio"})}),"\n",(0,r.jsxs)(n.p,{children:["The minimum ratio of concurrency to reach before more scaling up is allowed (a number between ",(0,r.jsx)(n.code,{children:"0"})," and ",(0,r.jsx)(n.code,{children:"1"}),"). By default, it is set to ",(0,r.jsx)(n.code,{children:"0.95"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"We can think of this as the point where the autoscaling pool can attempt to scale up (or down), monitor if there's any changes, and correct them if necessary."}),"\n",(0,r.jsxs)(n.h3,{id:"scaleupstepratio-and-scaledownstepratio",children:[(0,r.jsx)(n.code,{children:"scaleUpStepRatio"})," and ",(0,r.jsx)(n.code,{children:"scaleDownStepRatio"})]}),"\n",(0,r.jsxs)(n.p,{children:["These values define the fractional amount of desired concurrency to be added or subtracted as the autoscaling pool scales up or down. Both of these values default to ",(0,r.jsx)(n.code,{children:"0.05"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Every time the autoscaled pool attempts to scale up or down, this value will be added or subtracted from the current concurrency, and, based on the ",(0,r.jsx)(n.a,{href:"#desiredconcurrencyratio",children:(0,r.jsx)(n.code,{children:"desiredConcurrencyRatio"})})," and ",(0,r.jsx)(n.a,{href:"#minconcurrency-and-maxconcurrency",children:(0,r.jsx)(n.code,{children:"maxConcurrency"})}),", determines how many requests can run concurrently."]}),"\n",(0,r.jsx)(n.h3,{id:"mayberunintervalsecs",children:(0,r.jsx)(n.code,{children:"maybeRunIntervalSecs"})}),"\n",(0,r.jsxs)(n.p,{children:["Indicates how often the autoscaling pool should check if more requests can be started and, if that's true, starts a new request if there are any available. This value is represented in seconds, and defaults to ",(0,r.jsx)(n.code,{children:"0.5"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Changing this has no effect for requests that are fired immediately after the previous ones are finished. However, it will influence how fast new requests will be started after the autoscaled pool scales up."})}),"\n",(0,r.jsx)(n.h3,{id:"loggingintervalsecs",children:(0,r.jsx)(n.code,{children:"loggingIntervalSecs"})}),"\n",(0,r.jsx)(n.p,{children:"This option lets us control how often the autoscaled pool should log its current state (the current concurrency ratio, desired ratios, if the system is overloaded and so on)."}),"\n",(0,r.jsxs)(n.p,{children:["We can disable logging altogether by setting this to ",(0,r.jsx)(n.code,{children:"null"}),". By default, it is set to ",(0,r.jsx)(n.code,{children:"60"})," seconds."]}),"\n",(0,r.jsx)(n.h3,{id:"autoscaleintervalsecs",children:(0,r.jsx)(n.code,{children:"autoscaleIntervalSecs"})}),"\n",(0,r.jsxs)(n.p,{children:["This option lets us control how often the autoscaling pool should check if it can and should scale up or down. This value is represented in seconds, and defaults to ",(0,r.jsx)(n.code,{children:"10"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["It's recommended you keep this value between ",(0,r.jsx)(n.code,{children:"5"})," and ",(0,r.jsx)(n.code,{children:"20"})," seconds."]})}),"\n",(0,r.jsxs)(n.admonition,{title:"Be careful with how low, or high, you set this option",type:"caution",children:[(0,r.jsx)(n.p,{children:"Setting this option to a value that's too low might have a severe impact on our crawling performance. And, in reverse, setting this to a value that's too high might mean we leave performance on the table that could've been used for crawling more requests instead."}),(0,r.jsxs)(n.p,{children:["With that said, if you configure this alongside ",(0,r.jsxs)(n.a,{href:"#scaleupstepratio-and-scaledownstepratio",children:[(0,r.jsx)(n.code,{children:"scaleUpStepRatio"})," and ",(0,r.jsx)(n.code,{children:"scaleDownStepRatio"})]}),", you could make your crawler scale up at a slower interval, but with more requests at a time when it does."]})]}),"\n",(0,r.jsx)(n.h3,{id:"maxtasksperminute",children:(0,r.jsx)(n.code,{children:"maxTasksPerMinute"})}),"\n",(0,r.jsxs)(n.p,{children:["This controls how many total requests can be made per minute. It counts the amount of requests done every second, to ensure there is not a burst of requests at the ",(0,r.jsx)(n.code,{children:"maxConcurrency"})," limit followed by a long period of waiting. By default, it is set to ",(0,r.jsx)(n.code,{children:"Infinity"})," which means the crawler will keep going up to the ",(0,r.jsx)(n.code,{children:"maxConcurrency"}),". We would set this if we wanted our crawler to work at full throughput, but also not keep hitting the website we're crawl with non-stop requests."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This option can be set by specifying ",(0,r.jsx)(n.a,{href:"#maxrequestsperminute",children:(0,r.jsx)(n.code,{children:"maxRequestsPerMinute"})})," in your crawler options too, as it is a shortcut for visibility and ease of access."]})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(w,{...e})}):w(e)}},14959:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(39960),s=t(74477),o=t(52263),i=t(85893),a=t(50643).version.split("."),c=[a[0],a[1]].join(".");const l=function(e){var n=e.to,t=e.children,a=(0,s.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning||a.version===c?(0,i.jsx)(r.default,{to:"/api/"+n,children:t}):(0,i.jsx)(r.default,{to:"/api/"+("current"===a.version?"next":a.version)+"/"+n,children:t})}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);