<template>
  <div>
    <!-- One life event version. -->
    <div v-if="isUsaGov">
      <div>
        <UsaGovHeader />
        <main id="main-content">
          <Nuxt />
        </main>
        <UsaGovFooter />
      </div>
    </div>
    <!-- Multi life event version. (uses beta site design) -->
    <div v-else>
      <!-- Beta USA Header. /-->
      <BetaUsaGovHeader />
      <main id="main-content">
        <Nuxt />
      </main>
      <!--Footer Disclaimer. /-->
      <FooterDisclaimer />
      <!-- Beta USA Footer. /-->
      <BetaUsaGovFooter />
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
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
  switchLanguage() {
    let route = ""
    const locale = this.$i18n.locale

    if (locale === "en") {
      route = `/es/`
      this.$i18n.setLocale("es")
    } else {
      // route = `/`
      this.$i18n.setLocale("en")
    }
    this.$router.push(route)
  },
}
</script>
