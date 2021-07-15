<template>
  <span>
    <button class="usa-button margin-bottom-2" :disabled="!enabled" @click="copy()">
      <svg class="usa-icon" aria-hidden="true" focusable="false"
        role="img">
          <use xlink:href="~/assets/img/sprite.svg#content_copy" />
      </svg>
      Copy Link
    </button>
  </span>
</template>
<script>
export default {
  computed: {
    /* eslint vue/return-in-computed-property: "off" */
    url () {
      if (process.client) {
        const params = new URLSearchParams();
        const responses = this.$store.getters['criteria/getHashResponses'];

        if (!this.enabled) {
          return;
        }
        for (const criteriaKey in responses) {
          if (responses[criteriaKey]) {
            const valueMap = {
              [responses[criteriaKey]]: responses[criteriaKey],
              true: 1,
              false: 0,
            };
            params.append(criteriaKey, valueMap[responses[criteriaKey]]);
          }
        }
        const baseUrl = window.location.href.replace(window.location.search, '');
        return `${baseUrl}?${params.toString()}`;
      }
    },
    enabled () {
      if (process.client) {
        const responses = this.$store.getters['criteria/getHashResponses'];
        if (Object.keys(responses).length > 0) {
          return true;
        }
      }
      return false;
    },
  },
  watch: {
    url (value) {
      const url = value || window.location.href.replace(window.location.search, '');
      history.replaceState(null, document.title, url);
    },
  },
  beforeMount () {
    const params = new URLSearchParams(window.location.search);
    /* eslint prefer-const: "OFF" */
    for (let [key, value] of params) {
      value = value || true;
      const valueMap = {
        [value]: value,
        // eslint-disable-next-line quote-props
        "true": true,
        // eslint-disable-next-line quote-props
        "false": false,
        1: true,
        0: false,
      };
      this.$store.commit("criteria/preloadedResponse", {
        criteriaKeyHash: key.toLowerCase(),
        response: valueMap[value],
      });
    }
  },
  methods: {
    async copy () {
      await navigator.clipboard.writeText(this.url);
      this.$emit('copied');
    },
  },
};
</script>
