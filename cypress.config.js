const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationpratice.com.br',
    reporter: 'cypress-mochawesome-reporter',
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
},
    // "screenshotOnRunFailure": false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalRunAllSpecs: true
  },
});