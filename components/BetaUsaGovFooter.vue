<template>
  <!-- To match usa.gov-->
  <footer class="usa-footer usa-footer--big">
    <div class="usa-footer__primary-section">
      <div class="grid-container">
        <div class="grid-row grid-gap">
          <div class="tablet:grid-col-8">
            <!-- start Footer navigation. -->
            <nav
              class="usa-footer__nav"
              aria-label="Footer navigation">
              <!-- Footer navigation component. -->
              <BetaUsaGovFooterNav />
            </nav>
          </div>
          <!-- Newsletter signup component-->
          <BetaUsaGovFooterSignUp />
        </div>
      </div>
    </div>

    <!-- Lower contact info block. -->
    <div class="usa-footer__secondary-section">
      <div class="grid-container">
        <div class="grid-row grid-gap">
          <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
            <span id="bottom-phone">
              <div class="mobile-lg:grid-col-auto">
                <h4 class="usa-footer__logo-heading">{{ $t("footer.GroupTwo.header") }}</h4>
              </div>

              <div class="mobile-lg:grid-col-auto">
                <p class="margin-bottom-0">{{ $t("footer.GroupTwo.subHeader") }}</p>

                <address class="usa-footer__address">
                  <div class="usa-footer__contact-info">
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

    <!-- Footer usa identifier
    "USAGov is the Official Guide..."
    -->
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
  name: "BetaUsaGovFooter",
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
