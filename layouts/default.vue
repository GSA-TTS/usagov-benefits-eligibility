<template>
  <div v-if="isUsaGov">
    <GoogleTagManagerHeader></GoogleTagManagerHeader>
    <div>
      <UsaGovHeader />
      <main id="main-content">
        <Nuxt />
      </main>
      <UsaGovFooter />
    </div>
    <GoogleTagManagerFooter></GoogleTagManagerFooter>
  </div>
  <div v-else>
    <GoogleTagManagerHeader></GoogleTagManagerHeader>
    <Header />
    <main id="main-content">
      <Nuxt />
    </main>
    <Footer />
    <GoogleTagManagerFooter></GoogleTagManagerFooter>
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
