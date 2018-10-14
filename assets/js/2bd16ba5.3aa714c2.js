"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49321],{19067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const o={id:"typescript-project",title:"TypeScript Projects",description:"Stricter, safer, and better development experience"},r=void 0,c={id:"guides/typescript-project",title:"TypeScript Projects",description:"Stricter, safer, and better development experience",source:"@site/versioned_docs/version-3.1/guides/typescript_project.mdx",sourceDirName:"guides",slug:"/guides/typescript-project",permalink:"/docs/3.1/guides/typescript-project",draft:!1,unlisted:!1,tags:[],version:"3.1",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"typescript-project",title:"TypeScript Projects",description:"Stricter, safer, and better development experience"},sidebar:"docs",previous:{title:"Got Scraping",permalink:"/docs/3.1/guides/got-scraping"},next:{title:"Running in Docker",permalink:"/docs/3.1/guides/docker-images"}},d={},l=[{value:"Setting up a TypeScript project",id:"setting-up-a-typescript-project",level:2},{value:"Running the project with <code>ts-node</code>",id:"running-the-project-with-ts-node",level:3},{value:"Running in production",id:"running-in-production",level:3},{value:"Docker build",id:"docker-build",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Crawlee is built with TypeScript, which means it provides the type definition directly in the package. This allows writing code with auto-completion for TypeScript and JavaScript code alike. Besides that, projects written in TypeScript can take advantage of compile-time type-checking and avoid many coding mistakes, while providing documentation for functions, parameters and return values. It will also help with refactoring a lot, and ensuring the least amount of bugs will sneak through."}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-a-typescript-project",children:"Setting up a TypeScript project"}),"\n",(0,i.jsx)(n.p,{children:"To use TypeScript in our projects, we'll need the following prerequisites:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["TypeScript compiler ",(0,i.jsx)(n.code,{children:"tsc"})," installed somewhere:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"npm install --dev typescript\n"})}),"\n",(0,i.jsx)(n.p,{children:"TypeScript can be a development dependency in our project, as shown above. There's no need to pollute the production environment or the system's global repository with TypeScript."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A build script invoking ",(0,i.jsx)(n.code,{children:"tsc"})," and a correctly specified ",(0,i.jsx)(n.code,{children:"main"})," entry point defined in the ",(0,i.jsx)(n.code,{children:"package.json"})," (pointing to the built code):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "scripts": {\n        "build": "tsc"\n    },\n    "main": "dist/main.js"\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Type declarations for NodeJS, so we can take advantage of type-checking in all the features we'll use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"npm install --dev @types/node\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["TypeScript configuration file allowing ",(0,i.jsx)(n.code,{children:"tsc"})," to understand the project layout and the features used in the project:"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["We are extending the ",(0,i.jsx)(n.a,{href:"https://github.com/apify/apify-tsconfig",target:"_blank",rel:"noopener",children:(0,i.jsx)(n.code,{children:"@apify/tsconfig"})}),", it contains ",(0,i.jsx)(n.a,{href:"https://github.com/apify/apify-tsconfig/blob/main/tsconfig.json",target:"_blank",rel:"noopener",children:"the set of rules"})," we believe are worth following."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["To be able to use feature called ",(0,i.jsx)(n.a,{href:"https://blog.saeloun.com/2021/11/25/ecmascript-top-level-await.html",target:"_blank",rel:"noopener",children:"Top level await"}),", we will need to set the ",(0,i.jsx)(n.code,{children:"module"})," and ",(0,i.jsx)(n.code,{children:"target"})," compiler options to ",(0,i.jsx)(n.code,{children:"ES2022"})," or above. This will make the project compile to ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/esm.html",target:"_blank",rel:"noopener",children:"ECMAScript Modules"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n    "extends": "@apify/tsconfig",\n    "compilerOptions": {\n        "module": "ES2022",\n        "target": "ES2022",\n        "outDir": "dist"\n    },\n    "include": [\n        "./src/**/*"\n    ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Place the content above inside a ",(0,i.jsx)(n.code,{children:"tsconfig.json"})," in the root folder."]}),"\n",(0,i.jsxs)(n.p,{children:["Also, to enjoy using the types in ",(0,i.jsx)(n.code,{children:".js"})," source files, VSCode users that are using JavaScript should create a ",(0,i.jsx)(n.code,{children:"jsconfig.json"})," with the same content and add ",(0,i.jsx)(n.code,{children:'"checkJs": true'})," to ",(0,i.jsx)(n.code,{children:'"compilerOptions"'}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If we want to use one of the browser crawlers, we will also need to add ",(0,i.jsx)(n.code,{children:'"lib": ["DOM"]'})," to the compiler options."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"running-the-project-with-ts-node",children:["Running the project with ",(0,i.jsx)(n.code,{children:"ts-node"})]}),"\n",(0,i.jsxs)(n.p,{children:["During development, it's handy to run the project directly instead of compiling the TypeScript code to JavaScript every time. We can use ",(0,i.jsx)(n.code,{children:"ts-node"})," for that, just install it as a dev dependency and add a new NPM script:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"npm install --dev ts-node\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["As mentioned above, our project will be compiled to use ES Modules. Because of this, we need to use the ",(0,i.jsx)(n.code,{children:"ts-node-esm"})," binary."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["We use the ",(0,i.jsx)(n.code,{children:"-T"})," or ",(0,i.jsx)(n.code,{children:"--transpileOnly"})," flag, this means the code will ",(0,i.jsx)(n.strong,{children:"not"})," be type-checked, which results in faster compilation. If you don't mind the added time and want to do the type checking, just remove this flag."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n    "scripts": {\n        "start:dev": "ts-node-esm -T src/main.ts"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"running-in-production",children:"Running in production"}),"\n",(0,i.jsxs)(n.p,{children:["To run the project in production, we first need to compile it via build script. After that, we will have the compiled JavaScript code in the ",(0,i.jsx)(n.code,{children:"dist"}),", and we can use ",(0,i.jsx)(n.code,{children:"node dist/main.js"})," to run it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n    "scripts": {\n        "start:prod": "node dist/main.js"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"docker-build",children:"Docker build"}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"Dockerfile"})," we recommend using multi-stage build, so we don't install the dev dependencies like TypeScript in the final image:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dockerfile",metastring:'title="Dockerfile"',children:"# using multistage build, as we need dev deps to build the TS source code\nFROM apify/actor-node:16 AS builder\n\n# copy all files, install all dependencies (including dev deps) and build the project\nCOPY . ./\nRUN npm install --include=dev \\\n    && npm run build\n\n# create final image\nFROM apify/actor-node:16\n# copy only necessary files\nCOPY --from=builder /usr/src/app/package*.json ./\nCOPY --from=builder /usr/src/app/dist ./dist\n\n# install only prod deps\nRUN npm --quiet set progress=false \\\n    && npm install --only=prod --no-optional\n\n# run compiled code\nCMD npm run start:prod\n"})}),"\n",(0,i.jsx)(n.h3,{id:"putting-it-all-together",children:"Putting it all together"}),"\n",(0,i.jsxs)(n.p,{children:["Let's wrap it up to. In addition to the scripts we described above, we also need to set the ",(0,i.jsx)(n.code,{children:"type: 'module'"})," in the ",(0,i.jsx)(n.code,{children:"package.json"})," to be able to use the Top level await described above. For convenience, we will have 3 ",(0,i.jsx)(n.code,{children:"start"})," scripts, the default one will be an alias to ",(0,i.jsx)(n.code,{children:"start:dev"}),", which is our ",(0,i.jsx)(n.code,{children:"ts-node"})," script that does not require compilation (nor type checking). The production script (",(0,i.jsx)(n.code,{children:"start:prod"}),") is then used in the ",(0,i.jsx)(n.code,{children:"Dockerfile"}),", after explicit ",(0,i.jsx)(n.code,{children:"npm run build"})," call."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n    "name": "my-crawlee-project",\n    "type": "module",\n    "main": "dist/main.js",\n    "dependencies": {\n        "crawlee": "3.0.0"\n    },\n    "devDependencies": {\n        "@apify/tsconfig": "^0.1.0",\n        "ts-node": "^10.8.0",\n        "typescript": "^4.7.4"\n    },\n    "scripts": {\n        "start": "npm run start:dev",\n        "start:prod": "node dist/main.js",\n        "start:dev": "ts-node-esm -T src/main.ts",\n        "build": "tsc"\n    }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);