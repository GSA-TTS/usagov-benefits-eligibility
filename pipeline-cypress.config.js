const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    "configFile": "reporter-config.json"
  },
  "video": false,
  "retries": {
    "runMode": 1,
    "openMode": 1
  },
  e2e: {
    baseUrl: 'https://federalist-edd11e6f-8be2-4dc2-a85e-1782e0bcb08e.sites.pages.cloud.gov/preview/gsa/usagov-benefits-eligibility/feature/cypress-pipeline-fatma/death-of-a-loved-one/?',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
