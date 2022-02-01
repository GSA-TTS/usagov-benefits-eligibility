<template>
  <div class="eligibility-criterion">
    <div v-if="type === 'boolean'" :key="criteriaKey" class="usa-checkbox">
      <input
        :id="'criteria-' + criteriaGroupKey + '-' + criteriaKey"
        class="usa-checkbox__input usa-checkbox__input"
        type="checkbox"
        :name="criteriaGroupKey + '-' + criteriaKey"
        :checked="response"
        :value="criteriaKey"
        :data-section="criteriaGroupKey"
        @change="updateEligibilityChecked"
      />
      <label
        class="usa-checkbox__label font-sans-sm"
        :for="'criteria-' + criteriaGroupKey + '-' + criteriaKey"
      >
        {{ label }}
      </label>
    </div>

    <div v-if="type === 'select'" :key="criteriaKey">
      <label
        :class="{
          'usa-label': true,
          'margin-top-0': true,
          'usa-select-empty': !response
        }"
        :for="'criteria-' + criteriaGroupKey + '-' + criteriaKey"
        >{{ label }}</label
      >
      <select
        :id="'criteria-' + criteriaGroupKey + '-' + criteriaKey"
        :class="{ 'usa-select': true, 'usa-select-empty': !response }"
        :name="'criteria-' + criteriaGroupKey + '-' + criteriaKey"
        @change="updateEligibilitySelected"
      >
        <option value>- Select -</option>
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

    <div v-if="type === 'radio'" :key="criteriaKey">
      <RadioButton
        :criteria-key="criteriaKey"
        :values="values"
        :response="response"
        :label="label"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import RadioButton from "./RadioButton";

export default {
  components: {
    RadioButton
  },
  props: {
    criteriaKey: {
      type: String,
      default: "No key provided"
    },
    label: {
      type: String,
      default: "No label provided"
    },
    type: {
      type: String,
      default: "No type provided"
    },
    values: {
      type: Array,
      default: () => []
    },
    criteriaGroupKey: {
      type: String,
      default: "criteriaGroup"
    },
    response: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    ...mapGetters({
      getCriterionByEligibilityKey: "criteria/getCriterionByEligibilityKey"
    })
  },
  methods: {
    updateEligibilityChecked(e) {
      const localCriterion = {
        criteriaKey: this.criteriaKey,
        response: e.target.checked
      };
      this.$store.commit("criteria/updateResponse", localCriterion);
    },
    updateEligibilitySelected(e) {
      const localCriterion = {
        criteriaKey: this.criteriaKey,
        response: e.target.value
      };
      this.$store.commit("criteria/updateResponse", localCriterion);
    }
  }
};
</script>
<style type="scss" scoped>
.eligibility-criteria__child {
  border-left: 2px solid #dee1e2;
  margin-left: 0.25rem;
}
.usa-checkbox__label,
.usa-radio__label {
  margin: 1rem 0 1.25rem;
  line-height: 1.1;
  padding-left: 2.5rem;
}
.usa-checkbox__label::before,
.usa-radio__label::before {
  margin-right: 1.25em;
  vertical-align: middle;
}
.usa-select:last-child {
  margin-bottom: 1.25rem;
}
.usa-checkbox {
  background: none;
}
@media print {
  .eligibility-criterion input[type="checkbox"]:not(:checked) ~ label {
    display: none;
  }
  .usa-select-empty {
    display: none;
  }
  .criteria-group-empty {
    display: none;
  }
}
</style>
