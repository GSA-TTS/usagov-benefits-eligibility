<template>
  <div class="margin-y-2 print:display-none">
    <div class="display-flex flex-align-center">
      <button
        class="usa-button open-all"
        :class="openButtonStyle"
        aria-controls="acc-id"
        @click="openAll">
        {{ $t("buttons.open_all") }}
      </button>
      <button
        class="usa-button close-all"
        :class="closeButtonStyle"
        aria-controls="acc-id"
        @click="closeAll">
        {{ $t("buttons.close_all") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpenCloseButtons",
  props: {
    isOpenActiveProp: {
      type: Boolean,
      default: false,
      required: false,
    },
    isCloseActiveProp: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      isOpenActive: this.isOpenActiveProp,
      isCloseActive: this.isCloseActiveProp,
    }
  },
  computed: {
    openButtonStyle() {
      if (!this.isOpenActive) {
        return "usa-button--outline"
      }
      return null
    },
    closeButtonStyle() {
      if (!this.isCloseActive) {
        return "usa-button--outline"
      }
      return null
    },
  },
  methods: {
    openAll() {
      if (this.isOpenActive) {
        return
      }
      this.isOpenActive = !this.isOpenActive
      this.isCloseActive = !this.isCloseActive
      this.$emit("open-all")
    },
    closeAll() {
      if (this.isCloseActive) {
        return
      }
      this.isCloseActive = !this.isCloseActive
      this.isOpenActive = !this.isOpenActive
      this.$emit("close-all")
    },
  },
}
</script>
