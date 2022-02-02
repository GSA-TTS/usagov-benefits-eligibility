<template>
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-legend">{{ label }}</legend>
    {{ response }}
    <div v-for="value in values" :key="value" class="usa-radio">
      <input
        :id="`${criteriaKey}-${value}`"
        class="usa-radio__input"
        type="radio"
        :name="criteriaKey"
        :value="value"
        :checked="response === value"
        @change="updateEligibilitySelected"
      />
      <label class="usa-radio__label" :for="`${criteriaKey}-${value}`">{{
        value
      }}</label>
    </div>
  </fieldset>
</template>

<script>
// import _ from "lodash";
export default {
  name: "RadioButton",
  props: {
    criteriaKey: {
      type: String,
      default: "No key provided",
      required: true
    },
    label: {
      type: String,
      default: "No label provided",
      required: true
    },
    values: {
      type: Array,
      default: () => [],
      required: true
    },
    response: {
      type: [String, Object],
      default: "No response provided"
    }
  },
  // data() {
  //   return {
  //     uniqueId: _.uniqueId("radio-")
  //   };
  // },
  // beforeCreate() {
  //   this.uniqueId = _.uniqueId("radio-");
  // },
  methods: {
    updateEligibilitySelected(e) {
      const localCriterion = {
        criteriaKey: this.criteriaKey,
        response: e.target.value
      };
      this.$store.commit("criteria/updateResponse", localCriterion);
    }
  }
};
</script>

<style scoped>
.usa-radio {
  background: transparent;
}
</style>
