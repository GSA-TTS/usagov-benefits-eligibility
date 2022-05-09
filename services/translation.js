const translateObject = (object, t) => {
    for (const key in object) {
        if (typeof object[key] === "object") {
            translateObject(object[key])
        } else if (typeof object[key] === "array") {
            for (const item of object[key]) {
                translateObject(item)
            }
        } else {
            if (typeof object[key] === "string" && object[key].indexOf(".") !== -1) {
                object[key] = t(object[key])
            }
        }
    }
    return object
  }

export default translateObject