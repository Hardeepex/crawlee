"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26721],{94555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>j,frontMatter:()=>p,metadata:()=>w,toc:()=>g});var r=t(85893),s=t(11151),i=t(14959),a=t(65488),l=t(85162),o=t(93e3);const u="import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    // Let's limit our crawls to make our\n    // tests shorter and safer.\n    maxRequestsPerCrawl: 20,\n    // enqueueLinks is an argument of the requestHandler\n    async requestHandler({ $, request, enqueueLinks }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n        // The enqueueLinks function is context aware,\n        // so it does not require any parameters.\n        await enqueueLinks();\n    },\n});\n\nawait crawler.run(['https://crawlee.dev']);\n",c="import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 20,\n    async requestHandler({ $, request, enqueueLinks }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n        // The default behavior of enqueueLinks is to stay on the same hostname,\n        // so it does not require any parameters.\n        // This will ensure the subdomain stays the same.\n        await enqueueLinks();\n    },\n});\n\nawait crawler.run(['https://crawlee.dev']);\n",d="import { CheerioCrawler } from 'crawlee';\nimport { URL } from 'node:url';\n\nconst crawler = new CheerioCrawler({\n    // Let's limit our crawls to make our\n    // tests shorter and safer.\n    maxRequestsPerCrawl: 20,\n    async requestHandler({ request, $ }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n\n        // Without enqueueLinks, we first have to extract all\n        // the URLs from the page with Cheerio.\n        const links = $('a[href]')\n            .map((_, el) => $(el).attr('href'))\n            .get();\n\n        // Then we need to resolve relative URLs,\n        // otherwise they would be unusable for crawling.\n        const absoluteUrls = links.map(\n            (link) => new URL(link, request.loadedUrl).href,\n        );\n\n        // Finally, we have to add the URLs to the queue\n        await crawler.addRequests(absoluteUrls);\n    },\n});\n\nawait crawler.run(['https://crawlee.dev']);\n",h="import { CheerioCrawler } from 'crawlee';\nimport { URL } from 'node:url';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 20,\n    async requestHandler({ request, $ }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n\n        const links = $('a[href]')\n            .map((_, el) => $(el).attr('href'))\n            .get();\n\n        // Besides resolving the URLs, we now also need to\n        // grab their hostname for filtering.\n        const { hostname } = new URL(request.loadedUrl);\n        const absoluteUrls = links.map(\n            (link) => new URL(link, request.loadedUrl),\n        );\n\n        // We use the hostname to filter links that point\n        // to a different domain, even subdomain.\n        const sameHostnameLinks = absoluteUrls\n            .filter((url) => url.hostname === hostname)\n            .map((url) => ({ url: url.href }));\n\n        // Finally, we have to add the URLs to the queue\n        await crawler.addRequests(sameHostnameLinks);\n    },\n});\n\nawait crawler.run(['https://crawlee.dev']);\n",p={id:"adding-urls",title:"Adding more URLs",description:"Your first steps into the world of scraping with Crawlee"},m=void 0,w={id:"introduction/adding-urls",title:"Adding more URLs",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.0/introduction/03-adding-urls.mdx",sourceDirName:"introduction",slug:"/introduction/adding-urls",permalink:"/docs/3.0/introduction/adding-urls",draft:!1,unlisted:!1,tags:[],version:"3.0",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",sidebarPosition:3,frontMatter:{id:"adding-urls",title:"Adding more URLs",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"First crawler",permalink:"/docs/3.0/introduction/first-crawler"},next:{title:"Real-world project",permalink:"/docs/3.0/introduction/real-world-project"}},f={},g=[{value:"How crawling works",id:"how-crawling-works",level:2},{value:"Limit your crawls with <code>maxRequestsPerCrawl</code>",id:"limit-your-crawls-with-maxrequestspercrawl",level:2},{value:"Finding new links",id:"finding-new-links",level:2},{value:"Filtering links to same domain",id:"filtering-links-to-same-domain",level:2},{value:"Skipping duplicate URLs",id:"skipping-duplicate-urls",level:2},{value:"Advanced filtering arguments",id:"advanced-filtering-arguments",level:2},{value:"Filter URLs with patterns",id:"filter-urls-with-patterns",level:3},{value:"Transform requests",id:"transform-requests",level:3},{value:"Next lesson",id:"next-lesson",level:2}];function x(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In the previous lesson you built a very simple crawler that downloads HTML of a single page, reads its title and prints\nit to the console. This is the original source code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ $, request }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n    }\n})\n\nawait crawler.run(['https://crawlee.dev']);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this lesson you'll use the example from the previous section and improve on it. You'll add more URLs to the queue and thanks to that the crawler will keep going, finding new links, enqueuing them into the ",(0,r.jsx)(n.code,{children:"RequestQueue"})," and then scraping them."]}),"\n",(0,r.jsx)(n.h2,{id:"how-crawling-works",children:"How crawling works"}),"\n",(0,r.jsx)(n.p,{children:"The process is simple:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Find new links on the page."}),"\n",(0,r.jsxs)(n.li,{children:["Filter only those pointing to the same domain, in this case ",(0,r.jsx)(n.code,{children:"crawlee.dev"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Enqueue (add) them to the ",(0,r.jsx)(n.code,{children:"RequestQueue"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Visit the newly enqueued links."}),"\n",(0,r.jsx)(n.li,{children:"Repeat the process."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the following paragraphs you will learn about the ",(0,r.jsx)(i.Z,{to:"core/function/enqueueLinks",children:(0,r.jsx)(n.code,{children:"enqueueLinks"})})," function which simplifies crawling to a single function call. For comparison and learning purposes we will show an equivalent solution written without ",(0,r.jsx)(n.code,{children:"enqueueLinks"})," in the second code tab."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"enqueueLinks"})," function is context aware. It means that it will read the information about the currently crawled page from the context, and you don't need to explicitly provide any arguments. It will find the links using the Cheerio function ",(0,r.jsx)(n.code,{children:"$"})," and automatically add the links to the running crawler's ",(0,r.jsx)(n.code,{children:"RequestQueue"}),"."]})}),"\n",(0,r.jsxs)(n.h2,{id:"limit-your-crawls-with-maxrequestspercrawl",children:["Limit your crawls with ",(0,r.jsx)(n.code,{children:"maxRequestsPerCrawl"})]}),"\n",(0,r.jsxs)(n.p,{children:["When you're just testing your code or when your crawler could potentially find millions of links, it's very useful to set a maximum limit of crawled pages. The option is called ",(0,r.jsx)(n.code,{children:"maxRequestsPerCrawl"}),", is available in all crawlers, and you can set it like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 20,\n    // ...\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"This means that no new requests will be started after the 20th request is finished. The actual number of processed requests might be a little higher thanks to parallelization, because the running requests won't be forcefully aborted. It's not even possible in most cases."}),"\n",(0,r.jsx)(n.h2,{id:"finding-new-links",children:"Finding new links"}),"\n",(0,r.jsxs)(n.p,{children:["There are numerous approaches to finding links to follow when crawling the web. For our purposes, we will be looking for ",(0,r.jsx)(n.code,{children:"<a>"})," elements that contain the ",(0,r.jsx)(n.code,{children:"href"})," attribute because that's what you need in most cases. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<a href="https://crawlee.dev/docs/introduction">This is a link to Crawlee introduction</a>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Since this is the most common case, it is also the ",(0,r.jsx)(n.code,{children:"enqueueLinks"})," default."]}),"\n",(0,r.jsxs)(a.Z,{groupId:"crawling-links",children:[(0,r.jsx)(l.Z,{value:"enqueue-links",label:"with enqueueLinks",default:!0,children:(0,r.jsx)(o.default,{language:"js",title:"src/main.mjs",children:u})}),(0,r.jsx)(l.Z,{value:"plain-js",label:"without enqueueLinks",children:(0,r.jsx)(o.default,{language:"js",title:"src/main.mjs",children:d})})]}),"\n",(0,r.jsxs)(n.p,{children:["If you need to override the default selection of elements in ",(0,r.jsx)(n.code,{children:"enqueueLinks"}),", you can use the ",(0,r.jsx)(n.code,{children:"selector"})," argument."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"await enqueueLinks({\n    selector: 'div.has-link'\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"filtering-links-to-same-domain",children:"Filtering links to same domain"}),"\n",(0,r.jsx)(n.p,{children:"Websites typically contain a lot of links that lead away from the original page. This is normal, but when crawling a website, we usually want to crawl that one site and not let our crawler wander away to Google, Facebook and Twitter. Therefore, we need to filter out the off-domain links and only keep the ones that lead to the same domain."}),"\n",(0,r.jsxs)(a.Z,{groupId:"crawling-links",children:[(0,r.jsx)(l.Z,{value:"enqueue-links",label:"with enqueueLinks",default:!0,children:(0,r.jsx)(o.default,{language:"js",title:"src/main.mjs",children:c})}),(0,r.jsx)(l.Z,{value:"plain-js",label:"without enqueueLinks",children:(0,r.jsx)(o.default,{language:"js",title:"src/main.mjs",children:h})})]}),"\n",(0,r.jsxs)(n.p,{children:["The default behavior of ",(0,r.jsx)(n.code,{children:"enqueueLinks"})," is to stay on the same hostname. This ",(0,r.jsx)(n.strong,{children:"does not include subdomains"}),". To include subdomains in your crawl, use the ",(0,r.jsx)(n.code,{children:"strategy"})," argument."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"await enqueueLinks({\n    strategy: 'same-domain'\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When you run the code, you will see the crawler  log the ",(0,r.jsx)(n.strong,{children:"title"})," of the first page, then the ",(0,r.jsx)(n.strong,{children:"enqueueing"})," message showing number of URLs, followed by the ",(0,r.jsx)(n.strong,{children:"title"})," of the first enqueued page and so on and so on."]}),"\n",(0,r.jsx)(n.h2,{id:"skipping-duplicate-urls",children:"Skipping duplicate URLs"}),"\n",(0,r.jsxs)(n.p,{children:["Skipping of duplicate URLs is critical, because visiting the same page multiple times would lead to duplicate results. This is automatically handled by the ",(0,r.jsx)(n.code,{children:"RequestQueue"})," which deduplicates requests using their ",(0,r.jsx)(n.code,{children:"uniqueKey"}),". This ",(0,r.jsx)(n.code,{children:"uniqueKey"})," is automatically generated from the request's URL by lowercasing the URL, lexically ordering query parameters, removing fragments and a few other tweaks that ensure the queue only includes unique URLs."]}),"\n",(0,r.jsx)(n.h2,{id:"advanced-filtering-arguments",children:"Advanced filtering arguments"}),"\n",(0,r.jsxs)(n.p,{children:["While the defaults for ",(0,r.jsx)(n.code,{children:"enqueueLinks"})," can be often exactly what you need, it also gives you fine-grained control over which URLs should be enqueued. One way we already mentioned above is by using the ",(0,r.jsx)(i.Z,{to:"core/enum/EnqueueStrategy",children:(0,r.jsx)(n.code,{children:"EnqueueStrategy"})}),". You can use the ",(0,r.jsx)(i.Z,{to:"core/enum/EnqueueStrategy#All",children:(0,r.jsx)(n.code,{children:"All"})})," strategy if you want to follow every single link, regardless of its domain, or you can enqueue links that target the same domain name with the ",(0,r.jsx)(i.Z,{to:"core/enum/EnqueueStrategy#SameDomain",children:(0,r.jsx)(n.code,{children:"SameDomain"})})," strategy."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"await enqueueLinks({\n    strategy: 'all', // wander the internet\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"filter-urls-with-patterns",children:"Filter URLs with patterns"}),"\n",(0,r.jsxs)(n.p,{children:["For even more control, you can use ",(0,r.jsx)(n.code,{children:"globs"}),", ",(0,r.jsx)(n.code,{children:"regexps"})," and ",(0,r.jsx)(n.code,{children:"pseudoUrls"})," to filter the URLs. Each of those arguments is always an ",(0,r.jsx)(n.code,{children:"Array"}),", but the contents can take on many forms. ",(0,r.jsx)(i.Z,{to:"core/interface/EnqueueLinksOptions",children:"See the reference"})," for more information about them as well as other options."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["If you provide one of those options, the default ",(0,r.jsx)(n.code,{children:"same-hostname"})," strategy will ",(0,r.jsx)(n.strong,{children:"not"})," be applied unless explicitly set in the options."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"await enqueueLinks({\n    globs: ['http?(s)://apify.com/*/*'],\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"transform-requests",children:"Transform requests"}),"\n",(0,r.jsxs)(n.p,{children:["To have absolute control, we have the ",(0,r.jsx)(i.Z,{to:"core/interface/EnqueueLinksOptions/#transformRequestFunction",children:(0,r.jsx)(n.code,{children:"transformRequestFunction"})}),". Just before a new ",(0,r.jsx)(i.Z,{to:"core/class/Request",children:(0,r.jsx)(n.code,{children:"Request"})})," is constructed and enqueued to the ",(0,r.jsx)(i.Z,{to:"core/class/RequestQueue",children:(0,r.jsx)(n.code,{children:"RequestQueue"})}),", this function can be used to skip it or modify its contents such as ",(0,r.jsx)(n.code,{children:"userData"}),", ",(0,r.jsx)(n.code,{children:"payload"})," or, most importantly, ",(0,r.jsx)(n.code,{children:"uniqueKey"}),". This is useful when you need to enqueue multiple requests to the queue, and these requests share the same URL, but differ in methods or payloads. Another use case is to dynamically update or create the ",(0,r.jsx)(n.code,{children:"userData"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"await enqueueLinks({\n    globs: ['http?(s)://apify.com/*/*'],\n    transformRequestFunction(req) {\n        // ignore all links ending with `.pdf`\n        if (req.url.endsWith('.pdf')) return false;\n        return req;\n    },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And that's it! ",(0,r.jsx)(n.code,{children:"enqueueLinks()"})," is just one example of Crawlee's powerful helper functions. They're all designed to make your life easier, so you can focus on getting your data, while leaving the mundane crawling management to the tools."]}),"\n",(0,r.jsx)(n.h2,{id:"next-lesson",children:"Next lesson"}),"\n",(0,r.jsx)(n.p,{children:"In the next lesson you will start your project of scraping a production website and learn some more Crawlee tricks in the process."})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(90512);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function a(e){var n=e.children,t=e.hidden,a=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},65488:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(67294),s=t(90512),i=t(12466),a=t(70989),l=t(72389);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var u=t(85893);function c(e){var n=e.className,t=e.block,r=e.selectedValue,a=e.selectValue,l=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var n=e.currentTarget,t=c.indexOf(n),s=l[t].value;s!==r&&(d(n),a(s))},p=function(e){var n,t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var r,s=c.indexOf(e.currentTarget)+1;t=null!=(r=c[s])?r:c[0];break;case"ArrowLeft":var i,a=c.indexOf(e.currentTarget)-1;t=null!=(i=c[a])?i:c[c.length-1]}null==(n=t)||n.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,u.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return c.push(e)},onKeyDown:p,onClick:h},i,{className:(0,s.Z)("tabs__item",o.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function d(e){var n=e.lazy,t=e.children,s=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var a=i.find((function(e){return e.props.value===s}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function h(e){var n=(0,a.Y)(e);return(0,u.jsxs)("div",{className:(0,s.Z)("tabs-container",o.tabList),children:[(0,u.jsx)(c,Object.assign({},e,n)),(0,u.jsx)(d,Object.assign({},e,n))]})}function p(e){var n=(0,l.Z)();return(0,u.jsx)(h,Object.assign({},e,{children:(0,a.h)(e.children)}),String(n))}},70989:(e,n,t)=>{t.d(n,{Y:()=>p,h:()=>u});var r=t(67294),s=t(16550),i=t(20469),a=t(91980),l=t(67392),o=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function c(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,l=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:i});return[(0,a._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function p(e){var n,t,s,a,l=e.defaultValue,u=e.queryString,p=void 0!==u&&u,m=e.groupId,w=c(e),f=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var s=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:l,tabValues:w})})),g=f[0],x=f[1],j=h({queryString:p,groupId:m}),v=j[0],y=j[1],b=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),t=(0,o.Nk)(n),s=t[0],a=t[1],[s,(0,r.useCallback)((function(e){n&&a.set(e)}),[n,a])]),q=b[0],k=b[1],L=function(){var e=null!=v?v:q;return d({value:e,tabValues:w})?e:null}();return(0,i.Z)((function(){L&&x(L)}),[L]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:w}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),k(e)}),[y,k,w]),tabValues:w}}},14959:(e,n,t)=>{t.d(n,{Z:()=>u});t(67294);var r=t(39960),s=t(74477),i=t(52263),a=t(85893),l=t(50643).version.split("."),o=[l[0],l[1]].join(".");const u=function(e){var n=e.to,t=e.children,l=(0,s.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||l.version===o?(0,a.jsx)(r.default,{to:"/api/"+n,children:t}):(0,a.jsx)(r.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+n,children:t})}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);