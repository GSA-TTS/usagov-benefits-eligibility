<template>
  <!-- To match usa.gov-->
  <footer class="usa-footer usa-footer--big">
    <div class="usa-footer__primary-section">
      <div class="grid-container usa-footer__return-to-top">
        <a
          v-if="$i18n.locale === 'en'"
          id="back-to-top"
          href="#"
          title="Back to top"
          class="stuck"
          :class="{ show: isHidden }"
          :style="backgroundImageStyle"
          @click.prevent="scrollToTop">
          {{ $t("returnToTop") }}
        </a>
        <a
          v-if="$i18n.locale === 'es'"
          id="back-to-top"
          href="#"
          title="Subir a la parte superior"
          class="stuck"
          :class="{ show: isHidden }"
          :style="backgroundImageStyle"
          @click.prevent="scrollToTop">
          {{ $t("returnToTop") }}
        </a>
      </div>
      <div class="grid-container">
        <div class="grid-row grid-gap">
          <div class="tablet:grid-col-8">
            <!-- start Footer navigation. -->
            <nav
              class="usa-footer__nav"
              aria-label="Footer">
              <!-- Footer navigation component. -->
              <UsaGovFooterNav />
            </nav>
          </div>
          <!-- Newsletter signup component-->
          <UsaGovFooterSignUp />
        </div>
      </div>
    </div>

    <!-- Lower contact info block. -->
    <div class="usa-footer__secondary-section">
      <div class="grid-container padding-bottom-4">
        <div class="grid-row grid-gap">
          <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
            <span id="bottom-phone">
              <div class="mobile-lg:grid-col-auto">
                <h4 class="usa-footer__logo-heading">{{ $t("footer.GroupTwo.header") }}</h4>
              </div>

              <div class="mobile-lg:grid-col-auto">
                <p>{{ $t("footer.GroupTwo.subHeader") }}</p>

                <address class="usa-footer__address">
                  <div class="usa-footer__contact-info">
                    <a
                      :href="sanitizedBearsUrl($t('footer.GroupTwo.linkOneUrl'))">
                      {{ $t("footer.GroupTwo.linkOne") }}
                    </a>
                  </div>
                </address>
              </div>
            </span>
          </div>
          <!-- Footer social component. -->
          <UsaGovFooterSocial />
        </div>
      </div>
    </div>

    <!-- Footer usa identifier
    "USAGov is the Official Guide..."
    -->
    <div class="usa-identifier">
      <section
        class="usa-identifier__section usa-identifier__section--masthead"
        :aria-label="$t('footer.subFooterLabel')">
        <div class="usa-identifier__container flex-justify-center">
          {{ $t("footer.subFooter") }}
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
import sanitizeUrl from "~/mixins/SanitizeBears"

export default {
  name: "UsaGovFooter",
  mixins: [sanitizeUrl],
  data() {
    return{
      isHidden: true
    }
  },
  computed: {
    backgroundImageStyle() {
      const image = require("@/assets/img-custom/Icon_Back_to_Top_Blue.png")
      return {
        "background-image": `url(${image})`,
      }
    },
  },
  mounted () {
    window.addEventListener('scroll', this.toggleScrollToTop);
  },
  unmounted () {
    window.removeEventListener('scroll', this.toggleScrollToTop);
  },
  methods: {
    sanitizedBearsUrl(benefitUrl, defaultValue = "#") {
      if (benefitUrl && benefitUrl.length > 0) {
        return this.sanitizeUrl(benefitUrl)
      } else {
        return defaultValue
      }
    },
    toggleScrollToTop() {
      this.isHidden = document.documentElement.scrollTop < window.innerHeight
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  }
}
</script>

<style lang="scss" scoped>
#back-to-top {
  position: fixed;
  height: 50px;
  width: 90px;
  right: -100px;
  bottom: 80px;
  background: #e8f0f7;
  transition: right .5s;
  background-size: 45px;
  background-position: 2px;
  background-repeat: no-repeat;
  padding: 0 15px 0 50px;
  border-radius: 25px 0 0 25px;
  line-height: 50px;
  display: inline-block;
  text-align: center;
  z-index: 1;
  /* This timing applies on the way OUT */
  transition-timing-function: ease-in;
  /* Quick on the way out */
  transition: 0.25s;
  /* Hide thing by pushing it outside by default */
  transform: translateX(0);
}

#back-to-top.show {
  /* This timing applies on the way IN */
  transition-timing-function: ease-out;
  /* A litttttle slower on the way in */
  transition: 0.3s;
  /* Move into place */
  transform: translateX(130%);
}

#back-to-top.stuck {
  right: 0;
  white-space: nowrap
}
</style>
