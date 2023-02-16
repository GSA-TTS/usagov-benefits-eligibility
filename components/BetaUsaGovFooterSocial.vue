<template>
  <!-- Footer social links. -->
  <div class="usa-footer__contact-links mobile-lg:grid-col-6">
    <h2 class="usa-footer__contact-heading">{{ $t("beta.footer.social.title") }}</h2>
    <div class="usa-footer__social-links en-links grid-row grid-gap-1">
      <!-- Footer social links loop. -->
      <div
        v-for="item in $t('beta.footer.social.icons')"
        :key="`social-id-${item.socialID}`"
        class="grid-col-auto">
        <a
          class="usa-social-link"
          :href="sanitizedBearsUrl(item.socialURL)">
          <img
            :src="require(`@/assets/img/${item.icon}.svg`)"
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
  name: "BetaUsaGovFooterSocial",
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
