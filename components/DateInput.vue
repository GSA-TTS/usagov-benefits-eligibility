<template>
  <fieldset class="usa-fieldset">
    <legend :class="legendClass">
      {{ label }}
    </legend>
    <div class="usa-memorable-date">
      <!-- lower margin of the label -->
      <div class="usa-form-group usa-form-group--month">
        <label :class="labelClass" :for="`${uniqueId}-${criteriaKey}-month`">Month</label>
        <input
          :class="inputClass"
          aria-describedby="monthinput"
          :id="`${uniqueId}-${criteriaKey}-month`"
          :name="`${uniqueId}-${criteriaKey}-month`"
          type="text"
          maxlength="2"
          pattern="[0-9]*"
          inputmode="numeric"
          :value="pullDateValue(dateResponse, 0)"
          v-model="month"
          @change="updateElibilityDate($event, criteriaKey)" />
      </div>
      <div class="usa-form-group usa-form-group--day">
        <label :class="labelClass" :for="`${uniqueId}-${criteriaKey}-day`">Day</label>
        <input
          :class="inputClass"
          aria-describedby="dayinput"
          :id="`${uniqueId}-${criteriaKey}-day`"
          :name="`${uniqueId}-${criteriaKey}-day`"
          type="text"
          maxlength="2"
          pattern="[0-9]*"
          inputmode="numeric"
          :value="pullDateValue(dateResponse, 1)"
          v-model="day"
          @change="updateElibilityDate($event, criteriaKey)" />
      </div>
      <div class="usa-form-group usa-form-group--year">
        <label :class="labelClass" :for="`${uniqueId}-${criteriaKey}-year`">Year</label>
        <input
          :class="inputClass"
          aria-describedby="yearinput"
          :id="`${uniqueId}-${criteriaKey}-year`"
          :name="`${uniqueId}-${criteriaKey}-year`"
          type="text"
          minlength="4"
          maxlength="4"
          pattern="[0-9]*"
          inputmode="numeric"
          v-model="year"
          :value="pullDateValue(dateResponse, 2)"
          @change="updateElibilityDate($event, criteriaKey)" />
      </div>
    </div>
  </fieldset>
</template>

<style scoped>
.usa-legend {
  margin-bottom: -0.6875rem;
}

.usa-legend--empty,
.usa-label--empty,
.usa-input--empty {
  color: #1b1b1b;
}

.usa-legend--success,
.usa-label--success,
.usa-input--success {
  color: green;
  font-weight: bold;
}

.usa-legend--error,
.usa-label--error,
.usa-input--error {
  color: red;
  font-weight: bold;
}
</style>

<script>
import _ from "lodash"
export default {
  name: "DateInput",
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
      default: "no response provided",
    },
    dateResponse: {
      type: String,
      default: "no response inputted",
    },
    location: {
      type: String,
      default: "benefit-card",
      validator: (value) => {
        return ["benefit-card", "left-rail"].includes(value)
      },
    },
  },
  data() {
    return {
      uniqueId: _.uniqueId("dateinput-"),
      month: '',
      day: '',
      year: ''
    }
  },
  computed: {
    selectedStyle() {
      return this.location === "left-rail" ? "text-bold" : ""
    },
    labelClass() {
      return `usa-label usa-label--${this.classFromResponse()}`
    },
    legendClass() {
      return `usa-legend usa-legend--${this.classFromResponse()}`
    },
    inputClass() {
      return `usa-input usa-input--${this.classFromResponse()}`
    },
  },
  mounted() {
    this.uniqueId = _.uniqueId("dateinput-")
  },
  methods: {
    classFromResponse() {
      return this.response ? "success" : this.response == null ? "empty" : "error"
    },
    pullDateValue(dateResponse, index) {
      return `${dateResponse !== null ? dateResponse.split("-")[index] : ""}`
    },
    updateElibilityDate(event, key) {
      // figure out date from 3 boxes
      const month = this.data.month
      const day = this.data.day
      const year = this.data.year
      if (month !== "" && day !== "" && year !== "") {
        const date = `${month}-${day}-${year}`
        const localCriterion = {
          criteriaKey: key,
          response: date,
        }
        this.$store.dispatch("criteria/updateResponse", localCriterion)
      }
    },
  },
}
</script>
