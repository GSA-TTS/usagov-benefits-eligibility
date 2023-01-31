<template>
  <!-- Footer social links. -->
  <div class="usa-footer__contact-links mobile-lg:grid-col-6">
    <h2 class="usa-footer__contact-heading">Find us on social media</h2>
    <div class="usa-footer__social-links en-links grid-row grid-gap-1">
      <!-- Footer social links loop. -->
      <div
        v-for="item in $t('beta.footer.social')"
        :id="`social-id-${item.linkID}`"
        :key="`social-id-${item.linkID}`"
        class="grid-col-auto">
        <a
          class="usa-social-link"
          :href="sanitizedBearsUrl(item.linkURL)">
          <img
            :src="require(`@/assets/img/${item.icon}`)"
            :alt="item.name"
            :width="item.width"
            :height="item.height" />
          <span class="is-hidden">{{ item.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import sanitizeUrl from "~/mixins/SanitizeBears"

export default {
  name: "BetaUsaGovFooterNav",
  mixins: [sanitizeUrl],
  methods: {
    sanitizedBearsUrl(benefitUrl, defaultValue = "#") {
      if (benefitUrl && benefitUrl.length > 0) {
        return this.sanitizeUrl(benefitUrl)
      } else {
        return defaultValue
      }
    },
  },
}
</script>
