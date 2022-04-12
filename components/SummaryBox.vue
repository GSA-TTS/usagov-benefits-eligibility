<template>
  <div
    class="usa-summary-box margin-bottom-2"
    role="region"
    aria-labelledby="summary-box-key-information">
    <div class="usa-summary-box__body">
      <div class="usa-summary-box__text">
        <form class="usa-form">
          <fieldset class="usa-fieldset">
            <template v-for="criteriaGroup in topLevelFilters">
              <div :key="criteriaGroup.criteriaGroupKey">
                <template v-for="criterion in getCriteriaMap(criteriaGroup.criteriaKey)">
                  <legend
                    v-if="criteriaGroup.label"
                    :id="`summary-box-key-information-${uniqueId}`"
                    :key="`heading-${criterion.criteriaKey}`">
                    <h2 class="usa-summary-box__heading">
                      {{ criteriaGroup.label }}
                    </h2>
                  </legend>
                  <CriteriaChild
                    :key="criterion.criteriaKey"
                    :criteria-key="criterion.criteriaKey"
                    :label="criterion.label"
                    :values="criterion.values.split('; ')"
                    :type="criterion.type"
                    :criteria-group-key="criteriaGroup.criteriaGroupKey"
                    :response="criterion.response"
                    class="margin-y-2 tablet:margin-y-3" />
                </template>
              </div>
            </template>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import _ from "lodash"
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
    this.uniqueId = _.uniqueId("summary-box-")
  },
  methods: {
    getCriteriaMap(criteriaKeys) {
      return criteriaKeys.map((criterionKey) => {
        return this.getCriterionByEligibilityKey(criterionKey)
      })
    },
  },
}
</script>
