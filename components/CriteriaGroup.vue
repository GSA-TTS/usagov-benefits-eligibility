<template>
  <div>
    <template v-for="criteriaGroup in lifeEventCriteria">
      <div :id="'criteriaGroup-' + criteriaGroup.criteriaGroupKey" :key="criteriaGroup.criteriaGroupKey" class="margin-bottom-4">
        <h2 class="font-heading-lg font-family-sans text-normal margin-top-0">
            {{ criteriaGroup.label }}
        </h2>
        <p class="line-height-sans-4">
            {{ criteriaGroup.description }}
        </p>
        <div :id="'criteriaGroup-' + criteriaGroup.criteriaGroupKey" class="">
          <template v-for="(criterion) in criteriaGroup.criteriaKeys">
            <CriteriaChild
              :key="criterion"
              :criterion-key="criterion"
              :criterion-label="getCriterionByEligibilityKey(criterion).label"
              :criterion-values="getCriterionByEligibilityKey(criterion).values.split('; ')"
              :criterion-type="getCriterionByEligibilityKey(criterion).type"
              :criteria-group-key="criteriaGroup.criteriaGroupKey"/>
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
      default: () => []
    }
  },
  computed: {
    allEligibilityCriteria () {
      return this.$store.state.criteria.eligibilityCriteria;
    },
    ...mapGetters({
      getCriterionByEligibilityKey: 'criteria/getCriterionByEligibilityKey',
    })
  },
  methods: { }
};
</script>
