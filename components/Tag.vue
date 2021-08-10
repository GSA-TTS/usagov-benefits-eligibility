<template>
    <span
      v-if="click"
      role="button"
      class="usa-tag bg-accent-cool-darker"
      style="cursor: pointer"
      @click="onClick">{{ name }}</span>
    <span v-else class="usa-tag bg-accent-cool-darker">{{ name }}</span>
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
    }
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
