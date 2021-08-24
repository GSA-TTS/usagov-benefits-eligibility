<template>
  <div class="usa-card__container">
    <header class="usa-card__header padding-bottom-2">
      <component :is="cardTitleHeadingLevel" class="usa-card__heading">
        {{ cardTitle }}
      </component>
      <div
        v-if="cardTags && cardTags.length > 0"
        class="tags-container margin-top-1">
        <Tag v-for="tag in cardTags" :key="tag.name" :name="tag.name"
          :click="cardTagsEmitClick" :title="tag.title" />
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
          <span v-if="isRemoteLink(primaryButtonLink)">
            <a :href="primaryButtonLink" :target="primaryButtonTarget"
              :aria-label="primaryButtonAriaLabel"
              class="usa-button usa-button--outline print:display-none">
              {{ primaryButtonText }}
            </a>
          </span>
          <nuxt-link v-else :to="primaryButtonLink" :aria-label="primaryButtonAriaLabel"
            class="usa-button">
            {{ primaryButtonText }}
          </nuxt-link>
        </li>

        <li
          v-if="secondaryButtonText && secondaryButtonLink"
          class="usa-button-group__item">
          <nuxt-link
            :to="secondaryButtonLink"
            class="usa-button usa-button--outline print:display-none">
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
      required: false,
      default: ""
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
    primaryButtonAriaLabel: {
      type: String,
      required: false,
      default: ''
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
    cardTagsEmitClick: {
      type: Boolean,
      required: false,
      default: false
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
