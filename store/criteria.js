import Vue from "vue";
import stringToHash from "../services/stringToHash";

export const state = () => ({
  eligibilityCriteria: {},
  hashToCriteria: {},
  preloadedResponses: {},
});

export const mutations = {
  // payload must include a criteriaKey and the new response / selected value
  updateResponse (state, { criteriaKey, response }) {
    // TODO: make sure the response matches one of the available criterion values

    Vue.set(state.eligibilityCriteria[criteriaKey], 'response', response);
  },
  preloadedResponse (state, { criteriaKeyHash, response }) {
    const criteriaKey = state.hashToCriteria[criteriaKeyHash];
    if (state.eligibilityCriteria[criteriaKey] != null) {
      Vue.set(state.eligibilityCriteria[criteriaKey], 'response', response)
    } else {
      Vue.set(state.preloadedResponses, criteriaKey, response);
    }
  },
  populateCriterion (state, { criterion, hash }) {
    const criteriaKey = criterion.criteriaKey;
    criterion.response = state.preloadedResponses[criteriaKey] != null ? state.preloadedResponses[criteriaKey] : null;
    criterion.criteriaKeyHash = hash;
    Vue.set(state.eligibilityCriteria, criteriaKey, criterion);
    Vue.set(state.hashToCriteria, hash, criteriaKey);
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
  getHashResponses: (state) => {
    const responses = {};
    for (const criteriaKey in state.eligibilityCriteria) {
      const criteria = state.eligibilityCriteria[criteriaKey];
      if (criteria && criteria.response) {
        responses[criteria.criteriaKeyHash] = criteria.response;
      }
    }
    return responses;
  },

}

export const actions = {
  async populate ({ commit, state }, criteriaArray = []) {
    for (const criterion of criteriaArray) {
      const criteriaKey = criterion.criteriaKey;
      const hash = await stringToHash(criteriaKey);
      commit('populateCriterion', { criterion, hash })
    }
  },
};
