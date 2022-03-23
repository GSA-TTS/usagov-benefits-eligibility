<template>
  <div
    class="usa-summary-box margin-bottom-2"
    role="region"
    aria-labelledby="summary-box-key-information">
    <div class="usa-summary-box__body">
      <h3
        id="summary-box-key-information"
        class="usa-summary-box__heading">
        {{ label }}
      </h3>
      <div class="usa-summary-box__text">
        <form class="usa-form">
          <fieldset class="usa-fieldset">
            <template v-for="criteriaGroup in lifeEvents">
              <div
                :id="'criteriaGroup-' + criteriaGroup.criteriaGroupKey"
                :key="criteriaGroup.criteriaGroupKey">
                <template v-for="criterion in getCriteriaMap(criteriaGroup.criteriaKeys)">
                  <div :key="criterion">
                    <CriteriaChild
                      :key="criterion.criteriaKey"
                      :criteria-key="criterion.criteriaKey"
                      :label="criterion.label"
                      :values="criterion.values.split('; ')"
                      :type="criterion.type"
                      :criteria-group-key="criteriaGroup.criteriaGroupKey"
                      :response="criterion.response"
                      class="margin-y-2 tablet:margin-y-3" />
                  </div>
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
import CriteriaChild from "./CriteriaChild.vue"

export default {
  name: "SummaryBox",
  components: {
    CriteriaChild,
  },
  props: {
    lifeEvents: {
      type: Array,
      default: /* istanbul ignore next */ () => [],
    },
  },
  data() {
    return {
      label: this.lifeEvents[0].label,
    }
  },
  computed: {
    ...mapGetters({
      getCriterionByEligibilityKey: "criteria/getCriterionByEligibilityKey",
    }),
  },
  methods: {
    getCriteriaMap(criteriaKeys) {
      return criteriaKeys.map((criterionKey) => {
        return this.getCriterionByEligibilityKey(criterionKey)
      })
    },
    // hasNoResponses(criteria) {
    //   return !criteria.map((c) => !!c.response).some((response) => response)
    // },
  },
  // data() {
  //   return {
  //     lifeEvents: this.lifeEventCriteria,
  //   }
  // },
}
</script>

<style
  lang="scss"
  scoped></style>
