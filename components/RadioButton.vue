<template>
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-legend">{{ label }}</legend>
    <div
      v-for="value in values"
      :key="value"
      class="usa-radio tablet:margin-left-05"
    >
      <input
        :id="`${uniqueId}-${criteriaKey}-${value}`"
        class="usa-radio__input"
        type="radio"
        :name="`${uniqueId}-${criteriaKey}-${value}`"
        :value="value"
        :checked="response === value"
        @change="updateEligibilitySelected"
      />
      <label
        class="usa-radio__label tablet:margin-top-1"
        :for="`${uniqueId}-${criteriaKey}-${value}`"
        >{{ value }}</label
      >
    </div>
  </fieldset>
</template>

<script>
import _ from "lodash"
export default {
  name: "RadioButton",
  props: {
    criteriaKey: {
      type: String,
      default: "No key provided"
    },
    label: {
      type: String,
      default: "No label provided"
    },
    values: {
      type: Array,
      default: () => []
    },
    response: {
      type: [String, Object],
      default: "No response provided"
    },
    // TODO: may be helpful?
    location: {
      type: String,
      default: "No location provided"
    }
  },
  data() {
    return {
      uniqueId: _.uniqueId("radio-")
    }
  },
  mounted() {
    this.uniqueId = _.uniqueId("radio-")
  },
  methods: {
    updateEligibilitySelected(e) {
      const localCriterion = {
        criteriaKey: this.criteriaKey,
        response: e.target.value
      }
      this.$store.dispatch("criteria/updateResponse", localCriterion)
    }
  }
}
</script>

<style scoped>
.usa-radio {
  background: transparent;
}

.usa-fieldset,
.usa-legend,
.usa-legend {
  font-weight: inherit;
}
</style>
