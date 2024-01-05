import fs from 'fs';
import { PlaywrightCrawler } from 'crawlee';

const crawler = new PlaywrightCrawler({
    async requestHandler({ request, enqueueLinks, log }) {
        log.info(request.url);
        // Add all links from page to RequestQueue
        await enqueueLinks();
        fs.writeFileSync('crawled_links.txt', request.url + '\n', { flag: 'a+' });
    },
    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)
});

// Run the crawler with initial request
await crawler.run(['https://crawlee.dev']);
