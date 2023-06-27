<template>
  <div>
    <div>
      <UsaGovHeader />
      <main id="main-content">
        <Nuxt />
      </main>
      <UsaGovFooter />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
}
</script>
