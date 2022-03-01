<template>
  <fieldset class="usa-fieldset">
    <legend 
      :class="`usa-legend usa-legend--${response ? 'success': response == null ? 'empty': 'error'} ${selectedStyle}`">
      {{label}}
    </legend>
    <div class="usa-memorable-date">
       <!-- lower margin of the label -->
      <div class="usa-form-group usa-form-group--month">
        <label 
          :class="`usa-label usa-label--${response ? 'success': 
            response == null ? 'empty': 'error'}`" 
          :for="`${uniqueId}-${criteriaKey}-month`">Month</label>
        <input
          :class="`usa-input usa-input--${response ? 'success': 
            response == null ? 'empty': 'error'}`"
          aria-describedby="monthinput"
          :id="`${uniqueId}-${criteriaKey}-month`"
          :name="`${uniqueId}-${criteriaKey}-month`"
          type="text"
          maxlength="2"
          pattern="[0-9]*"
          inputmode="numeric"
          :value="`${dateResponse !== null ? dateResponse.split('-')[0]: ''}`"
          @change="updateElibilityDate($event, criteriaKey)"
        />
      </div>
      <div class="usa-form-group usa-form-group--day">
        <label 
          :class="`usa-label usa-label--${response ? 'success': 
            response == null ? 'empty': 'error'}`" 
          :for="`${uniqueId}-${criteriaKey}-day`">Day</label>
        <input
          :class="`usa-input usa-input--${response ? 'success': 
            response == null ? 'empty': 'error'}`"
          aria-describedby="dayinput"
          :id="`${uniqueId}-${criteriaKey}-day`"
          :name="`${uniqueId}-${criteriaKey}-day`"
          type="text"
          maxlength="2"
          pattern="[0-9]*"
          inputmode="numeric"
          :value="`${dateResponse !== null ? dateResponse.split('-')[1]: ''}`"
          @change="updateElibilityDate($event, criteriaKey)"
        />
      </div>
      <div class="usa-form-group usa-form-group--year">
        <label 
          :class="`usa-label usa-label--${response ? 'success': 
            response == null ? 'empty': 'error'}`" 
          :for="`${uniqueId}-${criteriaKey}-year`">Year</label>
        <input
          :class="`usa-input usa-input--${response ? 'success': 
            response == null ? 'empty': 'error'}`"
          aria-describedby="yearinput"
          :id="`${uniqueId}-${criteriaKey}-year`"
          :name="`${uniqueId}-${criteriaKey}-year`"
          type="text"
          minlength="4"
          maxlength="4"
          pattern="[0-9]*"
          inputmode="numeric"
          :value="`${dateResponse !== null ? dateResponse.split('-')[2]: ''}`"
          @change="updateElibilityDate($event, criteriaKey)"
        />
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
  border-color: green;
}

.usa-legend--error,
.usa-label--error,
.usa-input--error {
  color: red;
  border-color: red;
}
</style>

<script>
import _ from 'lodash'
export default {
    name: 'DateInput',
    props: {
        criteriaKey: {
            type: String,
            default: 'no criteria key provided'
        },
        label: {
            type: String,
            default: 'no label provided'
        },
        response: {
            type: [String, Object, Boolean],
            default: 'no response provided'
        },
        dateResponse: {
          type: String,
          default: 'no response inputted'
        },
        location: {
          type: String,
          default: "benefit-card",
          validator: (value) => { return ['benefit-card', 'left-rail'].includes(value) }
        }
    },
    data() {
        return {
            uniqueId: _.uniqueId('dateinput-')
        }
    },
    computed: {
      selectedStyle() {
        if (this.location === "left-rail") {
          return "text-bold"
        }
        return null
      }
    },
    mounted() {
        this.uniqueId = _.uniqueId('dateinput-')
    },
    methods: {
        updateElibilityDate (event, key) {
            // figure out date from 3 boxes
            const month = document.getElementById(`${this.uniqueId}-${this.criteriaKey}-month`).value
            const day = document.getElementById(`${this.uniqueId}-${this.criteriaKey}-day`).value
            const year = document.getElementById(`${this.uniqueId}-${this.criteriaKey}-year`).value
            if (
              month !== '' && 
              day !== '' &&
              year !== ''
            ) {
              const date = `${month}-${day}-${year}`
              const localCriterion = {
                criteriaKey: key,
                response: date
              }
              this.$store.dispatch('criteria/updateResponse', localCriterion)
            }
        }
    }
}
</script>
