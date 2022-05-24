<template>
  <div
    class="usa-summary-box margin-bottom-2 text-white print:text-black print:bg-white"
    role="region"
    aria-labelledby="summary-box-key-information">
    <div class="usa-summary-box__body">
      <div class="usa-summary-box__text">
        <div class="usa-form">
          <fieldset class="usa-fieldset">
            <template v-for="filter in topLevelFilters">
              <legend
                v-if="filter.label"
                :key="`legend-${filter.criteriaKey}-${uniqueId}`">
                <h2
                  id="summary-box-key-information"
                  class="usa-summary-box__heading print:text-black">
                  {{ filter.label }}
                </h2>
              </legend>
              <div
                :key="`heading-${filter.criteriaKey}`"
                :criterion="(criterion = getCriterionByEligibilityKey(filter.criteriaKey))">
                <CriteriaChild
                  :key="`${criterion.criteriaKey}-${uniqueId}`"
                  :criteria-key="criterion.criteriaKey"
                  :label="criterion.label"
                  :type="criterion.type"
                  :values="criterion.values.split('; ')"
                  :criteria-group-key="criterion.criterionKey"
                  :response="criterion.response"
                  class="margin-y-2 tablet:margin-y-3 print:text-black" />
              </div>
            </template>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import _ from "lodash"

export default {
  name: "SummaryBox",
  props: {
    topLevelFilters: {
      type: Array,
      default: /* istanbul ignore next */ () => [],
    },
  },
  data() {
    return {
      uniqueId: _.uniqueId("summary-box-"),
    }
  },
  computed: {
    ...mapGetters({
      getCriterionByEligibilityKey: "criteria/getCriterionByEligibilityKey",
    }),
  },
  mounted() {
    this.uniqueId = _.uniqueId("id-")
  },
}
</script>

<style lang="scss">
.usa-summary-box {
  color: white;
  background-color: #11385b;
  border: none;
}
.usa-summary-box .usa-checkbox__label,
.usa-summary-box .usa-radio__label {
  color: white;
}
@media print {
  #summary-box-key-information {
    margin-top: -1.5rem;
    color: black;
  }
}
</style>
