import { CheerioCrawler, Dataset } from '@crawlee/cheerio';
import { Actor } from 'apify';

const mainOptions = {
    exit: Actor.isAtHome(),
    storage: process.env.STORAGE_IMPLEMENTATION === 'LOCAL' ? new (await import('@apify/storage-local')).ApifyStorageLocal() : undefined,
};

await Actor.main(async () => {
    const crawler = new CheerioCrawler({
        ignoreSslErrors: false,
        async requestHandler({ $, enqueueLinks, request, log }) {
            const { userData: { label } } = request;

            if (label === 'START') {
                log.info('Bad ssl page opened!');
                await enqueueLinks({
                    globs: [{ glob: 'https://*.badssl.com/', userData: { label: 'DETAIL' } }],
                    selector: '.group a.bad',
                });
            } else if (label === 'DETAIL') {
                const { url } = request;
                log.info(`Scraping ${url}`);
                const title = $('title').text();
                await Dataset.pushData({ url, title });
            }
        },
    });

    await crawler.run([{ url: 'https://badssl.com', userData: { label: 'START' } }]);
}, mainOptions);
