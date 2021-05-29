<template>
  <span :class="['usa-tag', computedTagClass]">{{ name }}</span>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "tag name not provided"
    }
  },
  data () {
    return {
      // TODO: Define colors universally
      availableTagColors: [
        "base-dark",
        "violet",
        "orange",
        "accent-warm",
        "green",
        "indigo",
        "cyan",
        "magenta"
      ]
    };
  },
  computed: {
    computedTagClass () {
      return (
        "bg-" +
        this.availableTagColors[
          Math.floor(Math.random() * this.availableTagColors.length)
        ]
      );
    }
  }
};
</script>
