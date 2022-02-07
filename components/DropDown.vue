<template>
  <div>
    <label
      :class="{ 'usa-label': true, 'margin-top-0': true }"
      :for="`${uniqueId}-${criteriaKey}-${criteriaIndex}`"
      >{{ label }}</label
    >
    <select
      :id="`${uniqueId}-${criteriaKey}-${criteriaIndex}`"
      :class="{ 'usa-select': true }"
      :name="`${uniqueId}-${criteriaKey}-${criteriaIndex}`"
      @change="updateEligibilitySelected($event, criteriaKey)"
    >
      <option>- Select -</option>
      <option
        v-for="option in values"
        :key="option"
        :value="option"
        :selected="response === option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import _ from "lodash"
export default {
  props: {
    label: {
      type: String,
      default: "No label provided"
    },
    criteriaKey: {
      type: String,
      default: "No key provided"
    },
    values: {
      type: Array,
      default: () => []
    },
    response: {
      type: [String, Object],
      default: "No response provided"
    },
    criteriaIndex: {
      type: Number,
      default: 0
    },
    // TODO: may be helpful?
    location: {
      type: String,
      default: "No location provided"
    }
  },
  data() {
    return {
      uniqueId: _.uniqueId("dropdown-")
    }
  },
  beforeCreate() {
    this.uniqueId = _.uniqueId("dropdown-")
  },
  methods: {
    updateEligibilitySelected(e) {
      const payload = {
        criteriaKey: this.criteriaKey,
        response: e.target.value
      }
      this.$store.commit("criteria/updateResponse", payload)
    }
  }
}
</script>

<style scoped>
.usa-label,
.usa-legend {
  font-weight: inherit;
}
</style>
