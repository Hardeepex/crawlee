"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90428],{77329:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>f,contentTitle:()=>h,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>y});var t=r(85893),o=r(11151),a=r(14959),i=r(65488),s=r(85162),l=r(93e3);const c="import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.main(async () => {\n    const crawler = new CheerioCrawler({\n        async requestHandler({ request, $, enqueueLinks }) {\n            const { url } = request;\n\n            // Extract HTML title of the page.\n            const title = $('title').text();\n            console.log(`Title of ${url}: ${title}`);\n\n            // Add URLs that match the provided pattern.\n            await enqueueLinks({\n                globs: ['https://www.iana.org/*'],\n            });\n\n            // Save extracted data to dataset.\n            await Actor.pushData({ url, title });\n        },\n    });\n\n    // Enqueue the initial request and run the crawler\n    await crawler.run(['https://www.iana.org/']);\n});\n",d="import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ request, $, enqueueLinks }) {\n        const { url } = request;\n\n        // Extract HTML title of the page.\n        const title = $('title').text();\n        console.log(`Title of ${url}: ${title}`);\n\n        // Add URLs that match the provided pattern.\n        await enqueueLinks({\n            globs: ['https://www.iana.org/*'],\n        });\n\n        // Save extracted data to dataset.\n        await Actor.pushData({ url, title });\n    },\n});\n\n// Enqueue the initial request and run the crawler\nawait crawler.run(['https://www.iana.org/']);\n\nawait Actor.exit();\n",p={id:"apify-platform",title:"Apify Platform",description:"Apify platform - large-scale and high-performance web scraping"},h=void 0,u={id:"guides/apify-platform",title:"Apify Platform",description:"Apify platform - large-scale and high-performance web scraping",source:"@site/versioned_docs/version-3.1/guides/apify_platform.mdx",sourceDirName:"guides",slug:"/guides/apify-platform",permalink:"/docs/3.1/guides/apify-platform",draft:!1,unlisted:!1,tags:[],version:"3.1",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"apify-platform",title:"Apify Platform",description:"Apify platform - large-scale and high-performance web scraping"},sidebar:"docs",previous:{title:"Running in Docker",permalink:"/docs/3.1/guides/docker-images"},next:{title:"Deployment",permalink:"/docs/3.1/deployment"}},f={},y=[{value:"Logging into Apify platform from Crawlee",id:"logging-into-apify-platform-from-crawlee",level:2},{value:"Log in with CLI",id:"log-in-with-cli",level:3},{value:"Log in with environment variables",id:"log-in-with-environment-variables",level:3},{value:"Log in with Configuration",id:"log-in-with-configuration",level:3},{value:"What is an actor",id:"what-is-an-actor",level:2},{value:"Running an actor locally",id:"running-an-actor-locally",level:2},{value:"Running Crawlee code as an actor",id:"running-crawlee-code-as-an-actor",level:2},{value:"Deploying an actor to Apify platform",id:"deploying-an-actor-to-apify-platform",level:2},{value:"Usage on Apify platform",id:"usage-on-apify-platform",level:2},{value:"Storages",id:"storages",level:2},{value:"Helper functions for default Key-Value Store and Dataset",id:"helper-functions-for-default-key-value-store-and-dataset",level:3},{value:"Using platform storage in a local actor",id:"using-platform-storage-in-a-local-actor",level:3},{value:"Getting public url of an item in the platform storage",id:"getting-public-url-of-an-item-in-the-platform-storage",level:3},{value:"Exporting dataset data",id:"exporting-dataset-data",level:3},{value:"Environment variables",id:"environment-variables",level:2},{value:"<code>APIFY_TOKEN</code>",id:"apify_token",level:3},{value:"Combinations of <code>APIFY_TOKEN</code> and <code>CRAWLEE_STORAGE_DIR</code>",id:"combinations-of-apify_token-and-crawlee_storage_dir",level:3},{value:"<code>APIFY_PROXY_PASSWORD</code>",id:"apify_proxy_password",level:3},{value:"Proxy management",id:"proxy-management",level:2},{value:"Apify Proxy",id:"apify-proxy",level:3},{value:"Apify Proxy Configuration",id:"apify-proxy-configuration",level:3},{value:"Apify Proxy vs. Own proxies",id:"apify-proxy-vs-own-proxies",level:3}];function x(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Apify is a ",(0,t.jsx)(n.a,{href:"https://apify.com",target:"_blank",rel:"noopener",children:"platform"})," built to serve large-scale and high-performance web scraping\nand automation needs. It provides easy access to ",(0,t.jsx)(n.a,{href:"#what-is-an-actor",children:"compute instances (Actors)"}),",\nconvenient ",(0,t.jsx)(n.a,{href:"../guides/request-storage",children:"request"})," and ",(0,t.jsx)(n.a,{href:"../guides/result-storage",children:"result"})," storages, ",(0,t.jsx)(n.a,{href:"../guides/proxy-management",children:"proxies"}),",\n",(0,t.jsx)(n.a,{href:"https://docs.apify.com/scheduler",target:"_blank",rel:"noopener",children:"scheduling"}),", ",(0,t.jsx)(n.a,{href:"https://docs.apify.com/webhooks",target:"_blank",rel:"noopener",children:"webhooks"}),"\nand ",(0,t.jsx)(n.a,{href:"https://docs.apify.com/",target:"_blank",rel:"noopener",children:"more"}),", accessible through a ",(0,t.jsx)(n.a,{href:"https://console.apify.com",target:"_blank",rel:"noopener",children:"web interface"}),"\nor an ",(0,t.jsx)(n.a,{href:"https://docs.apify.com/api",target:"_blank",rel:"noopener",children:"API"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["While we think that the Apify platform is super cool, and it's definitely worth signing up for a\n",(0,t.jsx)(n.a,{href:"https://console.apify.com/sign-up",target:"_blank",rel:"noopener",children:"free account"}),", ",(0,t.jsx)(n.strong,{children:"Crawlee is and will always be open source"}),",\nrunnable locally or on any cloud infrastructure."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"We do not test Crawlee in other cloud environments such as Lambda or on specific\narchitectures such as Raspberry PI. We strive to make it work, but there are no guarantees."})}),"\n",(0,t.jsx)(n.h2,{id:"logging-into-apify-platform-from-crawlee",children:"Logging into Apify platform from Crawlee"}),"\n",(0,t.jsxs)(n.p,{children:["To access your ",(0,t.jsx)(n.a,{href:"https://console.apify.com/sign-up",target:"_blank",rel:"noopener",children:"Apify account"})," from Crawlee, you must provide\ncredentials - your ",(0,t.jsx)(n.a,{href:"https://console.apify.com/account?tab=integrations",target:"_blank",rel:"noopener",children:"API token"}),". You can do that\neither by utilizing ",(0,t.jsx)(n.a,{href:"https://github.com/apify/apify-cli",target:"_blank",rel:"noopener",children:"Apify CLI"})," or with environment\nvariables."]}),"\n",(0,t.jsx)(n.p,{children:"Once you provide credentials to your scraper, you will be able to use all the Apify platform\nfeatures, such as calling actors, saving to cloud storages, using Apify proxies,\nsetting up webhooks and so on."}),"\n",(0,t.jsx)(n.h3,{id:"log-in-with-cli",children:"Log in with CLI"}),"\n",(0,t.jsx)(n.p,{children:"Apify CLI allows you to log in to your Apify account on your computer. If you then run your\nscraper using the CLI, your credentials will automatically be added."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -g apify-cli\napify login -t YOUR_API_TOKEN\n"})}),"\n",(0,t.jsx)(n.h3,{id:"log-in-with-environment-variables",children:"Log in with environment variables"}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can always provide credentials to your scraper\nby setting the ",(0,t.jsx)(n.a,{href:"#apify_token",children:(0,t.jsx)(n.code,{children:"APIFY_TOKEN"})})," environment\nvariable to your API token."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["There's also the ",(0,t.jsx)(n.a,{href:"#apify_proxy_password",children:(0,t.jsx)(n.code,{children:"APIFY_PROXY_PASSWORD"})}),"\nenvironment variable. Actor automatically infers that from your token, but it can be useful\nwhen you need to access proxies from a different account than your token represents."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"log-in-with-configuration",children:"Log in with Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Another option is to use the ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Configuration",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Configuration"})})," instance and set your api token there."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { Actor } from 'apify';\n\nconst sdk = new Actor({ token: 'your_api_token' });\n"})}),"\n",(0,t.jsx)(n.h2,{id:"what-is-an-actor",children:"What is an actor"}),"\n",(0,t.jsxs)(n.p,{children:["When you deploy your script to the Apify platform, it becomes an ",(0,t.jsx)(n.a,{href:"https://apify.com/actors",target:"_blank",rel:"noopener",children:"actor"}),".\nAn actor is a serverless microservice that accepts an input and produces an output. It can run for\na few seconds, hours or even infinitely. An actor can perform anything from a simple action such\nas filling out a web form or sending an email, to complex operations such as crawling an entire website\nand removing duplicates from a large dataset."]}),"\n",(0,t.jsxs)(n.p,{children:["Actors can be shared in the ",(0,t.jsx)(n.a,{href:"https://apify.com/store",target:"_blank",rel:"noopener",children:"Apify Store"})," so that other people can use them.\nBut don't worry, if you share your actor in the store and somebody uses it, it runs under their account,\nnot yours."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Related links"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://apify.com/store",target:"_blank",rel:"noopener",children:"Store of existing actors"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.apify.com/actors",target:"_blank",rel:"noopener",children:"Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://console.apify.com/actors",target:"_blank",rel:"noopener",children:"View actors in Apify Console"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://apify.com/docs/api/v2#/reference/actors",target:"_blank",rel:"noopener",children:"API reference"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-an-actor-locally",children:"Running an actor locally"}),"\n",(0,t.jsx)(n.p,{children:"First let's create a boilerplate of the new actor. You could use Apify CLI and just run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apify create my-hello-world\n"})}),"\n",(0,t.jsxs)(n.p,{children:['The CLI will prompt you to select a project boilerplate template - let\'s pick "Hello world". The tool will create a directory called ',(0,t.jsx)(n.code,{children:"my-hello-world"})," with a Node.js project files. You can run the actor as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my-hello-world\napify run\n"})}),"\n",(0,t.jsx)(n.h2,{id:"running-crawlee-code-as-an-actor",children:"Running Crawlee code as an actor"}),"\n",(0,t.jsxs)(n.p,{children:["For running Crawlee code as an actor on ",(0,t.jsx)(n.a,{href:"https://apify.com/actors",target:"_blank",rel:"noopener",children:"Apify platform"})," you should either:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["use a combination of ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#init",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.init()"})})," and ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#exit",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.exit()"})})," functions;"]}),"\n",(0,t.jsxs)(n.li,{children:["or wrap it into ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#main",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.main()"})})," function."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"NOTE",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Adding ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#init",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.init()"})})," and ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#exit",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.exit()"})})," to your code are the only two important things needed to run it on Apify platform as an actor. ",(0,t.jsx)(n.code,{children:"Actor.init()"})," is needed to initialize your actor (e.g. to set the correct storage implementation), while without ",(0,t.jsx)(n.code,{children:"Actor.exit()"})," the process will simply never stop."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#main",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.main()"})})," is an alternative to ",(0,t.jsx)(n.code,{children:"Actor.init()"})," and ",(0,t.jsx)(n.code,{children:"Actor.exit()"})," as it calls both behind the scenes."]}),"\n"]})}),"\n",(0,t.jsxs)(n.p,{children:["Let's look at the ",(0,t.jsx)(n.code,{children:"CheerioCrawler"})," example from the ",(0,t.jsx)(n.a,{href:"../quick-start",children:"Quick Start"})," guide:"]}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(s.Z,{value:"main",label:"Using Actor.main()",default:!0,children:(0,t.jsx)(l.default,{language:"js",children:c})}),(0,t.jsx)(s.Z,{value:"init_exit",label:"Using Actor.init() and Actor.exit()",children:(0,t.jsx)(l.default,{language:"js",children:d})})]}),"\n",(0,t.jsx)(n.p,{children:"Note that you could also run your actor (that is using Crawlee) locally with Apify CLI. You could start it via the following command in your project folder:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apify run\n"})}),"\n",(0,t.jsx)(n.h2,{id:"deploying-an-actor-to-apify-platform",children:"Deploying an actor to Apify platform"}),"\n",(0,t.jsx)(n.p,{children:"Now (assuming you are already logged in to your Apify account) you can easily deploy your code to the Apify platform by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apify push\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Your script will be uploaded to and built on the Apify platform so that it can be run there. For more information, view the\n",(0,t.jsx)(n.a,{href:"https://docs.apify.com/cli",target:"_blank",rel:"noopener",children:"Apify Actor"})," documentation."]}),"\n",(0,t.jsx)(n.h2,{id:"usage-on-apify-platform",children:"Usage on Apify platform"}),"\n",(0,t.jsxs)(n.p,{children:["You can also develop your actor in an online code editor directly on the platform (you'll need an Apify Account). Let's go to the ",(0,t.jsx)(n.a,{href:"https://console.apify.com/actors",target:"_blank",rel:"noopener",children:"Actors"})," page in the app, click ",(0,t.jsx)(n.em,{children:"Create new"})," and then go to the ",(0,t.jsx)(n.em,{children:"Source"})," tab and start writing the code or paste one of the examples from the ",(0,t.jsx)(n.a,{href:"../examples",children:"Examples"})," section."]}),"\n",(0,t.jsx)(n.h2,{id:"storages",children:"Storages"}),"\n",(0,t.jsx)(n.p,{children:"There are several things worth mentioning here."}),"\n",(0,t.jsx)(n.h3,{id:"helper-functions-for-default-key-value-store-and-dataset",children:"Helper functions for default Key-Value Store and Dataset"}),"\n",(0,t.jsxs)(n.p,{children:["To simplify access to the ",(0,t.jsx)(n.em,{children:"default"})," storages, instead of using the helper functions of respective storage classes, you could use:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#setValue",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.setValue()"})}),", ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#getValue",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.getValue()"})}),", ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#getInput",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.getInput()"})})," for ",(0,t.jsx)(n.code,{children:"Key-Value Store"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#pushData",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.pushData()"})})," for ",(0,t.jsx)(n.code,{children:"Dataset"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"using-platform-storage-in-a-local-actor",children:"Using platform storage in a local actor"}),"\n",(0,t.jsxs)(n.p,{children:["When you plan to use the platform storage while developing and running your actor locally, you should use ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#openKeyValueStore",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.openKeyValueStore()"})}),", ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#openDataset",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.openDataset()"})})," and ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#openRequestQueue",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.openRequestQueue()"})})," to open the respective storage."]}),"\n",(0,t.jsxs)(n.p,{children:["Using each of these methods allows to pass the ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/interface/OpenStorageOptions",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"OpenStorageOptions"})})," as a second argument, which has only one optional property: ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/interface/OpenStorageOptions#forceCloud",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"forceCloud"})}),". If set to ",(0,t.jsx)(n.code,{children:"true"})," - cloud storage will be used instead of the folder on the local disk."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you don't plan to force usage of the platform storages when running the actor locally, there is no need to use the ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor"})})," class for it. The Crawlee variants ",(0,t.jsx)(a.Z,{to:"core/class/KeyValueStore#open",children:(0,t.jsx)(n.code,{children:"KeyValueStore.open()"})}),", ",(0,t.jsx)(a.Z,{to:"core/class/Dataset#open",children:(0,t.jsx)(n.code,{children:"Dataset.open()"})})," and ",(0,t.jsx)(a.Z,{to:"core/class/RequestQueue#open",children:(0,t.jsx)(n.code,{children:"RequestQueue.open()"})})," will work the same."]})}),"\n",(0,t.jsx)(n.h3,{id:"getting-public-url-of-an-item-in-the-platform-storage",children:"Getting public url of an item in the platform storage"}),"\n",(0,t.jsxs)(n.p,{children:["If you need to share a link to some file stored in a Key-Value Store on Apify Platform, you can use ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/KeyValueStore#getPublicUrl",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"getPublicUrl()"})})," method. It accepts only one parameter: ",(0,t.jsx)(n.code,{children:"key"})," - the key of the item you want to share."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { KeyValueStore } from 'apify';\n\nconst store = await KeyValueStore.open();\nawait store.setValue('your-file', { foo: 'bar' });\nconst url = store.getPublicUrl('your-file');\n// https://api.apify.com/v2/key-value-stores/<your-store-id>/records/your-file\n"})}),"\n",(0,t.jsx)(n.h3,{id:"exporting-dataset-data",children:"Exporting dataset data"}),"\n",(0,t.jsxs)(n.p,{children:["When the ",(0,t.jsx)(a.Z,{to:"core/class/Dataset",children:(0,t.jsx)(n.code,{children:"Dataset"})})," is stored on the ",(0,t.jsx)(n.a,{href:"https://apify.com/actors",target:"_blank",rel:"noopener",children:"Apify platform"}),", you can export its data to the following formats: HTML, JSON, CSV, Excel, XML and RSS. The datasets are displayed on the actor run details page and in the ",(0,t.jsx)(n.a,{href:"https://console.apify.com/storage",target:"_blank",rel:"noopener",children:"Storage"})," section in the Apify Console. The actual data is exported using the ",(0,t.jsx)(n.a,{href:"https://apify.com/docs/api/v2#/reference/datasets/item-collection/get-items",target:"_blank",rel:"noopener",children:"Get dataset items"})," Apify API endpoint. This way you can easily share the crawling results."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Related links"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.apify.com/storage",target:"_blank",rel:"noopener",children:"Apify platform storage documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://console.apify.com/storage",target:"_blank",rel:"noopener",children:"View storage in Apify Console"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://apify.com/docs/api/v2#/reference/key-value-stores",target:"_blank",rel:"noopener",children:"Key-value stores API reference"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.apify.com/api/v2#/reference/datasets",target:"_blank",rel:"noopener",children:"Datasets API reference"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.apify.com/api/v2#/reference/request-queues",target:"_blank",rel:"noopener",children:"Request queues API reference"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,t.jsxs)(n.p,{children:["The following are some additional environment variables specific to Apify platform. More Crawlee specific environment variables could be found in the ",(0,t.jsx)(n.a,{href:"./configuration#environment-variables",children:"Environment Variables"})," guide."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["It's important to notice that ",(0,t.jsx)(n.code,{children:"CRAWLEE_"})," environment variables don't need to be replaced with equivalent ",(0,t.jsx)(n.code,{children:"APIFY_"})," ones. Likewise, Crawlee understands ",(0,t.jsx)(n.code,{children:"APIFY_"})," environment variables after calling ",(0,t.jsx)(n.code,{children:"Actor.init()"})," or when using ",(0,t.jsx)(n.code,{children:"Actor.main()"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"apify_token",children:(0,t.jsx)(n.code,{children:"APIFY_TOKEN"})}),"\n",(0,t.jsxs)(n.p,{children:["The API token for your Apify account. It is used to access the Apify API, e.g. to access cloud storage\nor to run an actor on the Apify platform. You can find your API token on the\n",(0,t.jsx)(n.a,{href:"https://console.apify.com/account?tab=integrations",target:"_blank",rel:"noopener",children:"Account Settings / Integrations"})," page."]}),"\n",(0,t.jsxs)(n.h3,{id:"combinations-of-apify_token-and-crawlee_storage_dir",children:["Combinations of ",(0,t.jsx)(n.code,{children:"APIFY_TOKEN"})," and ",(0,t.jsx)(n.code,{children:"CRAWLEE_STORAGE_DIR"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CRAWLEE_STORAGE_DIR"})," env variable description could be found in ",(0,t.jsx)(n.a,{href:"../guides/configuration#crawlee_storage_dir",children:"Environment Variables"})," guide."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By combining the env vars in various ways, you can greatly influence the actor's behavior."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Env Vars"}),(0,t.jsx)(n.th,{children:"API"}),(0,t.jsx)(n.th,{children:"Storages"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["none OR ",(0,t.jsx)(n.code,{children:"CRAWLEE_STORAGE_DIR"})]}),(0,t.jsx)(n.td,{children:"no"}),(0,t.jsx)(n.td,{children:"local"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"APIFY_TOKEN"})}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"Apify platform"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"APIFY_TOKEN"})," AND ",(0,t.jsx)(n.code,{children:"CRAWLEE_STORAGE_DIR"})]}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"local + platform"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["When using both ",(0,t.jsx)(n.code,{children:"APIFY_TOKEN"})," and ",(0,t.jsx)(n.code,{children:"CRAWLEE_STORAGE_DIR"}),", you can use all the Apify platform\nfeatures and your data will be stored locally by default. If you want to access platform storages,\nyou can use the ",(0,t.jsx)(n.code,{children:"{ forceCloud: true }"})," option in their respective functions."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { Actor } from 'apify';\nimport { Dataset } from 'crawlee';\n\n// or Dataset.open('my-local-data')\nconst localDataset = await Actor.openDataset('my-local-data');\n// but here we need the `Actor` class\nconst remoteDataset = await Actor.openDataset('my-dataset', { forceCloud: true });\n"})}),"\n",(0,t.jsx)(n.h3,{id:"apify_proxy_password",children:(0,t.jsx)(n.code,{children:"APIFY_PROXY_PASSWORD"})}),"\n",(0,t.jsxs)(n.p,{children:["Optional password to ",(0,t.jsx)(n.a,{href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener",children:"Apify Proxy"})," for IP address rotation.\nAssuming Apify Account was already created, you can find the password on the ",(0,t.jsx)(n.a,{href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener",children:"Proxy page"}),"\nin the Apify Console. The password is automatically inferred using the ",(0,t.jsx)(n.code,{children:"APIFY_TOKEN"})," env var,\nso in most cases, you don't need to touch it. You should use it when, for some reason,\nyou need access to Apify Proxy, but not access to Apify API, or when you need access to\nproxy from a different account than your token represents."]}),"\n",(0,t.jsx)(n.h2,{id:"proxy-management",children:"Proxy management"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to your own proxy servers and proxy servers acquired from\nthird-party providers used together with Crawlee, you can also rely on ",(0,t.jsx)(n.a,{href:"https://apify.com/proxy",target:"_blank",rel:"noopener",children:"Apify Proxy"}),"\nfor your scraping needs."]}),"\n",(0,t.jsx)(n.h3,{id:"apify-proxy",children:"Apify Proxy"}),"\n",(0,t.jsxs)(n.p,{children:["If you are already subscribed to Apify Proxy, you can start using them immediately in only a few lines of code (for local usage you first should be ",(0,t.jsx)(n.a,{href:"#logging-into-apify-platform-from-crawlee",children:"logged in"})," to your Apify account."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { Actor } from 'apify';\n\nconst proxyConfiguration = await Actor.createProxyConfiguration();\nconst proxyUrl = await proxyConfiguration.newUrl();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that unlike using your own proxies in Crawlee, you shouldn't use the constructor to create ",(0,t.jsx)(a.Z,{to:"core/class/ProxyConfiguration",children:(0,t.jsx)(n.code,{children:"ProxyConfiguration"})})," instance. For using Apify Proxy you should create an instance using the ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#createProxyConfiguration",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.createProxyConfiguration()"})})," function instead."]}),"\n",(0,t.jsx)(n.h3,{id:"apify-proxy-configuration",children:"Apify Proxy Configuration"}),"\n",(0,t.jsx)(n.p,{children:"With Apify Proxy, you can select specific proxy groups to use, or countries to connect from.\nThis allows you to get better proxy performance after some initial research."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { Actor } from 'apify';\n\nconst proxyConfiguration = await Actor.createProxyConfiguration({\n    groups: ['RESIDENTIAL'],\n    countryCode: 'US',\n});\nconst proxyUrl = await proxyConfiguration.newUrl();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now your crawlers will use only Residential proxies from the US. Note that you must first get access\nto a proxy group before you are able to use it. You can check proxy groups available to you\nin the ",(0,t.jsx)(n.a,{href:"https://console.apify.com/proxy",target:"_blank",rel:"noopener",children:"proxy dashboard"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"apify-proxy-vs-own-proxies",children:"Apify Proxy vs. Own proxies"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ProxyConfiguration"})," class covers both Apify Proxy and custom proxy URLs so that\nyou can easily switch between proxy providers. However, some features of the class\nare available only to Apify Proxy users, mainly because Apify Proxy is what\none would call a super-proxy. It's not a single proxy server, but an API endpoint\nthat allows connection through millions of different IP addresses. So the class\nessentially has two modes: Apify Proxy or Own (third party) proxy."]}),"\n",(0,t.jsx)(n.p,{children:"The difference is easy to remember."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you're using your own proxies - you should create an instance with the ProxyConfiguration ",(0,t.jsx)(a.Z,{to:"core/class/ProxyConfiguration#constructor",children:(0,t.jsx)(n.code,{children:"constructor"})})," function based on the provided ",(0,t.jsx)(a.Z,{to:"core/interface/ProxyConfigurationOptions",children:(0,t.jsx)(n.code,{children:"ProxyConfigurationOptions"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If you are planning to use Apify Proxy - you should create an instance using the ",(0,t.jsx)(n.a,{href:"https://apify.github.io/apify-sdk-js/api/apify/class/Actor#createProxyConfiguration",target:"_blank",rel:"noopener",children:(0,t.jsx)(n.code,{children:"Actor.createProxyConfiguration()"})})," function. ",(0,t.jsx)(a.Z,{to:"core/interface/ProxyConfigurationOptions#proxyUrls",children:(0,t.jsx)(n.code,{children:"ProxyConfigurationOptions.proxyUrls"})})," and ",(0,t.jsx)(a.Z,{to:"core/interface/ProxyConfigurationOptions#newUrlFunction",children:(0,t.jsx)(n.code,{children:"ProxyConfigurationOptions.newUrlFunction"})})," enable use of your custom proxy URLs, whereas all the other options are there to configure Apify Proxy."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Related links"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener",children:"Apify Proxy docs"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(90512);const o={tabItem:"tabItem_Ymn6"};var a=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,i),hidden:r,children:n})}},65488:(e,n,r)=>{r.d(n,{Z:()=>u});var t=r(67294),o=r(90512),a=r(12466),i=r(70989),s=r(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=r(85893);function d(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,d=[],p=(0,a.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var n=e.currentTarget,r=d.indexOf(n),o=s[r].value;o!==t&&(p(n),i(o))},u=function(e){var n,r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var t,o=d.indexOf(e.currentTarget)+1;r=null!=(t=d[o])?t:d[0];break;case"ArrowLeft":var a,i=d.indexOf(e.currentTarget)-1;r=null!=(a=d[i])?a:d[d.length-1]}null==(n=r)||n.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,a=e.attributes;return(0,c.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return d.push(e)},onKeyDown:u,onClick:h},a,{className:(0,o.Z)("tabs__item",l.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function p(e){var n=e.lazy,r=e.children,o=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=a.find((function(e){return e.props.value===o}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})}))})}function h(e){var n=(0,i.Y)(e);return(0,c.jsxs)("div",{className:(0,o.Z)("tabs-container",l.tabList),children:[(0,c.jsx)(d,Object.assign({},e,n)),(0,c.jsx)(p,Object.assign({},e,n))]})}function u(e){var n=(0,s.Z)();return(0,c.jsx)(h,Object.assign({},e,{children:(0,i.h)(e.children)}),String(n))}},70989:(e,n,r)=>{r.d(n,{Y:()=>u,h:()=>c});var t=r(67294),o=r(16550),a=r(20469),i=r(91980),s=r(67392),l=r(50012);function c(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function d(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,s=(0,o.k6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,i._X)(l),(0,t.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function u(e){var n,r,o,i,s=e.defaultValue,c=e.queryString,u=void 0!==c&&c,f=e.groupId,y=d(e),x=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var o=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:s,tabValues:y})})),g=x[0],m=x[1],j=h({queryString:u,groupId:f}),b=j[0],v=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),r=(0,l.Nk)(n),o=r[0],i=r[1],[o,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),A=w[0],k=w[1],_=function(){var e=null!=b?b:A;return p({value:e,tabValues:y})?e:null}();return(0,a.Z)((function(){_&&m(_)}),[_]),{selectedValue:g,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:y}))throw new Error("Can't select invalid tab value="+e);m(e),v(e),k(e)}),[v,k,y]),tabValues:y}}},14959:(e,n,r)=>{r.d(n,{Z:()=>c});r(67294);var t=r(39960),o=r(74477),a=r(52263),i=r(85893),s=r(50643).version.split("."),l=[s[0],s[1]].join(".");const c=function(e){var n=e.to,r=e.children,s=(0,o.E)();return(0,a.default)().siteConfig.presets[0][1].docs.disableVersioning||s.version===l?(0,i.jsx)(t.default,{to:"/api/"+n,children:r}):(0,i.jsx)(t.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+n,children:r})}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(67294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);