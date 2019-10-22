const path = require('path');
const assert = require('chai').assert;
const puppeteer = require('puppeteer');
const {URL} = require('url');

const BASE_URL = `file://${path.resolve('index.html')}`;
const TARGET_URL = `file://${path.resolve('empty.html')}`;
const USER_AGENTS = {
  web: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 YaBrowser/19.7.0.2015 Yowser/2.5 Safari/537.36',
  ios: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
  android: 'Mozilla/5.0 (Linux; U; Android 2.2) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
};

let browser, page;

before(async () => {
  browser = await puppeteer.launch({headless: true});
  page = await browser.newPage();
  page.on('error', e => console.error(e)); // eslint-disable-line no-console
  await page.setCacheEnabled(false);
});

it('should not redirect without params', async () => {
  const url = buildUrl(BASE_URL, { });
  await page.goto(url);
  await page.waitFor(600);
  assert.strictEqual(page.url(), BASE_URL);
  assert.include(await page.$eval('div', el => el.textContent), 'No "web" parameter found in url');
});

it('should redirect to web', async () => {
  const url = buildUrl(BASE_URL, {
    web: TARGET_URL
  });
  await page.setUserAgent(USER_AGENTS.web);
  await Promise.all([
    page.goto(url),
    page.waitForRequest(TARGET_URL),
  ]);
});

it('should redirect to ios', async () => {
  const url = buildUrl(BASE_URL, {
    web: `${TARGET_URL}?error`,
    ios: TARGET_URL,
  });
  await page.setUserAgent(USER_AGENTS.ios);
  await Promise.all([
    page.goto(url),
    page.waitForRequest(TARGET_URL),
  ]);
});

it('should redirect to android', async () => {
  const url = buildUrl(BASE_URL, {
    web: `${TARGET_URL}?error`,
    android: TARGET_URL,
  });
  await page.setUserAgent(USER_AGENTS.android);
  await Promise.all([
    page.goto(url),
    page.waitForRequest(TARGET_URL),
  ]);
});

after(async () => {
  await browser.close();
});

function buildUrl(baseUrl, params) {
  const url = new URL(baseUrl);
  Object.keys(params).forEach(key => url.searchParams.set(key, params[key]));
  return url.toString();
}
