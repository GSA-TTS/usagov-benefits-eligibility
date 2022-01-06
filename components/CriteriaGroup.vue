<template>
  <div>
    <template v-for="criteriaGroup in lifeEventCriteria">
      <div :id="`criteriaGroup-${criteriaGroup.criteriaGroupKey}-${_uid}`"
      :key="criteriaGroup.criteriaGroupKey"
      :class="{ 'margin-bottom-4': true, 'border-bottom': true, 'border-base-lighter': true, 'border-width-2px': true, 'break-inside-avoid': true }">
        <h2 :class="{ 'font-heading-lg': true, 'font-family-sans': true, 'text-bold': true, 'margin-top-0': true, 'criteria-group-empty': hasNoResponses(getCriteriaMap(criteriaGroup.criteriaKeys)) }">
            {{ criteriaGroup.label }}
        </h2>
        <p class="line-height-sans-4 font-sans-sm">
            {{ criteriaGroup.description }}
        </p>
        <div :id="'criteriaGroup-' + criteriaGroup.criteriaGroupKey" class="">
          <!-- TODO: FSP@10x: This is the criteria checkboxes on left -->
          <template v-for="(criterion) in getCriteriaMap(criteriaGroup.criteriaKeys)">
            <CriteriaChild
              :key="criterion.criteriaKey"
              :criteria-key="criterion.criteriaKey"
              :label="criterion.label"
              :values="criterion.values.split('; ')"
              :type="criterion.type"
              :criteria-group-key="criteriaGroup.criteriaGroupKey"
              :response="criterion.response" />
          </template>
        </div>
        <p class="display-none text-bold" :class="{ 'criteria-group-empty': hasNoResponses(getCriteriaMap(criteriaGroup.criteriaKeys)) }">No eligibility criteria selected</p>
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    lifeEventCriteria: {
      type: Array,
      default: /* istanbul ignore next */ () => []
    }
  },
  computed: {
    ...mapGetters({
      getCriterionByEligibilityKey: 'criteria/getCriterionByEligibilityKey',
    })
  },
  methods: {
    getCriteriaMap (criteriaKeys) {
      return criteriaKeys.map((criterionKey) => {
        return this.getCriterionByEligibilityKey(criterionKey);
      });
    },
    hasNoResponses (criteria) {
      return !criteria.map(c => !!c.response).some(response => response);
    },
  },
};
</script>
<style type="scss" scoped>
@media print {
  .criteria-group-empty {
    display: block;
  }
}
</style>
