<template>
  <div>
    <section class="grid-container usa-section">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-10">
          <h1 class="font-heading-3xl margin-top-0 text-primary">
            Benefits by agency
          </h1>
          <p class="usa-intro">
            If you know the federal agency that provides a specific benefit, select it below.
          </p>
        </div>
      </div>

      <div class="grid-row grid-gap margin-top-4">
        <div class="tablet:grid-col-10">
          <ul v-if="agencies && agencies.length > 0" class="usa-card-group">
            <li
              v-for="agency in mapAgencies(agencies)"
              :key="agency.slug"
              class="usa-card desktop:grid-col-6"
              :aria-label="agency.title">
              <a :href="`/agencies/${agency.slug}`" class="display-block height-full margin-x-1" style="text-decoration:none; outline-offset: .25rem;">
                <Card
                  card-title-heading-level="h2"
                  :card-title="agency.title"
                  :card-body="agency.summary"
                  :card-container-classes="['hover:border-base-light', 'margin-x-0']"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  layout: "default",
  async asyncData ({ $content }) {
    const contentAgencyList = await $content('agencies').fetch();
    const contentAgencies = {};
    for (const a of contentAgencyList) {
      contentAgencies[_.kebabCase(a.slug)] = a;
    }

    const agencies = _.chain(
      await $content("benefits")
        .only(['source'])
        .fetch()
    )
      .map(benefit => benefit.source.name)
      .flatten()
      .uniq()
      .compact()
      .sort()
      .value();

    return { agencies, contentAgencies };
  },
  data () {
    return {
      agencies: [],
      contentAgencies: {},
    };
  },
  methods: {
    kebabCase: _.kebabCase,
    mapAgencies (agencies) {
      return agencies.map((agency) => {
        const slug = _.kebabCase(agency);
        if (this.contentAgencies[slug]) {
          return this.contentAgencies[slug];
        } else {
          return {
            title: agency,
            slug,
          };
        }
      });
    },
  },
};
</script>
