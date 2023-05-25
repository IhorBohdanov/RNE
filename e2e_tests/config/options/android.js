const localCapabilities = {
  platformName: 'Android',
  "appium:options": {
    deviceName: 'Android Emulator',
    app: process.env.E2E_ANDROID_APP_PATH,
    automationName: 'UiAutomator2',
  },
};

const sauceCapabilities = {
  platformName: 'Android',
  'appium:app': 'storage:filename=app-release.apk',
  'appium:deviceName': 'Android GoogleAPI Emulator',
  'appium:deviceOrientation': 'portrait',
  'appium:platformVersion': 'current_major',
  'appium:automationName': 'UiAutomator2',
  'sauce:options': {
    build: 'build1',
    name: 'Test',
  },
};

module.exports = {
  localCapabilities,
  sauceCapabilities,
};
