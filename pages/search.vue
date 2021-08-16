<template>
    <section class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col">
          <h1 class="font-heading-3xl margin-top-7">
            Search results for "{{ query }}"
          </h1>
        </div>
      </div>
      <div v-if="results.web.results.length > 0" class="grid-row grid-gap">
        <div class="tablet:grid-col">
          <p>Showing {{ results.web.results.length }} of {{ results.web.total }}</p>
        </div>
      </div>

      <div class="grid-row">
        <div class="tablet:grid-col-7 desktop:grid-col-8">
          <div
            v-if="$fetchState.pending"
            class="usa-alert usa-alert--info usa-alert--no-icon usa-alert--slim margin-bottom-3">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Fetching search results...</p>
            </div>
          </div>
          <div
            v-if="$fetchState.error"
            class="usa-alert usa-alert--error usa-alert--slim margin-bottom-3">
            <div class="usa-alert__body">
              <p class="usa-alert__text">Error while fetching search results.</p>
            </div>
          </div>
          <div
            v-if="results.web.results.length === 0 && !$fetchState.pending"
            class="usa-alert usa-alert--error usa-alert--slim margin-bottom-3">
            <div class="usa-alert__body">
              <p class="usa-alert__text">No search results found.</p>
            </div>
          </div>
        </div>
      </div>

      <div v-for="(result, index) in results.web.results" :key="index" class="grid-row grid-gap">
        <div class="grid-col margin-y-3">
          <a href="result.url"> {{ result.title }} </a>
          <p>{{ result.snippet }}</p>
        </div>
      </div>
    </section>
</template>

<script>
 export default {
   data () {
     /* istanbul ignore next */
     return {
       query: this.$route?.query?.q || '',
       results: {
         federal_register_documents: [],
         graphic_best_bets: [],
         health_topics: [],
         job_openings: [],
         recent_tweets: [],
         related_search_terms: [],
         text_best_bets: [],
         query: '',
         web: {
           next_offset: null,
           spelling_correction: null,
           total: 0,
           results: [],
         },
       },
     };
   },
   async fetch () {
     if (process.client) {
       this.query = this.$route?.query?.q || '';
       this.results = (await this.$axios({
         url: process.env.searchGovUrl,
         params: {
           affiliate: process.env.searchGovAffiliate,
           access_key: process.env.searchGovAccessKey,
           query: this.query,
         },
       }))?.data || this.results;
     }
   },
   fetchOnServer: false,
 };
</script>
