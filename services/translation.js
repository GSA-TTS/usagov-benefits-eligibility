/* istanbul ignore file */
function translateObject(object, delimeter = "") {
  // function must be bound
  // need to go through the object and translate each key
  if (Object.hasOwnProperty.call(object, "path")) {
    delimeter = object.path.split("/").pop()
  }
  for (const key in object) {
    const value = object[key]
    switch (typeof value) {
      case "string":
        if (value.includes(delimeter + ".")) {
          object[key] = this.$t(value)
        }
        break
      case "object":
        if (value !== null) {
          translateObject.call(this, value, delimeter)
        }
        break
      case "array":
        for (const item in value) {
          translateObject.call(this, value[item], delimeter)
        }
        break
      default:
        break
    }
  }
  return object
}

function translateCsv(csvRows) {
  for (let i = 0; i < csvRows.length; i++) {
    const newRow = csvRows[i]
    newRow.label = this.$t(newRow.criteriaKey.label)
    if (newRow.values.includes(";")) {
      newRow.values = newRow.values.split(";")
      let newRowValueString = ""
      for (const value of newRow.values) {
        newRowValueString += this.$t(value) + "; "
      }
      newRow.values = newRowValueString.slice(0, -4)
    }
    csvRows[i] = newRow
  }
  return csvRows
}

function buildResponseArray(criteriaFile) {
  const responseArray = []
  for (const index in criteriaFile) {
    const object = criteriaFile[index]
    if((object.values.match(/;/g) || []).length > 1) {
      const valuesArr = object.values.split(";")
      for (const value of valuesArr) {
        if(value !== "") {
          responseArray.push(value)
        }
      }
    }
  }
  return responseArray
}

module.exports = {
  tObj: translateObject,
  tCsv: translateCsv,
  bRAr: buildResponseArray,
}
