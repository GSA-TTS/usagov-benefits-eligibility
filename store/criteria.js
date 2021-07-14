import Vue from "vue";

export const state = () => ({
  eligibilityCriteria: {},
  preloadedResponses: {},
});

export const mutations = {
  populate (state, criteriaArray = []) {
    for (const criterion of criteriaArray) {
      criterion.response = state.preloadedResponses[criterion] != null ? state.preloadedResponses[criterion] : null;
      Vue.set(state.eligibilityCriteria, criterion.criteriaKey, criterion);
    }
  },
  // payload must include a criteriaKey and the new response / selected value
  updateResponse (state, { criteriaKey, response }) {
    // TODO: make sure the response matches one of the available criterion values

    Vue.set(state.eligibilityCriteria[criteriaKey], 'response', response);
  },
  preloadedResponse (state, { criteriaKey, response }) {
    if (state.eligibilityCriteria[criteriaKey] !== null) {
      Vue.set(state.eligibilityCriteria[criteriaKey], 'response', response)
    } else {
      Vue.set(state.preloadedResponses, criteriaKey, response);
    }
  },
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
  getResponses: (state) => {
    const responses = {};
    for (const criteriaKey in state.eligibilityCriteria) {
      if (state.eligibilityCriteria[criteriaKey] && state.eligibilityCriteria[criteriaKey].response !== null) {
        responses[criteriaKey] = state.eligibilityCriteria[criteriaKey].response;
      }
    }
    return responses;
  },

//   getValueByEligibilityKey: state => (key) => {
//     return !!state.eligibilityCriteria.find(criterion => criterion.key === key).value;
//   },

}
