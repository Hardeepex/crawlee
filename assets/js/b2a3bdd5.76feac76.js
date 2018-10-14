"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34848],{56786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(85893),a=t(11151);const o={id:"aws-cheerio",title:"Cheerio on AWS Lambda"},s=void 0,i={id:"deployment/aws-cheerio",title:"Cheerio on AWS Lambda",description:"Locally, we can conveniently create a Crawlee project with npx crawlee create. In order to run this project on AWS Lambda, however, we need to do a few tweaks.",source:"@site/versioned_docs/version-3.6/deployment/aws-cheerio.md",sourceDirName:"deployment",slug:"/deployment/aws-cheerio",permalink:"/docs/3.6/deployment/aws-cheerio",draft:!1,unlisted:!1,tags:[],version:"3.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"aws-cheerio",title:"Cheerio on AWS Lambda"},sidebar:"docs",previous:{title:"Apify Platform",permalink:"/docs/3.6/deployment/apify-platform"},next:{title:"Browsers on AWS Lambda",permalink:"/docs/3.6/deployment/aws-browsers"}},l={},c=[{value:"Updating the code",id:"updating-the-code",level:2},{value:"Deploying the project",id:"deploying-the-project",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Locally, we can conveniently create a Crawlee project with ",(0,r.jsx)(n.code,{children:"npx crawlee create"}),". In order to run this project on AWS Lambda, however, we need to do a few tweaks."]}),"\n",(0,r.jsx)(n.h2,{id:"updating-the-code",children:"Updating the code"}),"\n",(0,r.jsxs)(n.p,{children:["Whenever we instantiate a new crawler, we have to pass a unique ",(0,r.jsx)(n.code,{children:"Configuration"})," instance to it. By default, all the Crawlee crawler instances share the same storage - this can be convenient, but would also cause \u201cstatefulness\u201d of our Lambda, which would lead to hard-to-debug problems."]}),"\n",(0,r.jsxs)(n.p,{children:["Also, when creating this Configuration instance, make sure to pass the ",(0,r.jsx)(n.code,{children:"persistStorage: false"})," option. This tells Crawlee to use in-memory storage, as the Lambda filesystem is read-only."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="src/main.js"',children:"// For more information, see https://crawlee.dev/\nimport { CheerioCrawler, Configuration, ProxyConfiguration } from 'crawlee';\nimport { router } from './routes.js';\n\nconst startUrls = ['https://crawlee.dev'];\n\nconst crawler = new CheerioCrawler({\n    requestHandler: router,\n// highlight-start\n}, new Configuration({\n    persistStorage: false,\n}));\n// highlight-end\n\nawait crawler.run(startUrls);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now, we wrap all the logic in a ",(0,r.jsx)(n.code,{children:"handler"})," function. This is the actual \u201cLambda\u201d that AWS will be executing later on."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="src/main.js"',children:"// For more information, see https://crawlee.dev/\nimport { CheerioCrawler, Configuration } from 'crawlee';\nimport { router } from './routes.js';\n\nconst startUrls = ['https://crawlee.dev'];\n\n// highlight-next-line\nexport const handler = async (event, context) => {\n    const crawler = new CheerioCrawler({\n        requestHandler: router,\n    }, new Configuration({\n        persistStorage: false,\n    }));\n\n    await crawler.run(startUrls);\n// highlight-next-line\n};\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{children:(0,r.jsx)(n.strong,{children:"Important"})}),(0,r.jsxs)(n.p,{children:["Make sure to always instantiate a ",(0,r.jsx)(n.strong,{children:"new crawler instance for every Lambda"}),". AWS always keeps the environment running for some time after the first Lambda execution (in order to reduce cold-start times) - so any subsequent Lambda calls will access the already-used crawler instance."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"TLDR: Keep your Lambda stateless."})})]}),"\n",(0,r.jsx)(n.p,{children:"Last things last, we also want to return the scraped data from the Lambda when the crawler run ends."}),"\n",(0,r.jsxs)(n.p,{children:["In the end, your ",(0,r.jsx)(n.code,{children:"main.js"})," script should look something like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="src/main.js"',children:"// For more information, see https://crawlee.dev/\nimport { CheerioCrawler, Configuration } from 'crawlee';\nimport { router } from './routes.js';\n\nconst startUrls = ['https://crawlee.dev'];\n\nexport const handler = async (event, context) => {\n    const crawler = new CheerioCrawler({\n        requestHandler: router,\n    }, new Configuration({\n        persistStorage: false,\n    }));\n\n    await crawler.run(startUrls);\n\n    // highlight-start\n    return {\n        statusCode: 200,\n        body: await crawler.getData(),\n    }\n    // highlight-end\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"deploying-the-project",children:"Deploying the project"}),"\n",(0,r.jsx)(n.p,{children:"Now it\u2019s time to deploy our script on AWS!"}),"\n",(0,r.jsxs)(n.p,{children:["Let\u2019s create a zip archive from our project (including the ",(0,r.jsx)(n.code,{children:"node_modules"})," folder) by running ",(0,r.jsx)(n.code,{children:"zip -r package.zip ."})," in the project folder."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["Large ",(0,r.jsx)(n.code,{children:"node_modules"})," folder?"]}),(0,r.jsx)(n.p,{children:"AWS has a limit of 50MB for direct file upload. Usually, our Crawlee projects won\u2019t be anywhere near this limit, but we can easily exceed this with large dependency trees."}),(0,r.jsx)(n.p,{children:"A better way to install your project dependencies is by using Lambda Layers. With Layers, we can also share files between multiple Lambdas - and keep the actual \u201ccode\u201d part of the Lambdas as slim as possible."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To create a Lambda Layer, we need to:"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Pack the ",(0,r.jsx)(n.code,{children:"node_modules"})," folder into a separate zip file (the archive should contain one folder named ",(0,r.jsx)(n.code,{children:"node_modules"}),")."]}),"\n",(0,r.jsx)(n.li,{children:"Create a new Lambda layer from this archive. We\u2019ll probably need to upload this file to AWS S3 storage and create the Lambda Layer like this."}),"\n",(0,r.jsx)(n.li,{children:"After creating it, we simply tell our new Lambda function to use this layer."}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["To deploy our actual code, we upload the ",(0,r.jsx)(n.code,{children:"package.zip"})," archive as our code source."]}),"\n",(0,r.jsxs)(n.p,{children:["In Lambda Runtime Settings, we point the ",(0,r.jsx)(n.code,{children:"handler"})," to the main function that runs the crawler. You can use slashes to describe directory structure and ",(0,r.jsx)(n.code,{children:"."})," to denote a named export. Our handler function is called ",(0,r.jsx)(n.code,{children:"handler"})," and is exported from the ",(0,r.jsx)(n.code,{children:"src/main.js"})," file, so we\u2019ll use ",(0,r.jsx)(n.code,{children:"src/main.handler"})," as the handler name."]}),"\n",(0,r.jsxs)(n.p,{children:["Now we\u2019re all set! By clicking the ",(0,r.jsx)(n.strong,{children:"Test"})," button, we can send an example testing event to our new Lambda. The actual contents of the event don\u2019t really matter for now - if you want, further parameterize your crawler run by analyzing the ",(0,r.jsx)(n.code,{children:"event"})," object AWS passes as the first argument to the handler."]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"In the Configuration tab in the AWS Lambda dashboard, you can configure the amount of memory the Lambda is running with or the size of the ephemeral storage."}),(0,r.jsx)(n.p,{children:"The memory size can greatly affect the execution speed of your Lambda."}),(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/lambda/latest/operatorguide/computing-power.html",target:"_blank",rel:"noopener",children:"official documentation"})," to see how the performance and cost scale with more memory."]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);