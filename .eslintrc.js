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
    "semi": ["off"],
    "quotes": ["off"],
    "indent": ["off"],
    "padded-blocks": ["off"],
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-indent": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/no-v-html": 0,
  }
}
