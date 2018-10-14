"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61591],{26299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>x,frontMatter:()=>w,metadata:()=>q,toc:()=>g});var s=r(85893),n=r(11151),a=r(14959),u=r(65488),o=r(85162),i=r(93e3);const l="import { RequestQueue } from 'crawlee';\n\n// Open the default request queue associated with the crawler run\nconst requestQueue = await RequestQueue.open();\n\n// Enqueue the initial batch of requests (could be an array of just one)\nawait requestQueue.addRequests([\n    { url: 'https://example.com/1' },\n    { url: 'https://example.com/2' },\n    { url: 'https://example.com/3' },\n]);\n\n// Open the named request queue\nconst namedRequestQueue = await RequestQueue.open('named-queue');\n\n// Remove the named request queue\nawait namedRequestQueue.drop();\n",c="import { RequestQueue, CheerioCrawler } from 'crawlee';\n\n// Open the default request queue associated with the current run\nconst requestQueue = await RequestQueue.open();\n\n// Enqueue the initial requests\nawait requestQueue.addRequests([\n    { url: 'https://example.com/1' },\n    { url: 'https://example.com/2' },\n    { url: 'https://example.com/3' },\n    // ...\n]);\n\n// The crawler will automatically process requests from the queue.\n// It's used the same way for Puppeteer/Playwright crawlers\nconst crawler = new CheerioCrawler({\n    requestQueue,\n    async requestHandler({ $, request, enqueueLinks }) {\n        // Add new request to the queue\n        await requestQueue.addRequests([{ url: 'https://example.com/new-page' }]);\n        // Add links found on page to the queue\n        await enqueueLinks();\n    },\n});\n\n// Run the crawler\nawait crawler.run();\n",d="import { CheerioCrawler } from 'crawlee';\n\n// The crawler will automatically process requests from the queue.\n// It's used the same way for Puppeteer/Playwright crawlers.\nconst crawler = new CheerioCrawler({\n    // Note that we're not specifying the requestQueue here\n    async requestHandler({ $, crawler, enqueueLinks }) {\n        // Add new request to the queue\n        await crawler.addRequests([{ url: 'https://example.com/new-page' }]);\n        // Add links found on page to the queue\n        await enqueueLinks();\n    },\n});\n\n// Add the initial requests.\n// Note that we are not opening the request queue explicitly before\nawait crawler.addRequests([\n    { url: 'https://example.com/1' },\n    { url: 'https://example.com/2' },\n    { url: 'https://example.com/3' },\n    // ...\n]);\n\n// Run the crawler\nawait crawler.run();\n",h="// This is technically correct, but\n// we need to explicitly open/use both the request queue and the request list.\n// We suggest using the request queue and batch add the requests instead.\n\nimport { RequestList, RequestQueue, PuppeteerCrawler } from 'crawlee';\n\n// Prepare the sources array with URLs to visit (it can contain millions of URLs)\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n    // ...\n];\n\n// Open the request list with the initial sources array\nconst requestList = await RequestList.open('my-list', sources);\n\n// Open the default request queue. It's not necessary to add any requests to the queue\nconst requestQueue = await RequestQueue.open();\n\n// The crawler will automatically process requests from the list and the queue.\n// It's used the same way for Cheerio/Playwright crawlers\nconst crawler = new PuppeteerCrawler({\n    requestList,\n    requestQueue,\n    // Each request from the request list is enqueued to the request queue one by one.\n    // At this point request with the same URL would exist in the list and the queue\n    async requestHandler({ crawler, enqueueLinks }) {\n        // Add new request to the queue\n        await crawler.addRequests(['http://www.example.com/new-page']);\n\n        // Add links found on page to the queue\n        await enqueueLinks();\n\n        // The requests above would be added to the queue (but not to the list)\n        // and would be processed after the request list is empty.\n        // No more requests could be added to the list here\n    },\n});\n\n// Run the crawler\nawait crawler.run();\n",p="// This is the suggested way.\n// Note that we are not using the request list at all,\n// and not using the request queue explicitly here.\n\nimport { PuppeteerCrawler } from 'crawlee';\n\n// Prepare the sources array with URLs to visit (it can contain millions of URLs)\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n    // ...\n];\n\n// The crawler will automatically process requests from the queue.\n// It's used the same way for Cheerio/Playwright crawlers\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ crawler, enqueueLinks }) {\n        // Add new request to the queue\n        await crawler.addRequests(['http://www.example.com/new-page']);\n\n        // Add links found on page to the queue\n        await enqueueLinks();\n\n        // The requests above would be added to the queue\n        // and would be processed after the initial requests are processed.\n    },\n});\n\n// Add the initial sources array to the request queue\n// and run the crawler\nawait crawler.run(sources);\n",w={id:"request-storage",title:"Request Storage",description:"How to store the requests your crawler will go through"},m=void 0,q={id:"guides/request-storage",title:"Request Storage",description:"How to store the requests your crawler will go through",source:"@site/versioned_docs/version-3.7/guides/request_storage.mdx",sourceDirName:"guides",slug:"/guides/request-storage",permalink:"/docs/guides/request-storage",draft:!1,unlisted:!1,tags:[],version:"3.7",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"request-storage",title:"Request Storage",description:"How to store the requests your crawler will go through"},sidebar:"docs",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"Result Storage",permalink:"/docs/guides/result-storage"}},f={},g=[{value:"Request queue",id:"request-queue",level:2},{value:"Request list",id:"request-list",level:2},{value:"Which one to choose?",id:"which-one-to-choose",level:2},{value:"Cleaning up the storages",id:"cleaning-up-the-storages",level:2}];function b(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Crawlee has several request storage types that are useful for specific tasks. The requests are stored on local disk to a directory defined by the ",(0,s.jsx)(t.code,{children:"CRAWLEE_STORAGE_DIR"})," environment variable. If this variable is not defined, by default Crawlee sets ",(0,s.jsx)(t.code,{children:"CRAWLEE_STORAGE_DIR"})," to ",(0,s.jsx)(t.code,{children:"./storage"})," in the current working directory."]}),"\n",(0,s.jsx)(t.h2,{id:"request-queue",children:"Request queue"}),"\n",(0,s.jsx)(t.p,{children:"The request queue is a storage of URLs to crawl. The queue is used for the deep crawling of websites, where we start with several URLs and then recursively follow links to other pages. The data structure supports both breadth-first and depth-first crawling orders."}),"\n",(0,s.jsxs)(t.p,{children:["Each Crawlee project run is associated with a ",(0,s.jsx)(t.strong,{children:"default request queue"}),". Typically, it is used to store URLs to crawl in the specific crawler run. Its usage is optional."]}),"\n",(0,s.jsxs)(t.p,{children:["In Crawlee, the request queue is represented by the ",(0,s.jsx)(a.Z,{to:"core/class/RequestQueue",children:(0,s.jsx)(t.code,{children:"RequestQueue"})})," class."]}),"\n",(0,s.jsxs)(t.p,{children:["The request queue is managed by ",(0,s.jsx)(a.Z,{to:"memory-storage/class/MemoryStorage",children:(0,s.jsx)(t.code,{children:"MemoryStorage"})})," class and its data is stored in memory, while also being off-loaded to the local directory specified by the ",(0,s.jsx)(t.code,{children:"CRAWLEE_STORAGE_DIR"})," environment variable as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"{CRAWLEE_STORAGE_DIR}/request_queues/{QUEUE_ID}/entries.json\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"{QUEUE_ID}"})," is the name or ID of the request queue. The default queue has ID ",(0,s.jsx)(t.code,{children:"default"}),", unless we override it by setting the ",(0,s.jsx)(t.code,{children:"CRAWLEE_DEFAULT_REQUEST_QUEUE_ID"})," environment variable."]})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"entries.json"})," contains an array or requests."]})}),"\n",(0,s.jsx)(t.p,{children:"The following code demonstrates the usage of the request queue:"}),"\n",(0,s.jsxs)(u.Z,{groupId:"request_queue",children:[(0,s.jsx)(o.Z,{value:"crawler",label:"Usage with Crawler",default:!0,children:(0,s.jsx)(i.default,{language:"js",children:d})}),(0,s.jsx)(o.Z,{value:"crawler_explicit",label:"Explicit usage with Crawler",children:(0,s.jsx)(i.default,{language:"js",children:c})}),(0,s.jsx)(o.Z,{value:"basic_operations",label:"Basic Operations",default:!0,children:(0,s.jsx)(i.default,{language:"js",children:l})})]}),"\n",(0,s.jsxs)(t.p,{children:["To see more detailed example of how to use the request queue with a crawler, see the ",(0,s.jsx)(t.a,{href:"/docs/examples/puppeteer-crawler",children:"Puppeteer Crawler"})," example."]}),"\n",(0,s.jsx)(t.h2,{id:"request-list",children:"Request list"}),"\n",(0,s.jsxs)(t.p,{children:["The request list is not a storage per se - it represents the list of URLs to crawl that is stored in a crawler run memory (or optionally in default ",(0,s.jsx)(t.a,{href:"../guides/result-storage#key-value-store",children:"Key-Value Store"})," associated with the run, if specified). The list is used for the crawling of a large number of URLs, when we know all the URLs which should be visited by the crawler and no URLs would be added during the run. The URLs can be provided either in code or parsed from a text file hosted on the web."]}),"\n",(0,s.jsx)(t.p,{children:"Request list is created exclusively for the crawler run and only if its usage is explicitly specified in the code. Its usage is optional."}),"\n",(0,s.jsxs)(t.p,{children:["In Crawlee, the request list is represented by the ",(0,s.jsx)(a.Z,{to:"core/class/RequestList",children:(0,s.jsx)(t.code,{children:"RequestList"})})," class."]}),"\n",(0,s.jsx)(t.p,{children:"The following code demonstrates basic operations of the request list:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { RequestList, PuppeteerCrawler } from 'crawlee';\n\n// Prepare the sources array with URLs to visit\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n];\n\n// Open the request list.\n// List name is used to persist the sources and the list state in the key-value store\nconst requestList = await RequestList.open('my-list', sources);\n\n// The crawler will automatically process requests from the list\n// It's used the same way for Cheerio /Playwright crawlers.\nconst crawler = new PuppeteerCrawler({\n    requestList,\n    async requestHandler({ page, request }) {\n        // Process the page (extract data, take page screenshot, etc).\n        // No more requests could be added to the request list here\n    },\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"which-one-to-choose",children:"Which one to choose?"}),"\n",(0,s.jsx)(t.p,{children:"When using Request queue - we would normally have several start URLs (e.g. category pages on e-commerce website) and then recursively add more (e.g. individual item pages) programmatically to the queue, it supports dynamic adding and removing of requests. No more URLs can be added to Request list after its initialization as it is immutable, URLs cannot be removed from the list either."}),"\n",(0,s.jsx)(t.p,{children:"On the other hand, the Request queue is not optimized for adding or removing numerous URLs in a batch. This is technically possible, but requests are added one by one to the queue, and thus it would take significant time with a larger number of requests. Request list however can contain even millions of URLs, and it would take significantly less time to add them to the list, compared to the queue."}),"\n",(0,s.jsx)(t.p,{children:"Note that Request queue and Request list can be used together by the same crawler. In such cases, each request from the Request list is enqueued into the Request queue first (to the foremost position in the queue, even if Request queue is not empty) and then consumed from the latter. This is necessary to avoid the same URL being processed more than once (from the list first and then possibly from the queue). In practical terms, such a combination can be useful when there are numerous initial URLs, but more URLs would be added dynamically by the crawler."}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"In Crawlee, there is no much need to combine the request queue together with the request list (although it's technically possible)."}),(0,s.jsxs)(t.p,{children:["Previously there was no way to add the initial requests to the queue in batches (to add an array of requests), i.e. we could have only added the requests one by one to the queue with the help of ",(0,s.jsx)(a.Z,{to:"core/class/RequestQueue#addRequest",children:(0,s.jsx)(t.code,{children:"addRequest()"})})," function."]}),(0,s.jsxs)(t.p,{children:["However, now we could use the ",(0,s.jsx)(a.Z,{to:"core/class/RequestQueue#addRequests",children:(0,s.jsx)(t.code,{children:"addRequests()"})})," function, which adds requests in batches. Thus, instead of combining the request queue and the request list, we can use only the request queue for such use-cases now. See the examples below."]})]}),"\n",(0,s.jsxs)(u.Z,{groupId:"queue_list",children:[(0,s.jsx)(o.Z,{value:"add_requests",label:"Request Queue",default:!0,children:(0,s.jsx)(i.default,{language:"js",children:p})}),(0,s.jsx)(o.Z,{value:"queue_list",label:"Request Queue + Request List",children:(0,s.jsx)(i.default,{language:"js",children:h})})]}),"\n",(0,s.jsx)(t.h2,{id:"cleaning-up-the-storages",children:"Cleaning up the storages"}),"\n",(0,s.jsxs)(t.p,{children:["Default storages are purged before the crawler starts if not specified otherwise. This happens as early as when we try to open some storage (e.g. via ",(0,s.jsx)(t.code,{children:"RequestQueue.open()"}),") or when we try to work with a default storage via one of the helper methods (e.g. ",(0,s.jsx)(t.code,{children:"crawler.addRequests()"})," that under the hood calls ",(0,s.jsx)(t.code,{children:"RequestQueue.open()"}),"). If we don't work with storages explicitly in our code, the purging will eventually happen when the ",(0,s.jsx)(t.code,{children:"run"})," method of our crawler is executed. In case we need to purge the storages sooner, we can use the ",(0,s.jsx)(a.Z,{to:"core/function/purgeDefaultStorages",children:(0,s.jsx)(t.code,{children:"purgeDefaultStorages()"})})," helper explicitly:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { purgeDefaultStorages } from 'crawlee';\n\nawait purgeDefaultStorages();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Calling this function will clean up the default request storage directory (and also the request list stored in default key-value store). This is a shortcut for running (optional) ",(0,s.jsx)(t.code,{children:"purge"})," method on the ",(0,s.jsx)(a.Z,{to:"core/interface/StorageClient",children:(0,s.jsx)(t.code,{children:"StorageClient"})})," interface, in other words it will call the ",(0,s.jsx)(t.code,{children:"purge"})," method of the underlying storage implementation we are currently using. You can make sure the storage is purged only once for a given execution context if you set ",(0,s.jsx)(t.code,{children:"onlyPurgeOnce"})," to ",(0,s.jsx)(t.code,{children:"true"})," in the ",(0,s.jsx)(t.code,{children:"options"})," object."]})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>u});r(67294);var s=r(90512);const n={tabItem:"tabItem_Ymn6"};var a=r(85893);function u(e){var t=e.children,r=e.hidden,u=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(n.tabItem,u),hidden:r,children:t})}},65488:(e,t,r)=>{r.d(t,{Z:()=>p});var s=r(67294),n=r(90512),a=r(12466),u=r(70989),o=r(72389);const i={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var l=r(85893);function c(e){var t=e.className,r=e.block,s=e.selectedValue,u=e.selectValue,o=e.tabValues,c=[],d=(0,a.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,r=c.indexOf(t),n=o[r].value;n!==s&&(d(t),u(n))},p=function(e){var t,r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var s,n=c.indexOf(e.currentTarget)+1;r=null!=(s=c[n])?s:c[0];break;case"ArrowLeft":var a,u=c.indexOf(e.currentTarget)-1;r=null!=(a=c[u])?a:c[c.length-1]}null==(t=r)||t.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:o.map((function(e){var t=e.value,r=e.label,a=e.attributes;return(0,l.jsx)("li",Object.assign({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:function(e){return c.push(e)},onKeyDown:p,onClick:h},a,{className:(0,n.Z)("tabs__item",i.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===t}),children:null!=r?r:t}),t)}))})}function d(e){var t=e.lazy,r=e.children,n=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var u=a.find((function(e){return e.props.value===n}));return u?(0,s.cloneElement)(u,{className:"margin-top--md"}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})}))})}function h(e){var t=(0,u.Y)(e);return(0,l.jsxs)("div",{className:(0,n.Z)("tabs-container",i.tabList),children:[(0,l.jsx)(c,Object.assign({},e,t)),(0,l.jsx)(d,Object.assign({},e,t))]})}function p(e){var t=(0,o.Z)();return(0,l.jsx)(h,Object.assign({},e,{children:(0,u.h)(e.children)}),String(t))}},70989:(e,t,r)=>{r.d(t,{Y:()=>p,h:()=>l});var s=r(67294),n=r(16550),a=r(20469),u=r(91980),o=r(67392),i=r(50012);function l(e){var t,r;return null!=(t=null==(r=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function c(e){var t=e.values,r=e.children;return(0,s.useMemo)((function(){var e=null!=t?t:function(e){return l(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,o=(0,n.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,s=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:r,groupId:a});return[(0,u._X)(i),(0,s.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function p(e){var t,r,n,u,o=e.defaultValue,l=e.queryString,p=void 0!==l&&l,w=e.groupId,m=c(e),q=(0,s.useState)((function(){return function(e){var t,r=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=s.find((function(e){return e.default})))?t:s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:m})})),f=q[0],g=q[1],b=h({queryString:p,groupId:w}),x=b[0],y=b[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:w}.groupId),r=(0,i.Nk)(t),n=r[0],u=r[1],[n,(0,s.useCallback)((function(e){t&&u.set(e)}),[t,u])]),j=v[0],R=v[1],L=function(){var e=null!=x?x:j;return d({value:e,tabValues:m})?e:null}();return(0,a.Z)((function(){L&&g(L)}),[L]),{selectedValue:f,selectValue:(0,s.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),R(e)}),[y,R,m]),tabValues:m}}},14959:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var s=r(39960),n=r(74477),a=r(52263),u=r(85893),o=r(50643).version.split("."),i=[o[0],o[1]].join(".");const l=function(e){var t=e.to,r=e.children,o=(0,n.E)();return(0,a.default)().siteConfig.presets[0][1].docs.disableVersioning||o.version===i?(0,u.jsx)(s.default,{to:"/api/"+t,children:r}):(0,u.jsx)(s.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t,children:r})}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>u});var s=r(67294);const n={},a=s.createContext(n);function u(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:u(e.components),s.createElement(a.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);