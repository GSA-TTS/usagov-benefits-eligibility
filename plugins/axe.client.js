import Vue from 'vue'

export default function ({ route }) {
  if (process.env.NODE_ENV === 'development' && route.path !== '/rules') {
    const VueAxe = require('vue-axe').default
    Vue.use(VueAxe)
  }
}
