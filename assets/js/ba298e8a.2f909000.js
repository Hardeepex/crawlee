"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67460],{88163:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>I,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var t=r(85893),a=r(11151),l=r(65488),i=r(85162),s=r(15316),c=r(14959);const o={code:"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IENoZWVyaW9DcmF3bGVyIH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBDaGVlcmlvQ3Jhd2xlcih7XFxuICAgIGFzeW5jIHJlcXVlc3RIYW5kbGVyKHsgcmVxdWVzdCwgZW5xdWV1ZUxpbmtzLCBsb2cgfSkge1xcbiAgICAgICAgbG9nLmluZm8ocmVxdWVzdC51cmwpO1xcbiAgICAgICAgLy8gQWRkIGFsbCBsaW5rcyBmcm9tIHBhZ2UgdG8gUmVxdWVzdFF1ZXVlXFxuICAgICAgICBhd2FpdCBlbnF1ZXVlTGlua3MoKTtcXG4gICAgfSxcXG4gICAgbWF4UmVxdWVzdHNQZXJDcmF3bDogMTAsIC8vIExpbWl0YXRpb24gZm9yIG9ubHkgMTAgcmVxdWVzdHMgKGRvIG5vdCB1c2UgaWYgeW91IHdhbnQgdG8gY3Jhd2wgYWxsIGxpbmtzKVxcbn0pO1xcblxcbi8vIFJ1biB0aGUgY3Jhd2xlciB3aXRoIGluaXRpYWwgcmVxdWVzdFxcbmF3YWl0IGNyYXdsZXIucnVuKFsnaHR0cHM6Ly9jcmF3bGVlLmRldiddKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5IjoxMDI0LCJ0aW1lb3V0IjoxODB9fQ.LBIV5tC8xatPLd7liUmYWtCnUL8bFQBt6Eq8fnylMkg"},u={code:"import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IFB1cHBldGVlckNyYXdsZXIgfSBmcm9tICdjcmF3bGVlJztcXG5cXG5jb25zdCBjcmF3bGVyID0gbmV3IFB1cHBldGVlckNyYXdsZXIoe1xcbiAgICBhc3luYyByZXF1ZXN0SGFuZGxlcih7IHJlcXVlc3QsIGVucXVldWVMaW5rcywgbG9nIH0pIHtcXG4gICAgICAgIGxvZy5pbmZvKHJlcXVlc3QudXJsKTtcXG4gICAgICAgIC8vIEFkZCBhbGwgbGlua3MgZnJvbSBwYWdlIHRvIFJlcXVlc3RRdWV1ZVxcbiAgICAgICAgYXdhaXQgZW5xdWV1ZUxpbmtzKCk7XFxuICAgIH0sXFxuICAgIG1heFJlcXVlc3RzUGVyQ3Jhd2w6IDEwLCAvLyBMaW1pdGF0aW9uIGZvciBvbmx5IDEwIHJlcXVlc3RzIChkbyBub3QgdXNlIGlmIHlvdSB3YW50IHRvIGNyYXdsIGFsbCBsaW5rcylcXG59KTtcXG5cXG4vLyBSdW4gdGhlIGNyYXdsZXIgd2l0aCBpbml0aWFsIHJlcXVlc3RcXG5hd2FpdCBjcmF3bGVyLnJ1bihbJ2h0dHBzOi8vY3Jhd2xlZS5kZXYnXSk7XFxuXCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6NDA5NiwidGltZW91dCI6MTgwfX0.G2vsd_Fgpa50zBrg6m9S-dTzY4pzWTkAxqe6CzZtX5k"},d={code:"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, enqueueLinks, log }) {\n        log.info(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler with initial request\nawait crawler.run(['https://crawlee.dev']);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IFBsYXl3cmlnaHRDcmF3bGVyIH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBQbGF5d3JpZ2h0Q3Jhd2xlcih7XFxuICAgIGFzeW5jIHJlcXVlc3RIYW5kbGVyKHsgcmVxdWVzdCwgZW5xdWV1ZUxpbmtzLCBsb2cgfSkge1xcbiAgICAgICAgbG9nLmluZm8ocmVxdWVzdC51cmwpO1xcbiAgICAgICAgLy8gQWRkIGFsbCBsaW5rcyBmcm9tIHBhZ2UgdG8gUmVxdWVzdFF1ZXVlXFxuICAgICAgICBhd2FpdCBlbnF1ZXVlTGlua3MoKTtcXG4gICAgfSxcXG4gICAgbWF4UmVxdWVzdHNQZXJDcmF3bDogMTAsIC8vIExpbWl0YXRpb24gZm9yIG9ubHkgMTAgcmVxdWVzdHMgKGRvIG5vdCB1c2UgaWYgeW91IHdhbnQgdG8gY3Jhd2wgYWxsIGxpbmtzKVxcbn0pO1xcblxcbi8vIFJ1biB0aGUgY3Jhd2xlciB3aXRoIGluaXRpYWwgcmVxdWVzdFxcbmF3YWl0IGNyYXdsZXIucnVuKFsnaHR0cHM6Ly9jcmF3bGVlLmRldiddKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5Ijo0MDk2LCJ0aW1lb3V0IjoxODB9fQ.NdlPlyegNit9Kua8PQcBs0l9SELlDds4jvMbM0_tnhc"},p={id:"crawl-all-links",title:"Crawl all links on a website"},h=void 0,m={id:"examples/crawl-all-links",title:"Crawl all links on a website",description:"This example uses the enqueueLinks() method to add new links to the RequestQueue",source:"@site/versioned_docs/version-3.6/examples/crawl_all_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-all-links",permalink:"/docs/3.6/examples/crawl-all-links",draft:!1,unlisted:!1,tags:[],version:"3.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"crawl-all-links",title:"Crawl all links on a website"},sidebar:"docs",previous:{title:"Cheerio crawler",permalink:"/docs/3.6/examples/cheerio-crawler"},next:{title:"Crawl multiple URLs",permalink:"/docs/3.6/examples/crawl-multiple-urls"}},b={},g=[];function f(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This example uses the ",(0,t.jsx)(n.code,{children:"enqueueLinks()"})," method to add new links to the ",(0,t.jsx)(n.code,{children:"RequestQueue"}),"\nas the crawler navigates from page to page."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If no options are given, by default the method will only add links that are under the same subdomain. This behavior can be controlled with the ",(0,t.jsx)(c.Z,{to:"core/interface/EnqueueLinksOptions#strategy",children:(0,t.jsx)(n.code,{children:"strategy"})}),"\noption. You can find more info about this option in the ",(0,t.jsx)(n.a,{href:"./crawl-relative-links",children:(0,t.jsx)(n.code,{children:"Crawl relative links"})})," examples."]})}),"\n",(0,t.jsxs)(l.Z,{groupId:"crawler-type",children:[(0,t.jsx)(i.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,children:(0,t.jsx)(s.Z,{className:"language-js",type:"cheerio",children:o})}),(0,t.jsxs)(i.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["To run this example on the Apify Platform, select the ",(0,t.jsx)(n.code,{children:"apify/actor-node-puppeteer-chrome"})," image for your Dockerfile."]})}),(0,t.jsx)(s.Z,{className:"language-js",type:"puppeteer",children:u})]}),(0,t.jsxs)(i.Z,{value:"playwright_crawler",label:"Playwright Crawler",children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["To run this example on the Apify Platform, select the ",(0,t.jsx)(n.code,{children:"apify/actor-node-playwright-chrome"})," image for your Dockerfile."]})}),(0,t.jsx)(s.Z,{className:"language-js",type:"playwright",children:d})]})]})]})}function I(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(90512);const a={tabItem:"tabItem_Ymn6"};var l=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},65488:(e,n,r)=>{r.d(n,{Z:()=>h});var t=r(67294),a=r(90512),l=r(12466),i=r(70989),s=r(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var o=r(85893);function u(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,u=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,r=u.indexOf(n),a=s[r].value;a!==t&&(d(n),i(a))},h=function(e){var n,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var t,a=u.indexOf(e.currentTarget)+1;r=null!=(t=u[a])?t:u[0];break;case"ArrowLeft":var l,i=u.indexOf(e.currentTarget)-1;r=null!=(l=u[i])?l:u[u.length-1]}null==(n=r)||n.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,l=e.attributes;return(0,o.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return u.push(e)},onKeyDown:h,onClick:p},l,{className:(0,a.Z)("tabs__item",c.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function d(e){var n=e.lazy,r=e.children,a=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=l.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function p(e){var n=(0,i.Y)(e);return(0,o.jsxs)("div",{className:(0,a.Z)("tabs-container",c.tabList),children:[(0,o.jsx)(u,Object.assign({},e,n)),(0,o.jsx)(d,Object.assign({},e,n))]})}function h(e){var n=(0,s.Z)();return(0,o.jsx)(p,Object.assign({},e,{children:(0,i.h)(e.children)}),String(n))}},70989:(e,n,r)=>{r.d(n,{Y:()=>h,h:()=>o});var t=r(67294),a=r(16550),l=r(20469),i=r(91980),s=r(67392),c=r(50012);function o(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function u(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return o(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,r=void 0!==n&&n,l=e.groupId,s=(0,a.k6)(),c=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:l});return[(0,i._X)(c),(0,t.useCallback)((function(e){if(c){var n=new URLSearchParams(s.location.search);n.set(c,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[c,s])]}function h(e){var n,r,a,i,s=e.defaultValue,o=e.queryString,h=void 0!==o&&o,m=e.groupId,b=u(e),g=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:b})})),f=g[0],I=g[1],w=p({queryString:h,groupId:m}),x=w[0],v=w[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,c.Nk)(n),a=r[0],i=r[1],[a,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),C=y[0],V=y[1],j=function(){var e=null!=x?x:C;return d({value:e,tabValues:b})?e:null}();return(0,l.Z)((function(){j&&I(j)}),[j]),{selectedValue:f,selectValue:(0,t.useCallback)((function(e){if(!d({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);I(e),v(e),V(e)}),[v,V,b]),tabValues:b}}},14959:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var t=r(39960),a=r(74477),l=r(52263),i=r(85893),s=r(50643).version.split("."),c=[s[0],s[1]].join(".");const o=function(e){var n=e.to,r=e.children,s=(0,a.E)();return(0,l.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===c?(0,i.jsx)(t.default,{to:"/api/"+n,children:r}):(0,i.jsx)(t.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+n,children:r})}},15316:(e,n,r)=>{r.d(n,{Z:()=>d});var t=r(63366),a=(r(67294),r(90512)),l=r(93e3),i=r(39960);const s={button:"button_YBBj",container:"container_TGAW"};var c=r(85893),o=["children","actor","hash","type"],u={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const d=function(e){var n,r=e.children,d=e.actor,p=e.hash,h=e.type,m=(0,t.Z)(e,o);if(p=null!=(n=p)?n:r.hash,!r.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!p)return(0,c.jsx)(l.default,Object.assign({},m,{children:r.code}));var b="https://console.apify.com/actors/"+(null!=d?d:u[null!=h?h:"playwright"])+"?runConfig="+p+"&asrc=run_on_apify";return(0,c.jsxs)("div",{className:(0,a.Z)(s.container,"runnable-code-block"),children:[(0,c.jsxs)(i.default,{href:b,className:s.button,rel:"follow",children:["Run on",(0,c.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,c.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,c.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,c.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,c.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,c.jsx)(l.default,Object.assign({},m,{className:(0,a.Z)(s.codeBlock,"code-block",null!=m.title?"has-title":"no-title"),children:r.code}))]})}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(67294);const a={},l=t.createContext(a);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);