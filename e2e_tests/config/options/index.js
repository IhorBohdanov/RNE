import androidCapabilities from './android';
import iosCapabilities from './ios';
import browserCapabilities from './browser';

const platform = process.env.E2E_PLATFORM;
const isSauce = process.env.E2E_SAUCE;

const mobileLocalOptions = {
  capabilities:
    platform === 'android'
      ? androidCapabilities.localCapabilities
      : iosCapabilities.localCapabilities,
  host: 'localhost',
  port: 4723,
  logLevel: 'error',
};

const mobileSauceOptions = {
  user: process.env.SAUCE_USER,
  key: process.env.SAUCE_ACCESS_KEY,
  hostname: 'ondemand.eu-central-1.saucelabs.com',
  port: 443,
  baseUrl: 'wd/hub',
  capabilities:
    platform === 'android'
      ? androidCapabilities.sauceCapabilities
      : iosCapabilities.sauceCapabilities,
};


const browserOptions = {
  capabilities: browserCapabilities,
  automationProtocol: 'devtools',
  logLevel: 'error',
};

let options;

if (['chrome', 'chrome-extension'].includes(platform)) {
  options = browserOptions;
} else if (['ios', 'android'].includes(platform)) {
  options = isSauce ? mobileSauceOptions : mobileLocalOptions;
} else {
  throw new Error('The E2E_PLATFORM env value is invalid or not specified');
}

module.exports = options;
