import { PlaywrightCrawler } from 'crawlee';
import fs from 'fs';
import { mocked } from 'ts-jest/utils';

jest.mock('fs');

describe('PlaywrightCrawler', () => {
    const mockUrls = ['https://crawlee.dev', 'https://crawlee.dev/about', 'https://crawlee.dev/contact'];

    it('correctly writes URLs to the file', async () => {
        const logMock = jest.fn();
        const crawler = new PlaywrightCrawler({
            async requestHandler({ request, enqueueLinks, log }) {
                log.info(request.url);
                await enqueueLinks();
            },
            maxRequestsPerCrawl: 10,
        });

        await crawler.run(mockUrls);

        expect(logMock).toHaveBeenCalledTimes(mockUrls.length);
        mockUrls.forEach((url, index) => {
            expect(logMock).toHaveBeenNthCalledWith(index + 1, url);
        });
    });

    it('handles errors correctly', async () => {
        const crawler = new PlaywrightCrawler({
            async requestHandler({ request, enqueueLinks, log }) {
                log.info(request.url);
                await enqueueLinks();
            },
            maxRequestsPerCrawl: 10,
        });

        await expect(crawler.run(['invalid_url'])).rejects.toThrow();
    });
});
