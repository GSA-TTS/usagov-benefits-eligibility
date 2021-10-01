<template>
  <div>
    <template v-for="criteriaGroup in lifeEventCriteria">
      <div :id="`criteriaGroup-${criteriaGroup.criteriaGroupKey}-${_uid}`"
      :key="criteriaGroup.criteriaGroupKey"
      :class="{ 'margin-bottom-4': true, 'border-bottom': true, 'border-base-lighter': true, 'border-width-2px': true, 'break-inside-avoid': true, 'criteria-group-empty': hasNoResponses(getCriteriaMap(criteriaGroup.criteriaKeys)) }">
        <h2 class="font-heading-lg font-family-sans text-bold margin-top-0">
            {{ criteriaGroup.label }}
        </h2>
        <p class="line-height-sans-4 font-sans-sm">
            {{ criteriaGroup.description }}
        </p>
        <div :id="'criteriaGroup-' + criteriaGroup.criteriaGroupKey" class="">
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
