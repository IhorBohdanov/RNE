require('dotenv').config();

const config = {
  testEnvironment: './e2e_tests/config/jest.environment.e2e.js',
  testMatch: ['**/e2e_tests/**.e2e.js'],
  testTimeout: (process.env.E2E_SAUCE ? 5 : 1) *  60 * 1000
};

module.exports = config;
