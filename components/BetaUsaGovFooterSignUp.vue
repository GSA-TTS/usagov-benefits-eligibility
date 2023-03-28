<template>
  <!-- Subscribe to the newsletter. -->
  <div class="tablet:grid-col-4">
    <div class="usa-sign-up">
      <h4 class="usa-sign-up__heading">{{ $t("footer.GroupThree.header") }}</h4>
      <form
        class="usa-form"
        :action="
          $i18n.locale === 'en'
            ? 'https://connect.usa.gov/subscribe'
            : 'https://conectate.gobiernousa.gov/suscripciones'
        "
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
export default {
  name: "BetaUsaGovFooterSignUp",
}
</script>
