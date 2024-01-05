import { requestHandler } from '../website/versioned_docs/version-3.7/examples/crawl_all_links_playwright.ts';
import fs from 'fs';
import { mocked } from 'ts-jest/utils';

jest.mock('fs');

describe('requestHandler', () => {
    const mockEnqueueLinks = jest.fn();
    const mockLog = { info: jest.fn() };
    const mockRequest = { url: 'https://crawlee.dev' };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call enqueueLinks', async () => {
        await requestHandler({ request: mockRequest, enqueueLinks: mockEnqueueLinks, log: mockLog });
        expect(mockEnqueueLinks).toHaveBeenCalled();
    });

    it('should write URLs to crawled_links.txt', async () => {
        const mockWriteFileSync = mocked(fs.writeFileSync);
        await requestHandler({ request: mockRequest, enqueueLinks: mockEnqueueLinks, log: mockLog });
        expect(mockWriteFileSync).toHaveBeenCalledWith('crawled_links.txt', 'https://crawlee.dev\n', { flag: 'a' });
    });
});
