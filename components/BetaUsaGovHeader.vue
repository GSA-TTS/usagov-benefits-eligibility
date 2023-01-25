<template>
  <div>
    <a
      class="usa-skipnav"
      href="#main-content"
      @click.prevent="skipLink"
      >{{ $t("skipnav") }}</a
    >
    <TheBanner />
    <!-- NOTE: Alert -->
    <div class="bg-info-lighter padding-y-1px margin-0">
      <div class="grid-container display-flex flex-align-center flex-align-start">
        <img
          src="@/assets/img/usa-icons/info.svg"
          alt="" />
        <div class="font-sans-xxs">
          <strong>{{ $t("beta.alert.site") }}</strong>
          {{ $t("beta.alert.status") }}
          <a :href="sanitizedHeadingUrl($t('beta.alert.statusLink'))">{{ $t("beta.alert.usaGov") }}</a>
          {{ $t("beta.alert.main") }}
        </div>
      </div>
    </div>

    <header
      id="header"
      class="usa-header usa-header--extended">
      <div class="usa-banner-inner">
        <div
          class="language-switcher-language-url"
          role="navigation">
          <ul class="links usa-nav__primary usa-accordion flex-justify-end">
            <li
              hreflang="es"
              class="usa-nav__primary-item">
              <button
                class="language-link usa-button"
                hreflang="es"
                @click="switchLanguage">
                {{ $t("beta.header.languageToggle") }}
              </button>
            </li>
          </ul>
        </div>

        <div class="field field--name-body field--type-text-with-summary field--label-hidden field__item">
          <div class="usa-navbar">
            <div
              id="extended-logo"
              class="usa-logo">
              <em class="usa-logo-text">
                <a
                  href="/"
                  title="USAGov Logo">
                  <img
                    v-if="$i18n.locale === 'en'"
                    src="~/assets/img/logo-beta.png"
                    alt="USAGov Logo"
                    class="maxw-10 logo" />
                  <img
                    v-if="$i18n.locale === 'es'"
                    src="~/assets/img/logo-beta-es.png"
                    alt="USAGov en Español Logo"
                    class="maxw-196" />
                </a>
              </em>
            </div>
            <button class="usa-menu-btn">{{ $t("beta.header.menu") }}</button>
          </div>
          <nav
            aria-label="Primary navigation"
            class="usa-nav">
            <div class="usa-nav__inner">
              <button class="usa-nav__close">
                <img
                  src="@/assets/img/usa-icons/close.svg"
                  alt="Close" />
              </button>
              <ul class="usa-nav__primary usa-accordion">
                <li class="usa-nav__primary-item">
                  <a
                    :href="sanitizedHeadingUrl($t('beta.header.nav.linkOneUrl'))"
                    class="usa-nav__link"
                    ><span>{{ $t("beta.header.nav.linkOneText") }}</span></a
                  >
                </li>
                <li
                  id="usa-nav__about"
                  class="usa-nav__primary-item">
                  <a
                    :href="sanitizedHeadingUrl($t('beta.header.nav.linkTwoUrl'))"
                    class="usa-nav__link"
                    ><span>{{ $t("beta.header.nav.linkTwoText") }}</span></a
                  >
                </li>
                <li
                  id="usa-nav__money"
                  class="usa-nav__primary-item">
                  <a
                    :href="sanitizedHeadingUrl($t('beta.header.nav.linkThreeUrl'))"
                    class="usa-nav__link"
                    ><span>{{ $t("beta.header.nav.linkThreeText") }}</span></a
                  >
                </li>
                <li
                  id="usa-nav__law"
                  class="usa-nav__primary-item">
                  <a
                    :href="sanitizedHeadingUrl($t('beta.header.nav.linkFourUrl'))"
                    class="usa-nav__link"
                    ><span>{{ $t("beta.header.nav.linkFourText") }}</span></a
                  >
                </li>
                <li
                  id="usa-nav__scams"
                  class="usa-nav__primary-item">
                  <a
                    :href="sanitizedHeadingUrl($t('beta.header.nav.linkFiveUrl'))"
                    class="usa-nav__link"
                    ><span>{{ $t("beta.header.nav.linkFiveText") }}</span></a
                  >
                </li>
              </ul>
              <div class="usa-nav__secondary">
                <span class="usa-nav__secondary-links">
                  <span
                    id="top-phone"
                    class="usa-nav__secondary-item">
                    <a :href="sanitizedHeadingUrl($t('beta.header.secondaryNav.linkOneUrl'))">{{
                      $t("beta.header.secondaryNav.linkOneText")
                    }}</a>
                  </span>
                </span>

                <form
                  class="usa-search usa-search--small"
                  :action="sanitizedHeadingUrl($t('beta.header.form.searchUrl'))"
                  method="get"
                  name="search_form"
                  accept-charset="UTF-8"
                  role="search">
                  <label
                    id="top-srch"
                    class="usa-sr-only"
                    for="search-field-small"
                    >{{ $t("beta.header.form.label") }}</label
                  >
                  <input
                    id="affiliate"
                    name="affiliate"
                    type="hidden"
                    value="usagov_all_gov" />
                  <input
                    id="search-field-small"
                    class="usa-input text usagov-search-autocomplete ui-autocomplete-input"
                    type="search"
                    name="query"
                    :placeholder="$t('beta.header.form.placeholder')"
                    onfocus="this.placeholder = ''"
                    autocomplete="off"
                    aria-autocomplete="list"
                    aria-haspopup="true" />
                  <button
                    class="usa-button"
                    type="submit">
                    <img
                      src="@/assets/img/search-dark.svg"
                      class="usa-search__submit-icon"
                      :alt="$t('beta.header.form.label')" />
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import sanitizeUrl from "~/mixins/SanitizeBears"

export default {
  mixins: [sanitizeUrl],
  methods: {
    sanitizedHeadingUrl(benefitUrl, defaultValue = "#") {
      if (benefitUrl && benefitUrl.length > 0) {
        return this.sanitizeUrl(benefitUrl)
      } else {
        return defaultValue
      }
    },
    skipLink() {
      const skipLink = document.getElementById("main-content")
      if (skipLink) {
        skipLink.scrollIntoView({
          block: "start",
          behavior: "smooth",
        })
      }
    },
    switchLanguage() {
      let route = ""
      const locale = this.$i18n.locale

      if (locale === "en") {
        route = `/es/`
        this.$i18n.setLocale("es")
      } else {
        route = `/`
        this.$i18n.setLocale("en")
      }
      this.$router.push(route)
    },
  },
}
</script>

<style lang="scss" scoped>
.maxw-196 {
  max-width: 12.3rem;
}
.maxw-1024 {
  max-width: 64rem;
}
.usa-banner {
  background-color: #f3f3f3;
}
.font-sans-xxs {
  font-size: 0.9rem;
}
.language-switcher-language-url {
  margin-right: auto;
  max-width: 64rem;
  margin-left: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  display: block;

  ul.links {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.3rem;
    margin-left: 0;
  }
}
.language-link {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #112f4e;
  &:hover {
    color: #fff;
    background-color: #112f4e;
  }
}
.usa-header--extended [hreflang|="es"] {
  border-radius: 5px;
  border: 0;
}
// nav
.usa-nav {
  border-bottom: 1px solid #dfe1e2;
}
.usa-nav__secondary {
  flex-direction: row;
  align-items: flex-end;
  bottom: 6rem;
  width: 32rem;
}
.usa-nav__secondary-links {
  width: 15rem;
  line-height: 1.1rem;
  a {
    color: #000;
    display: inline-block;
    text-decoration: none;
    font-size: 1.13rem;
    padding-left: 0.5rem;
    padding-top: 0.2rem;
    &:hover {
      text-decoration: revert;
    }
  }
}
.usa-nav__secondary-item::after {
  float: right;
  color: #dfe1e2;
  content: "|";
  padding-right: 1rem;
  font-size: 2rem;
  padding-bottom: 0.4rem;
}
.usa-logo {
  margin: 0.5rem 0 0.2em;
}

@media only screen and (max-width: 64em) {
  .usa-header--extended .usa-navbar {
    margin-top: 1rem;
    padding-bottom: 1rem;
  }
  .logo {
    max-width: 2.5rem;
  }
}
</style>
