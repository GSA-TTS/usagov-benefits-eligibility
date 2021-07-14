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
          <template v-for="(criterion) in getCriteriaMap(criteriaGroup.criteriaKeys)">
            <CriteriaChild
              :key="criterion.criteriaKey"
              :criterion-key="criterion.criteriaKey"
              :criterion-label="criterion.label"
              :criterion-values="criterion.values.split('; ')"
              :criterion-type="criterion.type"
              :criteria-group-key="criteriaGroup.criteriaGroupKey"
              :criteria-response="criterion.response" />
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
  methods: {
    getCriteriaMap (criteriaKeys) {
      return criteriaKeys.map((criterion) => {
        return this.getCriterionByEligibilityKey(criterion);
      });
    },
  },
};
</script>
