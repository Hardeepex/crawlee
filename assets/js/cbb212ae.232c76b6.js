"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21112],{42932:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>m,contentTitle:()=>y,default:()=>Z,frontMatter:()=>b,metadata:()=>C,toc:()=>G});var a=l(85893),t=l(11151),s=l(15316),n=l(14959),i=l(92775),c=l(65488),d=l(85162),o=l(93e3),h=l(59637);const u={code:"import { CheerioCrawler, Dataset } from 'crawlee';\n\n// CheerioCrawler crawls the web using HTTP requests\n// and parses HTML using the Cheerio library.\nconst crawler = new CheerioCrawler({\n    // Use the requestHandler to process each of the crawled pages.\n    async requestHandler({ request, $, enqueueLinks, log }) {\n        const title = $('title').text();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n\n        // Save results as JSON to ./storage/datasets/default\n        await Dataset.pushData({ title, url: request.loadedUrl });\n\n        // Extract links from the current page\n        // and add them to the crawling queue.\n        await enqueueLinks();\n    },\n\n    // Let's limit our crawls to make our tests shorter and safer.\n    maxRequestsPerCrawl: 50,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IENoZWVyaW9DcmF3bGVyLCBEYXRhc2V0IH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuLy8gQ2hlZXJpb0NyYXdsZXIgY3Jhd2xzIHRoZSB3ZWIgdXNpbmcgSFRUUCByZXF1ZXN0c1xcbi8vIGFuZCBwYXJzZXMgSFRNTCB1c2luZyB0aGUgQ2hlZXJpbyBsaWJyYXJ5LlxcbmNvbnN0IGNyYXdsZXIgPSBuZXcgQ2hlZXJpb0NyYXdsZXIoe1xcbiAgICAvLyBVc2UgdGhlIHJlcXVlc3RIYW5kbGVyIHRvIHByb2Nlc3MgZWFjaCBvZiB0aGUgY3Jhd2xlZCBwYWdlcy5cXG4gICAgYXN5bmMgcmVxdWVzdEhhbmRsZXIoeyByZXF1ZXN0LCAkLCBlbnF1ZXVlTGlua3MsIGxvZyB9KSB7XFxuICAgICAgICBjb25zdCB0aXRsZSA9ICQoJ3RpdGxlJykudGV4dCgpO1xcbiAgICAgICAgbG9nLmluZm8oYFRpdGxlIG9mICR7cmVxdWVzdC5sb2FkZWRVcmx9IGlzICcke3RpdGxlfSdgKTtcXG5cXG4gICAgICAgIC8vIFNhdmUgcmVzdWx0cyBhcyBKU09OIHRvIC4vc3RvcmFnZS9kYXRhc2V0cy9kZWZhdWx0XFxuICAgICAgICBhd2FpdCBEYXRhc2V0LnB1c2hEYXRhKHsgdGl0bGUsIHVybDogcmVxdWVzdC5sb2FkZWRVcmwgfSk7XFxuXFxuICAgICAgICAvLyBFeHRyYWN0IGxpbmtzIGZyb20gdGhlIGN1cnJlbnQgcGFnZVxcbiAgICAgICAgLy8gYW5kIGFkZCB0aGVtIHRvIHRoZSBjcmF3bGluZyBxdWV1ZS5cXG4gICAgICAgIGF3YWl0IGVucXVldWVMaW5rcygpO1xcbiAgICB9LFxcblxcbiAgICAvLyBMZXQncyBsaW1pdCBvdXIgY3Jhd2xzIHRvIG1ha2Ugb3VyIHRlc3RzIHNob3J0ZXIgYW5kIHNhZmVyLlxcbiAgICBtYXhSZXF1ZXN0c1BlckNyYXdsOiA1MCxcXG59KTtcXG5cXG4vLyBBZGQgZmlyc3QgVVJMIHRvIHRoZSBxdWV1ZSBhbmQgc3RhcnQgdGhlIGNyYXdsLlxcbmF3YWl0IGNyYXdsZXIucnVuKFsnaHR0cHM6Ly9jcmF3bGVlLmRldiddKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5IjoxMDI0LCJ0aW1lb3V0IjoxODB9fQ.Ja0vzMfKZoDTDX1L9bEJsVFrKUcp0sJyWJ46kbitQOs"},g={code:"import { PlaywrightCrawler, Dataset } from 'crawlee';\n\n// PlaywrightCrawler crawls the web using a headless\n// browser controlled by the Playwright library.\nconst crawler = new PlaywrightCrawler({\n    // Use the requestHandler to process each of the crawled pages.\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n\n        // Save results as JSON to ./storage/datasets/default\n        await Dataset.pushData({ title, url: request.loadedUrl });\n\n        // Extract links from the current page\n        // and add them to the crawling queue.\n        await enqueueLinks();\n    },\n    // Uncomment this option to see the browser window.\n    // headless: false,\n\n    // Let's limit our crawls to make our tests shorter and safer.\n    maxRequestsPerCrawl: 50,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IFBsYXl3cmlnaHRDcmF3bGVyLCBEYXRhc2V0IH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuLy8gUGxheXdyaWdodENyYXdsZXIgY3Jhd2xzIHRoZSB3ZWIgdXNpbmcgYSBoZWFkbGVzc1xcbi8vIGJyb3dzZXIgY29udHJvbGxlZCBieSB0aGUgUGxheXdyaWdodCBsaWJyYXJ5LlxcbmNvbnN0IGNyYXdsZXIgPSBuZXcgUGxheXdyaWdodENyYXdsZXIoe1xcbiAgICAvLyBVc2UgdGhlIHJlcXVlc3RIYW5kbGVyIHRvIHByb2Nlc3MgZWFjaCBvZiB0aGUgY3Jhd2xlZCBwYWdlcy5cXG4gICAgYXN5bmMgcmVxdWVzdEhhbmRsZXIoeyByZXF1ZXN0LCBwYWdlLCBlbnF1ZXVlTGlua3MsIGxvZyB9KSB7XFxuICAgICAgICBjb25zdCB0aXRsZSA9IGF3YWl0IHBhZ2UudGl0bGUoKTtcXG4gICAgICAgIGxvZy5pbmZvKGBUaXRsZSBvZiAke3JlcXVlc3QubG9hZGVkVXJsfSBpcyAnJHt0aXRsZX0nYCk7XFxuXFxuICAgICAgICAvLyBTYXZlIHJlc3VsdHMgYXMgSlNPTiB0byAuL3N0b3JhZ2UvZGF0YXNldHMvZGVmYXVsdFxcbiAgICAgICAgYXdhaXQgRGF0YXNldC5wdXNoRGF0YSh7IHRpdGxlLCB1cmw6IHJlcXVlc3QubG9hZGVkVXJsIH0pO1xcblxcbiAgICAgICAgLy8gRXh0cmFjdCBsaW5rcyBmcm9tIHRoZSBjdXJyZW50IHBhZ2VcXG4gICAgICAgIC8vIGFuZCBhZGQgdGhlbSB0byB0aGUgY3Jhd2xpbmcgcXVldWUuXFxuICAgICAgICBhd2FpdCBlbnF1ZXVlTGlua3MoKTtcXG4gICAgfSxcXG4gICAgLy8gVW5jb21tZW50IHRoaXMgb3B0aW9uIHRvIHNlZSB0aGUgYnJvd3NlciB3aW5kb3cuXFxuICAgIC8vIGhlYWRsZXNzOiBmYWxzZSxcXG5cXG4gICAgLy8gTGV0J3MgbGltaXQgb3VyIGNyYXdscyB0byBtYWtlIG91ciB0ZXN0cyBzaG9ydGVyIGFuZCBzYWZlci5cXG4gICAgbWF4UmVxdWVzdHNQZXJDcmF3bDogNTAsXFxufSk7XFxuXFxuLy8gQWRkIGZpcnN0IFVSTCB0byB0aGUgcXVldWUgYW5kIHN0YXJ0IHRoZSBjcmF3bC5cXG5hd2FpdCBjcmF3bGVyLnJ1bihbJ2h0dHBzOi8vY3Jhd2xlZS5kZXYnXSk7XFxuXCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6NDA5NiwidGltZW91dCI6MTgwfX0.t_TCm8kwdGMajR-HxGyGZQ-N9vOJbcHUo8cgMhCec0E"},p={code:"import { PlaywrightCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n        await Dataset.pushData({ title, url: request.loadedUrl });\n        await enqueueLinks();\n    },\n    // When you turn off headless mode, the crawler\n    // will run with a visible browser window.\n    headless: false,\n\n    // Let's limit our crawls to make our tests shorter and safer.\n    maxRequestsPerCrawl: 50,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IFBsYXl3cmlnaHRDcmF3bGVyLCBEYXRhc2V0IH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBQbGF5d3JpZ2h0Q3Jhd2xlcih7XFxuICAgIGFzeW5jIHJlcXVlc3RIYW5kbGVyKHsgcmVxdWVzdCwgcGFnZSwgZW5xdWV1ZUxpbmtzLCBsb2cgfSkge1xcbiAgICAgICAgY29uc3QgdGl0bGUgPSBhd2FpdCBwYWdlLnRpdGxlKCk7XFxuICAgICAgICBsb2cuaW5mbyhgVGl0bGUgb2YgJHtyZXF1ZXN0LmxvYWRlZFVybH0gaXMgJyR7dGl0bGV9J2ApO1xcbiAgICAgICAgYXdhaXQgRGF0YXNldC5wdXNoRGF0YSh7IHRpdGxlLCB1cmw6IHJlcXVlc3QubG9hZGVkVXJsIH0pO1xcbiAgICAgICAgYXdhaXQgZW5xdWV1ZUxpbmtzKCk7XFxuICAgIH0sXFxuICAgIC8vIFdoZW4geW91IHR1cm4gb2ZmIGhlYWRsZXNzIG1vZGUsIHRoZSBjcmF3bGVyXFxuICAgIC8vIHdpbGwgcnVuIHdpdGggYSB2aXNpYmxlIGJyb3dzZXIgd2luZG93LlxcbiAgICBoZWFkbGVzczogZmFsc2UsXFxuXFxuICAgIC8vIExldCdzIGxpbWl0IG91ciBjcmF3bHMgdG8gbWFrZSBvdXIgdGVzdHMgc2hvcnRlciBhbmQgc2FmZXIuXFxuICAgIG1heFJlcXVlc3RzUGVyQ3Jhd2w6IDUwLFxcbn0pO1xcblxcbi8vIEFkZCBmaXJzdCBVUkwgdG8gdGhlIHF1ZXVlIGFuZCBzdGFydCB0aGUgY3Jhd2wuXFxuYXdhaXQgY3Jhd2xlci5ydW4oWydodHRwczovL2NyYXdsZWUuZGV2J10pO1xcblwifSIsIm9wdGlvbnMiOnsiYnVpbGQiOiJsYXRlc3QiLCJjb250ZW50VHlwZSI6ImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgiLCJtZW1vcnkiOjQwOTYsInRpbWVvdXQiOjE4MH19.hy0W1IDTCxm-B-7JSs_YOrqWnYAemKGg8vJVLIaigIg"},I={code:"import { PuppeteerCrawler, Dataset } from 'crawlee';\n\n// PuppeteerCrawler crawls the web using a headless\n// browser controlled by the Puppeteer library.\nconst crawler = new PuppeteerCrawler({\n    // Use the requestHandler to process each of the crawled pages.\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n\n        // Save results as JSON to ./storage/datasets/default\n        await Dataset.pushData({ title, url: request.loadedUrl });\n\n        // Extract links from the current page\n        // and add them to the crawling queue.\n        await enqueueLinks();\n    },\n    // Uncomment this option to see the browser window.\n    // headless: false,\n\n    // Let's limit our crawls to make our tests shorter and safer.\n    maxRequestsPerCrawl: 50,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IFB1cHBldGVlckNyYXdsZXIsIERhdGFzZXQgfSBmcm9tICdjcmF3bGVlJztcXG5cXG4vLyBQdXBwZXRlZXJDcmF3bGVyIGNyYXdscyB0aGUgd2ViIHVzaW5nIGEgaGVhZGxlc3NcXG4vLyBicm93c2VyIGNvbnRyb2xsZWQgYnkgdGhlIFB1cHBldGVlciBsaWJyYXJ5LlxcbmNvbnN0IGNyYXdsZXIgPSBuZXcgUHVwcGV0ZWVyQ3Jhd2xlcih7XFxuICAgIC8vIFVzZSB0aGUgcmVxdWVzdEhhbmRsZXIgdG8gcHJvY2VzcyBlYWNoIG9mIHRoZSBjcmF3bGVkIHBhZ2VzLlxcbiAgICBhc3luYyByZXF1ZXN0SGFuZGxlcih7IHJlcXVlc3QsIHBhZ2UsIGVucXVldWVMaW5rcywgbG9nIH0pIHtcXG4gICAgICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgcGFnZS50aXRsZSgpO1xcbiAgICAgICAgbG9nLmluZm8oYFRpdGxlIG9mICR7cmVxdWVzdC5sb2FkZWRVcmx9IGlzICcke3RpdGxlfSdgKTtcXG5cXG4gICAgICAgIC8vIFNhdmUgcmVzdWx0cyBhcyBKU09OIHRvIC4vc3RvcmFnZS9kYXRhc2V0cy9kZWZhdWx0XFxuICAgICAgICBhd2FpdCBEYXRhc2V0LnB1c2hEYXRhKHsgdGl0bGUsIHVybDogcmVxdWVzdC5sb2FkZWRVcmwgfSk7XFxuXFxuICAgICAgICAvLyBFeHRyYWN0IGxpbmtzIGZyb20gdGhlIGN1cnJlbnQgcGFnZVxcbiAgICAgICAgLy8gYW5kIGFkZCB0aGVtIHRvIHRoZSBjcmF3bGluZyBxdWV1ZS5cXG4gICAgICAgIGF3YWl0IGVucXVldWVMaW5rcygpO1xcbiAgICB9LFxcbiAgICAvLyBVbmNvbW1lbnQgdGhpcyBvcHRpb24gdG8gc2VlIHRoZSBicm93c2VyIHdpbmRvdy5cXG4gICAgLy8gaGVhZGxlc3M6IGZhbHNlLFxcblxcbiAgICAvLyBMZXQncyBsaW1pdCBvdXIgY3Jhd2xzIHRvIG1ha2Ugb3VyIHRlc3RzIHNob3J0ZXIgYW5kIHNhZmVyLlxcbiAgICBtYXhSZXF1ZXN0c1BlckNyYXdsOiA1MCxcXG59KTtcXG5cXG4vLyBBZGQgZmlyc3QgVVJMIHRvIHRoZSBxdWV1ZSBhbmQgc3RhcnQgdGhlIGNyYXdsLlxcbmF3YWl0IGNyYXdsZXIucnVuKFsnaHR0cHM6Ly9jcmF3bGVlLmRldiddKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5Ijo0MDk2LCJ0aW1lb3V0IjoxODB9fQ.r3-Jgz2GRxUEVxzBr5czC9lcH0ty_8aKkcd9XHHZryg"},w={code:"import { PuppeteerCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const title = await page.title();\n        log.info(`Title of ${request.loadedUrl} is '${title}'`);\n        await Dataset.pushData({ title, url: request.loadedUrl });\n        await enqueueLinks();\n    },\n    // When you turn off headless mode, the crawler\n    // will run with a visible browser window.\n    headless: false,\n\n    // Let's limit our crawls to make our tests shorter and safer.\n    maxRequestsPerCrawl: 50,\n});\n\n// Add first URL to the queue and start the crawl.\nawait crawler.run(['https://crawlee.dev']);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IFB1cHBldGVlckNyYXdsZXIsIERhdGFzZXQgfSBmcm9tICdjcmF3bGVlJztcXG5cXG5jb25zdCBjcmF3bGVyID0gbmV3IFB1cHBldGVlckNyYXdsZXIoe1xcbiAgICBhc3luYyByZXF1ZXN0SGFuZGxlcih7IHJlcXVlc3QsIHBhZ2UsIGVucXVldWVMaW5rcywgbG9nIH0pIHtcXG4gICAgICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgcGFnZS50aXRsZSgpO1xcbiAgICAgICAgbG9nLmluZm8oYFRpdGxlIG9mICR7cmVxdWVzdC5sb2FkZWRVcmx9IGlzICcke3RpdGxlfSdgKTtcXG4gICAgICAgIGF3YWl0IERhdGFzZXQucHVzaERhdGEoeyB0aXRsZSwgdXJsOiByZXF1ZXN0LmxvYWRlZFVybCB9KTtcXG4gICAgICAgIGF3YWl0IGVucXVldWVMaW5rcygpO1xcbiAgICB9LFxcbiAgICAvLyBXaGVuIHlvdSB0dXJuIG9mZiBoZWFkbGVzcyBtb2RlLCB0aGUgY3Jhd2xlclxcbiAgICAvLyB3aWxsIHJ1biB3aXRoIGEgdmlzaWJsZSBicm93c2VyIHdpbmRvdy5cXG4gICAgaGVhZGxlc3M6IGZhbHNlLFxcblxcbiAgICAvLyBMZXQncyBsaW1pdCBvdXIgY3Jhd2xzIHRvIG1ha2Ugb3VyIHRlc3RzIHNob3J0ZXIgYW5kIHNhZmVyLlxcbiAgICBtYXhSZXF1ZXN0c1BlckNyYXdsOiA1MCxcXG59KTtcXG5cXG4vLyBBZGQgZmlyc3QgVVJMIHRvIHRoZSBxdWV1ZSBhbmQgc3RhcnQgdGhlIGNyYXdsLlxcbmF3YWl0IGNyYXdsZXIucnVuKFsnaHR0cHM6Ly9jcmF3bGVlLmRldiddKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5Ijo0MDk2LCJ0aW1lb3V0IjoxODB9fQ.SeMW82sV8hdxSVLInwu1lVZjrCxNzASe8GlszF0s-W8"},x="INFO  CheerioCrawler: Starting the crawl\nINFO  CheerioCrawler: Title of https://crawlee.dev/ is 'Crawlee \xb7 Build reliable crawlers. Fast. | Crawlee'\nINFO  CheerioCrawler: Title of https://crawlee.dev/docs/examples is 'Examples | Crawlee'\nINFO  CheerioCrawler: Title of https://crawlee.dev/docs/quick-start is 'Quick Start | Crawlee'\nINFO  CheerioCrawler: Title of https://crawlee.dev/docs/guides is 'Guides | Crawlee'\n",b={id:"quick-start",title:"Quick Start",description:"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn more, read the Introduction."},y=void 0,C={id:"quick-start/quick-start",title:"Quick Start",description:"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn more, read the Introduction.",source:"@site/versioned_docs/version-3.6/quick-start/index.mdx",sourceDirName:"quick-start",slug:"/quick-start/",permalink:"/docs/3.6/quick-start/",draft:!1,unlisted:!1,tags:[],version:"3.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1704359836,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"quick-start",title:"Quick Start",description:"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn more, read the Introduction."},sidebar:"docs",next:{title:"Introduction",permalink:"/docs/3.6/introduction/"}},m={},G=[{value:"Choose your crawler",id:"choose-your-crawler",level:2},{value:"CheerioCrawler",id:"cheeriocrawler",level:3},{value:"PuppeteerCrawler",id:"puppeteercrawler",level:3},{value:"PlaywrightCrawler",id:"playwrightcrawler",level:3},{value:"Installation with Crawlee CLI",id:"installation-with-crawlee-cli",level:2},{value:"Manual installation",id:"manual-installation",level:2},{value:"Crawling",id:"crawling",level:2},{value:"Running headful browsers",id:"running-headful-browsers",level:3},{value:"Results",id:"results",level:2},{value:"Examples and further reading",id:"examples-and-further-reading",level:2}];function X(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["With this short tutorial you can start scraping with Crawlee in a minute or two. To learn in-depth how Crawlee works, read the ",(0,a.jsx)(r.a,{href:"./introduction",children:"Introduction"}),", which is a comprehensive step-by-step guide for creating your first scraper."]}),"\n",(0,a.jsx)(r.h2,{id:"choose-your-crawler",children:"Choose your crawler"}),"\n",(0,a.jsxs)(r.p,{children:["Crawlee comes with three main crawler classes: ",(0,a.jsx)(n.Z,{to:"cheerio-crawler/class/CheerioCrawler",children:(0,a.jsx)(r.code,{children:"CheerioCrawler"})}),", ",(0,a.jsx)(n.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",children:(0,a.jsx)(r.code,{children:"PuppeteerCrawler"})})," and ",(0,a.jsx)(n.Z,{to:"playwright-crawler/class/PlaywrightCrawler",children:(0,a.jsx)(r.code,{children:"PlaywrightCrawler"})}),". All classes share the same interface for maximum flexibility when switching between them."]}),"\n",(0,a.jsx)(r.h3,{id:"cheeriocrawler",children:"CheerioCrawler"}),"\n",(0,a.jsxs)(r.p,{children:["This is a plain HTTP crawler. It parses HTML using the ",(0,a.jsx)(r.a,{href:"https://github.com/cheeriojs/cheerio",target:"_blank",rel:"noopener",children:"Cheerio"})," library and crawls the web using the specialized ",(0,a.jsx)(r.a,{href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener",children:"got-scraping"})," HTTP client which masks as a browser. It's very fast and efficient, but can't handle JavaScript rendering."]}),"\n",(0,a.jsx)(r.h3,{id:"puppeteercrawler",children:"PuppeteerCrawler"}),"\n",(0,a.jsxs)(r.p,{children:["This crawler uses a headless browser to crawl, controlled by the ",(0,a.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener",children:"Puppeteer"})," library. It can control Chromium or Chrome. Puppeteer is the de-facto standard in headless browser automation."]}),"\n",(0,a.jsx)(r.h3,{id:"playwrightcrawler",children:"PlaywrightCrawler"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener",children:"Playwright"})," is a more powerful and full-featured successor to Puppeteer. It can control Chromium, Chrome, Firefox, Webkit and many other browsers. If you're not familiar with Puppeteer already, and you need a headless browser, go with Playwright."]}),"\n",(0,a.jsx)(r.admonition,{title:"before you start",type:"caution",children:(0,a.jsxs)(r.p,{children:["Crawlee requires ",(0,a.jsx)(r.a,{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener",children:"Node.js 16 or later"}),"."]})}),"\n",(0,a.jsx)(r.h2,{id:"installation-with-crawlee-cli",children:"Installation with Crawlee CLI"}),"\n",(0,a.jsxs)(r.p,{children:["The fastest way to try Crawlee out is to use the ",(0,a.jsx)(r.strong,{children:"Crawlee CLI"})," and choose the ",(0,a.jsx)(r.strong,{children:"Getting started example"}),".\nThe CLI will install all the necessary dependencies and add boilerplate code for you to play with."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npx crawlee create my-crawler\n"})}),"\n",(0,a.jsx)(r.p,{children:"After the installation is complete you can start the crawler like this:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"cd my-crawler && npm start\n"})}),"\n",(0,a.jsx)(r.h2,{id:"manual-installation",children:"Manual installation"}),"\n",(0,a.jsx)(r.p,{children:"You can add Crawlee to any Node.js project by running:"}),"\n",(0,a.jsxs)(c.Z,{groupId:"quick_start",children:[(0,a.jsx)(d.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,children:(0,a.jsx)(o.default,{language:"bash",children:"npm install crawlee"})}),(0,a.jsxs)(d.Z,{value:"playwright",label:"PlaywrightCrawler",children:[(0,a.jsx)(r.admonition,{type:"caution",children:(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"playwright"})," is not bundled with Crawlee to reduce install size and allow greater flexibility. You need to explicitly install it with NPM. \ud83d\udc47"]})}),(0,a.jsx)(o.default,{language:"bash",children:"npm install crawlee playwright"})]}),(0,a.jsxs)(d.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:[(0,a.jsx)(r.admonition,{type:"caution",children:(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"puppeteer"})," is not bundled with Crawlee to reduce install size and allow greater flexibility. You need to explicitly install it with NPM. \ud83d\udc47"]})}),(0,a.jsx)(o.default,{language:"bash",children:"npm install crawlee puppeteer"})]})]}),"\n",(0,a.jsx)(r.h2,{id:"crawling",children:"Crawling"}),"\n",(0,a.jsx)(r.p,{children:"Run the following example to perform a recursive crawl of the Crawlee website using the selected crawler."}),"\n",(0,a.jsx)(i.Z,{type:"caution",title:"Don't forget about module imports",children:(0,a.jsxs)(r.p,{children:["To run the example, add a ",(0,a.jsx)("code",{children:'"type": "module"'})," clause into your ",(0,a.jsx)("code",{children:"package.json"})," or\ncopy it into a file with an ",(0,a.jsx)("code",{children:".mjs"})," suffix. This enables ",(0,a.jsx)("code",{children:"import"})," statements in Node.js.\nSee ",(0,a.jsx)("a",{href:"https://nodejs.org/dist/latest-v16.x/docs/api/esm.html#enabling",target:"_blank",rel:"noreferrer",children:"Node.js docs"})," for\nmore information."]})}),"\n",(0,a.jsxs)(c.Z,{groupId:"quick_start",children:[(0,a.jsx)(d.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,children:(0,a.jsx)(s.Z,{className:"language-js",type:"cheerio",children:u})}),(0,a.jsx)(d.Z,{value:"playwright",label:"PlaywrightCrawler",children:(0,a.jsx)(s.Z,{className:"language-js",type:"playwright",children:g})}),(0,a.jsx)(d.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:(0,a.jsx)(s.Z,{className:"language-js",type:"puppeteer",children:I})})]}),"\n",(0,a.jsx)(r.p,{children:"When you run the example, you will see Crawlee automating the data extraction process in your terminal."}),"\n",(0,a.jsx)(o.default,{language:"log",children:x}),"\n",(0,a.jsx)(r.h3,{id:"running-headful-browsers",children:"Running headful browsers"}),"\n",(0,a.jsxs)(r.p,{children:["Browsers controlled by Puppeteer and Playwright run headless (without a visible window). You can switch to headful by adding the ",(0,a.jsx)(r.code,{children:"headless: false"})," option to the crawlers' constructor. This is useful in the development phase when you want to see what's going on in the browser."]}),"\n",(0,a.jsxs)(c.Z,{groupId:"quick_start",children:[(0,a.jsx)(d.Z,{value:"playwright",label:"PlaywrightCrawler",children:(0,a.jsx)(s.Z,{className:"language-js",type:"playwright",children:p})}),(0,a.jsx)(d.Z,{value:"puppeteer",label:"PuppeteerCrawler",children:(0,a.jsx)(s.Z,{className:"language-js",type:"puppeteer",children:w})})]}),"\n",(0,a.jsx)(r.p,{children:"When you run the example code, you'll see an automated browser blaze through the Crawlee website."}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsx)(r.p,{children:"For the sake of this show off, we've slowed down the crawler, but rest assured, it's blazing fast in real world usage."})}),"\n",(0,a.jsx)(h.Z,{alt:"An image showing off Crawlee scraping the Crawlee website using Puppeteer/Playwright and Chromium",sources:{light:"/img/chrome-scrape-light.gif",dark:"/img/chrome-scrape-dark.gif"}}),"\n",(0,a.jsx)(r.h2,{id:"results",children:"Results"}),"\n",(0,a.jsxs)(r.p,{children:["Crawlee stores data to the ",(0,a.jsx)(r.code,{children:"./storage"})," directory in your current working directory. The results of your crawl will be available under ",(0,a.jsx)(r.code,{children:"./storage/datasets/default/*.json"})," as JSON files."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",metastring:'title="./storage/datasets/default/000000001.json"',children:'{\n    "url": "https://crawlee.dev/",\n    "title": "Crawlee \xb7 The scalable web crawling, scraping and automation library for JavaScript/Node.js | Crawlee"\n}\n'})}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["You can override the storage directory by setting the ",(0,a.jsx)(r.code,{children:"CRAWLEE_STORAGE_DIR"})," environment variable."]})}),"\n",(0,a.jsx)(r.h2,{id:"examples-and-further-reading",children:"Examples and further reading"}),"\n",(0,a.jsxs)(r.p,{children:["You can find more examples showcasing various features of Crawlee in the ",(0,a.jsx)(r.a,{href:"./examples",children:"Examples"})," section of the documentation. To better understand Crawlee and its components you should read the ",(0,a.jsx)(r.a,{href:"./introduction",children:"Introduction"})," step-by-step guide."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Related links"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./guides/configuration",children:"Configuration"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./guides/request-storage",children:"Request storage"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"./guides/result-storage",children:"Result storage"})}),"\n"]})]})}function Z(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(X,{...e})}):X(e)}},14959:(e,r,l)=>{l.d(r,{Z:()=>d});l(67294);var a=l(39960),t=l(74477),s=l(52263),n=l(85893),i=l(50643).version.split("."),c=[i[0],i[1]].join(".");const d=function(e){var r=e.to,l=e.children,i=(0,t.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning||i.version===c?(0,n.jsx)(a.default,{to:"/api/"+r,children:l}):(0,n.jsx)(a.default,{to:"/api/"+("current"===i.version?"next":i.version)+"/"+r,children:l})}},15316:(e,r,l)=>{l.d(r,{Z:()=>h});var a=l(63366),t=(l(67294),l(90512)),s=l(93e3),n=l(39960);const i={button:"button_YBBj",container:"container_TGAW"};var c=l(85893),d=["children","actor","hash","type"],o={playwright:"6i5QsHBMtm3hKph70",puppeteer:"7tWSD8hrYzuc9Lte7",cheerio:"kk67IcZkKSSBTslXI"};const h=function(e){var r,l=e.children,h=e.actor,u=e.hash,g=e.type,p=(0,a.Z)(e,d);if(u=null!=(r=u)?r:l.hash,!l.code)throw new Error('RunnableCodeBlock requires "code" and "hash" props\nMake sure you are importing the code block contents with the roa-loader.');if(!u)return(0,c.jsx)(s.default,Object.assign({},p,{children:l.code}));var I="https://console.apify.com/actors/"+(null!=h?h:o[null!=g?g:"playwright"])+"?runConfig="+u+"&asrc=run_on_apify";return(0,c.jsxs)("div",{className:(0,t.Z)(i.container,"runnable-code-block"),children:[(0,c.jsxs)(n.default,{href:I,className:i.button,rel:"follow",children:["Run on",(0,c.jsxs)("svg",{width:"91",height:"25",viewBox:"0 0 91 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"apify-logo-light alignMiddle_src-theme-Footer-index-module",children:[(0,c.jsx)("path",{d:"M3.135 2.85A3.409 3.409 0 0 0 .227 6.699l2.016 14.398 8.483-19.304-7.59 1.059Z",fill:"#97D700"}),(0,c.jsx)("path",{d:"M23.604 14.847 22.811 3.78a3.414 3.414 0 0 0-3.64-3.154c-.077 0-.153.014-.228.025l-3.274.452 7.192 16.124c.54-.67.805-1.52.743-2.379Z",fill:"#71C5E8"}),(0,c.jsx)("path",{d:"M5.336 24.595c.58.066 1.169-.02 1.706-.248l12.35-5.211L13.514 5.97 5.336 24.595Z",fill:"#FF9013"}),(0,c.jsx)("path",{d:"M33.83 5.304h3.903l5.448 14.623h-3.494l-1.022-2.994h-5.877l-1.025 2.994h-3.384L33.83 5.304Zm-.177 9.032h4.14l-2-5.994h-.086l-2.054 5.994ZM58.842 5.304h3.302v14.623h-3.302V5.304ZM64.634 5.304h10.71v2.7h-7.4v4.101h5.962v2.632h-5.963v5.186h-3.309V5.303ZM82.116 14.38l-5.498-9.076h3.748l3.428 6.016h.085l3.599-6.016H91l-5.56 9.054v5.569h-3.324v-5.548ZM51.75 5.304h-7.292v14.623h3.3v-4.634h3.993a4.995 4.995 0 1 0 0-9.99Zm-.364 7.417h-3.628V7.875h3.627a2.423 2.423 0 0 1 0 4.846Z",className:"apify-logo",fill:"#000"})]})]}),(0,c.jsx)(s.default,Object.assign({},p,{className:(0,t.Z)(i.codeBlock,"code-block",null!=p.title?"has-title":"no-title"),children:l.code}))]})}},50643:e=>{e.exports=JSON.parse('{"name":"crawlee","version":"3.7.1","description":"The scalable web crawling and scraping library for JavaScript/Node.js. Enables development of data extraction and web automation jobs (not only) with headless Chrome and Puppeteer.","engines":{"node":">=16.0.0"},"bin":"./src/cli.ts","main":"./dist/index.js","module":"./dist/index.mjs","types":"./dist/index.d.ts","exports":{".":{"import":"./dist/index.mjs","require":"./dist/index.js","types":"./dist/index.d.ts"},"./package.json":"./package.json"},"keywords":["apify","headless","chrome","puppeteer","crawler","scraper"],"author":{"name":"Apify","email":"support@apify.com","url":"https://apify.com"},"contributors":["Jan Curn <jan@apify.com>","Marek Trunkat <marek@apify.com>","Ondra Urban <ondra@apify.com>"],"license":"Apache-2.0","repository":{"type":"git","url":"git+https://github.com/apify/crawlee"},"bugs":{"url":"https://github.com/apify/crawlee/issues"},"homepage":"https://crawlee.dev","scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json && gen-esm-wrapper ./dist/index.js ./dist/index.mjs","copy":"tsx ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"@crawlee/basic":"3.7.1","@crawlee/browser":"3.7.1","@crawlee/browser-pool":"3.7.1","@crawlee/cheerio":"3.7.1","@crawlee/cli":"3.7.1","@crawlee/core":"3.7.1","@crawlee/http":"3.7.1","@crawlee/jsdom":"3.7.1","@crawlee/linkedom":"3.7.1","@crawlee/playwright":"3.7.1","@crawlee/puppeteer":"3.7.1","@crawlee/utils":"3.7.1","import-local":"^3.1.0","tslib":"^2.4.0"},"peerDependencies":{"playwright":"*","puppeteer":"*"},"peerDependenciesMeta":{"playwright":{"optional":true},"puppeteer":{"optional":true}}}')}}]);