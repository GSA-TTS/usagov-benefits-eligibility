<template>
  <div
    class="usa-summary-box margin-bottom-2"
    role="region"
    aria-labelledby="summary-box-key-information">
    <div class="usa-summary-box__body">
      <div class="usa-summary-box__text">
        <form class="usa-form">
          <fieldset class="usa-fieldset">
            <template v-for="filter in topLevelFilters">
              <h3
                id="summary-box-key-information"
                :key="`heading-${filter.criteriaKey}`"
                class="usa-summary-box__heading">
                {{ filter.label }}
              </h3>
              <template v-for="criterion in getCriteriaMap(filter.criteriaKey)">
                <CriteriaChild
                  :key="criterion.criteriaKey"
                  :criteria-key="criterion.criteriaKey"
                  :label="criterion.label"
                  :type="criterion.type"
                  :values="criterion.values.split('; ')"
                  :criteria-group-key="criterion.criterionKey"
                  :response="criterion.response"
                  class="margin-y-2 tablet:margin-y-3" />
              </template>
            </template>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import CriteriaChild from "./CriteriaChild.vue"

export default {
  name: "SummaryBox",

  components: {
    CriteriaChild,
  },
  props: {
    topLevelFilters: {
      type: Array,
      default: /* istanbul ignore next */ () => [],
    },
  },

  computed: {
    ...mapGetters({
      getCriterionByEligibilityKey: "criteria/getCriterionByEligibilityKey",
    }),
  },
  methods: {
    getCriteriaMap(criteriaKey) {
      return [this.getCriterionByEligibilityKey(criteriaKey)]
    },
  },
}
</script>
