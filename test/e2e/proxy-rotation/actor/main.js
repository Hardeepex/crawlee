import { Dataset, KeyValueStore, PuppeteerCrawler } from '@crawlee/puppeteer';
import { Actor } from 'apify';

const mainOptions = {
    exit: Actor.isAtHome(),
    storage: process.env.STORAGE_IMPLEMENTATION === 'LOCAL' ? new (await import('@apify/storage-local')).ApifyStorageLocal() : undefined,
};

await Actor.main(async () => {
    const crawler = new PuppeteerCrawler({
        proxyConfiguration: await Actor.createProxyConfiguration(),
        maxConcurrency: 1,
        sessionPoolOptions: { sessionOptions: { maxUsageCount: 1 } },
        async requestHandler({ page }) {
            const pageContent = await page.evaluate(() => document.body.children[0].innerText);
            const { clientIp } = JSON.parse(pageContent);

            const presentAlready = await KeyValueStore.getValue(clientIp);
            if (presentAlready) {
                throw new Error(`The ip address ${clientIp} was already used. Proxy rotation does not work properly.`);
            }

            await KeyValueStore.setValue(clientIp, true);
            await Dataset.pushData({ clientIp });
        },
    });

    await crawler.run(Array.from(
        { length: 5 },
        (_, i) => ({ url: 'https://api.apify.com/v2/browser-info', uniqueKey: `${i}` }),
    ));
}, mainOptions);
