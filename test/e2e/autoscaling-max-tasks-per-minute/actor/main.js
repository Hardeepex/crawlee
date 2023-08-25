import { BasicCrawler, log as defaultLog, LogLevel } from '@crawlee/basic';
import { Actor } from 'apify';

const crawlerLogger = defaultLog.child({
    prefix: 'AutoscalingTest',
    level: LogLevel.INFO,
});

const mainOptions = {
    exit: Actor.isAtHome(),
    storage: process.env.STORAGE_IMPLEMENTATION === 'LOCAL' ? new (await import('@apify/storage-local')).ApifyStorageLocal() : undefined,
};

let crawlCalledAt = Date.now();

await Actor.main(async () => {
    const crawler = new BasicCrawler({
        log: crawlerLogger,
        autoscaledPoolOptions: { maxTasksPerMinute: 1 },
        requestHandler({ log }) {
            log.info(`Crawler requestHandler called after ${Date.now() - crawlCalledAt}ms`);
            crawlCalledAt = Date.now();
        },
    });

    await crawler.run(['https://example.com/1', 'https://example.com/2']);
}, mainOptions);
