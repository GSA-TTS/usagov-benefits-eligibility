<template>
  <div>
    <noscript v-if="$config.tagManagerKey">
      <iframe
        :src="url"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
        title="GoogleTagManager"></iframe>
    </noscript>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://www.googletagmanager.com/ns.html?id=" + this.$config.tagManagerKey,
    }
  },
}
</script>
