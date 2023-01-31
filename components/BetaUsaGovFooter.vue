<template>
  <footer class="usa-footer usa-footer--big">
    <div class="usa-footer__primary-section">
      <div class="grid-container">
        <div class="grid-row grid-gap">
          <div class="tablet:grid-col-8">
            <nav
              class="usa-footer__nav"
              aria-label="Footer navigation">
              111 <BetaUsaGovFooterNav />222
            </nav>
          </div>

          <div class="tablet:grid-col-4">
            <div class="usa-sign-up">
              <h2 class="usa-sign-up__heading">{{ $t("footer.GroupThree.header") }}</h2>
              <form
                class="usa-form"
                action="https://connect.usa.gov/subscribe"
                method="get">
                <label
                  class="usa-label"
                  for="email">
                  {{ $t("footer.GroupThree.formLabel") }}
                </label>
                <input
                  :id="email"
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

          <div class="usa-footer__contact-links mobile-lg:grid-col-6">
            <h4 class="usa-footer__contact-heading">Find us on social media</h4>

            <div class="usa-footer__social-links en-links grid-row grid-gap-1">
              <div class="grid-col-auto">
                <a
                  class="usa-social-link"
                  href="https://www.facebook.com/USAgov"
                  alt="Facebook USAGov">
                  <img
                    src="/themes/custom/usagov/images/facebook34.png"
                    alt="Facebook USAGov" />
                  <span>Facebook</span>
                </a>
              </div>

              <div class="grid-col-auto">
                <a
                  class="usa-social-link"
                  href="https://twitter.com/USAgov"
                  alt="Twitter USAGov">
                  <img
                    src="/themes/custom/usagov/images/twitter34.png"
                    alt="Twitter USAGov" />
                  <span>Twitter</span>
                </a>
              </div>

              <div class="grid-col-auto">
                <a
                  class="usa-social-link"
                  href="https://www.youtube.com/usagov1"
                  alt="YouTube USAGov">
                  <img
                    src="/themes/custom/usagov/images/youtube34.png"
                    alt="Youtube USAGov" />
                  <span>YouTube</span>
                </a>
              </div>

              <div class="grid-col-auto">
                <a
                  class="usa-social-link"
                  href="https://www.instagram.com/usagov/"
                  alt="Instagram"
                  usagov="">
                  <img
                    src="/themes/custom/usagov/images/instagram34.png"
                    alt="Instagram USAGov" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="usa-identifier">identifier</div>
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
