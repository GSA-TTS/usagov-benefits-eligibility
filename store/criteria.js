import Vue from "vue"
import { toDate, isEqual, isBefore, isAfter, sub } from "date-fns"
import stringToHash from "../services/stringToHash"
import validateDateAgainstAcceptance from "~/services/dateHelper"

export const state = () => ({
  eligibilityCriteria: {},
  hashToCriteria: {},
})

export const mutations = {
  // payload must include a criteriaKey and the new response / selected value
  updateResponse(state, { criteriaKey, response }) {
    // TODO: make sure the response matches one of the available criterion values
    Vue.set(state.eligibilityCriteria[criteriaKey], "response", response)
    const hashedData = getters.getHashResponses(state)
    localStorage.setItem("responseData", JSON.stringify(hashedData))
  },

  preloadedResponses(state, { valueArray }) {
    for (const param of valueArray) {
      const criteriaKey = state.hashToCriteria[param.criteriaKeyHash]
      if (state.eligibilityCriteria[criteriaKey] != null) {
        Vue.set(state.eligibilityCriteria[criteriaKey], "response", param.response)
      }
    }

    const hashedData = getters.getHashResponses(state)
    localStorage.setItem("responseData", JSON.stringify(hashedData))
  },

  populateCriterion(state, { criterionArray }) {
    let storedData = {}

    if (process.client && localStorage.getItem("responseData")) {
      storedData = JSON.parse(localStorage.getItem("responseData"))
    }

    for (const criterion of criterionArray) {
      const criteriaKey = criterion.criteriaKey
      criterion.response = storedData[criterion.criteriaKeyHash] ? storedData[criterion.criteriaKeyHash] : null
      Vue.set(state.eligibilityCriteria, criteriaKey, criterion)
      Vue.set(state.hashToCriteria, criterion.criteriaKeyHash, criteriaKey)
    }
  },

  clearSelectedCriteria(state) {
    for (const criteriaKey in state.eligibilityCriteria) {
      Vue.set(state.eligibilityCriteria[criteriaKey], "response", null)
    }
    localStorage.setItem("responseData", JSON.stringify({}))
  },
}

export const getters = {
  /**
   * Function that checks the acceptable criteria date encoding and translates
   * it to something that the js engine can parse / check
   *
   * Use Cases                                      | Required encoding (acceptable value(s))
   * - user must be born on MM/DD/YYYY (11/14/1999) | =11-14-1999
   * - user older than 60 years  (Y, M, D)          | >60Y
   * - criteria before MM/DD/YYYY (01/01/2022)      | <01-01-2022
   * - born during YYYY-YYYYY (1990-2000)           | >01-01-1990 , <01-01-2000
   * - same use case as above (but with age range)  | >60Y, <40Y
   * @param {currentState} state
   * @param {storeGetters} getter
   * @returns null / true / false [empty, pass, fail]
   */
   doesCriterionDateMatch: (state, getters) => (criterion) => {
    if (!getters.isCriterionSelected(criterion) || !criterion.acceptableValues) {
      return null
    }
    // need this to be swapped if passing in a state I.E. testing
    let userInputDate = criterion.TEST
      ? Date.parse(getters.getResponseByEligibilityKey(state)(criterion.criteriaKey))
      : Date.parse(getters.getResponseByEligibilityKey(criterion.criteriaKey))
    return validateDateAgainstAcceptance({
      criterion,
      userInputDate
    })
  },
  doesCriterionMatchSelection: (state, getters) => (criterion) => {
    if (!getters.isCriterionSelected(criterion)) {
      return null
    }

    if (getters.getCriterionByEligibilityKey(criterion.criteriaKey).type === "date") {
      return criterion.TEST
        ? getters.doesCriterionDateMatch(state)(criterion.criteriaKey)
        : getters.doesCriterionDateMatch(criterion.criteriaKey)
    } else {
      if (!criterion.acceptableValues) {
        return null
      }
      return !!criterion.acceptableValues.find(
        (val) => val === getters.getCriterionByEligibilityKey(criterion.criteriaKey).response
      )
    }
  },
  getCriterionByEligibilityKey: (state) => (criteriaKey) => {
    return (
      state.eligibilityCriteria[criteriaKey] || {
        key: `error-missing-key--${criteriaKey}`,
        label: `Key named "${criteriaKey}" not found`,
        values: "",
        type: "missing",
      }
    )
  },
  getResponseByEligibilityKey: (state) => (criteriaKey) => {
    return (
      state.eligibilityCriteria[criteriaKey].response || {
        key: `error-missing-key--${criteriaKey}`,
        label: `Key named "${criteriaKey}" not found`,
        values: "",
        type: "missing",
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
        const matchingCriteria = benefitEligibilityCriteria.filter((criterion) =>
          getters.doesCriterionMatchSelection(criterion)
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
          (criterion) => getters.doesCriterionMatchSelection(criterion) === false
        )
        return matchingCriteria.length
      }
    },
  isCriterionSelected: (state, getters) => (criterion) => {
    return !!getters.getCriterionByEligibilityKey(criterion.criteriaKey).response
  },
}

export const actions = {
  async populate({ commit, state }, criteriaArray = []) {
    for (const criterion of criteriaArray) {
      const criteriaKey = criterion.criteriaKey
      criterion.criteriaKeyHash = await stringToHash(criteriaKey)
    }
    commit("populateCriterion", { criterionArray: criteriaArray })
  },

  clear({ commit, state }, criteriaArray = []) {
    commit("clearSelectedCriteria", {})
  },

  updateResponse({ commit }, { criteriaKey, response }) {
    commit("updateResponse", { criteriaKey, response })
  },
}
