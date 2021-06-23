module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": 0,
    semi: ["off"],
    quotes: ["off"],
    indent: ["off"],
    "padded-blocks": ["off"],
    "no-unused-vars": 1,
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-indent": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/no-v-html": 0,
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 3,
        allowFirstLine: true
      },
      multiline: {
        max: 3,
        allowFirstLine: true
      }
    }],
    "vue/html-closing-bracket-newline": ["error", {
      singleline: "never",
      multiline: "never"
    }],
    "vue/html-self-closing": ["error", {
      html: {
        void: "any",
        normal: "any",
        component: "any"
      },
      svg: "always",
      math: "always"
    }]
  }
}
