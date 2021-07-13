<template>
  <div class="eligibility-criterion">
    <div v-if="type === 'boolean'" :key="criteriaKey" class="usa-checkbox">
      <input :id="'criteria-' + criteriaGroupKey + '-' + criteriaKey"
        class="usa-checkbox__input usa-checkbox__input" type="checkbox"
        :name="criteriaGroupKey + '-' + criteriaKey" :value="criteriaKey" :data-section="criteriaGroupKey"
        @change="updateEligibilityChecked" />
      <label class="usa-checkbox__label" :for="'criteria-' + criteriaGroupKey + '-' + criteriaKey">{{ label }}
      </label>
    </div>

    <div v-if="type === 'select'" :key="criteriaKey" class="">
      <label class="usa-label text-bold margin-top-0" :for="'criteria-' + criteriaGroupKey + '-' + criteriaKey">{{ label }}</label>
      <select :id="'criteria-' + criteriaGroupKey + '-' + criteriaKey" class="usa-select" :name="'criteria-' + criteriaGroupKey + '-' + criteriaKey"
@change="updateEligibilitySelected">
        <option value>- Select -</option>
        <option v-for="option in values" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
</div>
</template>
<script>

export default {
  props: {
    criteriaKey: {
      type: String,
      default: "No key provided"
    },
    label: {
      type: String,
      default: "No label provided"
    },
    type: {
      type: String,
      default: "No type provided"
    },
    values: {
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
        criteriaKey: this.criteriaKey,
        response: e.target.checked
      };
      this.$store.commit('criteria/updateResponse', localCriterion);
    },
    updateEligibilitySelected (e) {
      const localCriterion = {
        criteriaKey: this.criteriaKey,
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
