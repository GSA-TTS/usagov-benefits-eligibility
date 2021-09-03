<template>
  <div>
    <section class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col">
          <h1 v-if="benefitTopic" class="font-heading-3xl margin-top-7 text-primary">
            {{ benefitTopic }}
          </h1>
          <p v-if="topic && topic.lede" class="usa-intro">
            {{ topic.lede }}
          </p>
        </div>
      </div>

      <div class="grid-row grid-gap print:display-block">
        <div class="tablet:grid-col margin-bottom-3">
          Showing {{ lifeEventBenefits.length }} benefits
        </div>
      </div>

      <div class="grid-row grid-gap print:display-block">
        <div class="tablet:grid-col margin-bottom-3">
          <div>
            <button class="usa-button usa-button--unstyled open-all" @click="openAll">Open All</button>
            /
            <button class="usa-button usa-button--unstyled close-all" @click="closeAll">Close All</button>
          </div>
        </div>
      </div>

      <div class="grid-row grid-gap print:display-block">
        <div class="tablet:grid-col-7 desktop:grid-col-8">
          <div
            v-if="$fetchState.pending"
            class="usa-alert usa-alert--info usa-alert--no-icon usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Fetching benefits...</p>
            </div>
          </div>
          <div
            v-if="$fetchState.error"
            class="usa-alert usa-alert--error usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Error while fetching benefits.</p>
            </div>
          </div>
          <div
            v-if="lifeEventBenefits && lifeEventBenefits.length == 0"
            class="usa-alert usa-alert--error usa-alert--slim">
            <div class="usa-alert__body">
              <p class="usa-alert__text">No matching benefits found.</p>
            </div>
          </div>

          <accordion ref="accordion" :life-event-benefits="lifeEventBenefits" :expanded="true"
            :show-icons="false" :show-matching-count="false" :tag-click="false"/>
        </div>
      </div>

      <div class="grid-row grid-gap margin-top-2">
        <div class="grid-col">
          <print @print="openAll()" />
        </div>
      </div>
    </section>

    <cross-sell
      title="Other topics that might be relevant to you."
      :cards="topic.related"/>
  </div>
</template>

<script>
import _ from 'lodash';
import mapTags from "~/mixins/MapTags";

export default {
  mixins: [mapTags],
  data () {
    return {
        benefitTopic: '',
        lifeEventBenefits: [],
        topic: {
          title: '',
          summary: '',
          lede: '',
          relatedKeys: [],
          related: [],
        },
    };
  },
  async fetch () {
    this.benefitTopic = _.capitalize(_.lowerCase(this.$route.params.slug));
    const lifeEventBenefits = await this.$content("benefits")
      .where({
        tags: { $contains: _.lowerCase(this.$route.params.slug) }
      })
      .sortBy("title")
      .fetch();
    const allEligibilityCriteria = (await this.$content("criteria").fetch()).body;
    await this.$store.dispatch("criteria/populate", allEligibilityCriteria);
    // eslint-disable-next-line node/handle-callback-err
    this.topic = await this.$content("topics", this.$route.params.slug).fetch().catch((err) => {});

    this.topic.related = [];
    for (const related of (this.topic.relatedKeys || [])) {
      this.topic.related.push(await this.$content("topics", related).fetch());
    }

    this.lifeEventBenefits = lifeEventBenefits;
  },
  methods: {
    mapLifeEvents (lifeEvents) {
      return lifeEvents.map(le => _.lowerCase(le));
    },
    openAll () {
      this.$refs.accordion.openAll();
    },
    closeAll () {
      this.$refs.accordion.closeAll();
    },
  },
};
</script>
