<template>
  <section
    v-if="cards && cards.length"
    class="grid-container margin-top-8 margin-bottom-8">
    <div class="grid-row grid-gap">
      <h2 class="font-heading-lg tablet:font-heading-xl margin-y-5">
        {{ title }}
      </h2>
    </div>

    <div class="grid-row grid-gap">
      <div class="tablet:grid-col">
        <ul
          v-if="cards && cards.length"
          class="usa-card-group">
          <li
            v-for="card in cards"
            :key="card.slug"
            class="usa-card desktop:grid-col-6"
            :aria-label="card.title">
            <!-- TODO: if we keep related content, let's unwrap the card from the link -->
            <nuxt-link
              class="display-block height-full margin-x-1"
              style="text-decoration: none; outline-offset: 0.25rem"
              :to="localePath(`/${card.slug}`)">
              <Card
                :card-body="card.summary"
                :card-title="card.title"
                :card-container-classes="['hover:border-base-light', 'margin-x-0']"
                card-title-heading-level="h2" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CrossSell",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
