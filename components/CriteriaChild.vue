<template>
  <div class="eligibility-criterion">
    <div v-if="criterionType === 'boolean'" :key="criterionKey" class="usa-checkbox">
      <input :id="'criteria-' + criteriaGroupKey + '-' + criterionKey"
        class="usa-checkbox__input usa-checkbox__input" type="checkbox"
        :name="criteriaGroupKey + '-' + criterionKey" :value="criterionKey" :data-section="criteriaGroupKey"
        @change="updateEligibilityChecked" />
      <label class="usa-checkbox__label" :for="'criteria-' + criteriaGroupKey + '-' + criterionKey">{{ criterionLabel }}
      </label>
    </div>

    <div v-if="criterionType === 'select'" :key="criterionKey" class="">
      <label class="usa-label text-bold margin-top-0" :for="'criteria-' + criteriaGroupKey + '-' + criterionKey">{{ criterionLabel }}</label>
      <select :id="'criteria-' + criteriaGroupKey + '-' + criterionKey" class="usa-select" :name="'criteria-' + criteriaGroupKey + '-' + criterionKey"
@change="updateEligibilitySelected">
        <option value>- Select -</option>
        <option v-for="option in criterionValues" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
</div>
</template>
<script>

export default {
  props: {
    criterionKey: {
      type: String,
      default: "No key provided"
    },
    criterionLabel: {
      type: String,
      default: "No label provided"
    },
    criterionType: {
      type: String,
      default: "No type provided"
    },
    criterionValues: {
      type: Array,
      default: () => []
    },
    criteriaGroupKey: {
      type: String,
      default: "criteriaGroup"
    },
  },
  computed: { },
  methods: {
    updateEligibilityChecked (e) {
      const localCriterion = {
        criteriaKey: this.criterionKey,
        response: e.target.checked
      };
      this.$store.commit('criteria/updateResponse', localCriterion);
    },
    updateEligibilitySelected (e) {
      const localCriterion = {
        criteriaKey: this.criterionKey,
        response: e.target.value
      };
      this.$store.commit('criteria/updateResponse', localCriterion);
    }
  }
};
</script>
<style type="scss" scoped>

.eligibility-criteria__child {
  border-left: 2px solid #dee1e2;
  margin-left: .25rem;
}
.usa-checkbox__label, .usa-radio__label {
  margin: 1rem 0 1.25rem;
  line-height: 1.1;
  padding-left: 2.5rem;
  text-indent: -2.5rem;
}
.usa-checkbox__label::before, .usa-radio__label::before {
  margin-right:1.25em;
  vertical-align: middle;
}
</style>
