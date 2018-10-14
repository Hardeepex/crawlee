"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97444],{17141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>w,contentTitle:()=>m,default:()=>y,frontMatter:()=>h,metadata:()=>p,toc:()=>f});var a=t(85893),r=t(11151),l=t(65488),i=t(85162),s=t(93e3),o=t(14959);const u="import { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'all' will enqueue all links found\n            // highlight-next-line\n            strategy: EnqueueStrategy.All,\n            // Alternatively, you can pass in the string 'all'\n            // strategy: 'all',\n        });\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",c="import { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'same-domain' will enqueue all links found that are on the\n            // same hostname as request.loadedUrl or request.url\n            // highlight-next-line\n            strategy: EnqueueStrategy.SameDomain,\n            // Alternatively, you can pass in the string 'same-domain'\n            // strategy: 'same-domain',\n        });\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",d="import { CheerioCrawler, EnqueueStrategy } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        await enqueueLinks({\n            // Setting the strategy to 'same-hostname' will enqueue all links found that are on the\n            // same hostname (including subdomain) as request.loadedUrl or request.url\n            // highlight-next-line\n            strategy: EnqueueStrategy.SameHostname,\n            // Alternatively, you can pass in the string 'same-hostname'\n            // strategy: 'same-hostname',\n        });\n    },\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",h={id:"crawl-relative-links",title:"Crawl a website with relative links"},m=void 0,p={id:"examples/crawl-relative-links",title:"Crawl a website with relative links",description:"When crawling a website, you may encounter different types of links present that you may want to crawl.",source:"@site/versioned_docs/version-3.2/examples/crawl_relative_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-relative-links",permalink:"/docs/3.2/examples/crawl-relative-links",draft:!1,unlisted:!1,tags:[],version:"3.2",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"crawl-relative-links",title:"Crawl a website with relative links"},sidebar:"docs",previous:{title:"Crawl multiple URLs",permalink:"/docs/3.2/examples/crawl-multiple-urls"},next:{title:"Crawl a single URL",permalink:"/docs/3.2/examples/crawl-single-url"}},w={},f=[];function g(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["When crawling a website, you may encounter different types of links present that you may want to crawl.\nTo facilitate the easy crawling of such links, we provide the ",(0,a.jsx)(n.code,{children:"enqueueLinks()"})," method on the crawler context, which will\nautomatically find links and add them to the crawler's ",(0,a.jsx)(o.Z,{to:"core/class/RequestQueue",children:(0,a.jsx)(n.code,{children:"RequestQueue"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"We provide 3 different strategies for crawling relative links:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(o.Z,{to:"core/enum/EnqueueStrategy#All",children:[(0,a.jsx)("inlineCode",{children:"All"})," (or the string ",(0,a.jsx)("inlineCode",{children:'"all"'}),")"]})," which will\nenqueue all links found, regardless of the domain they point to."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(o.Z,{to:"core/enum/EnqueueStrategy#SameHostname",children:[(0,a.jsx)("inlineCode",{children:"SameHostname"})," (or the string ",(0,a.jsx)("inlineCode",{children:'"same-hostname"'}),")"]})," which\nwill enqueue all links found for the same hostname. This is the default strategy."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(o.Z,{to:"core/enum/EnqueueStrategy#SameDomain",children:[(0,a.jsx)("inlineCode",{children:"SameDomain"})," (or the string ",(0,a.jsx)("inlineCode",{children:'"same-domain"'}),")"]})," which\nwill enqueue all links found that have the same domain name, including links from any possible subdomain."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["For these examples, we are using the ",(0,a.jsx)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,a.jsx)(n.code,{children:"CheerioCrawler"})}),", however\nthe same method is available for both the ",(0,a.jsx)(o.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,a.jsx)(n.code,{children:"PuppeteerCrawler"})}),"\nand ",(0,a.jsx)(o.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,a.jsx)(n.code,{children:"PlaywrightCrawler"})}),", and you use it\nthe exact same way."]})}),"\n",(0,a.jsxs)(l.Z,{groupId:"enqueue_strategy",children:[(0,a.jsxs)(i.Z,{value:"all",label:"All Links",children:[(0,a.jsx)(n.admonition,{title:"Example domains",type:"note",children:(0,a.jsx)(n.p,{children:"Any urls found will be matched by this strategy, even if they go off of the site you are currently crawling."})}),(0,a.jsx)(s.default,{className:"language-js",children:u})]}),(0,a.jsxs)(i.Z,{value:"same_hostname",label:"Same Hostname",children:[(0,a.jsxs)(n.admonition,{title:"Example domains",type:"note",children:[(0,a.jsxs)(n.p,{children:["For a url of ",(0,a.jsx)(n.code,{children:"https://example.com"}),", ",(0,a.jsx)(n.code,{children:"enqueueLinks()"})," will match relative urls and urls that point to the same\nhostname."]}),(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["This is the default strategy when calling ",(0,a.jsx)(n.code,{children:"enqueueLinks()"}),", so you don't have to specify it."]}),"\n"]}),(0,a.jsxs)(n.p,{children:["For instance, hyperlinks like ",(0,a.jsx)(n.code,{children:"https://example.com/some/path"}),", ",(0,a.jsx)(n.code,{children:"/absolute/example"})," or ",(0,a.jsx)(n.code,{children:"./relative/example"})," will all be matched by this strategy. But links to any subdomain like ",(0,a.jsx)(n.code,{children:"https://subdomain.example.com/some/path"})," won't."]})]}),(0,a.jsx)(s.default,{className:"language-js",children:d})]}),(0,a.jsxs)(i.Z,{value:"same-subdomain",label:"Same Subdomain",default:!0,children:[(0,a.jsxs)(n.admonition,{title:"Example domains",type:"note",children:[(0,a.jsxs)(n.p,{children:["For a url of ",(0,a.jsx)(n.code,{children:"https://subdomain.example.com"}),", ",(0,a.jsx)(n.code,{children:"enqueueLinks()"})," will match relative urls or urls that point to the same domain name, regardless of their subdomain."]}),(0,a.jsxs)(n.p,{children:["For instance, hyperlinks like ",(0,a.jsx)(n.code,{children:"https://subdomain.example.com/some/path"}),", ",(0,a.jsx)(n.code,{children:"/absolute/example"})," or ",(0,a.jsx)(n.code,{children:"./relative/example"})," will all be matched by this strategy, as well as links to other subdomains or to the naked domain, like ",(0,a.jsx)(n.code,{children:"https://other-subdomain.example.com"})," or ",(0,a.jsx)(n.code,{children:"https://example.com"})," will work too."]})]}),(0,a.jsx)(s.default,{className:"language-js",children:c})]})]})]})}function y(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(90512);const r={tabItem:"tabItem_Ymn6"};var l=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(67294),r=t(90512),l=t(12466),i=t(70989),s=t(72389);const o={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var u=t(85893);function c(e){var n=e.className,t=e.block,a=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==a&&(d(n),i(r))},m=function(e){var n,t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;t=null!=(l=c[i])?l:c[c.length-1]}null==(n=t)||n.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,u.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:m,onClick:h},l,{className:(0,r.Z)("tabs__item",o.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function d(e){var n=e.lazy,t=e.children,r=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=l.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function h(e){var n=(0,i.Y)(e);return(0,u.jsxs)("div",{className:(0,r.Z)("tabs-container",o.tabList),children:[(0,u.jsx)(c,Object.assign({},e,n)),(0,u.jsx)(d,Object.assign({},e,n))]})}function m(e){var n=(0,s.Z)();return(0,u.jsx)(h,Object.assign({},e,{children:(0,i.h)(e.children)}),String(n))}},70989:(e,n,t)=>{t.d(n,{Y:()=>m,h:()=>u});var a=t(67294),r=t(16550),l=t(20469),i=t(91980),s=t(67392),o=t(50012);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function c(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,l=e.groupId,s=(0,r.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:l});return[(0,i._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function m(e){var n,t,r,i,s=e.defaultValue,u=e.queryString,m=void 0!==u&&u,p=e.groupId,w=c(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:w})})),g=f[0],y=f[1],x=h({queryString:m,groupId:p}),b=x[0],v=x[1],j=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),t=(0,o.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=j[0],q=j[1],C=function(){var e=null!=b?b:k;return d({value:e,tabValues:w})?e:null}();return(0,l.Z)((function(){C&&y(C)}),[C]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:w}))throw new Error("Can't select invalid tab value="+e);y(e),v(e),q(e)}),[v,q,w]),tabValues:w}}},14959:(e,n,t)=>{t.d(n,{Z:()=>u});t(67294);var a=t(39960),r=t(74477),l=t(52263),i=t(85893),s=t(50643).version.split("."),o=[s[0],s[1]].join(".");const u=function(e){var n=e.to,t=e.children,s=(0,r.E)();return(0,l.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===o?(0,i.jsx)(a.default,{to:"/api/"+n,children:t}):(0,i.jsx)(a.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+n,children:t})}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(67294);const r={},l=a.createContext(r);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);