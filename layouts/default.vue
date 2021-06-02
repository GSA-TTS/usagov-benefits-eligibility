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
export default {
  head: {
    script: [{ src: "./assets/js/uswds-init.min.js" }]
  }
};
</script>

<style></style>
