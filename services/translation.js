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

export default translateObject
