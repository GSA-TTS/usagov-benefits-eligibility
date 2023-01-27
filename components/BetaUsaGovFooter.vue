<template>
  <footer class="usa-footer usa-footer--big">
    <div class="usa-footer__primary-section">
      <div class="grid-container">
        <div class="grid-row grid-gap">
          <div class="tablet:grid-col-8">left</div>

          <div class="tablet:grid-col-4">right</div>
          <ul>
            <li
              v-for="item in beta.footer.column1"
              :key="item.linkText"
              class="usa-process-list__item padding-bottom-4">
              <p>
                {{ $t("item.linkText") }}
                {{ item.linkText }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import _ from "lodash"
// import { tObj } from "~/services/translation"
import sanitizeUrl from "~/mixins/SanitizeBears"

export default {
  mixins: [sanitizeUrl],
  props: {
    testEnv: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      uniqueId: _.uniqueId("foo-"),
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
  mounted() {
    this.uniqueId = _.uniqueId("id-")
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
