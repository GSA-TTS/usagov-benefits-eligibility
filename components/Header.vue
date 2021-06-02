<template>
  <div>
    <a class="usa-skipnav" href="#main-content">{{ $t("skipnav") }}</a>

    <section class="usa-banner" aria-label="Official government website">
      <div class="usa-accordion">
        <header class="usa-banner__header">
          <div class="usa-banner__inner">
            <div class="grid-col-auto">
              <img
                class="usa-banner__header-flag"
                src="../assets/img/us_flag_small.png"
                alt="U.S. flag"/>
            </div>
            <div class="grid-col-fill tablet:grid-col-auto">
              <p class="usa-banner__header-text">{{ $t("banner.official") }}</p>
              <p class="usa-banner__header-action" aria-hidden="true">
                {{ $t("banner.know") }}
              </p>
            </div>
            <button
              class="usa-accordion__button usa-banner__button"
              aria-expanded="false"
              aria-controls="gov-banner">
              <span class="usa-banner__button-text">{{
                $t("banner.know")
              }}</span>
            </button>
          </div>
        </header>

        <div id="gov-banner" class="usa-banner__content usa-accordion__content">
          <div class="grid-row grid-gap-lg">
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img
                class="usa-banner__icon usa-media-block__img"
                src="../assets/img/icon-dot-gov.svg"
                role="img"
                alt=""
                aria-hidden="true"/>
              <div class="usa-media-block__body">
                <p>
                  <strong>
                    {{ $t("banner.dropdown.official") }}
                  </strong>
                  <br />
                  <span v-html="$t('banner.dropdown.officialDetails')" />
                </p>
              </div>
            </div>
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img
                class="usa-banner__icon usa-media-block__img"
                src="../assets/img/icon-https.svg"
                role="img"
                alt=""
                aria-hidden="true"/>
              <div class="usa-media-block__body">
                <p>
                  <strong>
                    {{ $t("banner.dropdown.secure") }}
                  </strong>
                  <br />
                  A <strong>lock</strong> (
                  <span class="icon-lock">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="64"
                      viewBox="0 0 52 64"
                      class="usa-banner__lock-image"
                      role="img"
                      aria-labelledby="banner-lock-title banner-lock-description"
                      focusable="false">
                      <title id="banner-lock-title">Lock</title>
                      <desc id="banner-lock-description">A locked padlock</desc>
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"/></svg></span>
                  ) or <strong>https://</strong> means you’ve safely connected
                  to the .gov website. Share sensitive information only on
                  official, secure websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="usa-overlay" />
    <header class="usa-header usa-header--extended">
      <div class="usa-navbar">
        <div id="extended-logo" class="usa-logo">
          <em class="usa-logo__text"><nuxt-link to="/" title="Home" aria-label="Home">{{
              $t("projectName")
            }}</nuxt-link></em>
        </div>
        <button class="usa-menu-btn">Menu</button>
      </div>
      <nav aria-label="Primary navigation" class="usa-nav">
        <div class="usa-nav__inner">
          <button class="usa-nav__close">
            <img
              src="../assets/img/usa-icons/close.svg"
              role="img"
              alt="close"/>
          </button>
          <ul class="usa-nav__primary usa-accordion">
            <!--<li class="usa-nav__primary-item">
              <button class="usa-accordion__button usa-nav__link  usa-current" aria-expanded="false" aria-controls="extended-nav-section-one"><span>Current section</span></button>
              <ul id="extended-nav-section-one" class="usa-nav__submenu">
                <li class="usa-nav__submenu-item">
                  <a href="#" class=""> Navigation link</a>
                </li>
                <li class="usa-nav__submenu-item">
                  <a href="#" class=""> Navigation link</a>
                </li>
                <li class="usa-nav__submenu-item">
                  <a href="#" class=""> Navigation link</a>
                </li>
              </ul>
            </li>-->
            <!--<li class="usa-nav__primary-item">
              <button class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-nav-section-two"><span>Section</span></button>
              <ul id="extended-nav-section-two" class="usa-nav__submenu">
                <li class="usa-nav__submenu-item">
                  <a href="#" class=""> Navigation link</a>
                </li><li class="usa-nav__submenu-item">
                  <a href="#" class=""> Navigation link</a>
                </li><li class="usa-nav__submenu-item">
                  <a href="#" class=""> Navigation link</a>
                </li>
              </ul>
            </li>-->
            <li class="usa-nav__primary-item">
              <nuxt-link :to="'/'" class="usa-nav__link" ><span>Life Events</span></nuxt-link>
            </li>
          </ul>
          <div class="usa-nav__secondary">
            <ul class="usa-nav__secondary-links">
              <li class="usa-nav__secondary-item">
                <nuxt-link :to="switchLocalePath('es')">Español</nuxt-link>
              </li>
              <li class="usa-nav__secondary-item">
                <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
              </li>
            </ul>
            <form class="usa-search usa-search--small" role="search">
              <label class="usa-sr-only" for="extended-search-field-small">Search small</label>
              <input
                id="extended-search-field-small"
                class="usa-input"
                type="search"
                name="search"/>
              <button class="usa-button" type="submit">
                <span class="usa-sr-only">Search</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  }
};
</script>
