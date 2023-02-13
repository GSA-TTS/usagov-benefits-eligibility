<template>
  <div class="grid-row grid-gap-4">
    <div class="tablet:grid-col-6 desktop:grid-col-3 accordion-wrap">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible usa-accordion">
        <!-- footer nav column 1-->
        <h2 class="usa-gov-footer__primary-link usa-accordion__heading">
          <button
            type="button"
            class="usa-accordion__button"
            aria-expanded="true"
            aria-controls="col-1">
            {{ $t("beta.footer.column1Title") }}
          </button>
        </h2>

        <ul
          id="col-1"
          class="usa-list usa-list--unstyled usa-accordion__content">
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

    <div class="tablet:grid-col-6 desktop:grid-col-3 accordion-wrap">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible usa-accordion">
        <!-- footer nav column 1-->
        <h2 class="usa-gov-footer__primary-link usa-accordion__heading">
          <button
            type="button"
            class="usa-accordion__button"
            aria-expanded="true"
            aria-controls="col-2">
            {{ $t("beta.footer.column2Title") }}
          </button>
        </h2>

        <ul
          id="col-2"
          class="usa-list usa-list--unstyled usa-accordion__content">
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

    <div class="tablet:grid-col-6 desktop:grid-col-3 accordion-wrap">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible usa-accordion">
        <!-- footer nav column 1-->
        <h2 class="usa-gov-footer__primary-link usa-accordion__heading">
          <button
            type="button"
            class="usa-accordion__button"
            aria-expanded="true"
            aria-controls="col-3">
            {{ $t("beta.footer.column3Title") }}
          </button>
        </h2>

        <ul
          id="col-3"
          class="usa-list usa-list--unstyled usa-accordion__content">
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

    <div class="tablet:grid-col-6 desktop:grid-col-3 accordion-wrap">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible usa-accordion">
        <!-- footer nav column 1-->
        <h2 class="usa-gov-footer__primary-link usa-accordion__heading">
          <button
            type="button"
            class="usa-accordion__button"
            aria-expanded="true"
            aria-controls="col-4">
            {{ $t("beta.footer.column4Title") }}
          </button>
        </h2>

        <ul
          id="col-4"
          class="usa-list usa-list--unstyled usa-accordion__content">
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
import sanitizeUrl from "~/mixins/SanitizeBears"
import "@/assets/js-custom/footer-nav-accordions.js"

export default {
  name: "BetaUsaGovFooterNav",
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
