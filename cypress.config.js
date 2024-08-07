const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationpratice.com.br',
    // defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    screenshotOnRunFailure: false,
    experimentalRunAllSpecs: true,
    
    setupNodeEvents(on, config) {
      allureWriter(on, config);
          return config;
    },
  },
});