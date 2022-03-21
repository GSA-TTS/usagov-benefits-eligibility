<template>
  <fieldset class="usa-fieldset">
    <template v-if="location === 'left-rail'">
      <label
        class="usa-label margin-top-0 tablet:padding-top-1 text-bold"
        :for="`${uniqueId}-${criteriaKey}-${criteriaIndex}`">
        {{ label }}
      </label>
    </template>
    <template v-else>
      <label
        class="usa-label margin-top-0"
        style="font-weight: inherit"
        :for="`${uniqueId}-${criteriaKey}-${criteriaIndex}`">
        {{ label }}
      </label>
    </template>
    <select
      :id="`${uniqueId}-${criteriaKey}-${criteriaIndex}`"
      class="usa-select"
      :name="`${uniqueId}-${criteriaKey}-${criteriaIndex}`"
      @change="updateEligibilitySelected($event, criteriaKey)">
      <option :value="null">- Select -</option>
      <option
        v-for="option in values"
        :key="option"
        :value="option"
        :selected="response === option">
        {{ option }}
      </option>
    </select>
  </fieldset>
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
    location: {
      default: "benefit-card",
      validator: (value) => {
        return ["left-rail", "benefit-card"].includes(value)
      },
    },
  },
  data() {
    return {
      uniqueId: _.uniqueId("dropdown-"),
    }
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
