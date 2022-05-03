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
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PHBhdGggZD0iTTIyLDEyYzAtNS41Mi00LjQ4LTEwLTEwLTEwUzIsNi40OCwyLDEyYzAsNC44NCwzLjQ0LDguODcsOCw5LjhWMTVIOHYtM2gyVjkuNUMxMCw3LjU3LDExLjU3LDYsMTMuNSw2SDE2djNoLTIgYy0wLjU1LDAtMSwwLjQ1LTEsMXYyaDN2M2gtM3Y2Ljk1QzE4LjA1LDIxLjQ1LDIyLDE3LjE5LDIyLDEyeiIvPjwvc3ZnPg==" />
            </a>

            <a
              class="usa-social-link usa-social-link-a11y tablet:margin-right-1 radius-lg"
              href="https://twitter.com/USAgov">
              <img
                alt="Twitter"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggaWQ9IlR3aXR0ZXIiIGQ9Ik0xMiwyQTEwLDEwLDAsMSwwLDIyLDEyLDEwLDEwLDAsMCwwLDEyLDJabTUsOC4xYzAsLjEsMCwuMjEsMCwuMzFhNi44MSw2LjgxLDAsMCwxLTYuODYsNi44Niw2Ljc0LDYuNzQsMCwwLDEtMy42OS0xLjA4LDUuNjMsNS42MywwLDAsMCwuNTgsMCw0Ljc5LDQuNzksMCwwLDAsMy0xQTIuNDEsMi40MSwwLDAsMSw3LjgsMTMuNTFhMS43NSwxLjc1LDAsMCwwLC40Ni4wNSwyLjU5LDIuNTksMCwwLDAsLjYzLS4wOEEyLjQyLDIuNDIsMCwwLDEsNywxMS4xMXYwYTIuMzMsMi4zMywwLDAsMCwxLjA5LjNBMi40MywyLjQzLDAsMCwxLDcuMyw4LjE2YTYuODQsNi44NCwwLDAsMCw1LDIuNTMsMi41OSwyLjU5LDAsMCwxLS4wNy0uNTUsMi40MSwyLjQxLDAsMCwxLDIuNDEtMi40MSwyLjM4LDIuMzgsMCwwLDEsMS43Ny43NkE0LjY3LDQuNjcsMCwwLDAsMTcuOSw3LjlhMi4zOSwyLjM5LDAsMCwxLTEuMDYsMS4zNCw0LjU1LDQuNTUsMCwwLDAsMS4zOS0uMzlBNSw1LDAsMCwxLDE3LDEwLjFaIi8+PC9zdmc+" />
            </a>

            <a
              class="usa-social-link usa-social-link-a11y tablet:margin-right-1 radius-lg"
              href="https://www.youtube.com/usagov1">
              <img
                alt="YouTube"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJhMTAgMTAgMCAxMDEwIDEwQTEwIDEwIDAgMDAxMiAyem01Ljc1IDEyLjkxQTEuNDkgMS40OSAwIDAxMTYuNjkgMTZhMzQuNjUgMzQuNjUgMCAwMS00LjY5LjI2QTM0LjY1IDM0LjY1IDAgMDE3LjMxIDE2YTEuNDkgMS40OSAwIDAxLTEuMDYtMS4wNkExNS44OCAxNS44OCAwIDAxNiAxMmExNS44OCAxNS44OCAwIDAxLjI1LTIuOTFBMS40OSAxLjQ5IDAgMDE3LjMxIDggMzQuNjUgMzQuNjUgMCAwMTEyIDcuNzdhMzQuNjUgMzQuNjUgMCAwMTQuNjkuMjMgMS40OSAxLjQ5IDAgMDExLjA2IDEuMDZBMTUuODggMTUuODggMCAwMTE4IDEyYTE1Ljg4IDE1Ljg4IDAgMDEtLjI1IDIuOTF6Ii8+PHBhdGggZD0iTTEwLjc3IDEzLjc4TDEzLjkxIDEybC0zLjE0LTEuNzh2My41NnoiLz48L3N2Zz4=" />
            </a>

            <a
              class="usa-social-link usa-social-link-a11y radius-lg"
              href="https://www.instagram.com/usagov/">
              <img
                alt="Instagram"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDEwYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnoiLz48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEwMTAgMTBBMTAgMTAgMCAwMDEyIDJ6bTYgMTIuNjlBMy4zMiAzLjMyIDAgMDExNC42OSAxOEg5LjMxQTMuMzIgMy4zMiAwIDAxNiAxNC42OVY5LjMxQTMuMzIgMy4zMiAwIDAxOS4zMSA2aDUuMzhBMy4zMiAzLjMyIDAgMDExOCA5LjMxeiIvPjxwYXRoIGQ9Ik0xNi45NCA5LjMxYTIuMjUgMi4yNSAwIDAwLTIuMjUtMi4yNUg5LjMxYTIuMjUgMi4yNSAwIDAwLTIuMjUgMi4yNXY1LjM4YTIuMjUgMi4yNSAwIDAwMi4yNSAyLjI1aDUuMzhhMi4yNSAyLjI1IDAgMDAyLjI1LTIuMjV6TTEyIDE1LjA5QTMuMDkgMy4wOSAwIDExMTUuMDkgMTIgMy4wOSAzLjA5IDAgMDExMiAxNS4wOXptMy43Ny01Ljc1YS43OS43OSAwIDAxLS41NS4yMy44My44MyAwIDAxLS41NS0uMjMuNzguNzggMCAwMTAtMS4xMS44Mi44MiAwIDAxLjU1LS4yMy43OC43OCAwIDAxLjU1IDEuMzN6Ii8+PC9zdmc+" />
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
    this.disclaimer = await this.$content(this.$i18n.locale, "disclaimer").fetch()
  },
  methods: {
    getUrl() {
      return this.$route?.fullPath
    },
  },
}
</script>
