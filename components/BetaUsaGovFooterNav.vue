<template>
  <div class="grid-row grid-gap-4">
    <div
      :class="match_isNarrowMedium ? '' : 'footer-nav-accordion-wrap'"
      class="mobile-lg:grid-col-6 desktop:grid-col-3">
      <section
        :class="match_isNarrowMedium ? '' : 'usa-footer__primary-content--collapsible usa-accordion'"
        class="usa-footer__primary-content">
        <!-- footer nav column 1.-->
        <h3 :class="match_isNarrowMedium ? 'usa-gov-footer__primary-link' : 'usa-accordion__heading'">
          <span v-if="match_isNarrowMedium">{{ $t("beta.footer.column1Title") }}</span>
          <button
            v-else
            type="button"
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="col-1">
            {{ $t("beta.footer.column1Title") }}
          </button>
        </h3>

        <ul
          id="col-1"
          :class="match_isNarrowMedium ? '' : 'usa-accordion__content'"
          class="usa-list usa-list--unstyled">
          <li
            v-for="item in $t('beta.footer.column1')"
            :id="`item-id-${item.linkID}`"
            :key="`item-id-${item.linkID}`"
            class="usa-footer__secondary-link">
            <a :href="sanitizedBearsUrl(item.linkURL)">{{ item.linkText }}</a>
          </li>
        </ul>
      </section>
    </div>

    <div
      :class="match_isNarrowMedium ? '' : 'footer-nav-accordion-wrap'"
      class="mobile-lg:grid-col-6 desktop:grid-col-3">
      <section
        :class="match_isNarrowMedium ? '' : 'usa-footer__primary-content--collapsible usa-accordion'"
        class="usa-footer__primary-content">
        <!-- footer nav column 2.-->
        <h3 :class="match_isNarrowMedium ? 'usa-gov-footer__primary-link' : 'usa-accordion__heading'">
          <span v-if="match_isNarrowMedium">{{ $t("beta.footer.column2Title") }}</span>
          <button
            v-else
            type="button"
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="col-2">
            {{ $t("beta.footer.column2Title") }}
          </button>
        </h3>

        <ul
          id="col-2"
          :class="match_isNarrowMedium ? '' : 'usa-accordion__content'"
          class="usa-list usa-list--unstyled">
          <li
            v-for="item in $t('beta.footer.column2')"
            :id="`item-id-${item.linkID}`"
            :key="`item-id-${item.linkID}`"
            class="usa-footer__secondary-link">
            <a :href="sanitizedBearsUrl(item.linkURL)">{{ item.linkText }}</a>
          </li>
        </ul>
      </section>
    </div>

    <div
      :class="match_isNarrowMedium ? '' : 'footer-nav-accordion-wrap'"
      class="mobile-lg:grid-col-6 desktop:grid-col-3">
      <section
        :class="match_isNarrowMedium ? '' : 'usa-footer__primary-content--collapsible usa-accordion'"
        class="usa-footer__primary-content">
        <!-- footer nav column 3.-->
        <h3 :class="match_isNarrowMedium ? 'usa-gov-footer__primary-link' : 'usa-accordion__heading'">
          <span v-if="match_isNarrowMedium">{{ $t("beta.footer.column3Title") }}</span>
          <button
            v-else
            type="button"
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="col-3">
            {{ $t("beta.footer.column3Title") }}
          </button>
        </h3>

        <ul
          id="col-3"
          :class="match_isNarrowMedium ? '' : 'usa-accordion__content'"
          class="usa-list usa-list--unstyled">
          <li
            v-for="item in $t('beta.footer.column3')"
            :id="`item-id-${item.linkID}`"
            :key="`item-id-${item.linkID}`"
            class="usa-footer__secondary-link">
            <a :href="sanitizedBearsUrl(item.linkURL)">{{ item.linkText }}</a>
          </li>
        </ul>
      </section>
    </div>

    <div
      :class="match_isNarrowMedium ? '' : 'footer-nav-accordion-wrap'"
      class="mobile-lg:grid-col-6 desktop:grid-col-3">
      <section
        :class="match_isNarrowMedium ? '' : 'usa-footer__primary-content--collapsible usa-accordion'"
        class="usa-footer__primary-content">
        <!-- footer nav column 4.-->
        <h3 :class="match_isNarrowMedium ? 'usa-gov-footer__primary-link' : 'usa-accordion__heading'">
          <span v-if="match_isNarrowMedium">{{ $t("beta.footer.column4Title") }}</span>
          <button
            v-else
            type="button"
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="col-4">
            {{ $t("beta.footer.column4Title") }}
          </button>
        </h3>

        <ul
          id="col-4"
          :class="match_isNarrowMedium ? '' : 'usa-accordion__content'"
          class="usa-list usa-list--unstyled">
          <li
            v-for="item in $t('beta.footer.column4')"
            :id="`item-id-${item.linkID}`"
            :key="`item-id-${item.linkID}`"
            class="usa-footer__secondary-link">
            <a :href="sanitizedBearsUrl(item.linkURL)">{{ item.linkText }}</a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
// matchMedia mixin for altering the DOM at different viewports.
import { MatchMedia } from "~/mixins/MatchMedia"
import sanitizeUrl from "~/mixins/SanitizeBears"
import FooterAccordion from "~/mixins/FooterAccordion"

export default {
  name: "BetaUsaGovFooterNav",

  // Register the MatchMedia mixin with the queries we want plus optional names.
  mixins: [
    sanitizeUrl, 
    FooterAccordion, 
    MatchMedia("narrowMedium", "isNarrowMedium"),
  ],

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