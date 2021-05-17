<template>
  <div>
    <a class="usa-skipnav" href="#main-content">{{ $t('skipnav') }}</a>

    <section class="usa-banner" aria-label="Official government website">
      <div class="usa-accordion">
        <header class="usa-banner__header">
          <div class="usa-banner__inner">
            <div class="grid-col-auto">
              <img class="usa-banner__header-flag" src="../assets/img/us_flag_small.png" alt="U.S. flag">
            </div>
            <div class="grid-col-fill tablet:grid-col-auto">
              <p class="usa-banner__header-text">{{ $t('banner.official') }}</p>
              <p class="usa-banner__header-action" aria-hidden="true">{{ $t('banner.know') }}</p>
            </div>
            <button
              class="usa-accordion__button usa-banner__button"
              aria-expanded="false"
              aria-controls="gov-banner">
              <span class="usa-banner__button-text">{{ $t('banner.know') }}</span>
            </button>
          </div>
        </header>
        <div class="usa-banner__content usa-accordion__content" id="gov-banner">
          <div class="grid-row grid-gap-lg">
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img class="usa-banner__icon usa-media-block__img" src="../assets/img/icon-dot-gov.svg" role="img" alt="" aria-hidden="true">
              <div class="usa-media-block__body">
                <p>
                  <strong>
                   {{ $t('banner.dropdown.official') }}
                  </strong>
                  <br/>
                  <span v-html="$t('banner.dropdown.officialDetails')" />

                </p>
              </div>
            </div>
            <div class="usa-banner__guidance tablet:grid-col-6">
              <img class="usa-banner__icon usa-media-block__img" src="../assets/img/icon-https.svg" role="img" alt="" aria-hidden="true">
              <div class="usa-media-block__body">
                <p>
                  <strong>
                    {{ $t('banner.dropdown.secure') }}
                  </strong>
                  <br/>
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
                      <title id="banner-lock-title">Lock</title><desc id="banner-lock-description">A locked padlock</desc><path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"/></svg></span>
                  ) or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="usa-overlay"></div>
    <header class="usa-header usa-header--extended"><div class="usa-navbar">
        <div class="usa-logo" id="extended-logo">
          <em class="usa-logo__text"><a href="/" title="Home" aria-label="Home">{{ $t('projectName') }}</a></em>
        </div>
        <button class="usa-menu-btn">Menu</button>
      </div>
      <nav aria-label="Primary navigation" class="usa-nav">
        <div class="usa-nav__inner"><button class="usa-nav__close"><img src="../assets/img/usa-icons/close.svg" role="img" alt="close"></button>
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
              <a class="usa-nav__link" href="javascript:void(0)"><span>Simple link</span></a>
            </li>
          </ul>
          <div class="usa-nav__secondary">
            <ul class="usa-nav__secondary-links"><li class="usa-nav__secondary-item">
                <nuxt-link :to="switchLocalePath('es')">Español</nuxt-link>
              </li><li class="usa-nav__secondary-item">
                <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
            </li></ul><form class="usa-search usa-search--small " role="search">
              <label class="usa-sr-only" for="extended-search-field-small">Search small</label>
              <input class="usa-input" id="extended-search-field-small" type="search" name="search">
              <button class="usa-button" type="submit"><span class="usa-sr-only">Search</span></button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <main id="main-content">
      <!--<section class="usa-hero" aria-label="Introduction">
        <div class="grid-container">
          <div class="usa-hero__callout">
            <h1 class="usa-hero__heading">
              Find benefits to help you through life's most important events.
            </h1>
          </div>
        </div>
      </section>-->

      <section class="grid-container usa-section">
        <div class="grid-row grid-gap">
          <div class="tablet:grid-col-4">
            <h2 class="font-heading-xl margin-top-0 tablet:margin-bottom-0">Find benefits to help you through life's most important events.</h2>
          </div>
          <div class="tablet:grid-col-8 usa-prose">
            <p>Answer a few questions, and we’ll help you identify benefits, including financial help, services, and discounts, that you might qualify for. Then will point you in the right direction to apply for the benefits. </p>
            <p>If you know exactly what you are looking for, browse our Benefits by Topic.</p>
            <p>What kind of help are you looking for?</p>
          </div>
        </div>
      </section>

      <section class="usa-graphic-list usa-section usa-section--dark">
        <div class="grid-container">
          <div class="usa-graphic-list__row grid-row grid-gap">
            <div class="usa-media-block tablet:grid-col">
              <img class="usa-media-block__img"  src="../assets/img/circle-124.png" alt="Alt text">
              <div class="usa-media-block__body">
                <h2 class="usa-graphic-list__heading">Bereavement & Death Benefits.</h2>
                <ul>
                  <li>Burial help</li>
                  <li>Financial help</li>
                  <li>Insurance</li>
                </ul>
              </div>
            </div>
            <div class="usa-media-block tablet:grid-col">
              <img class="usa-media-block__img"  src="../assets/img/circle-124.png" alt="Alt text">
              <div class="usa-media-block__body">
                <h2 class="usa-graphic-list__heading">Help for Older Adults</h2>
                <ul>
                  <li>Health and medical</li>
                  <li>Housing and food</li>
                  <li>Financial help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="test-section-id" class="usa-section">
        <div class="grid-container">
          <h2 class="font-heading-xl margin-y-0">Example Rules Engine Results</h2>
          <Nuxt />
        </div>
      </section>

    </main>

    <footer class="usa-footer usa-footer--slim">
      <div class="grid-container usa-footer__return-to-top">
        <a href="#">Return to top</a>
      </div>
      <div class="usa-footer__primary-section">
        <div class="usa-footer__primary-container grid-row">
          <div class="mobile-lg:grid-col-8">
            <nav class="usa-footer__nav" aria-label="Footer navigation">
              <ul class="grid-row grid-gap">
                <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
                </li>
                <!-- <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
                </li>
                <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
                </li>
                <li class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a class="usa-footer__primary-link" href="javascript:void(0);">Primary link</a>
                </li> -->
              </ul>
            </nav>
          </div>
          <div class="mobile-lg:grid-col-4">
            <address class="usa-footer__address">
              <div class="grid-row grid-gap">
                <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div class="usa-footer__contact-info">
                    <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                  </div>
                </div>
                <div class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div class="usa-footer__contact-info">
                    <a href="mailto:info@agency.gov">info@agency.gov</a>
                  </div>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div class="usa-footer__secondary-section">
        <div class="grid-container">
          <div class="usa-footer__logo grid-row grid-gap-2">
            <div class="grid-col-auto">
              <img class="usa-footer__logo-img" src="~assets/img/logo-img.png" alt="">
            </div>
            <div class="grid-col-auto">
              <p class="usa-footer__logo-heading">Name of Agency</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      { src: 'assets/js/uswds-init.min.js' }
    ],
  },
}
</script>

<style>

</style>
