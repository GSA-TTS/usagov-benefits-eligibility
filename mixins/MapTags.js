export default {
  methods: {
    mapTags(tags) {
      return (tags || []).map((tag) => ({ name: tag, title: `Filter benefits by ${tag}` }))
    },
  },
}
