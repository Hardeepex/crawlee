"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63731],{48965:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>b,contentTitle:()=>g,default:()=>k,frontMatter:()=>w,metadata:()=>y,toc:()=>x});var s=o(85893),t=o(11151),r=o(14959),a=o(65488),i=o(85162),l=o(93e3);const u="import { BasicCrawler, ProxyConfiguration } from 'crawlee';\nimport { gotScraping } from 'got-scraping';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new BasicCrawler({\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    async requestHandler({ request, session }) {\n        const { url } = request;\n        const requestOptions = {\n            url,\n            // We use session id in order to have the same proxyUrl\n            // for all the requests using the same session.\n            proxyUrl: await proxyConfiguration.newUrl(session.id),\n            throwHttpErrors: false,\n            headers: {\n                // If you want to use the cookieJar.\n                // This way you get the Cookie headers string from session.\n                Cookie: session.getCookieString(url),\n            },\n        };\n        let response;\n\n        try {\n            response = await gotScraping(requestOptions);\n        } catch (e) {\n            if (e === 'SomeNetworkError') {\n                // If a network error happens, such as timeout, socket hangup, etc.\n                // There is usually a chance that it was just bad luck\n                // and the proxy works. No need to throw it away.\n                session.markBad();\n            }\n            throw e;\n        }\n\n        // Automatically retires the session based on response HTTP status code.\n        session.retireOnBlockedStatusCodes(response.statusCode);\n\n        if (response.body.blocked) {\n            // You are sure it is blocked.\n            // This will throw away the session.\n            session.retire();\n        }\n\n        // Everything is ok, you can get the data.\n        // No need to call session.markGood -> BasicCrawler calls it for you.\n\n        // If you want to use the CookieJar in session you need.\n        session.setCookiesFromResponse(response);\n    },\n});\n",c="import { HttpCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new HttpCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, body }) {\n        const title = body.match(/<title(?:.*?)>(.*?)<\\/title>/)?.[1];\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n",d="import { CheerioCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new CheerioCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, $ }) {\n        const title = $('title').text();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n",p="import { JSDOMCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new JSDOMCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration.\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookie header to request automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ session, window }) {\n        const title = window.document.title;\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in BasicCrawler.\n        }\n    },\n});\n",h="import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PlaywrightCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookies to page before navigation automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ page, session }) {\n        const title = await page.title();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in PlaywrightCrawler.\n        }\n    },\n});\n",f="import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';\n\nconst proxyConfiguration = new ProxyConfiguration({ /* opts */ });\n\nconst crawler = new PuppeteerCrawler({\n    // To use the proxy IP session rotation logic, you must turn the proxy usage on.\n    proxyConfiguration,\n    // Activates the Session pool (default is true).\n    useSessionPool: true,\n    // Overrides default Session pool configuration\n    sessionPoolOptions: { maxPoolSize: 100 },\n    // Set to true if you want the crawler to save cookies per session,\n    // and set the cookies to page before navigation automatically (default is true).\n    persistCookiesPerSession: true,\n    async requestHandler({ page, session }) {\n        const title = await page.title();\n\n        if (title === 'Blocked') {\n            session.retire();\n        } else if (title === 'Not sure if blocked, might also be a connection error') {\n            session.markBad();\n        } else {\n            // session.markGood() - this step is done automatically in PuppeteerCrawler.\n        }\n    },\n});\n",m="import { SessionPool } from 'crawlee';\n\n// Override the default Session pool configuration.\nconst sessionPoolOptions = {\n    maxPoolSize: 100,\n};\n\n// Open Session Pool.\nconst sessionPool = await SessionPool.open(sessionPoolOptions);\n\n// Get session.\nconst session = await sessionPool.getSession();\n\n// Increase the errorScore.\nsession.markBad();\n\n// Throw away the session.\nsession.retire();\n\n// Lower the errorScore and mark the session good.\nsession.markGood();\n",w={id:"session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more"},g=void 0,y={id:"guides/session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more",source:"@site/versioned_docs/version-3.2/guides/session_management.mdx",sourceDirName:"guides",slug:"/guides/session-management",permalink:"/docs/3.2/guides/session-management",draft:!1,unlisted:!1,tags:[],version:"3.2",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"session-management",title:"Session Management",description:"How to manage your cookies, proxy IP rotations and more"},sidebar:"docs",previous:{title:"Proxy Management",permalink:"/docs/3.2/guides/proxy-management"},next:{title:"Scaling our crawlers",permalink:"/docs/3.2/guides/scaling-crawlers"}},b={},x=[];function v(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u200b",(0,s.jsx)(r.Z,{to:"core/class/SessionPool",children:(0,s.jsx)(n.code,{children:"SessionPool"})})," is a class that allows us to handle the rotation of proxy IP addresses along with cookies and other custom settings in Crawlee."]}),"\n",(0,s.jsx)(n.p,{children:"The main benefit of using Session pool is that we can filter out blocked or non-working proxies,\nso our actor does not retry requests over known blocked/non-working proxies.\nAnother benefit of using SessionPool is that we can store information tied tightly to an IP address,\nsuch as cookies, auth tokens, and particular headers. Having our cookies and other identifiers used only with a specific IP will reduce the chance of being blocked.\nThe last but not least benefit is the even rotation of IP addresses - SessionPool  picks the session randomly,\nwhich should prevent burning out a small pool of available IPs."}),"\n",(0,s.jsx)(n.p,{children:"Now let's take a look at the examples of how to use Session pool:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["with ",(0,s.jsx)(r.Z,{to:"basic-crawler/class/BasicCrawler",children:(0,s.jsx)(n.code,{children:"BasicCrawler"})}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["with ",(0,s.jsx)(r.Z,{to:"http-crawler/class/HttpCrawler",children:(0,s.jsx)(n.code,{children:"HttpCrawler"})}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["with ",(0,s.jsx)(r.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,s.jsx)(n.code,{children:"CheerioCrawler"})}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["with ",(0,s.jsx)(r.Z,{to:"jsdom-crawler/class/JSDOMCrawler",children:(0,s.jsx)(n.code,{children:"JSDOMCrawler"})}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["with ",(0,s.jsx)(r.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,s.jsx)(n.code,{children:"PlaywrightCrawler"})}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["with ",(0,s.jsx)(r.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,s.jsx)(n.code,{children:"PuppeteerCrawler"})}),";"]}),"\n",(0,s.jsx)(n.li,{children:"without a crawler (standalone usage to manage sessions manually)."}),"\n"]}),"\n",(0,s.jsxs)(a.Z,{groupId:"session_pool",children:[(0,s.jsx)(i.Z,{value:"basic",label:"BasicCrawler",children:(0,s.jsx)(l.default,{language:"js",children:u})}),(0,s.jsx)(i.Z,{value:"http",label:"HttpCrawler",children:(0,s.jsx)(l.default,{language:"js",children:c})}),(0,s.jsx)(i.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,children:(0,s.jsx)(l.default,{language:"js",children:d})}),(0,s.jsx)(i.Z,{value:"jsdom",label:"JSDOMCrawler",children:(0,s.jsx)(l.default,{language:"js",children:p})}),(0,s.jsx)(i.Z,{value:"playwright",label:"PlaywrightCrawler",children:(0,s.jsx)(l.default,{language:"js",children:h})}),(0,s.jsx)(i.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:(0,s.jsx)(l.default,{language:"js",children:f})}),(0,s.jsx)(i.Z,{value:"standalone",label:"Standalone",children:(0,s.jsx)(l.default,{language:"js",children:m})})]}),"\n",(0,s.jsx)(n.p,{children:"These are the basics of configuring SessionPool.\nPlease, bear in mind that a Session pool needs time to find working IPs and build up the pool,\nso we will probably see a lot of errors until it becomes stabilized."})]})}function k(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},85162:(e,n,o)=>{o.d(n,{Z:()=>a});o(67294);var s=o(90512);const t={tabItem:"tabItem_Ymn6"};var r=o(85893);function a(e){var n=e.children,o=e.hidden,a=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,a),hidden:o,children:n})}},65488:(e,n,o)=>{o.d(n,{Z:()=>h});var s=o(67294),t=o(90512),r=o(12466),a=o(70989),i=o(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var u=o(85893);function c(e){var n=e.className,o=e.block,s=e.selectedValue,a=e.selectValue,i=e.tabValues,c=[],d=(0,r.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,o=c.indexOf(n),t=i[o].value;t!==s&&(d(n),a(t))},h=function(e){var n,o=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var s,t=c.indexOf(e.currentTarget)+1;o=null!=(s=c[t])?s:c[0];break;case"ArrowLeft":var r,a=c.indexOf(e.currentTarget)-1;o=null!=(r=c[a])?r:c[c.length-1]}null==(n=o)||n.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":o},n),children:i.map((function(e){var n=e.value,o=e.label,r=e.attributes;return(0,u.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:p},r,{className:(0,t.Z)("tabs__item",l.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===n}),children:null!=o?o:n}),n)}))})}function d(e){var n=e.lazy,o=e.children,t=e.selectedValue,r=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){var a=r.find((function(e){return e.props.value===t}));return a?(0,s.cloneElement)(a,{className:"margin-top--md"}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function p(e){var n=(0,a.Y)(e);return(0,u.jsxs)("div",{className:(0,t.Z)("tabs-container",l.tabList),children:[(0,u.jsx)(c,Object.assign({},e,n)),(0,u.jsx)(d,Object.assign({},e,n))]})}function h(e){var n=(0,i.Z)();return(0,u.jsx)(p,Object.assign({},e,{children:(0,a.h)(e.children)}),String(n))}},70989:(e,n,o)=>{o.d(n,{Y:()=>h,h:()=>u});var s=o(67294),t=o(16550),r=o(20469),a=o(91980),i=o(67392),l=o(50012);function u(e){var n,o;return null!=(n=null==(o=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:o.filter(Boolean))?n:[]}function c(e){var n=e.values,o=e.children;return(0,s.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(o);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,o])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,o=void 0!==n&&n,r=e.groupId,i=(0,t.k6)(),l=function(e){var n=e.queryString,o=void 0!==n&&n,s=e.groupId;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:o,groupId:r});return[(0,a._X)(l),(0,s.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function h(e){var n,o,t,a,i=e.defaultValue,u=e.queryString,h=void 0!==u&&u,f=e.groupId,m=c(e),w=(0,s.useState)((function(){return function(e){var n,o=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!d({value:o,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+o+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return o}var t=null!=(n=s.find((function(e){return e.default})))?n:s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:m})})),g=w[0],y=w[1],b=p({queryString:h,groupId:f}),x=b[0],v=b[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),o=(0,l.Nk)(n),t=o[0],a=o[1],[t,(0,s.useCallback)((function(e){n&&a.set(e)}),[n,a])]),C=k[0],j=k[1],P=function(){var e=null!=x?x:C;return d({value:e,tabValues:m})?e:null}();return(0,r.Z)((function(){P&&y(P)}),[P]),{selectedValue:g,selectValue:(0,s.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);y(e),v(e),j(e)}),[v,j,m]),tabValues:m}}},14959:(e,n,o)=>{o.d(n,{Z:()=>u});o(67294);var s=o(39960),t=o(74477),r=o(52263),a=o(85893),i=o(50643).version.split("."),l=[i[0],i[1]].join(".");const u=function(e){var n=e.to,o=e.children,i=(0,t.E)();return(0,r.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===l?(0,a.jsx)(s.default,{to:"/api/"+n,children:o}):(0,a.jsx)(s.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+n,children:o})}},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>a});var s=o(67294);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);