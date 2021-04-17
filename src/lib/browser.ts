import { LONG_TIMEOUT, urls } from "../constants/constants";

export const launchBrowser = async () => {
  const puppeteerBrowser = await browser.getPuppeteer()
  const page = await puppeteerBrowser.newPage();
  await page.setDefaultTimeout(LONG_TIMEOUT);
  await page.setViewport({ 'width': 1366, 'height': 1050 });
  await page.goto(urls.appBaseUrl, { waitUntil: 'networkidle0' });
  return page;
}
