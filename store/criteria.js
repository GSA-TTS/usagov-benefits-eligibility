import Vue from "vue"
import stringToHash from "../services/stringToHash"
import { validateDateAgainstAcceptance } from "~/services/dateHelper"

export const state = () => ({
  eligibilityCriteria: {},
  responsesHash: {},
  hashToCriteria: {},
  active: false,
})

export const mutations = {
  // payload must include a criteriaKey and the new response / selected value
  updateResponse(theState, { criteriaKey, response }) {
    Vue.set(theState.eligibilityCriteria[criteriaKey], "response", response)
    const hashedData = getters.getHashResponses(theState)
    localStorage.setItem("responseData", JSON.stringify(hashedData))
    theState.active = true
  },

  preloadedResponses(theState, { valueArray }) {
    for (const param of valueArray) {
      const criteriaKey = theState.hashToCriteria[param.criteriaKeyHash]
      if (theState.eligibilityCriteria[criteriaKey] != null) {
        Vue.set(theState.eligibilityCriteria[criteriaKey], "response", param.response)
        theState.active = true
      }
    }

    const hashedData = getters.getHashResponses(theState)
    localStorage.setItem("responseData", JSON.stringify(hashedData))
  },

  populateResponseHash(theState, { responseArr }) {
    for (const response in responseArr) {
      Vue.set(theState.responsesHash, response, responseArr[response])
    }
  },

  populateCriterion(theState, { criterionArray }) {
    let storedData = {}

    if (process.client && localStorage.getItem("responseData")) {
      storedData = JSON.parse(localStorage.getItem("responseData"))
    }

    for (const criterion of criterionArray) {
      const criteriaKey = criterion.criteriaKey
      criterion.response = storedData[criterion.criteriaKeyHash] ? storedData[criterion.criteriaKeyHash] : null
      Vue.set(theState.eligibilityCriteria, criteriaKey, criterion)
      Vue.set(theState.hashToCriteria, criterion.criteriaKeyHash, criteriaKey)
    }
  },

  clearSelectedCriteria(theState) {
    for (const criteriaKey in theState.eligibilityCriteria) {
      Vue.set(theState.eligibilityCriteria[criteriaKey], "response", null)
    }
    localStorage.setItem("responseData", JSON.stringify({}))
    theState.active = false
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
  doesCriterionDateMatch: (theState, theGetters) => (criterion) => {
    if (!theGetters.isCriterionSelected(criterion) || !criterion.acceptableValues) {
      return null
    }
    // need this to be swapped if passing in a state I.E. testing
    const userInputDate = criterion.test
      ? Date.parse(theGetters.getResponseByEligibilityKey(theState)(criterion.criteriaKey))
      : Date.parse(theGetters.getResponseByEligibilityKey(criterion.criteriaKey))
    return validateDateAgainstAcceptance({
      criterion,
      userInputDate,
    })
  },
  doesCriterionMatchSelection: (_theState, theGetters) => (criterion) => {
    if (theGetters.getCriterionByEligibilityKey(criterion.criteriaKey).type === "date") {
      return theGetters.doesCriterionDateMatch(criterion)
    } else {
      if (!criterion.acceptableValues) {
        return null
      }
      if (!theGetters.isCriterionSelected(criterion)) {
        return null
      }
      return !!criterion.acceptableValues.find(
        (val) => val === theGetters.getCriterionByEligibilityKey(criterion.criteriaKey).response
      )
    }
  },
  getCriterionByEligibilityKey: (theState) => (criteriaKey) => {
    return (
      theState.eligibilityCriteria[criteriaKey] || {
        key: `error-missing-key--${criteriaKey}`,
        label: `Key named "${criteriaKey}" not found`,
        values: "",
        type: "missing",
      }
    )
  },
  getResponseByEligibilityKey: (theState) => (criteriaKey) => {
    return (
      theState.eligibilityCriteria[criteriaKey].response || {
        key: `error-missing-key--${criteriaKey}`,
        label: `Key named "${criteriaKey}" not found`,
        values: "",
        type: "missing",
      }
    )
  },
  getHashResponses: (theState) => {
    const responses = {}
    for (const criteriaKey in theState.eligibilityCriteria) {
      const criteria = theState.eligibilityCriteria[criteriaKey]
      if (criteria && criteria.response) {
        responses[criteria.criteriaKeyHash] = criteria.response
      }
    }
    return responses
  },
  getTotalEligibleCriteria:
    (_theState, theGetters) =>
    (benefitEligibilityCriteria = []) => {
      if (benefitEligibilityCriteria && benefitEligibilityCriteria.length < 1) {
        return 0
      } else {
        const matchingCriteria = benefitEligibilityCriteria.filter((criterion) =>
          theGetters.doesCriterionMatchSelection(criterion)
        )
        return matchingCriteria.length
      }
    },
  getTotalIneligibleCriteria:
    (_theState, theGetters) =>
    (benefitEligibilityCriteria = []) => {
      if (benefitEligibilityCriteria && benefitEligibilityCriteria.length < 1) {
        return 0
      } else {
        const matchingCriteria = benefitEligibilityCriteria.filter(
          (criterion) => theGetters.doesCriterionMatchSelection(criterion) === false
        )
        return matchingCriteria.length
      }
    },
  isCriterionSelected: (_theState, theGetters) => (criterion) => {
    return !!theGetters.getCriterionByEligibilityKey(criterion.criteriaKey).response
  },
  getActiveState: (theState) => {
    return theState.active
  },
}

export const actions = {
  async populateResponseHash({ commit, _theState }, responseArray) {
    const newArr = {}
    for (let i = 0; i < responseArray.length; i++) {
      const response = responseArray[i]
      const en = this.$i18n.t(response, "en")
      const es = this.$i18n.t(response, "es")
      const tKey = response
      const hash = await stringToHash(tKey)
      newArr[hash] = { en, es, tKey }
    }
    commit("populateResponseHash", { responseArr: newArr })
  },
  async populate({ commit, _theState }, criteriaArray = []) {
    for (const criterion of criteriaArray) {
      const criteriaKey = criterion.criteriaKey
      criterion.criteriaKeyHash = await stringToHash(criteriaKey)
    }
    commit("populateCriterion", { criterionArray: criteriaArray })
  },

  clear({ commit, _theState }, _criteriaArray = []) {
    commit("clearSelectedCriteria", {})
  },

  updateResponse({ commit }, { criteriaKey, response }) {
    commit("updateResponse", { criteriaKey, response })
  },
}
