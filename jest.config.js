
module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],

  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/store/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 90,
      statements: 90
    },
  },
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ],
  testEnvironment: 'jsdom',
}
