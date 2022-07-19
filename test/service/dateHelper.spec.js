import { validateDateAgainstAcceptance, checkDateValid } from "~/services/dateHelper"

const MOCK_DATE = "02-25-2021"

function getTestDateString(daysOffsetFromToday) {
  const testDte = new Date()
  testDte.setDate(testDte.getDate() + daysOffsetFromToday)
  const testDate = testDte.toLocaleDateString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" })
  return new Date(testDate.replaceAll("/", "-"))
}

describe("dateHelper", () => {
  it("should return false when acceptable critieria is invalid", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: ["=10-10-2020"],
      response: MOCK_DATE,
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(false)
  })
  it("should return false when criteria is not met", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: ["<60years", ">40years"],
      response: "11-14-1900",
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(false)
  })
  it("should return true when criteria is passed (dynamic years)", () => {
    const testDate = getTestDateString(-(365 * 50))
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: ["<60years", ">40years"],
      response: testDate,
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(true)
  })
  it("should return true when criteria is passed (fixed years)", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: ["<01-01-1982", ">01-01-1962"],
      response: "11-14-1975",
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(true)
  })
  it("should return null when not selected", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      response: null,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: criterion.response,
    })
    expect(ret).toBe(null)
  })
  it("should return null when not complete", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: ["!01-01-1982"],
      response: "11-1",
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(null)
  })
  it("should return true when criteria is passed (same date)", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: ["=11-14-1999"],
      response: "11-14-1999",
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(true)
  })
  it("should return true when criteria is passed (dynamic months)", () => {
    const testDate = getTestDateString(-150)
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: ["<6months", ">4months"],
      response: testDate,
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(true)
  })
  it("should return true when criteria is passed (dynamic days)", () => {
    const testDate = getTestDateString(-29)
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: ["<30days", ">1days"],
      response: testDate,
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(true)
  })

  it("should call the correct function when a date", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: ["<30days", ">1days"],
      response: MOCK_DATE,
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(false)
  })

  it("should return null when invalid acceptance date", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: [""],
      response: MOCK_DATE,
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(null)
  })

  it("should return false when future input date", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: [">60years"],
      response: "02-25-2050",
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(false)
  })

  it("should return null when invalid acceptance date", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: [">11-14-1999"],
      response: "14-38-2021",
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: criterion.response,
    })
    expect(ret).toBe(false)
  })

  it("should return valid when valid user month", () => {
    const ret = checkDateValid("11", "", "")
    expect(ret).toBe("")
  })

  it("should return invalid when invalid user month", () => {
    const ret = checkDateValid("15", "", "")
    expect(ret).toBe("Please enter a valid date.")
  })

  it("should return valid when invalid user day", () => {
    const ret = checkDateValid("", "60", "")
    expect(ret).toBe("Please enter a valid date.")
  })

  it("should return invalid when invalid user day", () => {
    const ret = checkDateValid("", "14", "")
    expect(ret).toBe("")
  })

  it("should return valid when invalid user year", () => {
    const ret = checkDateValid("", "", "9999")
    expect(ret).toBe("Please enter a valid date.")
  })

  it("should return invalid when invalid user year", () => {
    const ret = checkDateValid("", "", "1950")
    expect(ret).toBe("")
  })

  it("should return invalid when invalid user year", () => {
    const ret = checkDateValid("11", "14", "9999")
    expect(ret).toBe("")
  })
})
