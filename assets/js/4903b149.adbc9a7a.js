"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71436],{4216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(85893),o=a(11151),r=a(15316);a(14959);const s={code:"import { Dataset } from 'crawlee';\n\n// Retrieve or generate two items to be pushed\nconst data = [\n    {\n        id: 123,\n        name: 'foo',\n    },\n    {\n        id: 456,\n        name: 'bar',\n    },\n];\n\n// Push the two items to the default dataset\nawait Dataset.pushData(data);\n\n// Export the entirety of the dataset to a single file in\n// the default key-value store under the key \"OUTPUT\"\nawait Dataset.exportToCSV('OUTPUT');",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IERhdGFzZXQgfSBmcm9tICdjcmF3bGVlJztcXG5cXG4vLyBSZXRyaWV2ZSBvciBnZW5lcmF0ZSB0d28gaXRlbXMgdG8gYmUgcHVzaGVkXFxuY29uc3QgZGF0YSA9IFtcXG4gICAge1xcbiAgICAgICAgaWQ6IDEyMyxcXG4gICAgICAgIG5hbWU6ICdmb28nLFxcbiAgICB9LFxcbiAgICB7XFxuICAgICAgICBpZDogNDU2LFxcbiAgICAgICAgbmFtZTogJ2JhcicsXFxuICAgIH0sXFxuXTtcXG5cXG4vLyBQdXNoIHRoZSB0d28gaXRlbXMgdG8gdGhlIGRlZmF1bHQgZGF0YXNldFxcbmF3YWl0IERhdGFzZXQucHVzaERhdGEoZGF0YSk7XFxuXFxuLy8gRXhwb3J0IHRoZSBlbnRpcmV0eSBvZiB0aGUgZGF0YXNldCB0byBhIHNpbmdsZSBmaWxlIGluXFxuLy8gdGhlIGRlZmF1bHQga2V5LXZhbHVlIHN0b3JlIHVuZGVyIHRoZSBrZXkgXFxcIk9VVFBVVFxcXCJcXG5hd2FpdCBEYXRhc2V0LmV4cG9ydFRvQ1NWKCdPVVRQVVQnKTtcIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5IjoxMDI0LCJ0aW1lb3V0IjoxODB9fQ.atm5F0WfdiGXTMofoHM3fGIjoAwyAlmLGGZClYA2rRY"},i={id:"export-entire-dataset",title:"Export entire dataset to one file"},l=void 0,c={id:"examples/export-entire-dataset",title:"Export entire dataset to one file",description:"This Dataset example uses the exportToValue function to export the entire default dataset to a single CSV file into the default key-value store.",source:"@site/versioned_docs/version-3.5/examples/export_entire_dataset.mdx",sourceDirName:"examples",slug:"/examples/export-entire-dataset",permalink:"/docs/3.5/examples/export-entire-dataset",draft:!1,unlisted:!1,tags:[],version:"3.5",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"export-entire-dataset",title:"Export entire dataset to one file"},sidebar:"docs",previous:{title:"Using puppeteer-extra and playwright-extra",permalink:"/docs/3.5/examples/crawler-plugins/"},next:{title:"Forms",permalink:"/docs/3.5/examples/forms"}},d={},p=[];function h(e){const t={code:"code",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This ",(0,n.jsx)(t.code,{children:"Dataset"})," example uses the ",(0,n.jsx)(t.code,{children:"exportToValue"})," function to export the entire default dataset to a single CSV file into the default key-value store."]}),"\n",(0,n.jsx)(r.Z,{className:"language-js",type:"cheerio",children:s})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},14959:(e,t,a)=>{a.d(t,{Z:()=>c});a(67294);var n=a(39960),o=a(74477),r=a(52263),s=a(85893),i=a(50643).version.split("."),l=[i[0],i[1]].join(".");const c=function(e){var t=e.to,a=e.children,i=(0,o.E)();return(0,r.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?(0,s.jsx)(n.default,{to:"/api/"+t,children:a}):(0,s.jsx)(n.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+t,children:a})}},15316:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(63366),o=(a(67294),a(90512)),r=a(93e3),s=a(39960);const i={button:"button_YBBj",container:"container_TGAW"};var l=a(85893),c=["children","actor","hash","type"],d={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const p=function(e){var t,a=e.children,p=e.actor,h=e.hash,u=e.type,m=(0,n.Z)(e,c);if(h=null!=(t=h)?t:a.hash,!a.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!h)return(0,l.jsx)(r.default,Object.assign({},m,{children:a.code}));var x="https://console.apify.com/actors/"+(null!=p?p:d[null!=u?u:"playwright"])+"?runConfig="+h+"&asrc=run_on_apify";return(0,l.jsxs)("div",{className:(0,o.Z)(i.container,"runnable-code-block"),children:[(0,l.jsxs)(s.default,{href:x,className:i.button,rel:"follow",children:["Run on",(0,l.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,l.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,l.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,l.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,l.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,l.jsx)(r.default,Object.assign({},m,{className:(0,o.Z)(i.codeBlock,"code-block",null!=m.title?"has-title":"no-title"),children:a.code}))]})}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var n=a(67294);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);