<template>
  <!-- Footer social links. -->
  <div class="usa-footer__contact-links mobile-lg:grid-col-6">
    <h2 class="usa-footer__contact-heading">{{ $t("beta.footer.social.title") }}</h2>
    <div class="usa-footer__social-links en-links grid-row grid-gap-1">
      <!-- Footer social links loop. -->
      <div
        v-for="(item, index) in $t('beta.footer.social.icons')"
        :id="`item-${index}-${cid}`"
        :key="`item-${index}-${cid}`"
        class="grid-col-auto">
        {{ `key-${index}-${cid}` }}
        <a
          class="usa-social-link"
          :href="sanitizedBearsUrl(item.socialURL)">
          <span class="is-hidden">{{ item.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash"
import sanitizeUrl from "~/mixins/SanitizeBears"

export default {
  name: "BetaUsaGovFooterSocial",
  mixins: [sanitizeUrl],
  data() {
    return {
      cid: _.uniqueId("c"),
    }
  },
  beforeCreate() {
    this.cid = _.uniqueId("c")
  },
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
