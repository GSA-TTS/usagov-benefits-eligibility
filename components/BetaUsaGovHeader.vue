<template>
  <!-- To match usa.gov-->
  <div>
    <a
      class="usa-skipnav"
      href="#main-content"
      @click.prevent="skipLink"
      >{{ $t("skipnav") }}</a
    >
    <TheBanner />
    <header
      id="header"
      class="usa-header usa-header--extended">
      <ul
        class="language-switcher-language-url"
        role="navigation">
        <li class="display-flex flex-justify-end usa-list language-switcher-wrap">
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            :title="`${$i18n.locale === 'en' ? 'Cambiar a Español' : 'Switch to English'}`"
            class="usa-button language-link">{{ locale.name }}</nuxt-link>
        </li>
      </ul>

      <div class="usa-navbar">
        <div
          id="extended-logo"
          class="usa-logo">
          <em class="usa-logo-text">
            <!-- English link and logo. -->
            <a
              v-if="$i18n.locale === 'en'"
              href="https://www.usa.gov"
              title="USAGov Logo">
              <img
                src="~/assets/img-custom/Logo_USAGov.png"
                alt="USAGov Logo"
                class="maxw-10 logo" />
            </a>
            <!-- Spanish link and logo. -->
            <a
              v-if="$i18n.locale === 'es'"
              href="https://www.usa.gov/es"
              title="USAGov Logo">
              <img
                src="~/assets/img-custom/Logo_USAGov_Spanish.png"
                alt="USAGov en Español Logo"
                class="es margin-left-1 tablet:margin-left-0 maxw-196 logo" />
            </a>
          </em>
        </div>
        <button
          class="usa-menu-btn"
          :style="buttonStyle">
          {{ $t("beta.header.menu") }}
        </button>
      </div>

      <nav
        aria-label="Header Primary"
        class="usa-nav">
        <div class="usa-nav__inner">
          <button class="usa-nav__close">
            <img
              src="@/assets/img/usa-icons/close.svg"
              alt="Close" />
          </button>
          
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
                :value="$t('beta.header.form.affliate')" />
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

          <!-- Start main navigation. -->
          <ul class="usa-nav__primary usa-accordion">
            <li
              v-for="item in $t('beta.header.navMain')"
              :id="`item-id-${item.linkID}`"
              :key="`item-id-${item.linkID}`"
              class="usa-nav__primary-item">
              <a
                class="usa-nav__link"
                :href="sanitizedHeadingUrl(item.linkURL)">
                {{ item.linkText }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import sanitizeUrl from "~/mixins/SanitizeBears"

export default {
  mixins: [sanitizeUrl],

  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    buttonStyle() {
      const image = require("@/assets/img-custom/Button_header_open_mobile-menu.svg")
      return {
        "background-image": `url(${image})`,
      }
    },
  },

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
        // route = `/`
        this.$i18n.setLocale("en")
      }
      this.$router.push(route)
    },
  },
}
</script>

<style lang="scss" scoped>
// HELPERS
.maxw-196 {
  max-width: 12.3rem;
}
.maxw-1024 {
  max-width: 64rem;
}
.maxw-6-2 {
  max-width: 6.2rem;
}
.font-sans-xxs {
  font-size: 0.9rem;
}
// BANNER
.usa-banner {
  background-color: #f3f3f3;
}

// LANUAGE BUTTON
.language-switcher-language-url {
  margin: 0 auto;
  max-width: 64rem;
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

.usa-button {
  border: none;
}

// specified for matching with usa.gov
.usa-search {
  border: none;
}

@media screen and (max-width: 1024px) {
  .language-switcher-language-url {
    bottom: 18px;
  }

  .usa-button {
    max-width: 200px;
  }
}

.language-link {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #112f4e;
  font-size: .93rem;
  font-weight: 700;
  line-height: .9;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #112f4e;
  }
}

@media screen and (max-width: 1024px) {
  .language-link {
    line-height: 1.1;
  }
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

// SPANISH TWEAKS
.usa-header--extended [hreflang|="es"] {
  border-radius: 5px;
  border: 0;
}

.usa-nav__secondary:lang(es) {
  width: 33rem;
  .usa-nav__secondary-links:lang(es) {
    width: 17rem;
  }
  .usa-nav__secondary-item {
    padding-left: 0;
  }
}

@media screen and (max-width: 64em) {
  .usa-logo img.es {
    max-width: 6.2rem;
  }
}

// MEDIA QUERIES
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
