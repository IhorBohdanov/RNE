const localCapabilities = {
  platformName: "iOS",
  "appium:options": {
    deviceName: "iPhone 13",
    app: process.env.E2E_IOS_APP_PATH,
    automationName: "XCUITest",
    platformVersion: "16.2",
  },
};

const sauceCapabilities = {
  platformName: "iOS",
  deviceName: "iPhone Simulator",
  'appium:app': 'storage:filename=app-release.zip',
  'appium:deviceName': 'iPhone Simulator',
  'appium:deviceOrientation': 'portrait',
  'appium:platformVersion': 'current_major',
  'appium:automationName': 'XCUITest',
  'sauce:options': {
    build: 'build1',
    name: 'Test',
  },
};

module.exports = {
  localCapabilities,
  sauceCapabilities,
};
