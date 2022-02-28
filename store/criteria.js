import Vue from "vue"
import stringToHash from "../services/stringToHash"

export const state = () => ({
  eligibilityCriteria: {},
  hashToCriteria: {},
  preloadedResponses: {}
})

export const mutations = {
  // payload must include a criteriaKey and the new response / selected value
  updateResponse(state, { criteriaKey, response }) {
    // TODO: make sure the response matches one of the available criterion values

    Vue.set(state.eligibilityCriteria[criteriaKey], "response", response)
  },
  preloadedResponse(state, { criteriaKeyHash, response }) {
    const criteriaKey = state.hashToCriteria[criteriaKeyHash]
    if (state.eligibilityCriteria[criteriaKey] != null) {
      Vue.set(state.eligibilityCriteria[criteriaKey], "response", response)
    } else {
      Vue.set(state.preloadedResponses, criteriaKeyHash, response)
    }
  },
  populateCriterion(state, { criterion, hash }) {
    const criteriaKey = criterion.criteriaKey
    criterion.response =
      state.preloadedResponses[hash] != null
        ? state.preloadedResponses[hash]
        : null
    criterion.criteriaKeyHash = hash
    Vue.set(state.eligibilityCriteria, criteriaKey, criterion)
    Vue.set(state.hashToCriteria, hash, criteriaKey)
  }
}

export const getters = {
  doesCriterionDateMatch: (state, getters) => (criterion) => {
    if (
      !getters.isCriterionSelected(criterion) || !criterion.acceptableValues
    ) {
      return null
    }
    // need to check the date
    const operator = criterion.acceptableValues[0][0]
    const acceptDate = Date.parse(criterion.acceptableValues[0].substring(1))
    const responseDate = Date.parse(getters.getResponseByEligibilityKey(state)(criterion.criteriaKey))
    if (isNaN(responseDate)) {
      return null
    }
    switch (operator) {
      case "=":
        return responseDate === acceptDate
      case ">":
        return responseDate > acceptDate
      case "<":
        return responseDate < acceptDate
      default:
        return null
    }
  },
  doesCriterionMatchSelection: (state, getters) => (criterion) => {
    if (
      !getters.isCriterionSelected(criterion) ||
      !criterion.acceptableValues
    ) {
      return null
    }
    if(getters.getCriterionByEligibilityKey(criterion.criteriaKey).type === 'date') {
      return getters.doesCriterionDateMatch(criterion.criteriaKey)
    } else {
      return !!criterion.acceptableValues.find(
        (val) =>
          val ===
          getters.getCriterionByEligibilityKey(criterion.criteriaKey).response
      )
    }    
  },
  getCriterionByEligibilityKey: (state) => (criteriaKey) => {
    return (
      state.eligibilityCriteria[criteriaKey] || {
        key: `error-missing-key--${criteriaKey}`,
        label: `Key named "${criteriaKey}" not found`,
        values: "",
        type: "missing"
      }
    )
  },
  getResponseByEligibilityKey: (state) => (criteriaKey) => {
    return (
      state.eligibilityCriteria[criteriaKey].response || {
        key: `error-missing-key--${criteriaKey}`,
        label: `Key named "${criteriaKey}" not found`,
        values: "",
        type: "missing"
      }
    )
  },
  getHashResponses: (state) => {
    const responses = {}
    for (const criteriaKey in state.eligibilityCriteria) {
      const criteria = state.eligibilityCriteria[criteriaKey]
      if (criteria && criteria.response) {
        responses[criteria.criteriaKeyHash] = criteria.response
      }
    }
    return responses
  },
  getTotalEligibleCriteria:
    (state, getters) =>
    (benefitEligibilityCriteria = []) => {
      if (benefitEligibilityCriteria && benefitEligibilityCriteria.length < 1) {
        return 0
      } else {
        const matchingCriteria = benefitEligibilityCriteria.filter(
          (criterion) => getters.doesCriterionMatchSelection(criterion)
        )
        return matchingCriteria.length
      }
    },
  getTotalIneligibleCriteria:
    (state, getters) =>
    (benefitEligibilityCriteria = []) => {
      if (benefitEligibilityCriteria && benefitEligibilityCriteria.length < 1) {
        return 0
      } else {
        const matchingCriteria = benefitEligibilityCriteria.filter(
          (criterion) =>
            getters.doesCriterionMatchSelection(criterion) === false
        )
        return matchingCriteria.length
      }
    },
  isCriterionSelected: (state, getters) => (criterion) => {
    return !!getters.getCriterionByEligibilityKey(criterion.criteriaKey)
      .response
  }
}

export const actions = {
  async populate({ commit, state }, criteriaArray = []) {
    for (const criterion of criteriaArray) {
      const criteriaKey = criterion.criteriaKey
      const hash = await stringToHash(criteriaKey)
      commit("populateCriterion", { criterion, hash })
    }
  },
  updateResponse({ commit }, { criteriaKey, response }) {
    commit("updateResponse", { criteriaKey, response })
  }
}
