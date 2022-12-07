<template>
  <div>
    <footer class="usa-footer usa-footer--slim print:display-none">
      <div class="grid-container usa-footer__return-to-top">
        <a
          id="return-to-top-link"
          href="#"
          @click.prevent="scrollToTop">
          {{ $t("returnToTop") }}
        </a>
      </div>
      <div class="usa-footer__primary-section padding-bottom-7">
        <div class="usa-footer__primary-container grid-row">
          <div class="mobile-lg:grid-col-8 desktop:grid-col-12">
            <nav
              class="usa-footer__nav"
              aria-label="Footer navigation,,">
              <div class="grid-row grid-gap-4">
                <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                    <h2 class="usa-footer__primary-link font-family-serif font-heading-lg margin-bottom-1">
                      {{ $t("footer.GroupOne.header") }}
                    </h2>
                    <ul class="usa-list usa-list--unstyled">
                      <li class="usa-footer__secondary-link">
                        <a
                          class="margin-bottom-3"
                          :href="sanitizedBearsUrl($t('footer.GroupOne.linkOneUrl'))">
                          {{ $t("footer.GroupOne.linkOne") }}
                        </a>
                      </li>
                      <li class="usa-footer__secondary-link">
                        <a :href="sanitizedBearsUrl($t('footer.GroupOne.linkTwoUrl'))">
                          {{ $t("footer.GroupOne.linkTwo") }}
                        </a>
                      </li>
                      <li class="usa-footer__secondary-link">
                        <a :href="sanitizedBearsUrl($t('footer.GroupOne.linkThreeUrl'))">
                          {{ $t("footer.GroupOne.linkThree") }}
                        </a>
                      </li>
                      <li class="usa-footer__secondary-link">
                        <a :href="sanitizedBearsUrl($t('footer.GroupOne.linkFourUrl'))">
                          {{ $t("footer.GroupOne.linkFour") }}
                        </a>
                      </li>
                      <li class="usa-footer__secondary-link">
                        <a :href="sanitizedBearsUrl($t('footer.GroupOne.linkFiveUrl'))">
                          {{ $t("footer.GroupOne.linkFive") }}
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>

                <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                    <h2 class="usa-footer__primary-link font-family-serif font-heading-lg margin-bottom-1">
                      {{ $t("footer.GroupTwo.header") }}
                    </h2>
                    <ul class="usa-list usa-list--unstyled">
                      <li class="usa-footer__secondary-link">
                        <a :href="sanitizedBearsUrl($t('footer.GroupTwo.linkOneUrl'))">
                          {{ $t("footer.GroupTwo.linkOne") }}
                        </a>
                      </li>

                      <li class="usa-footer__secondary-link">
                        <a :href="sanitizedBearsUrl($t('footer.GroupTwo.linkTwoUrl'))">
                          {{ $t("footer.GroupTwo.linkTwo") }}
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>

                <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                    <h2 class="usa-footer__primary-link font-family-serif font-heading-lg margin-bottom-1">
                      {{ $t("footer.GroupThree.header") }}
                    </h2>
                    <form
                      action="https://connect.usa.gov/subscribe"
                      method="get">
                      <label
                        class="usa-label text-white margin-top-1"
                        for="email-2"
                        >{{ $t("footer.GroupThree.formLabel") }}</label
                      >
                      <input
                        id="email-2"
                        name="email"
                        type="email"
                        class="usa-input margin-bottom-3 width-mobile" />
                      <button
                        class="usa-button width-card"
                        type="submit">
                        {{ $t("footer.GroupThree.buttonText") }}
                      </button>
                    </form>
                  </section>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="usa-footer__secondary-section padding-y-1">
        <div class="grid-container margin-y-2">
          <div class="display-flex flex-row flex-justify tablet:flex-justify-end">
            <a
              class="usa-social-link usa-social-link-a11y tablet:margin-right-1 radius-lg"
              href="https://www.facebook.com/USAgov">
              <img
                alt="Facebook"
                src="~/assets/img/social-icons/Icon_Connect_Facebook.png" />
            </a>

            <a
              class="usa-social-link usa-social-link-a11y tablet:margin-right-1 radius-lg"
              href="https://twitter.com/USAgov">
              <img
                alt="Twitter"
                src="~/assets/img/social-icons/Icon_Connect_Twitter.png" />
            </a>

            <a
              class="usa-social-link usa-social-link-a11y tablet:margin-right-1 radius-lg"
              href="https://www.youtube.com/usagov1">
              <img
                alt="YouTube"
                src="~/assets/img/social-icons/Icon_Connect_Youtube.png" />
            </a>

            <a
              class="usa-social-link usa-social-link-a11y radius-lg"
              href="https://www.instagram.com/usagov/">
              <img
                alt="Instagram"
                src="~/assets/img/social-icons/Icon_Connect_Instragram.png" />
            </a>
          </div>
        </div>
      </div>
    </footer>

    <div class="usa-identifier bg-black print:display-none">
      <section
        class="usa-identifier__section usa-identifier__section--masthead"
        aria-label="Agency identifier">
        <div class="usa-identifier__container">
          <div
            class="usa-identifier__identity"
            aria-label="Agency description">
            <p class="usa-identifier__identity-disclaimer text-normal margin-y-3">
              {{ $t("footer.subFooter") }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { tObj } from "~/services/translation"
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
      disclaimer: {},
    }
  },
  async fetch() {
    this.disclaimer = tObj.call(this, await this.$content("disclaimer").fetch())
  },
  methods: {
    sanitizedBearsUrl(benefitUrl, defaultValue = "#") {
      if (benefitUrl && benefitUrl.length > 0) {
        return this.sanitizeUrl(benefitUrl)
      } else {
        return defaultValue
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.usa-social-link {
  background-color: transparent;
}
</style>
