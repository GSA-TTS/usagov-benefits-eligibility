<template>
  <!-- Subscribe to the newsletter. -->
  <div class="tablet:grid-col-4">
    <div class="usa-sign-up">
      <h2 class="usa-sign-up__heading">{{ $t("footer.GroupThree.header") }}</h2>
      <form
        class="usa-form"
        action="https://connect.usa.gov/subscribe"
        method="get">
        <label
          class="usa-label"
          for="signup-email">
          {{ $t("footer.GroupThree.formLabel") }}
        </label>
        <input
          id="signup-email"
          class="usa-input"
          name="email"
          type="email" />
        <button
          class="usa-button"
          type="submit">
          {{ $t("footer.GroupThree.buttonText") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import sanitizeUrl from "~/mixins/SanitizeBears"

export default {
  name: "BetaUsaGovFooterSignUp",
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
