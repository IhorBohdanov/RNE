import NodeEnvironment from 'jest-environment-node';
import * as webdriverio from 'webdriverio';
import driverOptions from './options';

class CustomEnvironment extends NodeEnvironment {
  timeout = 10000;
  client;
  platform;
  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    this.global.timeout = this.timeout;
    this.platform = process.env.E2E_PLATFORM;

    await this.createSession();
  }

  async createSession() {
    this.client = await webdriverio.remote(driverOptions);
    this.global.client = this.client;
    if (this.platform === 'chrome') {
      await this.openWebAppPage();
    } else if (this.platform === 'chrome-extension') {
      await this.openExtensionPopup();
    }
    await this.addUtils();
  }

  async teardown() {
    await this.client?.deleteSession();
    await super.teardown();
  }

  async openExtensionPopup() {
    const puppeteer = await this.client.getPuppeteer();
    let target;

    await this.client.waitUntil(
      async () => {
        const targets = await puppeteer.targets();
        target = targets.find(t => t.type() === 'service_worker');
        return Boolean(target);
      },
      {
        timeoutMsg: 'Failed to find service worker target',
      },
    );

    const [, , extensionId] = target?.url()?.split('/');
    const extensionUrl = `chrome-extension://${extensionId}/index.html`;
    await this.client.url(extensionUrl, { waitUntil: 'load' });
  }

  async openWebAppPage() {
    await this.client.url(
      `http://localhost:${process.env.E2E_WEB_SERVE_PORT}`,
      { waitUntil: 'load' },
    );
  }

  async addUtils() {
    if (!this.client) {
      throw new Error("The client does not exist!");
    };

    this.client.getExistingElementWithTestId = async (testId, params = {}) => {
      let selector;
      if (this.platform === "chrome" || this.platform === "chrome-extension") {
        selector = `[data-testid='${testId}']`;
      } else if (this.platform === "android") {
        selector = `android=new UiSelector().resourceId("${testId}")`;
      } else if (this.platform === "ios") {
        selector = `~${testId}`;
      }
      const element = await this.client.$(selector);
      await element.waitForExist({
        ...params,
        timeout: params?.timeout || this.timeout,
      });
      return element;
    };

    this.client.getExistingElementWithText = async (text, params) => {
      let selector;
      if (this.platform === "chrome" || this.platform === "chrome-extension") {
        selector = `//*[text()="${text}"]`;
      } else if (this.platform === "android") {
        selector = `android=new UiSelector().text("${text}")`;
      } else if (this.platform === "ios") {
        selector = `-ios predicate string:name == "${text}"`;
      }

      const element = await this.client.$(selector);
      await element.waitForExist({
        ...params,
        timeout: params?.timeout || this.timeout,
      });
      return element;
    };

    this.client.getExistingElementWithSubstring = async (text, params) => {
      let selector;
      if (this.platform === "chrome" || this.platform === "chrome-extension") {
        selector = `//*[contains(text(),'${text}')]`;
      } else if (this.platform === "android") {
        selector = `android=new UiSelector().textContains("${text}")`;
      } else if (this.platform === "ios") {
        selector = `-ios predicate string:name CONTAINS "${text}"`;
      }

      const element = await this.client.$(selector);
      await element.waitForExist({
        ...params,
        timeout: params?.timeout || this.timeout,
      });
      return element;
    };

    this.client.recreateSession = async () => {
      await this.client?.deleteSession();
      await this.createSession();
    };
  }
}

module.exports = CustomEnvironment;
