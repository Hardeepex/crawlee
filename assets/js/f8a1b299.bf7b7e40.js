"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56617],{59675:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>h,toc:()=>u});var s=t(85893),n=t(11151),r=t(93e3),o=t(14959);const d="import { Dataset, KeyValueStore } from 'crawlee';\n\nconst dataset = await Dataset.open<{ headingCount: number }>();\n\n// calling map function and filtering through mapped items\nconst moreThan5headers = (await dataset.map((item) => item.headingCount)).filter((count) => count > 5);\n\n// saving result of map to default Key-value store\nawait KeyValueStore.setValue('pages_with_more_than_5_headers', moreThan5headers);\n",c="import { Dataset, KeyValueStore } from 'crawlee';\n\nconst dataset = await Dataset.open();\n\n// calling reduce function and using memo to calculate number of headers\nconst pagesHeadingCount = await dataset.reduce((memo, value) => {\n    return memo + value.headingCount;\n}, 0);\n\n// saving result of map to default Key-value store\nawait KeyValueStore.setValue('pages_heading_count', pagesHeadingCount);\n",i={id:"map-and-reduce",title:"Dataset Map and Reduce methods"},l=void 0,h={id:"examples/map-and-reduce",title:"Dataset Map and Reduce methods",description:"This example shows an easy use-case of the Dataset map",source:"@site/versioned_docs/version-3.2/examples/map_and_reduce.mdx",sourceDirName:"examples",slug:"/examples/map-and-reduce",permalink:"/docs/3.2/examples/map-and-reduce",draft:!1,unlisted:!1,tags:[],version:"3.2",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"map-and-reduce",title:"Dataset Map and Reduce methods"},sidebar:"docs",previous:{title:"JSDOM crawler",permalink:"/docs/3.2/examples/jsdom-crawler"},next:{title:"Playwright crawler",permalink:"/docs/3.2/examples/playwright-crawler"}},p={},u=[{value:"Map",id:"map",level:3},{value:"Reduce",id:"reduce",level:3}];function m(e){const a={code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["This example shows an easy use-case of the ",(0,s.jsx)(o.Z,{to:"core/class/Dataset",children:(0,s.jsx)(a.code,{children:"Dataset"})})," ",(0,s.jsx)(o.Z,{to:"core/class/Dataset#map",children:(0,s.jsx)(a.code,{children:"map"})}),"\nand ",(0,s.jsx)(o.Z,{to:"core/class/Dataset#reduce",children:(0,s.jsx)(a.code,{children:"reduce"})})," methods. Both methods can be used to simplify\nthe dataset results workflow process. Both can be called on the ",(0,s.jsx)(o.Z,{to:"core/class/Dataset",children:"dataset"})," directly."]}),"\n",(0,s.jsxs)(a.p,{children:["Important to mention is that both methods return a new result (",(0,s.jsx)(a.code,{children:"map"})," returns a new array and ",(0,s.jsx)(a.code,{children:"reduce"})," can return any type) - neither method updates\nthe dataset in any way."]}),"\n",(0,s.jsxs)(a.p,{children:["Examples for both methods are demonstrated on a simple dataset containing the results scraped from a page: the ",(0,s.jsx)(a.code,{children:"URL"})," and a hypothetical number of\n",(0,s.jsx)(a.code,{children:"h1"})," - ",(0,s.jsx)(a.code,{children:"h3"})," header elements under the ",(0,s.jsx)(a.code,{children:"headingCount"})," key."]}),"\n",(0,s.jsxs)(a.p,{children:["This data structure is stored in the default dataset under ",(0,s.jsx)(a.code,{children:"{PROJECT_FOLDER}/storage/datasets/default/"}),". If you want to simulate the\nfunctionality, you can use the ",(0,s.jsx)(o.Z,{to:"core/class/Dataset#pushData",children:(0,s.jsx)(a.code,{children:"dataset.pushData()"})}),"\nmethod to save the example ",(0,s.jsx)(a.code,{children:"JSON array"})," to your dataset."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'[\n    {\n        "url": "https://crawlee.dev/",\n        "headingCount": 11\n    },\n    {\n        "url": "https://crawlee.dev/storage",\n        "headingCount": 8\n    },\n    {\n        "url": "https://crawlee.dev/proxy",\n        "headingCount": 4\n    }\n]\n'})}),"\n",(0,s.jsx)(a.h3,{id:"map",children:"Map"}),"\n",(0,s.jsxs)(a.p,{children:["The dataset ",(0,s.jsx)(a.code,{children:"map"})," method is very similar to standard Array mapping methods. It produces a new array of values by mapping each value in the existing\narray through a transformation function and an options parameter."]}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"map"})," method used to check if are there more than 5 header elements on each page:"]}),"\n",(0,s.jsx)(r.default,{className:"language-js",children:d}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"moreThan5headers"})," variable is an array of ",(0,s.jsx)(a.code,{children:"headingCount"})," attributes where the number of headers is greater than 5."]}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"map"})," method's result value saved to the ",(0,s.jsx)(o.Z,{to:"core/class/KeyValueStore",children:(0,s.jsx)(a.code,{children:"key-value store"})})," should be:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-javascript",children:"[11, 8]\n"})}),"\n",(0,s.jsx)(a.h3,{id:"reduce",children:"Reduce"}),"\n",(0,s.jsxs)(a.p,{children:["The dataset ",(0,s.jsx)(a.code,{children:"reduce"})," method does not produce a new array of values - it reduces a list of values down to a single value. The method iterates through\nthe items in the dataset using the ",(0,s.jsxs)(o.Z,{to:"core/class/Dataset#reduce",children:[(0,s.jsx)(a.code,{children:"memo"})," argument"]}),". After performing the necessary\ncalculation, the ",(0,s.jsx)(a.code,{children:"memo"})," is sent to the next iteration, while the item just processed is reduced (removed)."]}),"\n",(0,s.jsxs)(a.p,{children:["Using the ",(0,s.jsx)(a.code,{children:"reduce"})," method to get the total number of headers scraped (all items in the dataset):"]}),"\n",(0,s.jsx)(r.default,{className:"language-js",children:c}),"\n",(0,s.jsxs)(a.p,{children:["The original dataset will be reduced to a single value, ",(0,s.jsx)(a.code,{children:"pagesHeadingCount"}),", which contains the count of all headers for all scraped pages (all\ndataset items)."]}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"reduce"})," method's result value saved to the ",(0,s.jsx)(o.Z,{to:"core/class/KeyValueStore",children:(0,s.jsx)(a.code,{children:"key-value store"})})," should be:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-javascript",children:"23\n"})})]})}function x(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},14959:(e,a,t)=>{t.d(a,{Z:()=>i});t(67294);var s=t(39960),n=t(74477),r=t(52263),o=t(85893),d=t(50643).version.split("."),c=[d[0],d[1]].join(".");const i=function(e){var a=e.to,t=e.children,d=(0,n.E)();return(0,r.default)().siteConfig.presets[0][1].docs.disableVersioning||d.version===c?(0,o.jsx)(s.default,{to:"/api/"+a,children:t}):(0,o.jsx)(s.default,{to:"/api/"+("current"===d.version?"next":d.version)+"/"+a,children:t})}},11151:(e,a,t)=>{t.d(a,{Z:()=>d,a:()=>o});var s=t(67294);const n={},r=s.createContext(n);function o(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:a},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);