<template>
  <div>
    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-10">
          <h1
            class="font-heading-lg tablet:font-heading-xl margin-top-0 text-secondary"
          >
            Benefits by type
          </h1>
          <p
            class="tablet:font-heading-lg line-height-serif-6 text-normal measure-6"
          >
            If you know the specific type of benefit you are looking for, select
            it below.
          </p>
        </div>
      </div>

      <div class="grid-row grid-gap margin-top-4">
        <div class="tablet:grid-col-10 life-event-tags">
          <ul
            v-if="lifeEventTags && lifeEventTags.length > 0"
            class="usa-card-group"
          >
            <li
              v-for="tag in mapTags(lifeEventTags)"
              :key="tag.slug"
              class="usa-card desktop:grid-col-6"
              :aria-label="tag.title"
            >
              <nuxt-link
                :to="`/types/${tag.slug}`"
                class="display-block height-full margin-x-1"
                style="text-decoration: none; outline-offset: 0.25rem"
              >
                <Card
                  :card-title="tag.title"
                  card-title-heading-level="h2"
                  :card-container-classes="[
                    'hover:border-base-light',
                    'margin-x-0',
                  ]"
                  :card-body="tag.summary"
                />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  layout: "default",
  async asyncData({ $content }) {
    const contentTopics = await $content("types").fetch();
    const topics = {};
    for (const c of contentTopics) {
      topics[_.lowerCase(c.slug)] = c;
    }
    const lifeEventTags = _.chain(
      await $content("benefits").only(["tags"]).fetch()
    )
      .map((le) => le.tags)
      .flatten()
      .uniq()
      .sort()
      .value();

    return { lifeEventTags, topics };
  },
  data() {
    return {
      lifeEventTags: [],
      topics: {},
    };
  },
  /* istanbul ignore next */
  head() {
    return {
      title: "Benefits by type",
    };
  },
  methods: {
    mapTags(tags) {
      return tags.map((tag) => {
        if (this.topics[tag]) {
          return this.topics[tag];
        } else {
          return {
            title: _.upperFirst(tag),
            slug: _.kebabCase(tag),
          };
        }
      });
    },
  },
};
</script>
