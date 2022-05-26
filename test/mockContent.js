import Loki from "@lokidb/loki"
import QueryBuilder from "@nuxt/content/lib/query-builder"

// Mocks nuxt/content's $content instance for use with static mock data
// See https://content.nuxtjs.org/fetching for related docs
const obj = null
export function createContentMock(collections) {
  const db = new Loki("content.db")
  collections.forEach(({ collectionName, items }) => {
    const mockCollection = db.addCollection(collectionName)
    mockCollection.insert([...items])
  })
  // this mocks $content  a filter by dir returns an array,
  // if specific content is added as an optional param, a single object is returned
  return jest.fn(function (queryName, options = null) {
    if (queryName === "en") {
      return obj
    }
    if (options == null) {
      return new QueryBuilder(
        {
          query: db.getCollection(queryName).chain(),
          path: queryName,
          text: false,
        },
        {}
      )
    } else {
      const collection = db.getCollection(queryName)
      const obj = collection.findOne({ slug: options })
      return {
        fetch() {
          return obj
        },
        where() {
          return obj
        },
        sortBy() {
          return obj
        },
      }
    }
  })
}
