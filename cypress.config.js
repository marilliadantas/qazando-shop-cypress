const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationpratice.com.br',
    // defaultCommandTimeout: 5000,
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "video": false,
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      experimentalRunAllSpecs: true,
      screenshotOnRunFailure: false,
},
    setupNodeEvents(on, config) {
      allureWriter(on, config);
          return config;
    },
  },
});