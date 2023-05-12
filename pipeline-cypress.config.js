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
    baseUrl: 'https://benefits-tool-demo.usa.gov/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
