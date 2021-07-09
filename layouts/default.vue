<template>
  <div>
    <Header />
    <main id="main-content">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
const sitePrefix = process.env.SITE_PREFIX ? `/${process.env.SITE_PREFIX}/` : '~/'
export default {
  head: {
    script: [{ src: `${sitePrefix}assets/js/uswds-init.min.js` }]
  }
};
</script>

<style></style>
