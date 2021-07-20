<template>
  <div class="usa-card__container">
    <header class="usa-card__header padding-bottom-2">
      <component :is="cardTitleHeadingLevel" class="usa-card__heading">
        {{ cardTitle }}
      </component>
      <div
        v-if="cardTags && cardTags.length > 0"
        class="tags-container margin-top-1">
        <Tag v-for="tag in cardTags" :key="tag" :name="tag" />
      </div>
    </header>
    <div class="usa-card__body">
      <slot name="source"></slot>
      <p class="font-sans-md">
        {{ cardBody }}
      </p>
      <slot name="eligibility"></slot>
    </div>
    <div class="usa-card__footer">
      <ul class="usa-button-group" :aria-label="'Choices for ' + cardTitle">
        <li class="usa-button-group__item">
          <a v-if="isRemoteLink(primaryButtonLink)" :href="primaryButtonLink" :target="primaryButtonTarget"
            class="usa-button">
            {{ primaryButtonText }}
          </a>
          <nuxt-link v-else :to="primaryButtonLink" class="usa-button">
            {{ primaryButtonText }}
          </nuxt-link>
        </li>

        <li
          v-if="secondaryButtonText && secondaryButtonLink"
          class="usa-button-group__item">
          <nuxt-link
            :to="secondaryButtonLink"
            class="usa-button usa-button--outline">
            {{ secondaryButtonText }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardTitle: {
      type: String,
      required: true,
      default: "Card title not provided"
    },
    cardTitleHeadingLevel: {
      type: String,
      required: false,
      default: "h3"
    },
    cardBody: {
      type: String,
      required: true,
      default: "Card body not provided"
    },
    primaryButtonText: {
      type: String,
      required: true,
      default: "Primary Button Text not provided"
    },
    primaryButtonLink: {
      type: String,
      required: true,
      default: "#"
    },
    primaryButtonTarget: {
      type: String,
      required: false,
      default: '_self'
    },
    secondaryButtonText: {
      type: String,
      required: false,
      default: null
    },
    secondaryButtonLink: {
      type: String,
      required: false,
      default: null
    },
    cardTags: {
      type: Array,
      required: false,
      default: () => {
        return [];
      }
    }
  },
  data () {
    return {};
  },
  methods: {
    isRemoteLink (link) {
      return link?.startsWith('https://');
    },
  },
};
</script>
