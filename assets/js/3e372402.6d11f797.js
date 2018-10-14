"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42961],{1837:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>h,contentTitle:()=>f,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>w});var t=a(85893),n=a(11151),l=a(65488),s=a(85162),i=a(93e3),o=a(14959);const u="import { CheerioCrawler, downloadListOfUrls } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, log }) {\n        log.info(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://crawlee.dev/sitemap.xml' });\n\nawait crawler.addRequests(listOfUrls);\n\n// Run the crawler\nawait crawler.run();\n",c="import { PuppeteerCrawler, downloadListOfUrls } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    // Function called for each URL\n    async requestHandler({ request, log }) {\n        log.info(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://crawlee.dev/sitemap.xml' });\n\nawait crawler.addRequests(listOfUrls);\n\n// Run the crawler\nawait crawler.run();\n",d="import { PlaywrightCrawler, downloadListOfUrls } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    // Function called for each URL\n    async requestHandler({ request, log }) {\n        log.info(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://crawlee.dev/sitemap.xml' });\n\nawait crawler.addRequests(listOfUrls);\n\n// Run the crawler\nawait crawler.run();\n",p={id:"crawl-sitemap",title:"Crawl a sitemap"},f=void 0,m={id:"examples/crawl-sitemap",title:"Crawl a sitemap",description:"This example downloads and crawls the URLs from a sitemap, by using the downloadListOfUrls utility method provided by the @crawlee/utils module.",source:"@site/versioned_docs/version-3.2/examples/crawl_sitemap.mdx",sourceDirName:"examples",slug:"/examples/crawl-sitemap",permalink:"/docs/3.2/examples/crawl-sitemap",draft:!1,unlisted:!1,tags:[],version:"3.2",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"crawl-sitemap",title:"Crawl a sitemap"},sidebar:"docs",previous:{title:"Crawl a single URL",permalink:"/docs/3.2/examples/crawl-single-url"},next:{title:"Crawl some links on a website",permalink:"/docs/3.2/examples/crawl-some-links"}},h={},w=[];function v(e){const r={admonition:"admonition",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["This example downloads and crawls the URLs from a sitemap, by using the ",(0,t.jsx)(o.Z,{to:"utils/function/downloadListOfUrls",children:(0,t.jsx)(r.code,{children:"downloadListOfUrls"})})," utility method provided by the ",(0,t.jsx)(o.Z,{to:"utils",children:(0,t.jsx)(r.code,{children:"@crawlee/utils"})})," module."]}),"\n",(0,t.jsxs)(l.Z,{groupId:"crawler-type",children:[(0,t.jsx)(s.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,children:(0,t.jsx)(i.default,{className:"language-js",children:u})}),(0,t.jsxs)(s.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",children:[(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["To run this example on the Apify Platform, select the ",(0,t.jsx)(r.code,{children:"apify/actor-node-puppeteer-chrome"})," image for your Dockerfile."]})}),(0,t.jsx)(i.default,{className:"language-js",children:c})]}),(0,t.jsxs)(s.Z,{value:"playwright_crawler",label:"Playwright Crawler",children:[(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["To run this example on the Apify Platform, select the ",(0,t.jsx)(r.code,{children:"apify/actor-node-playwright-chrome"})," image for your Dockerfile."]})}),(0,t.jsx)(i.default,{className:"language-js",children:d})]})]})]})}function b(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},85162:(e,r,a)=>{a.d(r,{Z:()=>s});a(67294);var t=a(90512);const n={tabItem:"tabItem_Ymn6"};var l=a(85893);function s(e){var r=e.children,a=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(n.tabItem,s),hidden:a,children:r})}},65488:(e,r,a)=>{a.d(r,{Z:()=>f});var t=a(67294),n=a(90512),l=a(12466),s=a(70989),i=a(72389);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var u=a(85893);function c(e){var r=e.className,a=e.block,t=e.selectedValue,s=e.selectValue,i=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var r=e.currentTarget,a=c.indexOf(r),n=i[a].value;n!==t&&(d(r),s(n))},f=function(e){var r,a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var t,n=c.indexOf(e.currentTarget)+1;a=null!=(t=c[n])?t:c[0];break;case"ArrowLeft":var l,s=c.indexOf(e.currentTarget)-1;a=null!=(l=c[s])?l:c[c.length-1]}null==(r=a)||r.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},r),children:i.map((function(e){var r=e.value,a=e.label,l=e.attributes;return(0,u.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return c.push(e)},onKeyDown:f,onClick:p},l,{className:(0,n.Z)("tabs__item",o.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===r}),children:null!=a?a:r}),r)}))})}function d(e){var r=e.lazy,a=e.children,n=e.selectedValue,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){var s=l.find((function(e){return e.props.value===n}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:l.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})}))})}function p(e){var r=(0,s.Y)(e);return(0,u.jsxs)("div",{className:(0,n.Z)("tabs-container",o.tabList),children:[(0,u.jsx)(c,Object.assign({},e,r)),(0,u.jsx)(d,Object.assign({},e,r))]})}function f(e){var r=(0,i.Z)();return(0,u.jsx)(p,Object.assign({},e,{children:(0,s.h)(e.children)}),String(r))}},70989:(e,r,a)=>{a.d(r,{Y:()=>f,h:()=>u});var t=a(67294),n=a(16550),l=a(20469),s=a(91980),i=a(67392),o=a(50012);function u(e){var r,a;return null!=(r=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?r:[]}function c(e){var r=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return u(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(a);return function(e){var r=(0,i.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,a])}function d(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function p(e){var r=e.queryString,a=void 0!==r&&r,l=e.groupId,i=(0,n.k6)(),o=function(e){var r=e.queryString,a=void 0!==r&&r,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:l});return[(0,s._X)(o),(0,t.useCallback)((function(e){if(o){var r=new URLSearchParams(i.location.search);r.set(o,e),i.replace(Object.assign({},i.location,{search:r.toString()}))}}),[o,i])]}function f(e){var r,a,n,s,i=e.defaultValue,u=e.queryString,f=void 0!==u&&u,m=e.groupId,h=c(e),w=(0,t.useState)((function(){return function(e){var r,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:h})})),v=w[0],b=w[1],g=p({queryString:f,groupId:m}),y=g[0],x=g[1],j=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),a=(0,o.Nk)(r),n=a[0],s=a[1],[n,(0,t.useCallback)((function(e){r&&s.set(e)}),[r,s])]),C=j[0],k=j[1],q=function(){var e=null!=y?y:C;return d({value:e,tabValues:h})?e:null}();return(0,l.Z)((function(){q&&b(q)}),[q]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!d({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),k(e)}),[x,k,h]),tabValues:h}}},14959:(e,r,a)=>{a.d(r,{Z:()=>u});a(67294);var t=a(39960),n=a(74477),l=a(52263),s=a(85893),i=a(50643).version.split("."),o=[i[0],i[1]].join(".");const u=function(e){var r=e.to,a=e.children,i=(0,n.E)();return(0,l.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===o?(0,s.jsx)(t.default,{to:"/api/"+r,children:a}):(0,s.jsx)(t.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+r,children:a})}},11151:(e,r,a)=>{a.d(r,{Z:()=>i,a:()=>s});var t=a(67294);const n={},l=t.createContext(n);function s(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(l.Provider,{value:r},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);