# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.5.2](https://github.com/apify/crawlee/compare/v3.5.1...v3.5.2) (2023-08-21)

**Note:** Version bump only for package @crawlee/basic

## [3.5.1](https://github.com/apify/crawlee/compare/v3.5.0...v3.5.1) (2023-08-16)

### Features

- exceeding maxSessionRotations calls failedRequestHandler ([#2029](https://github.com/apify/crawlee/issues/2029)) ([b1cb108](https://github.com/apify/crawlee/commit/b1cb108882ab28d956adfc3d77ba9813507823f6)), closes [#2028](https://github.com/apify/crawlee/issues/2028)

# [3.5.0](https://github.com/apify/crawlee/compare/v3.4.2...v3.5.0) (2023-07-31)

### Features

- add support for `sameDomainDelay` ([#2003](https://github.com/apify/crawlee/issues/2003)) ([e796883](https://github.com/apify/crawlee/commit/e79688324790e5d07fc11192769cf051617e96e4)), closes [#1993](https://github.com/apify/crawlee/issues/1993)
- **basic-crawler:** allow configuring the automatic status message ([#2001](https://github.com/apify/crawlee/issues/2001)) ([3eb4e4c](https://github.com/apify/crawlee/commit/3eb4e4c558b4bc0673fbff75b1db19c46004a1da))
- retire session on proxy error ([#2002](https://github.com/apify/crawlee/issues/2002)) ([8c0928b](https://github.com/apify/crawlee/commit/8c0928b24ceabefc454f8114ac30a27023709010)), closes [#1912](https://github.com/apify/crawlee/issues/1912)

## [3.4.2](https://github.com/apify/crawlee/compare/v3.4.1...v3.4.2) (2023-07-19)

### Bug Fixes

- **basic-crawler:** limit `internalTimeoutMillis` in addition to `requestHandlerTimeoutMillis` ([#1981](https://github.com/apify/crawlee/issues/1981)) ([8122622](https://github.com/apify/crawlee/commit/8122622c3054a0e0e0c1869ba462276cbead8090)), closes [#1766](https://github.com/apify/crawlee/issues/1766)

### Features

- **core:** add `RequestQueue.addRequestsBatched()` that is non-blocking ([#1996](https://github.com/apify/crawlee/issues/1996)) ([c85485d](https://github.com/apify/crawlee/commit/c85485d6ca2bb61cfebb24a2ad99e0b3ba5c069b)), closes [#1995](https://github.com/apify/crawlee/issues/1995)
- retryOnBlocked detects blocked webpage ([#1956](https://github.com/apify/crawlee/issues/1956)) ([766fa9b](https://github.com/apify/crawlee/commit/766fa9b88029e9243a7427075384c1abe85c70c8))

## [3.4.1](https://github.com/apify/crawlee/compare/v3.4.0...v3.4.1) (2023-07-13)

**Note:** Version bump only for package @crawlee/basic

# [3.4.0](https://github.com/apify/crawlee/compare/v3.3.3...v3.4.0) (2023-06-12)

**Note:** Version bump only for package @crawlee/basic

## [3.3.3](https://github.com/apify/crawlee/compare/v3.3.2...v3.3.3) (2023-05-31)

### Bug Fixes

- set status message every 5 seconds and log it via debug level ([#1918](https://github.com/apify/crawlee/issues/1918)) ([32aede6](https://github.com/apify/crawlee/commit/32aede6bbaa25b402e6e9cee9d3aa44722b1cfd0))

### Features

- **core:** add `Request.maxRetries` to allow overriding the `maxRequestRetries` ([#1925](https://github.com/apify/crawlee/issues/1925)) ([c5592db](https://github.com/apify/crawlee/commit/c5592db0f8094de27c46ad993bea2c1ab1f61385))

## [3.3.2](https://github.com/apify/crawlee/compare/v3.3.1...v3.3.2) (2023-05-11)

### Bug Fixes

- respect config object when creating `SessionPool` ([#1881](https://github.com/apify/crawlee/issues/1881)) ([db069df](https://github.com/apify/crawlee/commit/db069df80bc183c6b861c9ac82f1e278e57ea92b))

### Features

- allow running single crawler instance multiple times ([#1844](https://github.com/apify/crawlee/issues/1844)) ([9e6eb1e](https://github.com/apify/crawlee/commit/9e6eb1e32f582a8837311aac12cc1d657432f3fa)), closes [#765](https://github.com/apify/crawlee/issues/765)
- **router:** allow inline router definition ([#1877](https://github.com/apify/crawlee/issues/1877)) ([2d241c9](https://github.com/apify/crawlee/commit/2d241c9f88964ebd41a181069c378b6b7b5bf262))

## [3.3.1](https://github.com/apify/crawlee/compare/v3.3.0...v3.3.1) (2023-04-11)

### Bug Fixes

- start status message logger after the crawl actually starts ([5d1df7a](https://github.com/apify/crawlee/commit/5d1df7aae00d0d6ca29338723f92b77cff667354))
- status message - total requests ([#1842](https://github.com/apify/crawlee/issues/1842)) ([710f734](https://github.com/apify/crawlee/commit/710f7347623619057e99abf539f0ccf78de41bbc))

# [3.3.0](https://github.com/apify/crawlee/compare/v3.2.2...v3.3.0) (2023-03-09)

### Features

- add basic support for `setStatusMessage` ([#1790](https://github.com/apify/crawlee/issues/1790)) ([c318980](https://github.com/apify/crawlee/commit/c318980ec11d211b1a5c9e6bdbe76198c5d895be))
- move the status message implementation to Crawlee, noop in storage ([#1808](https://github.com/apify/crawlee/issues/1808)) ([99c3fdc](https://github.com/apify/crawlee/commit/99c3fdc18030b7898e6b6d149d6d94fab7881f09))

## [3.2.2](https://github.com/apify/crawlee/compare/v3.2.1...v3.2.2) (2023-02-08)

**Note:** Version bump only for package @crawlee/basic

## [3.2.1](https://github.com/apify/crawlee/compare/v3.2.0...v3.2.1) (2023-02-07)

**Note:** Version bump only for package @crawlee/basic

# [3.2.0](https://github.com/apify/crawlee/compare/v3.1.4...v3.2.0) (2023-02-07)

### Bug Fixes

- declare missing dependency on `tslib` ([27e96c8](https://github.com/apify/crawlee/commit/27e96c80c26e7fc31809a4b518d699573cb8c662)), closes [#1747](https://github.com/apify/crawlee/issues/1747)

## [3.1.4](https://github.com/apify/crawlee/compare/v3.1.3...v3.1.4) (2022-12-14)

### Bug Fixes

- session.markBad() on requestHandler error ([#1709](https://github.com/apify/crawlee/issues/1709)) ([e87eb1f](https://github.com/apify/crawlee/commit/e87eb1f2ccd9585f8d53cb03ec671cedf23a06b4)), closes [#1635](https://github.com/apify/crawlee/issues/1635) [/github.com/apify/crawlee/blob/5ff04faa85c3a6b6f02cd58a91b46b80610d8ae6/packages/browser-crawler/src/internals/browser-crawler.ts#L524](https://github.com//github.com/apify/crawlee/blob/5ff04faa85c3a6b6f02cd58a91b46b80610d8ae6/packages/browser-crawler/src/internals/browser-crawler.ts/issues/L524)

## [3.1.3](https://github.com/apify/crawlee/compare/v3.1.2...v3.1.3) (2022-12-07)

### Bug Fixes

- remove memory leaks from migration event handling ([#1679](https://github.com/apify/crawlee/issues/1679)) ([49bba25](https://github.com/apify/crawlee/commit/49bba252ebc348b61eac3895155361f7d394db36)), closes [#1670](https://github.com/apify/crawlee/issues/1670)

### Features

- always show error origin if inside the userland ([#1677](https://github.com/apify/crawlee/issues/1677)) ([bbe9045](https://github.com/apify/crawlee/commit/bbe9045d550f95138d570522f6f469eae2d146d0))

## 3.1.2 (2022-11-15)

**Note:** Version bump only for package @crawlee/basic

## 3.1.1 (2022-11-07)

**Note:** Version bump only for package @crawlee/basic

# 3.1.0 (2022-10-13)

**Note:** Version bump only for package @crawlee/basic

## [3.0.4](https://github.com/apify/crawlee/compare/v3.0.3...v3.0.4) (2022-08-22)

**Note:** Version bump only for package @crawlee/basic
