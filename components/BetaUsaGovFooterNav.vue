<template>
  <div class="grid-row grid-gap-4">
    <div
      :class="match_isNarrowPlus ? '' : 'footer-nav-accordion-wrap'"
      class="tablet:grid-col-6 desktop:grid-col-3">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible usa-accordion">
        <!-- footer nav column 1-->
        <h2 :class="match_isNarrowPlus ? 'usa-gov-footer__primary-link' : 'usa-accordion__heading'">
          <span v-if="match_isNarrowPlus">{{ $t("beta.footer.column1Title") }}</span>
          <button
            v-else
            type="button"
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="col-1">
            {{ $t("beta.footer.column1Title") }}
          </button>
        </h2>

        <ul
          id="col-1"
          :class="match_isNarrowPlus ? '' : 'usa-accordion__content'"
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
      :class="match_isNarrowPlus ? '' : 'footer-nav-accordion-wrap'"
      class="tablet:grid-col-6 desktop:grid-col-3">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible usa-accordion">
        <!-- footer nav column 1-->
        <h2 :class="match_isNarrowPlus ? 'usa-gov-footer__primary-link' : 'usa-accordion__heading'">
          <span v-if="match_isNarrowPlus">{{ $t("beta.footer.column2Title") }}</span>
          <button
            v-else
            type="button"
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="col-2">
            {{ $t("beta.footer.column2Title") }}
          </button>
        </h2>

        <ul
          id="col-2"
          :class="match_isNarrowPlus ? '' : 'usa-accordion__content'"
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
      :class="match_isNarrowPlus ? '' : 'footer-nav-accordion-wrap'"
      class="tablet:grid-col-6 desktop:grid-col-3">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible usa-accordion">
        <!-- footer nav column 1-->
        <h2 :class="match_isNarrowPlus ? 'usa-gov-footer__primary-link' : 'usa-accordion__heading'">
          <span v-if="match_isNarrowPlus">{{ $t("beta.footer.column3Title") }}</span>
          <button
            v-else
            type="button"
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="col-3">
            {{ $t("beta.footer.column3Title") }}
          </button>
        </h2>

        <ul
          id="col-3"
          :class="match_isNarrowPlus ? '' : 'usa-accordion__content'"
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
      :class="match_isNarrowPlus ? '' : 'footer-nav-accordion-wrap'"
      class="tablet:grid-col-6 desktop:grid-col-3">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible usa-accordion">
        <!-- footer nav column 1-->
        <h2 :class="match_isNarrowPlus ? 'usa-gov-footer__primary-link' : 'usa-accordion__heading'">
          <span v-if="match_isNarrowPlus">{{ $t("beta.footer.column4Title") }}</span>
          <button
            v-else
            type="button"
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="col-4">
            {{ $t("beta.footer.column4Title") }}
          </button>
        </h2>

        <ul
          id="col-4"
          :class="match_isNarrowPlus ? '' : 'usa-accordion__content'"
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
import { MatchMedia } from "~/mixins/MatchMedia"
import sanitizeUrl from "~/mixins/SanitizeBears"
import "@/assets/js-custom/footer-nav-accordions.js"

export default {
  name: "BetaUsaGovFooterNav",

  // Register the MatchMedia mixin with the queries we want plus optional names.
  mixins: [sanitizeUrl, MatchMedia("narrow", "isNarrow"), MatchMedia("narrowPlus", "isNarrowPlus")],

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
