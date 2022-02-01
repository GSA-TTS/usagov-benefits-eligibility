module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
  plugins: [],
  // add your custom rules here
  rules: {
    "comma-dangle": 0,
    semi: ["off"],
    quotes: ["off"],
    indent: ["off"],
    "padded-blocks": ["off"],
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-indent": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/no-v-html": 0,
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 3
        },
        multiline: {
          max: 3
        }
      }
    ],
    "vue/html-closing-bracket-newline": [
      "off",
      {
        singleline: "never",
        multiline: "never"
      }
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Accordion"]
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
          normal: "any",
          component: "any"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "ignore",
        multiline: "below"
      }
    ]
  }
};
