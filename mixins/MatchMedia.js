// theme object mock
const theme = {
  screens: {
    narrow: "320px",
    narrowPlus: "640px",
    medium: "768px",
    mediumPlus: "840px",
  },
}

/**
 * Mixin
 * In order to use multiple instances of the mixin (ie multiple queries)
 * we need to use the name param to make the mixin options unique - if they
 * all have the same method names or whatever registering a new mixin instance would
 * overwrite the previous ones options - maybe we could use Symbols to be 100% safe?
 */
export const MatchMedia = (query, name = query) => ({
  data() {
    return { [`match_${name}`]: false }
  },
  methods: {
    [`${name}_handleUpdate`]({ matches }) {
      this[`${name}_setMatch`](matches)
    },
    [`${name}_setMatch`](val) {
      this[`match_${name}`] = val
    },
  },
  computed: {
    [`${name}_mediaQuery`]() {
      if (typeof window === "undefined") return { matches: false }
      return window.matchMedia(`(min-width: ${theme.screens[query]})`)
    },
  },
  mounted() {
    this[`${name}_setMatch`](this[`${name}_mediaQuery`].matches)
    this[`${name}_mediaQuery`].addListener(this[`${name}_handleUpdate`])
  },
  beforeDestroy() {
    this[`${name}_mediaQuery`].removeListener(this[`${name}_handleUpdate`])
  },
})
