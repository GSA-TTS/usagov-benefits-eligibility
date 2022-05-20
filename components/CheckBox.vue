<template>
  <div
    :class="disabledStyle"
    class="my-fieldset">
    <input
      :id="`${uniqueId}-${criteriaKey}`"
      class="usa-checkbox__input"
      type="checkbox"
      :name="`${uniqueId}-${criteriaKey}`"
      :value="`${uniqueId}-${criteriaKey}`"
      :checked="response === true"
      :disabled="isDisabled"
      @change="updateEligibilityChecked($event, criteriaKey)" />
    <label
      class="usa-checkbox__label"
      :class="selectedStyle"
      :for="`${uniqueId}-${criteriaKey}`">
      {{ label }}
    </label>
  </div>
</template>

<script>
import _ from "lodash"

const benefitCard = "benefit-card"

export default {
  name: "CheckBox",
  props: {
    criteriaKey: {
      type: String,
      default: "no criteria key provided",
    },
    label: {
      type: String,
      default: "no label provided",
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
      uniqueId: _.uniqueId("checkbox-"),
    }
  },

  computed: {
    selectedStyle() {
      if (this.location === benefitCard && this.response === true) {
        return "text-success text-bold"
      }
      return null
    },
    disabledStyle() {
      if (this.isDisabled) {
        return "border-2px border-dotted border-gray-30 padding-1"
      }
      return null
    },
  },
  mounted() {
    this.uniqueId = _.uniqueId("checkbox-")
  },
  methods: {
    updateEligibilityChecked(event, key) {
      const localCriterion = {
        criteriaKey: key,
        response: event.target.checked,
      }
      this.$store.dispatch("criteria/updateResponse", localCriterion)
    },
  },
}
</script>

<style
  lang="scss"
  scoped>
.my-fieldset {
  font-size: 1.06rem;
  line-height: 1.3;
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
  border: none;
  margin: 0;
  padding: 0;
  padding-top: 6px;
}
</style>
