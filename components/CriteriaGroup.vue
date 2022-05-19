<template>
  <section>
    <SummaryBox
      v-if="topLevelFilters.length > 0"
      :top-level-filters="topLevelFilters" />
    <div class="padding-2">
      <template v-for="criteriaGroup in lifeEventCriteria">
        <fieldset
          :key="criteriaGroup.criteriaGroupKey"
          class="usa-fieldset margin-bottom-4 border-bottom-2px border-gray-30 break-inside-avoid">
          <legend class="usa-legend">
            <h2
              v-if="criteriaGroup.label"
              :class="{
                'criteria-group-empty': hasNoResponses(getCriteriaMap(criteriaGroup.criteriaKeys)),
              }"
              class="font-heading-lg font-family-serif text-bold margin-top-0 margin-bottom-0 line-height-sans-2 usagov-heading--blue">
              {{ criteriaGroup.label }}
            </h2>
          </legend>
          <p
            v-if="criteriaGroup.description"
            class="line-height-sans-4 font-sans-sm">
            {{ criteriaGroup.description }}
          </p>
          <section class="margin-y-3 tablet:padding-left-1">
            <template v-for="criterion in getCriteriaMap(criteriaGroup.criteriaKeys)">
              <CriteriaChild
                :key="criterion.criteriaKey"
                :criteria="criterion"
                :criteria-key="criterion.criteriaKey"
                :label="criterion.label"
                :values="criterion.values.split('; ')"
                :type="criterion.type"
                :criteria-group-key="criteriaGroup.criteriaGroupKey"
                :response="criterion.response"
                :top-level-filters="topLevelFilters"
                class="margin-y-2 tablet:margin-y-3" />
            </template>
          </section>
          <p
            class="display-none text-bold"
            :class="{
              'criteria-group-empty': hasNoResponses(getCriteriaMap(criteriaGroup.criteriaKeys)),
            }">
            {{ $t("criteria_group.non_selected") }}
          </p>
        </fieldset>
      </template>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex"
import SummaryBox from "./SummaryBox.vue"

export default {
  name: "CriteriaGroup",
  components: { SummaryBox },
  props: {
    lifeEventCriteria: {
      type: Array,
      default: /* istanbul ignore next */ () => [],
    },
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
    getCriteriaMap(criteriaKeys) {
      return criteriaKeys.map((criterionKey) => {
        return this.getCriterionByEligibilityKey(criterionKey)
      })
    },
    hasNoResponses(criteria) {
      return !criteria.map((c) => !!c.response).some((response) => response)
    },
  },
}
</script>
<style
  type="scss"
  scoped>
@media print {
  .criteria-group-empty {
    display: block;
  }
}
</style>
