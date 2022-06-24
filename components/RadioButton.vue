<template>
  <fieldset
    class="usa-fieldset"
    :class="disabledStyle">
    <legend
      class="usa-legend usa-legend text-bold tablet:padding-top-1"
      :class="disabledLabel">
      {{ label }}
    </legend>

    <template v-for="value in values">
      <div
        :key="value"
        class="usa-radio tablet:padding-left-1">
        <input
          :id="`${uniqueId}-${criteriaKey}-${value}`"
          class="usa-radio__input"
          type="radio"
          aria-controls="matching-count"
          :name="`${uniqueId}-${criteriaKey}`"
          :value="value"
          :checked="response === value"
          :disabled="isDisabled"
          @change="updateEligibilitySelected" />
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
      default: "No key provided",
    },
    label: {
      type: String,
      default: "No label provided",
    },
    values: {
      type: Array,
      default: () => [],
    },
    response: {
      type: [String, Object, Boolean],
      default: "No response provided",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      uniqueId: _.uniqueId("radio-"),
      naUniqueId: _.uniqueId("na-"),
    }
  },
  computed: {
    disabledStyle() {
      if (this.isDisabled) {
        return "border-2px border-dotted border-gray-30 padding-1"
      }
      return null
    },
    disabledLabel() {
      if (this.isDisabled) {
        return "text-gray-30"
      }
      return null
    },
  },
  mounted() {
    this.uniqueId = _.uniqueId("radio-")
    this.naUniqueId = _.uniqueId("na-")
  },
  methods: {
    updateEligibilitySelected(e) {
      const localCriterion = {
        criteriaKey: this.criteriaKey,
        response: e.target.value,
      }
      this.$store.dispatch("criteria/updateResponse", localCriterion)
    },
    lastItem(index, list) {
      return index === list.length - 1
    },
  },
}
</script>

<style scoped>
.usa-radio {
  background: transparent;
}

.font-weight-normal {
  font-weight: 400;
}
</style>
