<template>
  <div>
    <a
      class="usa-skipnav"
      href="#main-content"
      @click.prevent="skipLink"
      >{{ $t("skipnav") }}</a
    >
    <TheBanner />
    <div>
      <div class="usa-alert usa-alert--slim usa-alert--info">
        <div class="usa-alert__body">
          <strong>This is a beta site.</strong> It's an early, in-progress version of an improved
          <a href="https://www.usa.gov/">USA.gov</a>. If you don't find what you're looking for, return to the main
          site.
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
                Español
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
            <button class="usa-menu-btn">Menu</button>
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
                    href="/#all_topics"
                    class="usa-nav__link"
                    ><span>All topics and services</span></a
                  >
                </li>
                <li
                  id="usa-nav__about"
                  class="usa-nav__primary-item">
                  <a
                    href="/about-the-us"
                    class="usa-nav__link"
                    ><span>About the U.S. and its government</span></a
                  >
                </li>
                <li
                  id="usa-nav__money"
                  class="usa-nav__primary-item">
                  <a
                    href="/money"
                    class="usa-nav__link"
                    ><span>Money</span></a
                  >
                </li>
                <li
                  id="usa-nav__law"
                  class="usa-nav__primary-item">
                  <a
                    href="/laws-and-legal-issues"
                    class="usa-nav__link"
                    ><span>Laws and legal issues</span></a
                  >
                </li>
                <li
                  id="usa-nav__scams"
                  class="usa-nav__primary-item">
                  <a
                    href="/scams-and-fraud"
                    class="usa-nav__link"
                    ><span>Scams and fraud</span></a
                  >
                </li>
              </ul>
              <div class="usa-nav__secondary">
                <span class="usa-nav__secondary-links">
                  <span
                    id="top-phone"
                    class="usa-nav__secondary-item">
                    <a href="https://beta.usa.gov/phone">Call us at 1-844-USAGOV1</a>
                  </span>
                </span>

                <form
                  class="usa-search usa-search--small"
                  action="https://search.usa.gov/search"
                  method="get"
                  name="search_form"
                  accept-charset="UTF-8"
                  role="search">
                  <label
                    id="top-srch"
                    class="usa-sr-only"
                    for="search-field-small"
                    >Search</label
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
                    placeholder="Search all government"
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
                      alt="Search" />
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
      const oneEventString = !this.$config.oneEventVersion ? this.$config.oneEventVersion : ""
      if (locale === "en") {
        route = `/es/${oneEventString}`
        this.$i18n.setLocale("es")
      } else {
        route = `/${oneEventString}`
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
.usa-banner {
  background-color: #f3f3f3;
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

// alert
.usa-alert__body {
  max-width: 64rem;
  margin-right: auto;
  margin-left: auto;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  display: block;
  font-size: 0.9rem;
  position: relative;
}
.usa-alert--info {
  border-left-color: #e7f6f8;
  &::before {
    background: url(~/assets/img/usa-icons/info.svg) no-repeat center/2rem 2rem;
    width: 2rem;
    position: absolute;
    left: 257px;
    top: -2px;
    background-color: #1b1b1b;
  }
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
