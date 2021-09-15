<template>
    <span
      v-if="click"
      class="usa-tag bg-secondary margin-left-05 usa-button-group__item margin-left-0 padding-0 display-inline-block">
      <button
        style="padding: 1px 8px; text-decoration: none;"
        class="usa-tooltip usa-button usa-button--outline usa-button--inverse usa-button--unstyled text-uppercase font-sans-2xs"
        :title="title"
        data-position="right"
        @click="onClick">
        {{ name }}
      </button>
    </span>
    <span v-else class="usa-tag bg-secondary">{{ name }}</span>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "tag name not provided"
    },
    click: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
  },
  data () {
    return {};
  },
  methods: {
    onClick () {
      this.$root.$emit("tag:click", this.name);
    }
  }
};
</script>
