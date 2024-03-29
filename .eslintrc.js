module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:vuejs-accessibility/recommended",
    "plugin:sonarjs/recommended",
    "prettier",
    "plugin:cypress/recommended",
  ],
  plugins: ["vuejs-accessibility", "promise", "sonarjs", "jest"],
  // add your custom rules here
  rules: {
    "comma-dangle": 0,
    semi: ["off"],
    quotes: ["off"],
    indent: ["off"],
    "no-console": 0,
    "jsx-a11y/click-events-have-key": "off",
    "padded-blocks": ["off"],
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-indent": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/no-v-html": 0,
    "vue/max-attributes-per-line": [
      "off",
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 3,
        },
      },
    ],
    "vue/html-closing-bracket-newline": [
      "off",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/multi-word-component-names": [
      "warn",
      {
        ignores: ["Accordion"],
      },
    ],
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "any",
          normal: "any",
          component: "any",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/first-attribute-linebreak": [
      "warn",
      {
        singleline: "ignore",
        multiline: "below",
      },
    ],
    "vuejs-accessibility/label-has-for": [
      "error",
      {
        components: ["VLabel"],
        controlComponents: ["VInput"],
        required: {
          every: ["id"],
        },
        allowChildren: false,
      },
    ],
    // https://open-wc.org/docs/linting/eslint-plugin-lit-a11y/rules/no-invalid-change-handler/
    // Seems to be a thing for older browsers
    "vuejs-accessibility/no-onchange": ["off"],
  },
}
