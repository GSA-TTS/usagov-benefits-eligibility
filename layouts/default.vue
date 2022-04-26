<template>
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
    <Header />
    <main id="main-content">
      <Nuxt />
    </main>
    <Footer />
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
