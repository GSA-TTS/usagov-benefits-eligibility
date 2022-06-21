<template>
  <fieldset class="usa-fieldset">
    <legend :class="legendClass">
      {{ label }}
    </legend>
    <div
      class="usa-hint margin-top-1 margin-bottom-neg-105"
      :class="topLevelStyle">
      For example: 4 28 1986
    </div>
    <h2
      v-if="errorMessage"
      :id="`${errUniqueId}-input-error-message`"
      class="usa-error-message padding-x-1 margin-bottom-0 radius-sm font-body-md">
      {{ $t(errorMessage) }}
    </h2>
    <div class="usa-memorable-date">
      <!-- lower margin of the label -->
      <div class="usa-form-group usa-form-group--month">
        <label
          :class="labelClass"
          :for="`${uniqueId}-${criteriaKey}-month`">
          {{ $t("dateInput.month") }}
        </label>
        <input
          :id="`${uniqueId}-${criteriaKey}-month`"
          v-model="month"
          :class="inputClass"
          :aria-describedby="`${uniqueId}-${criteriaKey}-month`"
          :name="`${uniqueId}-${criteriaKey}-month`"
          type="text"
          maxlength="2"
          pattern="[0-9]*"
          inputmode="numeric"
          placeholder="MM"
          @change="updateEligibilityDate(criteriaKey)" />
      </div>
      <div class="usa-form-group usa-form-group--day">
        <label
          :class="labelClass"
          :for="`${uniqueId}-${criteriaKey}-day`">
          {{ $t("dateInput.day") }}
        </label>
        <input
          :id="`${uniqueId}-${criteriaKey}-day`"
          v-model="day"
          :class="inputClass"
          :aria-describedby="`${uniqueId}-${criteriaKey}-day`"
          :name="`${uniqueId}-${criteriaKey}-day`"
          type="text"
          maxlength="2"
          pattern="[0-9]*"
          inputmode="numeric"
          placeholder="DD"
          @change="updateEligibilityDate(criteriaKey)" />
      </div>
      <div class="usa-form-group usa-form-group--year">
        <label
          :class="labelClass"
          :for="`${uniqueId}-${criteriaKey}-year`"
          >{{ $t("dateInput.year") }}</label
        >
        <input
          :id="`${uniqueId}-${criteriaKey}-year`"
          v-model="year"
          :class="inputClass"
          :aria-describedby="`${uniqueId}-${criteriaKey}-year`"
          :name="`${uniqueId}-${criteriaKey}-year`"
          type="text"
          minlength="4"
          maxlength="4"
          pattern="[0-9]*"
          inputmode="numeric"
          placeholder="YYYY"
          @change="updateEligibilityDate(criteriaKey)" />
      </div>
    </div>
  </fieldset>
</template>

<script>
import _ from "lodash"
import { checkDateValid } from "../services/dateHelper.js"

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
      default: "left-rail",
      validator: (value) => {
        return ["benefit-card", "left-rail", "top-level"].includes(value)
      },
    },
    test: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      uniqueId: _.uniqueId("dateinput-"),
      errUniqueId: _.uniqueId("error-"),
      errorMessage: "",
      month: this.pullDateValue(this.dateResponse, 0),
      day: this.pullDateValue(this.dateResponse, 1),
      year: this.pullDateValue(this.dateResponse, 2),
    }
  },
  computed: {
    topLevelStyle() {
      return this.location === "top-level" ? "text-gray-30" : "text-base-darker"
    },
    selectedStyle() {
      return this.location === "left-rail" ? "text-bold" : ""
    },
    labelClass() {
      return `usa-label bears-label--${this.classFromResponse()}`
    },
    legendClass() {
      return `usa-legend usa-legend--${this.classFromResponse()} ${this.selectedStyle}`
    },
    inputClass() {
      return `usa-input bears-input--${this.classFromResponse()}`
    },
  },
  watch: {
    dateResponse() {
      if (this.errorMessage === "") {
        this.month = this.pullDateValue(this.dateResponse, 0)
        this.day = this.pullDateValue(this.dateResponse, 1)
        this.year = this.pullDateValue(this.dateResponse, 2)
      }
    },
  },
  mounted() {
    this.uniqueId = _.uniqueId("dateinput-")
    this.$store.subscribe((mutation) => {
      if (mutation.type === "criteria/clearSelectedCriteria") {
        this.month = ""
        this.day = ""
        this.year = ""
        this.errorMessage = ""
      }
    })
  },
  methods: {
    classFromResponse() {
      let cls = "error"
      if (this.response) {
        cls = "success"
      } else if (this.response == null) {
        cls = "empty"
      }
      return cls
    },
    pullDateValue(dateResponse, index) {
      return `${dateResponse !== null ? dateResponse.split("-")[index] : ""}`
    },
    updateEligibilityDate(key) {
      // figure out date from 3 boxes
      const month = this.month
      const day = this.day
      const year = this.year
      if (month !== "" && day !== "" && year !== "") {
        const date = `${month}-${day}-${year}`
        this.errorMessage = checkDateValid(date)
        if (this.errorMessage === "") {
          const localCriterion = {
            criteriaKey: key,
            response: date,
          }
          this.$store.dispatch("criteria/updateResponse", localCriterion)
        } else {
          const localCriterion = {
            criteriaKey: key,
            response: null,
          }
          this.$store.dispatch("criteria/updateResponse", localCriterion)
        }
      }
    },
  },
}
</script>

<style
  lang="scss"
  scoped>
.usa-error-message {
  background-color: #b50909;
  color: white;
}
.usa-legend {
  margin-bottom: -0.6875rem;
}

.usa-memorable-date {
  margin-bottom: 0.5rem;
}

.bears-label--error,
.bears-label--success {
  color: #71767a;
}

.bears-input--error,
.bears-input--success {
  color: black;
}

.usa-legend--success {
  color: green;
  font-weight: 700;
}

.usa-legend--error {
  color: #b50909;
  font-weight: 700;
}
</style>
