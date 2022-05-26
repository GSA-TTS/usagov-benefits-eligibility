<template>
  <div v-if="$config.oneEventVersion === false">
    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-10">
          <h1 class="font-heading-lg tablet:font-heading-xl margin-top-0 text-secondary">{{ $t("agency.sort") }}</h1>
          <p class="tablet:font-heading-lg line-height-serif-6 text-normal measure-6">
            {{ $t("types.heading") }}
          </p>
        </div>
      </div>

      <div class="grid-row grid-gap margin-top-4">
        <div class="tablet:grid-col-10">
          <ul
            v-if="agencies && agencies.length > 0"
            class="usa-card-group">
            <li
              v-for="agency in mapAgencies(agencies)"
              :key="agency.slug"
              class="usa-card desktop:grid-col-6"
              :aria-label="$t(agency.title)">
              <nuxt-link
                :to="localePath(`/agencies/${agency.slug}`)"
                class="display-block height-full margin-x-1"
                style="text-decoration: none; outline-offset: 0.25rem">
                <Card
                  card-title-heading-level="h2"
                  :card-title="$t(agency.title)"
                  :card-body="$t(agency.summary)"
                  :card-container-classes="['hover:border-base-light', 'margin-x-0']" />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from "lodash"

export default {
  layout: "default",
  async asyncData({ $content }) {
    const contentAgencyList = await $content("agencies").fetch()
    const contentAgencies = {}
    for (const a of contentAgencyList) {
      contentAgencies[_.kebabCase(a.slug)] = a
    }

    const agencies = _.chain(await $content("benefits").only(["source"]).fetch())
      .map((benefit) => benefit.source.name)
      .flatten()
      .uniq()
      .compact()
      .sort()
      .value()

    return { agencies, contentAgencies }
  },
  data() {
    return {
      agencies: [],
      contentAgencies: {},
    }
  },
  mounted() {
    if (this.$config.oneEventVersion !== false) {
      this.$router.push(this.$route.fullPath.split('agencies')[0]+ this.$config.oneEventVersion)
    }
  },
  /* istanbul ignore next */
  head() {
    return {
      title: "Benefits by agency",
    }
  },
  methods: {
    kebabCase: _.kebabCase,
    mapAgencies(agencies) {
      return agencies.map((agency) => {
        const slug = _.kebabCase(this.$t(agency))
        if (this.contentAgencies[slug]) {
          return this.contentAgencies[slug]
        } else {
          return {
            title: this.$t(agency),
            slug,
          }
        }
      })
    },
  },
}
</script>
