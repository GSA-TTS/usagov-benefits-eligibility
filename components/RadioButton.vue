<template>
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-legend">{{ label }}</legend>
    <div v-for="value in values" :key="value" class="usa-radio margin-left-05">
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
        class="usa-radio__label"
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
  beforeCreate() {
    this.uniqueId = _.uniqueId("radio-")
  },
  methods: {
    updateEligibilitySelected(e) {
      const localCriterion = {
        criteriaKey: this.criteriaKey,
        response: e.target.value
      }
      this.$store.commit("criteria/updateResponse", localCriterion)
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
/*
* @FSP: tighter spacing on radio buttons only on mobile
* https://designsystem.digital.gov/utilities/layout-grid/#sass-mixins
 */
@media (min-width: 640px) {
  .usa-checkbox__label,
  .usa-radio__label {
    margin-top: 0.55rem;
  }
}
</style>
