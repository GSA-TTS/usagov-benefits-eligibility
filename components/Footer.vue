<template>
  <div>
    <div class="grid-container">
      <div class="grid-row">
        <div class="grid-col">
          <nuxt-content :document="disclaimer" />
        </div>
      </div>
    </div>
    <footer class="usa-footer usa-footer--slim">
      <div class="grid-container usa-footer__return-to-top">
        <nuxt-link :to="{ path: getUrl(), hash: '#' }">Return to top</nuxt-link>
      </div>
      <div class="usa-footer__primary-section">
        <div class="usa-footer__primary-container grid-row">
          <div class="mobile-lg:grid-col-8">
            <nav class="usa-footer__nav" aria-label="Footer navigation">
              <ul class="grid-row grid-gap">
                <li
                  class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content">
                  <a class="usa-footer__primary-link" href="https://usa.gov">USA.gov</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="mobile-lg:grid-col-4">
            <address class="usa-footer__address">
              <div class="grid-row grid-gap">
                <div
                  class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div class="usa-footer__contact-info">
                    <a href="tel:1-844-872-4681">(844)-USAGOV1</a>
                  </div>
                </div>
                <div
                  class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto">
                  <div class="usa-footer__contact-info">
                    <a href="https://www.usa.gov/contact">Contact</a>
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
                src="~assets/img/logo-img-usagov.png"
                alt=""/>
            </div>
            <div class="grid-col-auto">
              <p class="usa-footer__logo-heading">USA.gov</p>
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
            <p class="usa-identifier__identity-domain">usa.gov</p>
            <p class="usa-identifier__identity-disclaimer">
              USAGov is the Official Guide to Government Information and Services
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
                href="https://www.usa.gov/about"
                class="usa-identifier__required-link">About USA.gov</a>
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.usa.gov/accessibility"
                class="usa-identifier__required-link">Accessibility support</a>
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.usa.gov/media"
                class="usa-identifier__required-link usa-link">For the Media</a>
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.usa.gov/developer"
                class="usa-identifier__required-link usa-link">For Developers</a>
            </li>
            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.usa.gov/site-issue-report-form"
                class="usa-identifier__required-link usa-link">Report a Website Issue</a>
            </li>
            <!--<li class="usa-identifier__required-links-item">
              <a
                href=""
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
            </li>-->
            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.usa.gov/policies"
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
    return {
      disclaimer: {},
    };
  },
  async fetch () {
    this.disclaimer = await this.$content('disclaimer').fetch();
  },
  methods: {
    getUrl () {
      return this.$route?.fullPath;
    },
  },
};
</script>
