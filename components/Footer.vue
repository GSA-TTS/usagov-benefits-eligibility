<template>
  <div>
    <footer class="usa-footer usa-footer--slim">
      <div class="grid-container usa-footer__return-to-top">
        <nuxt-link :to="{ path: this.$route.fullPath, hash: '#' }" href="~#">Return to top</nuxt-link>
      </div>
      <div class="usa-footer__primary-section">
        <div class="usa-footer__primary-container grid-row">
          <div class="mobile-lg:grid-col-8">
            <nav class="usa-footer__nav" aria-label="Footer navigation">
              <ul class="grid-row grid-gap">
                <li
                  class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
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
                <div
                  class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div class="usa-footer__contact-info">
                    <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                  </div>
                </div>
                <div
                  class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div class="usa-footer__contact-info">
                    <a href="mailto:info@gsa.gov">info@gsa.gov</a>
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
              <img
                class="usa-footer__logo-img"
                src="~assets/img/logo-img.png"
                alt=""/>
            </div>
            <div class="grid-col-auto">
              <p class="usa-footer__logo-heading">GSA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="usa-identifier">
      <section
        class="usa-identifier__section usa-identifier__section--masthead"
        aria-label="Agency identifier">
        <div class="usa-identifier__container">
          <div class="usa-identifier__identity" aria-label="Agency description">
            <p class="usa-identifier__identity-domain">gsa.gov</p>
            <p class="usa-identifier__identity-disclaimer">
              An official website of the
              <a href="javascript:void(0);">General Services Administration</a>
            </p>
          </div>
        </div>
      </section>
      <nav
        class="usa-identifier__section usa-identifier__section--required-links"
        aria-label="Important links">
        <div class="usa-identifier__container">
          <ul class="usa-identifier__required-links-list">
            <li class="usa-identifier__required-links-item">
              <a
                href="javascript:void(0);"
                class="usa-identifier__required-link">About GSA</a>
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="javascript:void(0);"
                class="usa-identifier__required-link">Accessibility support</a>
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="javascript:void(0);"
                class="usa-identifier__required-link usa-link">FOIA requests</a>
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="javascript:void(0);"
                class="usa-identifier__required-link usa-link">No FEAR Act data</a>
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="javascript:void(0);"
                class="usa-identifier__required-link usa-link">Office of the Inspector General</a>
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="javascript:void(0);"
                class="usa-identifier__required-link usa-link">Performance reports</a>
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="javascript:void(0);"
                class="usa-identifier__required-link usa-link">Privacy policy</a>
            </li>
          </ul>
        </div>
      </nav>
      <section
        class="usa-identifier__section usa-identifier__section--usagov"
        aria-label="U.S. government information and services">
        <div class="usa-identifier__container">
          <div class="usa-identifier__usagov-description">
            Looking for U.S. government information and services?
          </div>
          <a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
debugger;
    return {};
  }
};
</script>
