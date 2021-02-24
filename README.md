# FMP-TS
Performance Navigation Timing First Meaningful Paint

# First-Meaningful-Paint
## What is first meaningful paint?
First Meaningful Paint is the time when page's primary content appeared on the screen. This is going to be our primary metric for user-perceived loading experience.
This concept was raised by Google, see this. However, google has not yet implement first meaningful paint in performance api for some reason.

Which content is primary is subjective and business dependednt, and knowing when content has appeared on the screen precisely is impossible on user's devices. Approximations of firstMeaningfulPaint may differ between browser implementations.

# Web APP Performance framework

This automation framework has been implemented using WebdriverIO integrated with Puppeteer to calculate the First Meaningful Paint of each pages.

Prerequisites:
- Node.js 12 (https://nodejs.org)
- Yarn (https://yarnpkg.com)

## Setup
- To download dependencies run `yarn` inside the project folder (eg: packages/FMP-TS)

## Test run

- Run `yarn test`

## Test Result

- Once the test run is complete, the following result folder will be created which outputs the FMP values for each test pages.