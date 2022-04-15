<template>
  <div>
    <UsaGovHeader v-if="isUsaGov" />
    <Header v-else />
    <main id="main-content">
      <Nuxt />
    </main>
    <UsaGovFooter v-if="isUsaGov" />
    <Footer v-else />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUsaGov: true,
    }
  },
}
</script>
