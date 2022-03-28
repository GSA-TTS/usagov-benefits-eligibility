<template>
  <div class="eligibility-criterion">
    <!-- <p>// applicant_served_in_active_military.response</p>
    <pre>{{ $store.state.criteria.eligibilityCriteria.applicant_served_in_active_military.response }}</pre>
    <p>// topLevelFilters</p>
    <pre>{{ topLevelFilters }}</pre> -->
    <p>// did it match ?</p>
    <pre>{{
      // topLevelFilters.map((child) => {
      //   if (
      //     child.disableChildWhen.includes(
      //       $store.state.criteria.eligibilityCriteria.applicant_served_in_active_military.response
      //     )
      //   ) {
      //     return true
      //   }
      // })
      isGroupKeyDisabled
    }}</pre>

    <div
      v-if="type === 'boolean'"
      :key="criteriaKey"
      class="usa-checkbox">
      <CheckBox
        :criteria-key="criteriaKey"
        :label="getCriterionLabel()"
        :response="response"
        :is-disabled="isGroupKeyDisabled"
        location="left-rail" />
    </div>
    <div
      v-if="type === 'date'"
      :key="criteriaKey">
      <DateInput
        :criteria-key="criteriaKey"
        :label="getCriterionLabel()"
        :response="doesCriterionDateMatch(getCriterionByEligibilityKey(criteriaKey))"
        :date-response="getCriterionByEligibilityKey(criteriaKey).response"
        location="left-rail" />
    </div>

    <div
      v-if="type === 'select'"
      :key="criteriaKey">
      <DropDown
        :label="getCriterionLabel()"
        :criteria-key="criteriaKey"
        :values="values"
        :response="response"
        :criteria-index="criteriaGroupKey"
        :is-disabled="isGroupKeyDisabled"
        location="left-rail" />
    </div>

    <div
      v-if="type === 'radio'"
      :key="criteriaKey">
      <RadioButton
        :criteria-key="criteriaKey"
        :label="getCriterionLabel()"
        :values="values"
        :response="response"
        :is-disabled="isGroupKeyDisabled"
        location="left-rail" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import RadioButton from "./RadioButton"
import DropDown from "./DropDown"
import CheckBox from "./CheckBox"
import DateInput from "./DateInput.vue"

export default {
  components: {
    RadioButton,
    DropDown,
    CheckBox,
    DateInput,
  },
  props: {
    criteriaKey: {
      type: String,
      default: "No key provided",
    },
    label: {
      type: String,
      default: "No label provided",
    },
    type: {
      type: String,
      default: "No type provided",
    },
    values: {
      type: Array,
      default: () => [],
    },
    criteriaGroupKey: {
      type: String,
      default: "criteriaGroup",
    },
    response: {
      type: [Boolean, String],
      default: false,
    },
    criteria: {
      type: Object,
      default: () => {},
    },
    topLevelFilters: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isGroupKeyDisabled: false,
    }
  },
  computed: {
    ...mapGetters({
      getCriterionByEligibilityKey: "criteria/getCriterionByEligibilityKey",
      getResponseByEligibilityKey: "criteria/getResponseByEligibilityKey",
      doesCriterionMatchSelection: "criteria/doesCriterionMatchSelection",
      getTotalEligibleCriteria: "criteria/getTotalEligibleCriteria",
      doesCriterionDateMatch: "criteria/doesCriterionDateMatch",
    }),
  },
  watch: {
    "$store.state.criteria.eligibilityCriteria['applicant_served_in_active_military']": {
      deep: true,
      handler() {
        console.log("foo")
        console.log(this.$store.state.criteria.eligibilityCriteria.applicant_served_in_active_military)
      },
    },
  },
  methods: {
    isGroupKeyDisabledFunc(topLevelFilters) {
      for (const filter in topLevelFilters) {
        // console.log("criteriaKey + " + topLevelFilters[filter].criteriaKey)
        // console.log("disableWhen + " + topLevelFilters[filter].disableChildWhen)
        if (
          // match criteria key ie `applicant_served_in_active_military`
          topLevelFilters[filter].criteriaKey.includes("applicant_served_in_active_military") &&
          // be included in the disableChildWhen array
          topLevelFilters[filter].disableChildWhen.includes(
            this.getResponseByEligibilityKey("applicant_served_in_active_military")
          )
        ) {
          return true
        }
      }
      return false
    },
    getCriterionLabel() {
      return this.label || this.getCriterionByEligibilityKey(this.criteriaKey).label
    },
    isTopLevelActive(eligibilityCriteria) {
      if (eligibilityCriteria.some((c) => this.doesCriterionMatchSelection(c) === false)) {
        return true
      } else if (this.getTotalEligibleCriteria(eligibilityCriteria) >= 1) {
        return false
      }
      return false
    },
  },
}
</script>
<style
  type="scss"
  scoped>
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
