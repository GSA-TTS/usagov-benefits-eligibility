export function getDateByOffset(offset) {
  var date = new Date(Date.now())
  var n = Number(offset)

  if (n !== n || date.toString() == "Invalid Date") {
    return date
  }

  date.setDate(date.getDate() + n)
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()

  return { month: month.toString(), day: day.toString(), year: year.toString() }
}
