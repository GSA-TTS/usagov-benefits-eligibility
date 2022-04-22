<template>
  <div>
    <div class="grid-container">
      <div class="grid-row">
        <div class="grid-col">
          <nuxt-content :document="disclaimer" />
        </div>
      </div>
    </div>
    <footer class="usa-footer usa-footer--slim print:display-none">
      <div class="grid-container usa-footer__return-to-top">
        <nuxt-link :to="{ path: getUrl(), hash: '#' }">Return to top</nuxt-link>
      </div>
      <div class="usa-footer__primary-section padding-bottom-7">
        <div class="usa-footer__primary-container grid-row">
          <div class="mobile-lg:grid-col-8 desktop:grid-col-12">
            <nav
              class="usa-footer__nav"
              aria-label="Footer navigation,,">
              <div class="grid-row grid-gap-4">
                <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                    <h2 class="usa-footer__primary-link font-family-serif font-heading-lg margin-bottom-1">
                      About USA.gov
                    </h2>
                    <ul class="usa-list usa-list--unstyled">
                      <li class="usa-footer__secondary-link">
                        <a
                          class="margin-bottom-3"
                          href="https://www.usa.gov/about"
                          >About Us and Site Notices</a
                        >
                      </li>

                      <li class="usa-footer__secondary-link">
                        <a href="https://www.usa.gov/media">For the Media</a>
                      </li>

                      <li class="usa-footer__secondary-link">
                        <a href="https://www.usa.gov/developer">For Developers</a>
                      </li>

                      <li class="usa-footer__secondary-link">
                        <a href="https://www.usa.gov/site-issue-report-form">Report a Website Issue</a>
                      </li>

                      <li class="usa-footer__secondary-link">
                        <a href="https://www.usa.gov/#tpcs">All Topics and Services</a>
                      </li>
                    </ul>
                  </section>
                </div>

                <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                    <h2 class="usa-footer__primary-link font-family-serif font-heading-lg margin-bottom-1">
                      Ask USA.gov a Question
                    </h2>
                    <ul class="usa-list usa-list--unstyled">
                      <li class="usa-footer__secondary-link">
                        <a href="https://www.usa.gov/phone">Call 1-844-USAGOV1 (1-844-872-4681)</a>
                      </li>

                      <li class="usa-footer__secondary-link">
                        <a href="https://usa.gov/espanol/contactenos">En Español</a>
                      </li>
                    </ul>
                  </section>
                </div>

                <div class="mobile-lg:grid-col-6 desktop:grid-col-4">
                  <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                    <h2 class="usa-footer__primary-link font-family-serif font-heading-lg margin-bottom-1">
                      Sign Up to Receive Email Updates
                    </h2>
                    <ul class="usa-list usa-list--unstyled">
                      <li class="usa-footer__secondary-link">
                        <form
                          action="https://connect.usa.gov/subscribe"
                          method="get">
                          <label
                            class="usa-label text-white margin-top-1"
                            for="email-2"
                            >Enter your email</label
                          >
                          <input
                            id="email-2"
                            name="email"
                            type="email"
                            class="usa-input margin-bottom-3 width-mobile" />
                          <button
                            class="usa-button width-card"
                            type="submit">
                            Sign Up
                          </button>
                        </form>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="usa-footer__secondary-section padding-y-1">
        <div class="grid-container margin-y-2">
          <div class="display-flex flex-row flex-justify tablet:flex-justify-end">
            <a
              class="usa-social-link usa-social-link-a11y tablet:margin-right-1 radius-lg"
              href="https://www.facebook.com/USAgov">
              <img
                alt="Facebook"
                src="https://www.usa.gov/sites/all/themes/usa/images/Icon_Connect_Facebook.png" />
            </a>

            <a
              class="usa-social-link usa-social-link-a11y tablet:margin-right-1 radius-lg"
              href="https://twitter.com/USAgov">
              <img
                alt="Twitter"
                src="https://www.usa.gov/sites/all/themes/usa/images/Icon_Connect_Twitter.png" />
            </a>

            <a
              class="usa-social-link usa-social-link-a11y tablet:margin-right-1 radius-lg"
              href="https://www.youtube.com/usagov1">
              <img
                alt="YouTube"
                src="https://www.usa.gov/sites/all/themes/usa/images/Icon_Connect_Youtube.png" />
            </a>

            <a
              class="usa-social-link usa-social-link-a11y radius-lg"
              href="https://www.instagram.com/usagov/">
              <img
                alt="Instagram"
                src="https://www.usa.gov/sites/all/themes/usa/images/Icon_Connect_Instragram.png" />
            </a>
          </div>
        </div>
      </div>
    </footer>

    <div class="usa-identifier bg-black">
      <section
        class="usa-identifier__section usa-identifier__section--masthead"
        aria-label="Agency identifier">
        <div class="usa-identifier__container">
          <div
            class="usa-identifier__identity"
            aria-label="Agency description">
            <p class="usa-identifier__identity-disclaimer text-normal margin-y-3">
              USAGov is the Official Guide to Government Information and Services
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disclaimer: {},
    }
  },
  async fetch() {
    this.disclaimer = await this.$content("disclaimer").fetch()
  },
  methods: {
    getUrl() {
      return this.$route?.fullPath
    },
  },
}
</script>

<style
  lang="scss"
  scoped>
.usa-social-link {
  background-color: transparent;
}
</style>
`
