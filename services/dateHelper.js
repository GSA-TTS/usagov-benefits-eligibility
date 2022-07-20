import { toDate, isEqual, isBefore, isAfter, sub, isFuture, isExists } from "date-fns"

const DETERMINERS = ["months", "days", "years"]
const ERRORMSG = "Please enter a valid date."
const INCOMPLETE = "Please enter a complete date."

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
  userInputDate = toDate(new Date(userInputDate))
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
  userInputDate = toDate(new Date(userInputDate))
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

function validInputs(month, day, year) {
  let returnValue = ""
  if (month !== "") {
    month = parseInt(month)
    if (month < 1 || month > 12) {
      return ERRORMSG
    }
  } else {
    returnValue = INCOMPLETE
  }
  if (day !== "") {
    day = parseInt(day)
    if (day < 1 || day > 31) {
      return ERRORMSG
    }
  } else {
    returnValue = INCOMPLETE
  }
  if (year !== "") {
    year = parseInt(year)
    if (year < 1 || year >= new Date().getFullYear()) {
      return ERRORMSG
    }
  } else {
    returnValue = INCOMPLETE
  }
  return returnValue
}

function checkDateValid(month, day, year) { 
  const invalidDateInput = [month, day, year].some(element => {
    if(element !== "") {
      return !/\d+$/.test(element)
    } else return false
  })
  if (invalidDateInput) {
    return ERRORMSG
  } 
  const validityCheck = validInputs(month, day, year)  
  if (validityCheck !== INCOMPLETE && validityCheck !== ERRORMSG) {
    const checkDate = toDate(Date.parse(month, day, year))
    if (isNaN(checkDate)) {
      return ERRORMSG
    }
    if (isFuture(checkDate)) {
      return ERRORMSG
    }
    return ""
  }
  return validityCheck === INCOMPLETE ? "" : validityCheck
}

export { validateDateAgainstAcceptance, checkDateValid }
