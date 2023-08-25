import { BasicCrawler } from '@crawlee/basic';
import { Actor, KeyValueStore } from 'apify';

const mainOptions = {
    exit: Actor.isAtHome(),
    storage: process.env.STORAGE_IMPLEMENTATION === 'LOCAL' ? new (await import('@apify/storage-local')).ApifyStorageLocal() : undefined,
};

await Actor.main(async () => {
    const kv = await KeyValueStore.open();

    const crawler = new BasicCrawler({
        async requestHandler() {
            const automaticValue = await kv.getAutoSavedValue('crawlee');

            automaticValue.crawlee = 'awesome!';
        },
    });

    await crawler.run(['https://example.com']);
}, mainOptions);
