<template>
  <div>
    <div v-if="isUsaGov">
      <div>
        <UsaGovHeader />
        <main id="main-content">
          <Nuxt />
        </main>
        <UsaGovFooter />
      </div>
    </div>
    <div v-else>
      <BetaUsaGovHeader />
      <main id="main-content">
        <Nuxt />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUsaGov: this.$config.oneEventVersion !== false,
    }
  },
}
</script>
