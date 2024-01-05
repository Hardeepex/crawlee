import { PlaywrightCrawler } from 'crawlee';

const crawler = new PlaywrightCrawler({
    async requestHandler({ request, enqueueLinks, log }) {
        log.info(request.url);
        // Add all links from page to RequestQueue
        await enqueueLinks();
    },
    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)
});

import { promises as fs } from 'fs';

export async function writeUrlsToFile(urls: string[], filePath: string): Promise<void> {
    try {
        await fs.writeFile(filePath, urls.join('\n'));
    } catch (error: any) {
        throw new Error(`Error writing to file: ${error.message}`);
    }
}

// Run the crawler with initial request
await crawler.run(['https://crawlee.dev']);
