<template>
  <fieldset class="usa-fieldset">
    <input
      :id="`${uniqueId}-${criteriaKey}`"
      class="usa-checkbox__input"
      type="checkbox"
      :name="`${uniqueId}-${criteriaKey}`"
      :value="`${uniqueId}-${criteriaKey}`"
      :checked="response === true"
      @change="updateEligibilityChecked($event, criteriaKey)"
    />
    <label class="usa-checkbox__label" :for="`${uniqueId}-${criteriaKey}`">
      {{ label }}
    </label>
  </fieldset>
</template>

<script>
import _ from "lodash"

export default {
  name: "CheckBox",
  props: {
    criteriaKey: {
      type: String,
      default: "no criteria key provided"
    },
    label: {
      type: String,
      default: "no label provided"
    },
    response: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {
      uniqueId: _.uniqueId("checkbox-")
    }
  },
  mounted() {
    this.uniqueId = _.uniqueId("checkbox-")
  },
  methods: {
    updateEligibilityChecked(event, key) {
      const localCriterion = {
        criteriaKey: key,
        response: event.target.checked
      }
      this.$store.dispatch("criteria/updateResponse", localCriterion)
    }
  }
}
</script>

<style lang="scss" scoped></style>
