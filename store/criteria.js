import Vue from "vue"
import { toDate, isEqual, isBefore, isAfter, sub } from "date-fns"
import stringToHash from "../services/stringToHash"

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

  populateCriterion(state, { criterion, hash, storedData }) {
    // TODO shouldn't have to load from storage every time here.
    // populate action runs on server so it storeData wont be populated here on prod builds.
    if (process.client && localStorage.getItem("responseData")) {
      storedData = JSON.parse(localStorage.getItem("responseData"))
    }

    const criteriaKey = criterion.criteriaKey
    criterion.response = storedData[hash] ? storedData[hash] : null
    criterion.criteriaKeyHash = hash

    Vue.set(state.eligibilityCriteria, criteriaKey, criterion)
    Vue.set(state.hashToCriteria, hash, criteriaKey)
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
    const DETERMINERS = ["months", "days", "years"]
    let determiner = null
    let checkResult = null
    // need to check the date
    for (const index in criterion.acceptableValues) {
      const value = criterion.acceptableValues[index].toLowerCase()
      const operator = value[0]
      const encodedDate = value.substring(1)

      // date that the users input will be checked against (either the acceptable criteria static
      //   input or it will be calculated based on the duration in the acceptable criteria)
      let acceptanceDate = null

      // need to check if there is a determiner in the acceptable value
      if (
        DETERMINERS.some((detChar) => {
          if (encodedDate.includes(detChar)) {
            determiner = detChar
            return true
          }
          return false
        })
      ) {
        const amount = parseInt(value.substring(1, value.indexOf(determiner)))
        const today = new Date(Date.now())
        const changeVal = {}
        changeVal[determiner] = amount
        acceptanceDate = sub(today, changeVal)
      } else {
        acceptanceDate = Date.parse(encodedDate)
      }
      // checking to see if the date from the content file is valid
      if (isNaN(acceptanceDate)) {
        checkResult = null
      }
      // checking to see if the inputted date is valid / complete
      if (!isNaN(userInputDate)) {
        userInputDate = toDate(userInputDate)
        switch (operator) {
          case "=":
            checkResult = isEqual(userInputDate, acceptanceDate)
            break
          case ">":
            // handling the use case of a user being <60Y & >40Y also being reflected as a range
            // >01-01-1962, <01-01-1982
            checkResult = DETERMINERS.includes(determiner)
              ? isAfter(acceptanceDate, userInputDate)
              : isAfter(userInputDate, acceptanceDate)
            break
          case "<":
            checkResult = DETERMINERS.includes(determiner)
              ? isBefore(acceptanceDate, userInputDate)
              : isBefore(userInputDate, acceptanceDate)
            break
          default:
            checkResult = null
            break
        }
        if (checkResult === false) {
          break
        }
      }
    }
    return checkResult
  },
  doesCriterionMatchSelection: (state, getters) => (criterion) => {
    if (!getters.isCriterionSelected(criterion)) {
      return null
    }

    if (getters.getCriterionByEligibilityKey(criterion.criteriaKey).type === "date") {
      return getters.doesCriterionDateMatch(criterion.criteriaKey)
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
    let storedData = {}

    if (process.client && localStorage.getItem("responseData")) {
      storedData = JSON.parse(localStorage.getItem("responseData"))
    }

    for (const criterion of criteriaArray) {
      const criteriaKey = criterion.criteriaKey
      const hash = await stringToHash(criteriaKey)
      commit("populateCriterion", { criterion, hash, storedData })
    }
  },

  clear({ commit, state }, criteriaArray = []) {
    commit("clearSelectedCriteria", {})
  },

  updateResponse({ commit }, { criteriaKey, response }) {
    commit("updateResponse", { criteriaKey, response })
  },
}
