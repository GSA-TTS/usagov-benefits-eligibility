import Vue from "vue";
import stringToHash from "../services/stringToHash";

export const state = () => ({
  eligibilityCriteria: {},
  hashToCriteria: {},
});

export const mutations = {
  // payload must include a criteriaKey and the new response / selected value
  updateResponse (state, { criteriaKey, response }) {
    // TODO: make sure the response matches one of the available criterion values
    Vue.set(state.eligibilityCriteria[criteriaKey], 'response', response);
    const hashedData = getters.getHashResponses(state);;
    localStorage.setItem('responseData', JSON.stringify(hashedData));
  },

  preloadedResponses (state, { valueArray }) {
    for(const param of valueArray){
      const criteriaKey = state.hashToCriteria[param.criteriaKeyHash];
      if (state.eligibilityCriteria[criteriaKey] != null) {
        Vue.set(state.eligibilityCriteria[criteriaKey], 'response', param.response)
      }
    }

    const hashedData = getters.getHashResponses(state);
    localStorage.setItem('responseData', JSON.stringify(hashedData));
  },


  populateCriterion (state, { criterion, hash, storedData }) {
    const criteriaKey = criterion.criteriaKey;
    criterion.response = storedData[hash] ? storedData[hash] : null;
    criterion.criteriaKeyHash = hash;

    Vue.set(state.eligibilityCriteria, criteriaKey, criterion);
    Vue.set(state.hashToCriteria, hash, criteriaKey);
  },

  clearSelectedCriteria (state) {
    for(const criteriaKey in state.eligibilityCriteria){
      Vue.set(state.eligibilityCriteria[criteriaKey], 'response', null);
    }
    localStorage.setItem('responseData', JSON.stringify({}));
  },

}

export const getters = {
  doesCriterionMatchSelection: (state, getters) => (criterion) => {
    if (!getters.isCriterionSelected(criterion) || !criterion.acceptableValues) {
      return null;
    }
    return !!criterion.acceptableValues.find(val => val === getters.getCriterionByEligibilityKey(criterion.criteriaKey).response);
  },
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
  getTotalEligibleCriteria: (state, getters) => (benefitEligibilityCriteria = []) => {
    if (benefitEligibilityCriteria && benefitEligibilityCriteria.length < 1) {
      return 0;
    } else {
      const matchingCriteria = benefitEligibilityCriteria.filter(criterion => getters.doesCriterionMatchSelection(criterion));
      return matchingCriteria.length;
    }
  },
  getTotalIneligibleCriteria: (state, getters) => (benefitEligibilityCriteria = []) => {
    if (benefitEligibilityCriteria && benefitEligibilityCriteria.length < 1) {
      return 0;
    } else {
      const matchingCriteria = benefitEligibilityCriteria.filter(criterion => getters.doesCriterionMatchSelection(criterion) === false);
      return matchingCriteria.length;
    }
  },
  isCriterionSelected: (state, getters) => (criterion) => {
    return !!getters.getCriterionByEligibilityKey(criterion.criteriaKey).response;
  },
}

export const actions = {
  async populate ({ commit, state }, criteriaArray = []) {
    let storedData = {};

    if(process.client && localStorage.getItem('responseData')){
       storedData = JSON.parse(localStorage.getItem('responseData'));
    }

    for (const criterion of criteriaArray) {
      const criteriaKey = criterion.criteriaKey;
      const hash = await stringToHash(criteriaKey);
      commit('populateCriterion', { criterion, hash, storedData})
    }
  },

  clear ({ commit, state }, criteriaArray = []) {
    commit('clearSelectedCriteria', { })
  },
};
