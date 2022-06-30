<template>
  <div :class="disabledStyle">
    <label
      class="usa-label margin-top-0 tablet:padding-top-1 text-bold"
      :class="disabledLabel"
      :for="`${uniqueId}-${criteriaKey}-${criteriaIndex}`">
      {{ label }}
    </label>
    <select
      :id="`${uniqueId}-${criteriaKey}-${criteriaIndex}`"
      class="usa-select"
      aria-controls="matching-count"
      :name="`${uniqueId}-${criteriaKey}-${criteriaIndex}`"
      :disabled="isDisabled"
      @change="updateEligibilitySelected($event, criteriaKey)">
      <option :value="null">-{{ $t("dropDown.select") }}-</option>
      <option
        v-for="option in values"
        :key="option"
        :value="option"
        :selected="response === option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import _ from "lodash"
export default {
  name: "DropDown",
  props: {
    label: {
      type: String,
      default: "No label provided",
    },
    criteriaKey: {
      type: String,
      default: "No key provided",
    },
    values: {
      type: Array,
      default: () => [],
    },
    response: {
      type: [String, Object, Boolean],
      default: "No response provided",
    },
    criteriaIndex: {
      type: [Number, String],
      default: "no index provided",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      uniqueId: _.uniqueId("dropdown-"),
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
    this.uniqueId = _.uniqueId("dropdown-")
  },
  methods: {
    updateEligibilitySelected(e) {
      const localCriterion = {
        criteriaKey: this.criteriaKey,
        response: e.target.value,
      }
      this.$store.dispatch("criteria/updateResponse", localCriterion)
    },
  },
}
</script>
