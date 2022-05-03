<template>
  <div v-if="isUsaGov">
    <GoogleTagManagerHeader />
    <div>
      <UsaGovHeader />
      <h1>{{ $t("message") }}</h1>
      <main id="main-content">
        <Nuxt />
      </main>
      <UsaGovFooter />
    </div>
    <GoogleTagManagerFooter />
  </div>
  <div v-else>
    <GoogleTagManagerHeader />
    <Header />
    <h1>{{ $t("message") }}</h1>
    <main id="main-content">
      <Nuxt />
    </main>
    <Footer />
    <GoogleTagManagerFooter />
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
