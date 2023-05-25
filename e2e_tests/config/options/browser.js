import path from 'path';

const extensionPath = path.resolve(__dirname, '../../../web/build');

const extensionWindow = {
  height: 600,
  width: 350,
};

const capabilities = {
  browserName: 'chrome',
  'goog:chromeOptions': {
    headless: false,
    executablePath: process.env.PUPPETEER_EXEC_PATH,
    args: [
      '--no-sandbox',
      ...(process.env.E2E_PLATFORM === 'chrome-extension'
        ? [
            `--disable-extensions-except=${extensionPath}`,
            `--load-extension=${extensionPath}`,
            `--window-size=${extensionWindow.width},${
              extensionWindow.height
            }`,
            '--app=data:text/html,RNE e2e tests', // to open extension in separate popup window
          ]
        : []),
    ],
    slowMo: 10,
  },
};

module.exports = capabilities;
