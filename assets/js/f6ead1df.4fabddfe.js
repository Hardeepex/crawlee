"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63678],{11106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>v,frontMatter:()=>h,metadata:()=>f,toc:()=>m});var n=r(85893),a=r(11151),o=r(65488),s=r(85162),i=r(93e3);const l="import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ page }) {\n        // page.locator points to an element in the DOM\n        // using a CSS selector, but it does not access it yet.\n        const actorCard = page.locator('.ActorStoreItem').first();\n        // Upon calling one of the locator methods Playwright\n        // waits for the element to render and then accesses it.\n        const actorText = await actorCard.textContent();\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n",c="import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ page }) {\n        // Here we don't wait for the selector and immediately\n        // extract the text content from the page.\n        const actorText = await page.$eval('.ActorStoreItem', (el) => {\n            return el.textContent;\n        });\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n",u="import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ page }) {\n        // Puppeteer does not have the automatic waiting functionality\n        // of Playwright, so we have to explicitly wait for the element.\n        await page.waitForSelector('.ActorStoreItem');\n        // Puppeteer does not have helper methods like locator.textContent,\n        // so we have to manually extract the value using in-page JavaScript.\n        const actorText = await page.$eval('.ActorStoreItem', (el) => {\n            return el.textContent;\n        });\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n",d="import { PuppeteerCrawler } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ page }) {\n        // Here we don't wait for the selector and immediately\n        // extract the text content from the page.\n        const actorText = await page.$eval('.ActorStoreItem', (el) => {\n            return el.textContent;\n        });\n        console.log(`ACTOR: ${actorText}`);\n    },\n});\n\nawait crawler.run(['https://apify.com/store']);\n",h={id:"javascript-rendering",title:"JavaScript rendering",description:"Your first steps into the world of scraping with Crawlee"},p=void 0,f={id:"guides/javascript-rendering",title:"JavaScript rendering",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.3/guides/javascript-rendering.mdx",sourceDirName:"guides",slug:"/guides/javascript-rendering",permalink:"/docs/3.3/guides/javascript-rendering",draft:!1,unlisted:!1,tags:[],version:"3.3",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"javascript-rendering",title:"JavaScript rendering",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"CheerioCrawler",permalink:"/docs/3.3/guides/cheerio-crawler-guide"},next:{title:"Proxy Management",permalink:"/docs/3.3/guides/proxy-management"}},g={},m=[{value:"Headless browsers",id:"headless-browsers",level:2},{value:"Waiting for elements to render",id:"waiting-for-elements-to-render",level:2},{value:"We&#39;re not kidding",id:"were-not-kidding",level:3}];function w(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"JavaScript rendering is the process of executing JavaScript on a page to make changes in the page's structure or content. It's also called client-side rendering, the opposite of server-side rendering. Some modern websites render on the client, some on the server and many cutting edge websites render some things on the server and other things on the client."}),"\n",(0,n.jsxs)(t.p,{children:["The Crawlee website does not use JavaScript rendering to display its content, so we have to look for an example elsewhere. ",(0,n.jsx)(t.a,{href:"https://apify.com/store",target:"_blank",rel:"noopener",children:"Apify Store"})," is a library of scrapers and automations called ",(0,n.jsx)(t.strong,{children:"actors"})," that anyone can grab and use for free. It uses JavaScript rendering to display the list of actors, so let's use it to demonstrate how it works."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="src/main.mjs"',children:"import { CheerioCrawler } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ $, request }) {\n        // Extract text content of an actor card\n        const actorText = $('.ActorStoreItem').text();\n        console.log(`ACTOR: ${actorText}`);\n    }\n})\n\nawait crawler.run(['https://apify.com/store']);\n"})}),"\n",(0,n.jsx)(t.p,{children:"Run the code, and you'll see that the crawler won't print the content of the actor card."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-log",children:"ACTOR:\n"})}),"\n",(0,n.jsxs)(t.p,{children:["That's because Apify Store uses client-side JavaScript to render its content and ",(0,n.jsx)(t.code,{children:"CheerioCrawler"})," can't execute it, so the text never appears in the page's HTML."]}),"\n",(0,n.jsxs)(t.p,{children:["You can confirm this using Chrome DevTools. If you go to ",(0,n.jsx)(t.a,{href:"https://apify.com/store",target:"_blank",rel:"noopener",children:"https://apify.com/store"}),", right-click anywhere in the page, select ",(0,n.jsx)(t.strong,{children:"View Page Source"})," and search for ",(0,n.jsx)(t.strong,{children:"ActorStoreItem"})," you won't find any results. Then, if you right-click again, select ",(0,n.jsx)(t.strong,{children:"Inspect"})," and search for the same ",(0,n.jsx)(t.strong,{children:"ActorStoreItem"}),", you will find many of them."]}),"\n",(0,n.jsxs)(t.p,{children:["How's this possible? Because ",(0,n.jsx)(t.strong,{children:"View Page Source"})," shows the original HTML, before any JavaScript executions. That's what ",(0,n.jsx)(t.code,{children:"CheerioCrawler"})," gets. Whereas with ",(0,n.jsx)(t.strong,{children:"Inspect"})," you see the current HTML - after JavaScript execution. When you understand this, it's not a huge surprise that ",(0,n.jsx)(t.code,{children:"CheerioCrawler"})," can't find the data. For that we need a headless browser."]}),"\n",(0,n.jsx)(t.h2,{id:"headless-browsers",children:"Headless browsers"}),"\n",(0,n.jsxs)(t.p,{children:["To get the contents of ",(0,n.jsx)(t.code,{children:".ActorStoreItem"}),", you will have to use a headless browser. You can choose from two libraries to control your browser: ",(0,n.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener",children:"Puppeteer"})," or ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener",children:"Playwright"}),". The choice is simple. If you know one of them, choose the one you know. If you know both, or none, choose Playwright, because it's better in most cases."]}),"\n",(0,n.jsx)(t.h2,{id:"waiting-for-elements-to-render",children:"Waiting for elements to render"}),"\n",(0,n.jsx)(t.p,{children:"No matter which library you pick, here's example code for both. Playwright is a little more pleasant to use, but both libraries will get the job done. The big difference between them is that Playwright will automatically wait for elements to appear, whereas in Puppeteer, you have to explicitly wait for them."}),"\n",(0,n.jsxs)(o.Z,{groupId:"javascript-rendering",children:[(0,n.jsx)(s.Z,{value:"playwright",label:"PlaywrightCrawler",children:(0,n.jsx)(i.default,{language:"js",title:"src/main.mjs",children:l})}),(0,n.jsx)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:(0,n.jsx)(i.default,{language:"js",title:"src/main.mjs",children:u})})]}),"\n",(0,n.jsxs)(t.p,{children:["When you run the code, you'll see the ",(0,n.jsx)(t.em,{children:"badly formatted"})," content of the first actor card printed to console:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-log",children:"ACTOR: Web Scraperapify/web-scraperCrawls arbitrary websites using [...]\n"})}),"\n",(0,n.jsx)(t.h3,{id:"were-not-kidding",children:"We're not kidding"}),"\n",(0,n.jsx)(t.p,{children:"If you don't believe us that the elements need to be waited for, run the following code which skips the waiting."}),"\n",(0,n.jsxs)(o.Z,{groupId:"javascript-rendering",children:[(0,n.jsx)(s.Z,{value:"playwright",label:"PlaywrightCrawler",children:(0,n.jsx)(i.default,{language:"js",title:"src/main.mjs",children:c})}),(0,n.jsx)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:(0,n.jsx)(i.default,{language:"js",title:"src/main.mjs",children:d})})]}),"\n",(0,n.jsx)(t.p,{children:"In both cases, the request will be retried a few times and eventually fail with an error like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-log",children:'ERROR [...] Error: failed to find element matching selector ".ActorStoreItem"\n'})}),"\n",(0,n.jsx)(t.p,{children:"That's because when you try to access the element in the browser, it's not been rendered in the DOM yet."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["This guide only touches the concept of JavaScript rendering and use of headless browsers. To learn more, continue with the ",(0,n.jsx)(t.a,{href:"https://developers.apify.com/academy/puppeteer-playwright",target:"_blank",rel:"noopener",children:"Puppeteer & Playwright course"})," in the Apify Academy. ",(0,n.jsx)(t.strong,{children:"It's free and open-source"})," \u2764\ufe0f."]})})]})}function v(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(w,{...e})}):w(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>s});r(67294);var n=r(90512);const a={tabItem:"tabItem_Ymn6"};var o=r(85893);function s(e){var t=e.children,r=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},65488:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(67294),a=r(90512),o=r(12466),s=r(70989),i=r(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=r(85893);function u(e){var t=e.className,r=e.block,n=e.selectedValue,s=e.selectValue,i=e.tabValues,u=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==n&&(d(t),s(a))},p=function(e){var t,r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var n,a=u.indexOf(e.currentTarget)+1;r=null!=(n=u[a])?n:u[0];break;case"ArrowLeft":var o,s=u.indexOf(e.currentTarget)-1;r=null!=(o=u[s])?o:u[u.length-1]}null==(t=r)||t.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:i.map((function(e){var t=e.value,r=e.label,o=e.attributes;return(0,c.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return u.push(e)},onKeyDown:p,onClick:h},o,{className:(0,a.Z)("tabs__item",l.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function d(e){var t=e.lazy,r=e.children,a=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===a}));return s?(0,n.cloneElement)(s,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function h(e){var t=(0,s.Y)(e);return(0,c.jsxs)("div",{className:(0,a.Z)("tabs-container",l.tabList),children:[(0,c.jsx)(u,Object.assign({},e,t)),(0,c.jsx)(d,Object.assign({},e,t))]})}function p(e){var t=(0,i.Z)();return(0,c.jsx)(h,Object.assign({},e,{children:(0,s.h)(e.children)}),String(t))}},70989:(e,t,r)=>{r.d(t,{Y:()=>p,h:()=>c});var n=r(67294),a=r(16550),o=r(20469),s=r(91980),i=r(67392),l=r(50012);function c(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function u(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return c(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,r=void 0!==t&&t,o=e.groupId,i=(0,a.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:o});return[(0,s._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function p(e){var t,r,a,s,i=e.defaultValue,c=e.queryString,p=void 0!==c&&c,f=e.groupId,g=u(e),m=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:g})})),w=m[0],v=m[1],b=h({queryString:p,groupId:f}),x=b[0],y=b[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),r=(0,l.Nk)(t),a=r[0],s=r[1],[a,(0,n.useCallback)((function(e){t&&s.set(e)}),[t,s])]),C=j[0],T=j[1],S=function(){var e=null!=x?x:C;return d({value:e,tabValues:g})?e:null}();return(0,o.Z)((function(){S&&v(S)}),[S]),{selectedValue:w,selectValue:(0,n.useCallback)((function(e){if(!d({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),T(e)}),[y,T,g]),tabValues:g}}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var n=r(67294);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);