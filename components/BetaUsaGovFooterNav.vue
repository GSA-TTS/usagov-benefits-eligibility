<template>
  <div class="grid-row grid-gap-4">
    <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
        <!-- footer nav column 1-->
        <h2 class="usa-gov-footer__primary-link">{{ $t("beta.footer.column1Title") }}</h2>
        <ul class="usa-list usa-list--unstyled">
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

    <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
        <!-- footer nav column 1-->
        <h2 class="usa-gov-footer__primary-link">{{ $t("beta.footer.column2Title") }}</h2>
        <ul class="usa-list usa-list--unstyled">
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

    <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
        <!-- footer nav column 1-->
        <h2 class="usa-gov-footer__primary-link">{{ $t("beta.footer.column3Title") }}</h2>
        <ul class="usa-list usa-list--unstyled">
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

    <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
      <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
        <!-- footer nav column 1-->
        <h2 class="usa-gov-footer__primary-link">{{ $t("beta.footer.column4Title") }}</h2>
        <ul class="usa-list usa-list--unstyled">
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
