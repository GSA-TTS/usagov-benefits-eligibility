import { toDate, isEqual, isBefore, isAfter, sub, isFuture, isExists } from "date-fns"

const DETERMINERS = ["months", "days", "years"]

function validateDateAgainstAcceptance({ criterion, userInputDate }) {
  let determiner = null
  let checkResult = null

  const selectedResult = checkSelectedAndExists(userInputDate)
  if (selectedResult !== true) {
    return selectedResult
  } else {
    for (const index in criterion.acceptableValues) {
      const value = criterion.acceptableValues[index].toLowerCase()
      const operator = value[0]
      const encodedDate = value.substring(1)
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
        acceptanceDate = figureOutAcceptanceDate(encodedDate, determiner)
      } else {
        acceptanceDate = toDate(Date.parse(encodedDate))
      }
      checkResult = checkUserDate(userInputDate, determiner, operator, acceptanceDate)
      // checking to see if the inputted date is valid / complete
      if (checkResult === false) {
        break
      }
    }
    return checkResult
  }
}

function checkSelectedAndExists(userInputDate) {
  if (userInputDate === "" || userInputDate === null) {
    return null
  }
  userInputDate = toDate(userInputDate)
  const dateData = [userInputDate.getFullYear(), userInputDate.getMonth(), userInputDate.getDate()]
  return isExists(...dateData)
}

function figureOutAcceptanceDate(value, determiner) {
  const amount = parseInt(value.substring(0, value.indexOf(determiner)))
  const today = new Date(Date.now())
  const changeVal = {}
  changeVal[determiner] = amount
  return sub(today, changeVal)
}

function checkUserDate(userInputDate, determiner, operator, acceptanceDate) {
  
  userInputDate = toDate(userInputDate)
  // first will check if the users inputted date is in the future
  if (isFuture(userInputDate)) {
    return false
  }
  return applyOperatorToDate(userInputDate, determiner, operator, acceptanceDate)
}

function applyOperatorToDate(userInputDate, determiner, operator, acceptanceDate) {
  switch (operator) {
    case "=":
      return isEqual(userInputDate, acceptanceDate)
    case ">":
      // handling the use case of a user being <60Y & >40Y also being reflected as a range
      // >01-01-1962, <01-01-1982
      return DETERMINERS.includes(determiner)
        ? isAfter(acceptanceDate, userInputDate)
        : isAfter(userInputDate, acceptanceDate)
    case "<":
      return DETERMINERS.includes(determiner)
        ? isBefore(acceptanceDate, userInputDate)
        : isBefore(userInputDate, acceptanceDate)
    default:
      return null
  }
}

function checkDateValid(userInputDate) {
  const checkDate = toDate(Date.parse(userInputDate))
  if (isNaN(checkDate)) {
    return "Please enter a valid date."
  }
  if (isFuture(checkDate)) {
  return "Please enter a valid date."
  }
  return ""
}

export { validateDateAgainstAcceptance, checkDateValid }
