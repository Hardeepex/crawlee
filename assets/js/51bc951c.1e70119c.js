"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1e4],{45900:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>h,toc:()=>p});var n=a(85893),s=a(11151),d=a(15316),c=a(14959);const r={code:"import { Dataset, KeyValueStore } from 'crawlee';\n\nconst dataset = await Dataset.open<{\n    url: string,\n    headingCount: number,\n}>();\n\n// Seeding the dataset with some data\nawait dataset.pushData([\n    {\n        url: 'https://crawlee.dev/',\n        headingCount: 11,\n    },\n    {\n        url: 'https://crawlee.dev/storage',\n        headingCount: 8,\n    },\n    {\n        url: 'https://crawlee.dev/proxy',\n        headingCount: 4,\n    },\n]);\n\n// Calling map function and filtering through mapped items...\nconst moreThan5headers = (await dataset.map((item) => item.headingCount)).filter((count) => count > 5);\n\n// Saving the result of map to default key-value store...\nawait KeyValueStore.setValue('pages_with_more_than_5_headers', moreThan5headers);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IERhdGFzZXQsIEtleVZhbHVlU3RvcmUgfSBmcm9tICdjcmF3bGVlJztcXG5cXG5jb25zdCBkYXRhc2V0ID0gYXdhaXQgRGF0YXNldC5vcGVuPHtcXG4gICAgdXJsOiBzdHJpbmcsXFxuICAgIGhlYWRpbmdDb3VudDogbnVtYmVyLFxcbn0-KCk7XFxuXFxuLy8gU2VlZGluZyB0aGUgZGF0YXNldCB3aXRoIHNvbWUgZGF0YVxcbmF3YWl0IGRhdGFzZXQucHVzaERhdGEoW1xcbiAgICB7XFxuICAgICAgICB1cmw6ICdodHRwczovL2NyYXdsZWUuZGV2LycsXFxuICAgICAgICBoZWFkaW5nQ291bnQ6IDExLFxcbiAgICB9LFxcbiAgICB7XFxuICAgICAgICB1cmw6ICdodHRwczovL2NyYXdsZWUuZGV2L3N0b3JhZ2UnLFxcbiAgICAgICAgaGVhZGluZ0NvdW50OiA4LFxcbiAgICB9LFxcbiAgICB7XFxuICAgICAgICB1cmw6ICdodHRwczovL2NyYXdsZWUuZGV2L3Byb3h5JyxcXG4gICAgICAgIGhlYWRpbmdDb3VudDogNCxcXG4gICAgfSxcXG5dKTtcXG5cXG4vLyBDYWxsaW5nIG1hcCBmdW5jdGlvbiBhbmQgZmlsdGVyaW5nIHRocm91Z2ggbWFwcGVkIGl0ZW1zLi4uXFxuY29uc3QgbW9yZVRoYW41aGVhZGVycyA9IChhd2FpdCBkYXRhc2V0Lm1hcCgoaXRlbSkgPT4gaXRlbS5oZWFkaW5nQ291bnQpKS5maWx0ZXIoKGNvdW50KSA9PiBjb3VudCA-IDUpO1xcblxcbi8vIFNhdmluZyB0aGUgcmVzdWx0IG9mIG1hcCB0byBkZWZhdWx0IGtleS12YWx1ZSBzdG9yZS4uLlxcbmF3YWl0IEtleVZhbHVlU3RvcmUuc2V0VmFsdWUoJ3BhZ2VzX3dpdGhfbW9yZV90aGFuXzVfaGVhZGVycycsIG1vcmVUaGFuNWhlYWRlcnMpO1xcblwifSIsIm9wdGlvbnMiOnsiYnVpbGQiOiJsYXRlc3QiLCJjb250ZW50VHlwZSI6ImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgiLCJtZW1vcnkiOjEwMjQsInRpbWVvdXQiOjE4MH19.Lx_tftHrsVbncF_3lzE_thq51TzNLmQVEkKm9yUtyiU"},l={code:"import { Dataset, KeyValueStore } from 'crawlee';\n\nconst dataset = await Dataset.open<{\n    url: string,\n    headingCount: number,\n}>();\n\n// Seeding the dataset with some data\nawait dataset.pushData([\n    {\n        url: 'https://crawlee.dev/',\n        headingCount: 11,\n    },\n    {\n        url: 'https://crawlee.dev/storage',\n        headingCount: 8,\n    },\n    {\n        url: 'https://crawlee.dev/proxy',\n        headingCount: 4,\n    },\n]);\n\n// calling reduce function and using memo to calculate number of headers\nconst pagesHeadingCount = await dataset.reduce((memo, value) => {\n    return memo + value.headingCount;\n}, 0);\n\n// saving result of map to default Key-value store\nawait KeyValueStore.setValue('pages_heading_count', pagesHeadingCount);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IERhdGFzZXQsIEtleVZhbHVlU3RvcmUgfSBmcm9tICdjcmF3bGVlJztcXG5cXG5jb25zdCBkYXRhc2V0ID0gYXdhaXQgRGF0YXNldC5vcGVuPHtcXG4gICAgdXJsOiBzdHJpbmcsXFxuICAgIGhlYWRpbmdDb3VudDogbnVtYmVyLFxcbn0-KCk7XFxuXFxuLy8gU2VlZGluZyB0aGUgZGF0YXNldCB3aXRoIHNvbWUgZGF0YVxcbmF3YWl0IGRhdGFzZXQucHVzaERhdGEoW1xcbiAgICB7XFxuICAgICAgICB1cmw6ICdodHRwczovL2NyYXdsZWUuZGV2LycsXFxuICAgICAgICBoZWFkaW5nQ291bnQ6IDExLFxcbiAgICB9LFxcbiAgICB7XFxuICAgICAgICB1cmw6ICdodHRwczovL2NyYXdsZWUuZGV2L3N0b3JhZ2UnLFxcbiAgICAgICAgaGVhZGluZ0NvdW50OiA4LFxcbiAgICB9LFxcbiAgICB7XFxuICAgICAgICB1cmw6ICdodHRwczovL2NyYXdsZWUuZGV2L3Byb3h5JyxcXG4gICAgICAgIGhlYWRpbmdDb3VudDogNCxcXG4gICAgfSxcXG5dKTtcXG5cXG4vLyBjYWxsaW5nIHJlZHVjZSBmdW5jdGlvbiBhbmQgdXNpbmcgbWVtbyB0byBjYWxjdWxhdGUgbnVtYmVyIG9mIGhlYWRlcnNcXG5jb25zdCBwYWdlc0hlYWRpbmdDb3VudCA9IGF3YWl0IGRhdGFzZXQucmVkdWNlKChtZW1vLCB2YWx1ZSkgPT4ge1xcbiAgICByZXR1cm4gbWVtbyArIHZhbHVlLmhlYWRpbmdDb3VudDtcXG59LCAwKTtcXG5cXG4vLyBzYXZpbmcgcmVzdWx0IG9mIG1hcCB0byBkZWZhdWx0IEtleS12YWx1ZSBzdG9yZVxcbmF3YWl0IEtleVZhbHVlU3RvcmUuc2V0VmFsdWUoJ3BhZ2VzX2hlYWRpbmdfY291bnQnLCBwYWdlc0hlYWRpbmdDb3VudCk7XFxuXCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6MTAyNCwidGltZW91dCI6MTgwfX0.-TBcRBQNErOBO07gqzw42vniKjsL6zl9ZH7kiZn3rO8"},o={id:"map-and-reduce",title:"Dataset Map and Reduce methods"},i=void 0,h={id:"examples/map-and-reduce",title:"Dataset Map and Reduce methods",description:"This example shows an easy use-case of the Dataset map",source:"@site/../docs/examples/map_and_reduce.mdx",sourceDirName:"examples",slug:"/examples/map-and-reduce",permalink:"/docs/next/examples/map-and-reduce",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"map-and-reduce",title:"Dataset Map and Reduce methods"},sidebar:"docs",previous:{title:"JSDOM crawler",permalink:"/docs/next/examples/jsdom-crawler"},next:{title:"Playwright crawler",permalink:"/docs/next/examples/playwright-crawler"}},u={},p=[{value:"Map",id:"map",level:3},{value:"Reduce",id:"reduce",level:3}];function m(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This example shows an easy use-case of the ",(0,n.jsx)(c.Z,{to:"core/class/Dataset",children:(0,n.jsx)(t.code,{children:"Dataset"})})," ",(0,n.jsx)(c.Z,{to:"core/class/Dataset#map",children:(0,n.jsx)(t.code,{children:"map"})}),"\nand ",(0,n.jsx)(c.Z,{to:"core/class/Dataset#reduce",children:(0,n.jsx)(t.code,{children:"reduce"})})," methods. Both methods can be used to simplify\nthe dataset results workflow process. Both can be called on the ",(0,n.jsx)(c.Z,{to:"core/class/Dataset",children:"dataset"})," directly."]}),"\n",(0,n.jsxs)(t.p,{children:["Important to mention is that both methods return a new result (",(0,n.jsx)(t.code,{children:"map"})," returns a new array and ",(0,n.jsx)(t.code,{children:"reduce"})," can return any type) - neither method updates\nthe dataset in any way."]}),"\n",(0,n.jsxs)(t.p,{children:["Examples for both methods are demonstrated on a simple dataset containing the results scraped from a page: the ",(0,n.jsx)(t.code,{children:"URL"})," and a hypothetical number of\n",(0,n.jsx)(t.code,{children:"h1"})," - ",(0,n.jsx)(t.code,{children:"h3"})," header elements under the ",(0,n.jsx)(t.code,{children:"headingCount"})," key."]}),"\n",(0,n.jsxs)(t.p,{children:["This data structure is stored in the default dataset under ",(0,n.jsx)(t.code,{children:"{PROJECT_FOLDER}/storage/datasets/default/"}),". If you want to simulate the\nfunctionality, you can use the ",(0,n.jsx)(c.Z,{to:"core/class/Dataset#pushData",children:(0,n.jsx)(t.code,{children:"dataset.pushData()"})}),"\nmethod to save the example ",(0,n.jsx)(t.code,{children:"JSON array"})," to your dataset."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'[\n    {\n        "url": "https://crawlee.dev/",\n        "headingCount": 11\n    },\n    {\n        "url": "https://crawlee.dev/storage",\n        "headingCount": 8\n    },\n    {\n        "url": "https://crawlee.dev/proxy",\n        "headingCount": 4\n    }\n]\n'})}),"\n",(0,n.jsx)(t.h3,{id:"map",children:"Map"}),"\n",(0,n.jsxs)(t.p,{children:["The dataset ",(0,n.jsx)(t.code,{children:"map"})," method is very similar to standard Array mapping methods. It produces a new array of values by mapping each value in the existing\narray through a transformation function and an options parameter."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"map"})," method used to check if are there more than 5 header elements on each page:"]}),"\n",(0,n.jsx)(d.Z,{className:"language-js",type:"cheerio",children:r}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"moreThan5headers"})," variable is an array of ",(0,n.jsx)(t.code,{children:"headingCount"})," attributes where the number of headers is greater than 5."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"map"})," method's result value saved to the ",(0,n.jsx)(c.Z,{to:"core/class/KeyValueStore",children:(0,n.jsx)(t.code,{children:"key-value store"})})," should be:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"[11, 8]\n"})}),"\n",(0,n.jsx)(t.h3,{id:"reduce",children:"Reduce"}),"\n",(0,n.jsxs)(t.p,{children:["The dataset ",(0,n.jsx)(t.code,{children:"reduce"})," method does not produce a new array of values - it reduces a list of values down to a single value. The method iterates through\nthe items in the dataset using the ",(0,n.jsxs)(c.Z,{to:"core/class/Dataset#reduce",children:[(0,n.jsx)(t.code,{children:"memo"})," argument"]}),". After performing the necessary\ncalculation, the ",(0,n.jsx)(t.code,{children:"memo"})," is sent to the next iteration, while the item just processed is reduced (removed)."]}),"\n",(0,n.jsxs)(t.p,{children:["Using the ",(0,n.jsx)(t.code,{children:"reduce"})," method to get the total number of headers scraped (all items in the dataset):"]}),"\n",(0,n.jsx)(d.Z,{className:"language-js",type:"cheerio",children:l}),"\n",(0,n.jsxs)(t.p,{children:["The original dataset will be reduced to a single value, ",(0,n.jsx)(t.code,{children:"pagesHeadingCount"}),", which contains the count of all headers for all scraped pages (all\ndataset items)."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"reduce"})," method's result value saved to the ",(0,n.jsx)(c.Z,{to:"core/class/KeyValueStore",children:(0,n.jsx)(t.code,{children:"key-value store"})})," should be:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"23\n"})})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},14959:(e,t,a)=>{a.d(t,{Z:()=>o});a(67294);var n=a(39960),s=a(74477),d=a(52263),c=a(85893),r=a(50643).version.split("."),l=[r[0],r[1]].join(".");const o=function(e){var t=e.to,a=e.children,r=(0,s.E)();return(0,d.default)().siteConfig.presets[0][1].docs.disableVersioning||r.version===l?(0,c.jsx)(n.default,{to:"/api/"+t,children:a}):(0,c.jsx)(n.default,{to:"/api/"+("current"===r.version?"next":r.version)+"/"+t,children:a})}},15316:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(63366),s=(a(67294),a(90512)),d=a(93e3),c=a(39960);const r={button:"button_YBBj",container:"container_TGAW"};var l=a(85893),o=["children","actor","hash","type"],i={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const h=function(e){var t,a=e.children,h=e.actor,u=e.hash,p=e.type,m=(0,n.Z)(e,o);if(u=null!=(t=u)?t:a.hash,!a.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!u)return(0,l.jsx)(d.default,Object.assign({},m,{children:a.code}));var g="https://console.apify.com/actors/"+(null!=h?h:i[null!=p?p:"playwright"])+"?runConfig="+u+"&asrc=run_on_apify";return(0,l.jsxs)("div",{className:(0,s.Z)(r.container,"runnable-code-block"),children:[(0,l.jsxs)(c.default,{href:g,className:r.button,rel:"follow",children:["Run on",(0,l.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,l.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,l.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,l.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,l.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,l.jsx)(d.default,Object.assign({},m,{className:(0,s.Z)(r.codeBlock,"code-block",null!=m.title?"has-title":"no-title"),children:a.code}))]})}},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>c});var n=a(67294);const s={},d=n.createContext(s);function c(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(d.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);