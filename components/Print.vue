<template>
  <button
    class="usa-button usa-button--outline width-full tablet:width-card-lg print:display-none bg-white"
    @click="print">
    <svg
      class="usa-icon text-middle"
      aria-hidden="true"
      focusable="false"
      role="img">
      <use xlink:href="~/assets/img/sprite.svg#print" />
    </svg>
    <span class="text-middle"
      >Print <span v-if="showSelections">{{ $t("buttons.my_selections") }}</span></span
    >
  </button>
</template>

<script>
export default {
  props: {
    showSelections: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    print() {
      this.$emit("print")
      window.print()
    },
  },
}
</script>
