module.exports = {
    docs: [
        'quick-start/quick-start',
        {
            type: 'category',
            label: 'Introduction',
            collapsed: false,
            link: {
                type: 'doc',
                id: 'introduction/introduction',
            },
            items: [
                'introduction/setting-up',
                'introduction/first-crawler',
                'introduction/adding-urls',
                'introduction/real-world-project',
                'introduction/crawling',
                'introduction/scraping',
                'introduction/saving-data',
                'introduction/refactoring',
                'introduction/deployment',
            ],
        },
        {
            type: 'category',
            label: 'Guides',
            link: {
                type: 'generated-index',
                title: 'Guides',
                slug: '/guides',
                keywords: ['guides'],
            },
            items: [
                'guides/request-storage',
                'guides/result-storage',
                'guides/configuration',
                'guides/cheerio-crawler-guide',
                'guides/javascript-rendering',
                'guides/proxy-management',
                'guides/session-management',
                'guides/scaling-crawlers',
                'guides/avoid-blocking',
                'guides/jsdom-crawler-guide',
                'guides/got-scraping',
                'guides/typescript-project',
                'guides/docker-images',
                'guides/apify-platform',
            ],
        },
        {
            type: 'category',
            label: 'Examples',
            link: {
                type: 'generated-index',
                title: 'Examples',
                slug: '/examples',
                keywords: ['examples'],
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'examples',
                },
            ],
        },
        {
            type: 'category',
            label: 'Upgrading',
            link: {
                type: 'generated-index',
                title: 'Upgrading',
                slug: '/upgrading',
                keywords: ['upgrading'],
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'upgrading',
                },
            ],
        },
    ],
};
