<template>
  <footer class="usa-footer usa-footer--big">
    <div class="usa-footer__primary-section">
      <div class="grid-container">
        <div class="grid-row grid-gap">
          <div class="tablet:grid-col-8">
            <nav
              class="usa-footer__nav"
              aria-label="Footer navigation">
              <!-- Footer navigation component. -->
              <BetaUsaGovFooterNav />
            </nav>
          </div>

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
        </div>
      </div>
    </div>

    <div class="usa-footer__secondary-section">
      <div class="grid-container">
        <div class="grid-row grid-gap">
          <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
            <span id="bottom-phone">
              <div class="mobile-lg:grid-col-auto">
                <h2 class="usa-footer__logo-heading">{{ $t("footer.GroupTwo.header") }}</h2>
              </div>

              <div class="mobile-lg:grid-col-auto">
                <p>{{ $t("footer.GroupTwo.subHeader") }}</p>

                <address class="usa-footer__address">
                  <div class="usa-footer__contact-info grid-row grid-gap">
                    <a
                      class="margin-bottom-3"
                      :href="sanitizedBearsUrl($t('footer.GroupOne.linkOneUrl'))">
                      {{ $t("footer.GroupTwo.linkOne") }}
                    </a>
                  </div>
                </address>
              </div>
            </span>
          </div>

          <!-- Footer social component. -->
          <BetaUsaGovFooterSocial />
        </div>
      </div>
    </div>

    <div class="usa-identifier">
      <section
        class="usa-identifier__section usa-identifier__section--masthead"
        :aria-label="$t('footer.subFooterLabel')">
        <div class="usa-identifier__container flex-justify-center">
          {{ $t("footer.subFooter") }}
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
import sanitizeUrl from "~/mixins/SanitizeBears"

export default {
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
