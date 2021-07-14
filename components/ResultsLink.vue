<template>
  <div>
    <span>
      <a class="usa-link" :href="url">{{ url }}</a>
      <button class="usa-button margin-top-2 margin-bottom-2" :disabled="!enabled" @click="copy()">
        <svg class="usa-icon" aria-hidden="true" focusable="false"
          role="img">
            <use xlink:href="~/assets/img/sprite.svg#content_copy" />
        </svg>
        Save Results
      </button>
    </span>
    <section v-show="alert" class="usa-site-alert usa-site-alert--info margin-top-2 margin-bottom-2" aria-label="Site alert,">
      <div class="usa-alert">
        <div class="usa-alert__body">
          <h3 class="usa-alert__heading">Results Saved</h3>
          <p class="usa-alert__text">
            The results locations has been saved to your clipboard.
          </p>
        </div>
    </div>
    </section>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      alert: false,
    };
  },
  computed: {
    /* eslint vue/return-in-computed-property: "off" */
    url () {
      if (process.client) {
        const params = new URLSearchParams();
        const responses = this.$store.getters['criteria/getResponses'];

        if (!this.enabled) {
          return;
        }
        for (const criteriaKey in responses) {
          params.append(criteriaKey, responses[criteriaKey]);
        }
        const baseUrl = window.location.href.replace(window.location.search, '');
        return `${baseUrl}?${params.toString()}`;
      }
    },
    enabled () {
      if (process.client) {
        const responses = this.$store.getters['criteria/getResponses'];
        if (Object.keys(responses).length > 0) {
          return true;
        }
      }
      return false;
    },
  },
  beforeMount () {
    const params = new URLSearchParams(window.location.search);
    for (const key of params.keys()) {
      const value = params.get(key);
      const valueMap = {
        [value]: value,
        // eslint-disable-next-line quote-props
        "true": true,
        // eslint-disable-next-line quote-props
        "false": false,
      };
      this.$store.commit("criteria/preloadedResponse", {
        criteriaKey: key,
        response: valueMap[value],
      });
    }
  },
  methods: {
    async copy () {
      await navigator.clipboard.writeText(this.url);
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 10 * 1000);
    },
  },
};
</script>
