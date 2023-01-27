<template>
  <div>
    <div class="grid-container">
      <div class="grid-row">
        <div class="grid-col">
          <div
            class="usa-summary-box footer-summary-box"
            role="region"
            aria-labelledby="summary-box-key-information-disclaimer">
            <div class="usa-summary-box__body">
              <h2
                id="summary-box-key-information-disclaimer"
                class="usa-summary-box__heading">
                {{ disclaimer.heading }}
              </h2>
              <div class="usa-summary-box__text">
                <ul class="usa-list">
                  <li style="max-width: unset">
                    {{ disclaimer.bullet }}
                  </li>
                  <li style="max-width: unset">
                    {{ disclaimer.bullet1 }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-container usa-footer__return-to-top">
      <a
        id="return-to-top"
        href="#"
        @click.prevent="scrollToTop">
        {{ $t("returnToTop") }}
      </a>
    </div>
  </div>
</template>

<script>
import { tObj } from "~/services/translation"
export default {
  props: {
    testEnv: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      disclaimer: {},
    }
  },
  async fetch() {
    this.disclaimer = tObj.call(this, await this.$content("disclaimer").fetch())
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-summary-box {
  border-color: transparent;
  background-color: transparent;
  color: #1b1b1b;
}
</style>
