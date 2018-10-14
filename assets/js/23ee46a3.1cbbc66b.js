"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46754],{29979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=n(85893),r=n(11151),i=n(15316);n(14959);const a={code:"import { PlaywrightCrawler } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    requestHandler: async ({ page, request, enqueueLinks }) => {\n        console.log(`Processing: ${request.url}`);\n        if (request.label === 'DETAIL') {\n            const urlPart = request.url.split('/').slice(-1); // ['sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440']\n            const manufacturer = urlPart[0].split('-')[0]; // 'sennheiser'\n\n            const title = await page.locator('.product-meta h1').textContent();\n            const sku = await page.locator('span.product-meta__sku-number').textContent();\n\n            const priceElement = page\n                .locator('span.price')\n                .filter({\n                    hasText: '$',\n                })\n                .first();\n\n            const currentPriceString = await priceElement.textContent();\n            const rawPrice = currentPriceString.split('$')[1];\n            const price = Number(rawPrice.replaceAll(',', ''));\n\n            const inStockElement = page\n                .locator('span.product-form__inventory')\n                .filter({\n                    hasText: 'In stock',\n                })\n                .first();\n\n            const inStock = (await inStockElement.count()) > 0;\n\n            const results = {\n                url: request.url,\n                manufacturer,\n                title,\n                sku,\n                currentPrice: price,\n                availableInStock: inStock,\n            };\n\n            console.log(results);\n        } else if (request.label === 'CATEGORY') {\n            // We are now on a category page. We can use this to paginate through and enqueue all products,\n            // as well as any subsequent pages we find\n\n            await page.waitForSelector('.product-item > a');\n            await enqueueLinks({\n                selector: '.product-item > a',\n                label: 'DETAIL', // <= note the different label\n            });\n\n            // Now we need to find the \"Next\" button and enqueue the next page of results (if it exists)\n            const nextButton = await page.$('a.pagination__next');\n            if (nextButton) {\n                await enqueueLinks({\n                    selector: 'a.pagination__next',\n                    label: 'CATEGORY', // <= note the same label\n                });\n            }\n        } else {\n            // This means we're on the start page, with no label.\n            // On this page, we just want to enqueue all the category pages.\n\n            await page.waitForSelector('.collection-block-item');\n            await enqueueLinks({\n                selector: '.collection-block-item',\n                label: 'CATEGORY',\n            });\n        }\n    },\n\n    // Let's limit our crawls to make our tests shorter and safer.\n    maxRequestsPerCrawl: 50,\n});\n\nawait crawler.run(['https://warehouse-theme-metal.myshopify.com/collections']);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IFBsYXl3cmlnaHRDcmF3bGVyIH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBQbGF5d3JpZ2h0Q3Jhd2xlcih7XFxuICAgIHJlcXVlc3RIYW5kbGVyOiBhc3luYyAoeyBwYWdlLCByZXF1ZXN0LCBlbnF1ZXVlTGlua3MgfSkgPT4ge1xcbiAgICAgICAgY29uc29sZS5sb2coYFByb2Nlc3Npbmc6ICR7cmVxdWVzdC51cmx9YCk7XFxuICAgICAgICBpZiAocmVxdWVzdC5sYWJlbCA9PT0gJ0RFVEFJTCcpIHtcXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJ0ID0gcmVxdWVzdC51cmwuc3BsaXQoJy8nKS5zbGljZSgtMSk7IC8vIFsnc2VubmhlaXNlci1ta2UtNDQwLXByb2Zlc3Npb25hbC1zdGVyZW8tc2hvdGd1bi1taWNyb3Bob25lLW1rZS00NDAnXVxcbiAgICAgICAgICAgIGNvbnN0IG1hbnVmYWN0dXJlciA9IHVybFBhcnRbMF0uc3BsaXQoJy0nKVswXTsgLy8gJ3Nlbm5oZWlzZXInXFxuXFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBhd2FpdCBwYWdlLmxvY2F0b3IoJy5wcm9kdWN0LW1ldGEgaDEnKS50ZXh0Q29udGVudCgpO1xcbiAgICAgICAgICAgIGNvbnN0IHNrdSA9IGF3YWl0IHBhZ2UubG9jYXRvcignc3Bhbi5wcm9kdWN0LW1ldGFfX3NrdS1udW1iZXInKS50ZXh0Q29udGVudCgpO1xcblxcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IHBhZ2VcXG4gICAgICAgICAgICAgICAgLmxvY2F0b3IoJ3NwYW4ucHJpY2UnKVxcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHtcXG4gICAgICAgICAgICAgICAgICAgIGhhc1RleHQ6ICckJyxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLmZpcnN0KCk7XFxuXFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByaWNlU3RyaW5nID0gYXdhaXQgcHJpY2VFbGVtZW50LnRleHRDb250ZW50KCk7XFxuICAgICAgICAgICAgY29uc3QgcmF3UHJpY2UgPSBjdXJyZW50UHJpY2VTdHJpbmcuc3BsaXQoJyQnKVsxXTtcXG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IE51bWJlcihyYXdQcmljZS5yZXBsYWNlQWxsKCcsJywgJycpKTtcXG5cXG4gICAgICAgICAgICBjb25zdCBpblN0b2NrRWxlbWVudCA9IHBhZ2VcXG4gICAgICAgICAgICAgICAgLmxvY2F0b3IoJ3NwYW4ucHJvZHVjdC1mb3JtX19pbnZlbnRvcnknKVxcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHtcXG4gICAgICAgICAgICAgICAgICAgIGhhc1RleHQ6ICdJbiBzdG9jaycsXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5maXJzdCgpO1xcblxcbiAgICAgICAgICAgIGNvbnN0IGluU3RvY2sgPSAoYXdhaXQgaW5TdG9ja0VsZW1lbnQuY291bnQoKSkgPiAwO1xcblxcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XFxuICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXFxuICAgICAgICAgICAgICAgIG1hbnVmYWN0dXJlcixcXG4gICAgICAgICAgICAgICAgdGl0bGUsXFxuICAgICAgICAgICAgICAgIHNrdSxcXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlOiBwcmljZSxcXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlSW5TdG9jazogaW5TdG9jayxcXG4gICAgICAgICAgICB9O1xcblxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmxhYmVsID09PSAnQ0FURUdPUlknKSB7XFxuICAgICAgICAgICAgLy8gV2UgYXJlIG5vdyBvbiBhIGNhdGVnb3J5IHBhZ2UuIFdlIGNhbiB1c2UgdGhpcyB0byBwYWdpbmF0ZSB0aHJvdWdoIGFuZCBlbnF1ZXVlIGFsbCBwcm9kdWN0cyxcXG4gICAgICAgICAgICAvLyBhcyB3ZWxsIGFzIGFueSBzdWJzZXF1ZW50IHBhZ2VzIHdlIGZpbmRcXG5cXG4gICAgICAgICAgICBhd2FpdCBwYWdlLndhaXRGb3JTZWxlY3RvcignLnByb2R1Y3QtaXRlbSA-IGEnKTtcXG4gICAgICAgICAgICBhd2FpdCBlbnF1ZXVlTGlua3Moe1xcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5wcm9kdWN0LWl0ZW0gPiBhJyxcXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdERVRBSUwnLCAvLyA8PSBub3RlIHRoZSBkaWZmZXJlbnQgbGFiZWxcXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICAvLyBOb3cgd2UgbmVlZCB0byBmaW5kIHRoZSBcXFwiTmV4dFxcXCIgYnV0dG9uIGFuZCBlbnF1ZXVlIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cyAoaWYgaXQgZXhpc3RzKVxcbiAgICAgICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBhd2FpdCBwYWdlLiQoJ2EucGFnaW5hdGlvbl9fbmV4dCcpO1xcbiAgICAgICAgICAgIGlmIChuZXh0QnV0dG9uKSB7XFxuICAgICAgICAgICAgICAgIGF3YWl0IGVucXVldWVMaW5rcyh7XFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EucGFnaW5hdGlvbl9fbmV4dCcsXFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NBVEVHT1JZJywgLy8gPD0gbm90ZSB0aGUgc2FtZSBsYWJlbFxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIC8vIFRoaXMgbWVhbnMgd2UncmUgb24gdGhlIHN0YXJ0IHBhZ2UsIHdpdGggbm8gbGFiZWwuXFxuICAgICAgICAgICAgLy8gT24gdGhpcyBwYWdlLCB3ZSBqdXN0IHdhbnQgdG8gZW5xdWV1ZSBhbGwgdGhlIGNhdGVnb3J5IHBhZ2VzLlxcblxcbiAgICAgICAgICAgIGF3YWl0IHBhZ2Uud2FpdEZvclNlbGVjdG9yKCcuY29sbGVjdGlvbi1ibG9jay1pdGVtJyk7XFxuICAgICAgICAgICAgYXdhaXQgZW5xdWV1ZUxpbmtzKHtcXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuY29sbGVjdGlvbi1ibG9jay1pdGVtJyxcXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDQVRFR09SWScsXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9XFxuICAgIH0sXFxuXFxuICAgIC8vIExldCdzIGxpbWl0IG91ciBjcmF3bHMgdG8gbWFrZSBvdXIgdGVzdHMgc2hvcnRlciBhbmQgc2FmZXIuXFxuICAgIG1heFJlcXVlc3RzUGVyQ3Jhd2w6IDUwLFxcbn0pO1xcblxcbmF3YWl0IGNyYXdsZXIucnVuKFsnaHR0cHM6Ly93YXJlaG91c2UtdGhlbWUtbWV0YWwubXlzaG9waWZ5LmNvbS9jb2xsZWN0aW9ucyddKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5Ijo0MDk2LCJ0aW1lb3V0IjoxODB9fQ.kD0Kv02LqYWc0KoeyGVDl4T9x6QzNWTLJP_-bZxykus"},c={id:"scraping",title:"Scraping the Store",sidebar_label:"Scraping",description:"Your first steps into the world of scraping with Crawlee"},o=void 0,l={id:"introduction/scraping",title:"Scraping the Store",description:"Your first steps into the world of scraping with Crawlee",source:"@site/versioned_docs/version-3.7/introduction/06-scraping.mdx",sourceDirName:"introduction",slug:"/introduction/scraping",permalink:"/docs/introduction/scraping",draft:!1,unlisted:!1,tags:[],version:"3.7",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",sidebarPosition:6,frontMatter:{id:"scraping",title:"Scraping the Store",sidebar_label:"Scraping",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"Crawling",permalink:"/docs/introduction/crawling"},next:{title:"Saving data",permalink:"/docs/introduction/saving-data"}},d={},h=[{value:"Scraping the URL, Manufacturer and SKU",id:"scraping-the-url-manufacturer-and-sku",level:3},{value:"Title",id:"title",level:3},{value:"SKU",id:"sku",level:3},{value:"Current price",id:"current-price",level:3},{value:"Stock available",id:"stock-available",level:3},{value:"Trying it out",id:"trying-it-out",level:2},{value:"Next lesson",id:"next-lesson",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.a,{href:"./real-world-project#choosing-the-data-you-need",children:"Real-world project chapter"}),", we created a list of the information we wanted to collect about the products in the example Warehouse store. Let's review that and figure out ways to access the data."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"URL"}),"\n",(0,s.jsx)(t.li,{children:"Manufacturer"}),"\n",(0,s.jsx)(t.li,{children:"SKU"}),"\n",(0,s.jsx)(t.li,{children:"Title"}),"\n",(0,s.jsx)(t.li,{children:"Current price"}),"\n",(0,s.jsx)(t.li,{children:"Stock available"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"data to scrape",src:n(68991).Z+"",title:"Overview of data to be scraped.",width:"1798",height:"1165"})}),"\n",(0,s.jsx)(t.h3,{id:"scraping-the-url-manufacturer-and-sku",children:"Scraping the URL, Manufacturer and SKU"}),"\n",(0,s.jsxs)(t.p,{children:["Some information is lying right there in front of us without even having to touch the product detail pages. The ",(0,s.jsx)(t.code,{children:"URL"})," we already have - the ",(0,s.jsx)(t.code,{children:"request.url"}),". And by looking at it carefully, we realize that we can also extract the manufacturer from the URL (as all product urls start with ",(0,s.jsx)(t.code,{children:"/products/<manufacturer>"}),"). We can just split the ",(0,s.jsx)(t.code,{children:"string"})," and be on our way then!"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["You can use ",(0,s.jsx)(t.code,{children:"request.loadedUrl"})," as well. Remember the difference: ",(0,s.jsx)(t.code,{children:"request.url"})," is what you enqueue, ",(0,s.jsx)(t.code,{children:"request.loadedUrl"})," is what gets processed (after possible redirects)."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// request.url = https://warehouse-theme-metal.myshopify.com/products/sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440\n\nconst urlPart = request.url.split('/').slice(-1); // ['sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440']\nconst manufacturer = urlPart[0].split('-')[0]; // 'sennheiser'\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["It's a matter of preference, whether to store this information separately in the resulting dataset, or not. Whoever uses the dataset can easily parse the ",(0,s.jsx)(t.code,{children:"manufacturer"})," from the ",(0,s.jsx)(t.code,{children:"URL"}),", so should you duplicate the data unnecessarily? Our opinion is that unless the increased data consumption would be too large to bear, it's better to make the dataset as rich as possible. For example, someone might want to filter by ",(0,s.jsx)(t.code,{children:"manufacturer"}),"."]})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["One thing you may notice is that the ",(0,s.jsx)(t.code,{children:"manufacturer"})," might have a ",(0,s.jsx)(t.code,{children:"-"})," in its name. If that's the case, your best bet is extracting it from the details page instead, but it's not mandatory. At the end of the day, you should always adjust and pick the best solution for your use case, and website you are crawling."]})}),"\n",(0,s.jsxs)(t.p,{children:["Now it's time to add more data to the results. Let's open one of the product detail pages, for example the ",(0,s.jsx)(t.a,{href:"https://warehouse-theme-metal.myshopify.com/products/sony-xbr-65x950g-65-class-64-5-diag-bravia-4k-hdr-ultra-hd-tv",target:"_blank",rel:"noopener",children:(0,s.jsx)(t.code,{children:"Sony XBR-950G"})})," page and use our DevTools-Fu \ud83e\udd4b to figure out how to get the title of the product."]}),"\n",(0,s.jsx)(t.h3,{id:"title",children:"Title"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"product title",src:n(69947).Z+"",title:"Finding product title in DevTools.",width:"4106",height:"2400"})}),"\n",(0,s.jsxs)(t.p,{children:["By using the element selector tool, you can see that the title is there under an ",(0,s.jsx)(t.code,{children:"<h1>"})," tag, as titles should be. The ",(0,s.jsx)(t.code,{children:"<h1>"})," tag is enclosed in a ",(0,s.jsx)(t.code,{children:"<div>"})," with class ",(0,s.jsx)(t.code,{children:"product-meta"}),". We can leverage this to create a combined selector ",(0,s.jsx)(t.code,{children:".product-meta h1"}),". It selects any ",(0,s.jsx)(t.code,{children:"<h1>"})," element that is a child of a different element with the class ",(0,s.jsx)(t.code,{children:"product-meta"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Remember that you can press CTRL+F (or CMD+F on Mac) in the ",(0,s.jsx)(t.strong,{children:"Elements"})," tab of DevTools to open the search bar where you can quickly search for elements using their selectors. Always verify your scraping process and assumptions using the DevTools. It's faster than changing the crawler code all the time."]})}),"\n",(0,s.jsxs)(t.p,{children:["To get the title, we need to find it using ",(0,s.jsx)(t.code,{children:"Playwright"})," and a ",(0,s.jsx)(t.code,{children:".product-meta h1"})," locator, which selects the ",(0,s.jsx)(t.code,{children:"<h1>"})," element we're looking for, or throws, if it finds more than one. That's good. It's usually better to crash the crawler than silently return bad data."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const title = await page.locator('.product-meta h1').textContent();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"sku",children:"SKU"}),"\n",(0,s.jsxs)(t.p,{children:["Using the DevTools, we find that the product SKU is inside a ",(0,s.jsx)(t.code,{children:"<span>"})," tag with a class ",(0,s.jsx)(t.code,{children:"product-meta__sku-number"}),". And since there's no other ",(0,s.jsx)(t.code,{children:"<span>"})," with that class on the page, we can safely use it."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"product sku selector",src:n(9219).Z+"",title:"Finding product SKU in DevTools.",width:"4108",height:"2392"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const sku = await page.locator('span.product-meta__sku-number').textContent();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"current-price",children:"Current price"}),"\n",(0,s.jsxs)(t.p,{children:["DevTools tell us that the ",(0,s.jsx)(t.code,{children:"currentPrice"})," can be found in a ",(0,s.jsx)(t.code,{children:"<span>"})," element tagged with the ",(0,s.jsx)(t.code,{children:"price"})," class. But it also shows us that it is nested as raw text alongside another ",(0,s.jsx)(t.code,{children:"<span>"})," element with the ",(0,s.jsx)(t.code,{children:"visually-hidden"})," class. We don't want that, so we need to filter it out, and we can use the ",(0,s.jsx)(t.code,{children:"hasText"})," helper for that."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"product current price selector",src:n(13957).Z+"",title:"Finding product current price in DevTools.",width:"4108",height:"2396"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const priceElement = page\n    .locator('span.price')\n    .filter({\n        hasText: '$',\n    })\n    .first();\n\nconst currentPriceString = await priceElement.textContent();\nconst rawPrice = currentPriceString.split('$')[1];\nconst price = Number(rawPrice.replaceAll(',', ''));\n"})}),"\n",(0,s.jsxs)(t.p,{children:["It might look a little too complex at first glance, but let's walk through what we did. First off, we find the right part of the ",(0,s.jsx)(t.code,{children:"price"})," span (specifically the actual price) by filtering the element that has the ",(0,s.jsx)(t.code,{children:"$"})," sign in it. When we do that, we will get a string similar to ",(0,s.jsx)(t.code,{children:"Sale price$1,398.00"}),". This, by itself, is not that useful, so we extract the actual numeric part by splitting by the ",(0,s.jsx)(t.code,{children:"$"})," sign."]}),"\n",(0,s.jsxs)(t.p,{children:["Once we do that, we receive a string that represents our price, but we will be converting it to a number. We do that by replacing all the commas with nothingness (so we can parse it into a number), then we parse it into a number using ",(0,s.jsx)(t.code,{children:"Number()"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"stock-available",children:"Stock available"}),"\n",(0,s.jsxs)(t.p,{children:["We're finishing up with the ",(0,s.jsx)(t.code,{children:"availableInStock"}),". We can see there is a span with the ",(0,s.jsx)(t.code,{children:"product-form__inventory"})," class, and it contains the text ",(0,s.jsx)(t.code,{children:"In stock"}),". We can use the ",(0,s.jsx)(t.code,{children:"hasText"})," helper again to filter out the right element."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const inStockElement = await page\n    .locator('span.product-form__inventory')\n    .filter({\n        hasText: 'In stock',\n    })\n    .first();\n\nconst inStock = (await inStockElement.count()) > 0;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For this, all we care about is whether the element exists or not, so we can use the ",(0,s.jsx)(t.code,{children:"count()"})," method to check if there are any elements that match our selector. If there are, we know that the product is in stock."]}),"\n",(0,s.jsx)(t.p,{children:"And there we have it! All the data we needed. For the sake of completeness, let's add all the properties together, and we're good to go."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"const urlPart = request.url.split('/').slice(-1); // ['sennheiser-mke-440-professional-stereo-shotgun-microphone-mke-440']\nconst manufacturer = urlPart.split('-')[0]; // 'sennheiser'\n\nconst title = await page.locator('.product-meta h1').textContent();\nconst sku = await page.locator('span.product-meta__sku-number').textContent();\n\nconst priceElement = page\n    .locator('span.price')\n    .filter({\n        hasText: '$',\n    })\n    .first();\n\nconst currentPriceString = await priceElement.textContent();\nconst rawPrice = currentPriceString.split('$')[1];\nconst price = Number(rawPrice.replaceAll(',', ''));\n\nconst inStockElement = await page\n    .locator('span.product-form__inventory')\n    .filter({\n        hasText: 'In stock',\n    })\n    .first();\n\nconst inStock = (await inStockElement.count()) > 0;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"trying-it-out",children:"Trying it out"}),"\n",(0,s.jsxs)(t.p,{children:["We have everything we need so grab our newly created scraping logic, dump it into our original ",(0,s.jsx)(t.code,{children:"requestHandler()"})," and see the magic happen!"]}),"\n",(0,s.jsx)(i.Z,{className:"language-js",type:"playwright",children:a}),"\n",(0,s.jsx)(t.p,{children:"When you run the crawler, you will see the crawled URLs and their scraped data printed to the console. The output will look something like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "url": "https://warehouse-theme-metal.myshopify.com/products/sony-str-za810es-7-2-channel-hi-res-wi-fi-network-av-receiver",\n    "manufacturer": "sony",\n    "title": "Sony STR-ZA810ES 7.2-Ch Hi-Res Wi-Fi Network A/V Receiver",\n    "sku": "SON-692802-STR-DE",\n    "currentPrice": 698,\n    "availableInStock": true\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"next-lesson",children:"Next lesson"}),"\n",(0,s.jsx)(t.p,{children:"In the next lesson, we will show you how to save the data you scraped to the disk for further processing."})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},14959:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var s=n(39960),r=n(74477),i=n(52263),a=n(85893),c=n(50643).version.split("."),o=[c[0],c[1]].join(".");const l=function(e){var t=e.to,n=e.children,c=(0,r.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning||c.version===o?(0,a.jsx)(s.default,{to:"/api/"+t,children:n}):(0,a.jsx)(s.default,{to:"/api/"+("current"===c.version?"next":c.version)+"/"+t,children:n})}},15316:(e,t,n)=>{n.d(t,{Z:()=>h});var s=n(63366),r=(n(67294),n(90512)),i=n(93e3),a=n(39960);const c={button:"button_YBBj",container:"container_TGAW"};var o=n(85893),l=["children","actor","hash","type"],d={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const h=function(e){var t,n=e.children,h=e.actor,g=e.hash,u=e.type,p=(0,s.Z)(e,l);if(g=null!=(t=g)?t:n.hash,!n.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!g)return(0,o.jsx)(i.default,Object.assign({},p,{children:n.code}));var I="https://console.apify.com/actors/"+(null!=h?h:d[null!=u?u:"playwright"])+"?runConfig="+g+"&asrc=run_on_apify";return(0,o.jsxs)("div",{className:(0,r.Z)(c.container,"runnable-code-block"),children:[(0,o.jsxs)(a.default,{href:I,className:c.button,rel:"follow",children:["Run on",(0,o.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,o.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,o.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,o.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,o.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,o.jsx)(i.default,Object.assign({},p,{className:(0,r.Z)(c.codeBlock,"code-block",null!=p.title?"has-title":"no-title"),children:n.code}))]})}},13957:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/current-price-16b0f4b92332837111d04f632234d2c3.jpg"},68991:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/scraping-practice-ed4e3a233c852ffa694b80371fed9d37.jpg"},9219:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sku-4427a5a820183e7c74fb4beeabcf9116.jpg"},69947:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/title-8f63a08e5ecf82b5547f1fac8ffc77a7.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(67294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);