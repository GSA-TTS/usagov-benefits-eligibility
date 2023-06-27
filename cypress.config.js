const { defineConfig } = require("cypress")

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    baseUrl: "https://benefits-tool-demo.usa.gov/",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    testIsolation: false,
    supportFile: false,
  },
})
