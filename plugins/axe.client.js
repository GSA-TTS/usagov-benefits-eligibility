import Vue from 'vue'

export default function ({ route }) {
  if (process.env.NODE_ENV === 'development') {
    const VueAxe = require('vue-axe').default;
    Vue.use(VueAxe);
  }
}
