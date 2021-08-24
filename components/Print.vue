<template>
  <button class="usa-button usa-button--outline width-card-lg print:display-none" @click="print">
    <svg class="usa-icon text-middle" aria-hidden="true" focusable="false"
      role="img">
      <use xlink:href="~/assets/img/sprite.svg#print"/>
    </svg>
    <span class="text-middle">Print <span v-if="showSelections">my selections</span></span>
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
      print () {
        window.print();
      },
    },
  };
</script>
