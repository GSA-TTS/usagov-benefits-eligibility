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
  for (let i = 0; i < csvRows.body.length; i++) {
    const newRow = csvRows.body[i]
    newRow.label = this.$t(newRow.criteria.criteriaKey.label)
    if(newRow.values.includes(';')) {
      newRow.values = newRow.values.split(';')
      let newRowValueString = ''
      for(let j = 0; j < newRow.values.length; j++) {
        newRowValueString += this.$t(newRow.values[j]) + '; '
      }
      newRow.values = newRowValueString.slice(0, -4)
    }
    csvRows.body[i] = newRow
  }
  return csvRows
}

module.exports = {
  tObj: translateObject,
  tCsv: translateCsv
} 
