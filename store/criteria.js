import Vue from "vue";

export const state = () => ({
  eligibilityCriteria: {}
});

export const mutations = {
  populate (state, criteriaArray = []) {
    for (const criterion of criteriaArray) {
      criterion.response = null;
      Vue.set(state.eligibilityCriteria, criterion.criteriaKey, criterion);
    }
  },
  // payload must include a criteriaKey and the new response / selected value
  updateResponse (state, { criteriaKey, response }) {
    // TODO: make sure the response matches one of the available criterion values

    // state.eligibilityCriteria[criteriaKey].response = selectedValue
    Vue.set(state.eligibilityCriteria[criteriaKey], 'response', response);

  }
}
export const getters = {
  getCriterionByEligibilityKey: state => (criteriaKey) => {
    return state.eligibilityCriteria[criteriaKey] ||
    {
      key: `error-missing-key--${criteriaKey}`,
      label: `Key named "${criteriaKey}" not found`,
      values: '',
      type: 'missing'
    };
  },

}
