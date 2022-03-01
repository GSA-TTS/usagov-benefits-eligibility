<template>
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-legend" :class="selectedStyle">
      {{ label }}
    </legend>
    <template v-for="(value, index) in values">
      <div
        v-if="location === 'benefit-card' && index === 0"
        :key="`${value}-${naUniqueId}`"
        class="usa-radio tablet:margin-left-05"
      >
        <input
          :id="`${uniqueId}-${criteriaKey}-${value}-${naUniqueId}`"
          class="usa-radio__input"
          type="radio"
          :name="`${uniqueId}-${criteriaKey}-${value}-${naUniqueId}`"
          :value="'not applicable'"
          :checked="response === 'not applicable'"
          @change="updateEligibilitySelected"
        />
        <label
          :for="`${uniqueId}-${criteriaKey}-${value}-${naUniqueId}`"
          class="usa-radio__label tablet:margin-top-1"
          >not applicable</label
        >
      </div>
      <div :key="value" class="usa-radio tablet:margin-left-05">
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
    </template>
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
      type: [String, Object, Boolean],
      default: "No response provided"
    },
    location: {
      default: "benefit-card",
      validator: (value) => {
        return ["left-rail", "benefit-card"].includes(value)
      }
    }
  },
  data() {
    return {
      uniqueId: _.uniqueId("radio-"),
      naUniqueId: _.uniqueId("na-")
    }
  },
  computed: {
    selectedStyle() {
      if (
        this.location === "benefit-card" &&
        this.response === "not applicable"
      ) {
        return "text-base text-normal font-weight-normal"
      }
      return null
    }
  },
  mounted() {
    this.uniqueId = _.uniqueId("radio-")
    this.naUniqueId = _.uniqueId("na-")
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

.usa-legend {
  font-weight: inherit;
}

.font-weight-normal {
  font-weight: 400;
}
</style>
