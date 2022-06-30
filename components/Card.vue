<template>
  <div :class="['usa-card__container'].concat(cardContainerClasses)">
    <header class="usa-card__header padding-bottom-2">
      <component
        :is="cardTitleHeadingLevel"
        :id="'usa-card-heading-' + _uid"
        class="usa-card__heading">
        {{ cardTitle }}
      </component>
    </header>
    <div class="usa-card__body">
      <slot name="source"></slot>
      <p class="font-sans-md">
        {{ cardBody }}
      </p>
      <slot name="eligibility"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardTitle: {
      type: String,
      required: true,
      default: "Card title not provided",
    },
    cardTitleHeadingLevel: {
      type: String,
      required: false,
      default: "h3",
    },
    cardBody: {
      type: String,
      required: false,
      default: "",
    },
    cardContainerClasses: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {}
  },
}
</script>
