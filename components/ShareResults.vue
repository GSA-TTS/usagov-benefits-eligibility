<template>
  <div class="margin-bottom-4 margin-top-neg-3 print:display-none">
    <div
      class="tablet:padding-left-3 display-block margin-bottom-5 border-bottom border-gray-30 border-width-2px break-inside-avoid padding-bottom-4">
      <button
        class="usa-button usa-button--outline width-full tablet:width-card-lg bg-white clear-selections"
        aria-controls="button-msg"
        @click="clearCriteria">
        <svg
          class="usa-icon text-middle"
          aria-hidden="true"
          focusable="false"
          role="img">
          <use xlink:href="~/assets/img/sprite.svg#highlight_off" />
        </svg>
        <span class="text-middle"> {{ $t("lifeEvent.buttonLabel4") }}</span>
      </button>
      <p
        id="button-msg"
        class="sr-only"
        aria-live="assertive">
        {{ filterMessage }}
      </p>
    </div>
    <div class="tablet:padding-left-3">
      <h2 class="font-sans-md">{{ $t("shareResults.heading") }}</h2>
      <p class="usa-prose">
        {{ $t("shareResults.description") }}
      </p>
      <div class="margin-bottom-1">
        <span :class="{ 'usa-tooltip': alert, 'display-inline-block': true, 'width-full': true }">
          <input
            class="usa-input"
            type="text"
            readonly
            aria-label="URL of website with responses saved"
            :value="url"
            data-position="top"
            @click="copy"
            @blur="blur" />
          <span
            :class="{ 'usa-tooltip__body': true, 'is-set': alert, 'usa-tooltip__body--top': true, 'is-visible': alert }"
            role="tooltip"
            :aria-hidden="!alert"
            style="left: 15%; top: -4rem">
            {{ $t("shareResults.linkCopied") }}
          </span>
        </span>
      </div>
      <div class="margin-bottom-1">
        <button
          class="usa-button usa-button--outline width-full tablet:width-card-lg bg-white copy-selections"
          @click="copy">
          <svg
            class="usa-icon text-middle"
            aria-hidden="true"
            focusable="false"
            role="img">
            <use xlink:href="~/assets/img/sprite.svg#share" />
          </svg>
          <span class="text-middle">{{ $t("shareResults.copy") }}</span>
        </button>
      </div>
      <div class="margin-bottom-1">
        <print
          :show-selections="true"
          @print="$emit('print')" />
      </div>
      <div class="margin-bottom-1">
        <button
          class="usa-button usa-button--outline width-full tablet:width-card-lg bg-white"
          @click="email">
          <svg
            class="usa-icon text-middle"
            aria-hidden="true"
            focusable="false"
            role="img">
            <use xlink:href="~/assets/img/sprite.svg#mail" />
          </svg>
          <span class="text-middle">{{ $t("shareResults.email") }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alert: false,
      filterMessage: "",
    }
  },
  computed: {
    /* eslint vue/return-in-computed-property: "off" */
    url() {
      /* istanbul ignore next */
      if (process.client || process.env.NODE_ENV === "test") {
        const params = new URLSearchParams()
        const responses = this.$store.getters["criteria/getHashResponses"]
        for (const criteriaKey in responses) {
          if (responses[criteriaKey]) {
            const valueMap = {
              [responses[criteriaKey]]: responses[criteriaKey],
              true: 1,
              false: 0,
            }
            params.append(criteriaKey, valueMap[responses[criteriaKey]])
          }
        }
        let baseUrl = window.location.href.replace(window.location.search, "")
        if (baseUrl.endsWith("?")) {
          baseUrl = baseUrl.substring(0, baseUrl.length - 1)
        }
        const diredBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`
        return `${diredBaseUrl}?${params.toString()}`
      }
    },
  },
  watch: {
    url(value) {
      const url = value || /* istanbul ignore next */ window.location.href.replace(window.location.search, "")
      history.replaceState(null, document.title, url)
    },
  },

  mounted() {
    if (window.location.href !== this.url) {
      history.replaceState(null, document.title, this.url)
    }
  },

  beforeMount() {
    const params = new URLSearchParams(this.search || window.location.search)
    /* eslint prefer-const: "OFF" */
    let vals = []
    for (let [key, value] of params) {
      let valueB = value || true
      const valueMap = {
        [value]: valueB,
        // eslint-disable-next-line quote-props
        true: true,
        // eslint-disable-next-line quote-props
        false: false,
        1: true,
        0: false,
      }
      vals.push({
        criteriaKeyHash: key.toLowerCase(),
        response: valueMap[value],
      })
    }

    this.$store.commit("criteria/preloadedResponses", {
      valueArray: vals,
    })
  },
  methods: {
    blur() {
      this.alert = false
    },
    async copy() {
      await navigator.clipboard.writeText(this.url)
      this.alert = true
      this.filterMessage = this.$t("shareResults.linkCopied")
      /* istanbul ignore next */
      setTimeout(() => {
        this.alert = false
      }, 30 * 1000)
    },

    clearCriteria() {
      this.filterMessage = this.$t("screenReader.clear")
      this.$store.dispatch("criteria/clear")
    },

    /* istanbul ignore next */
    email() {
      window.location.href = `mailto:?subject=Results%20from%20benefits%20eligibility%20awareness%20resource&body=Here%20are%20the%20potential%20federal%20benefits%20from%20your%20search%20results%20${encodeURIComponent(
        this.url
      )}`
    },
  },
}
</script>
