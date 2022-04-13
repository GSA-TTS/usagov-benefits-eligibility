import { validateDateAgainstAcceptance, checkDateValid } from "~/services/dateHelper"

function getTestDateString(daysOffsetFromToday) {
  const testDte = new Date()
  testDte.setDate(testDte.getDate() + daysOffsetFromToday)
  const testDate = testDte.toLocaleDateString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" })
  return testDate.replaceAll("/", "-")
}

describe("dateHelper", () => {
  it("should return false when acceptable critieria is invalid", () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: ["=10-10-2020"],
      response: "02-25-2021",
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
      response: "02-25-2021",
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(false)
  })

  it("should return null when invalid acceptance date", async () => {
    const criterion = {
      criteriaKey: "applicant_eligible_senior",
      criteriaKeyHash: "9e63db02",
      type: "date",
      acceptableValues: [""],
      response: "02-25-2021",
      TEST: true,
    }
    const ret = validateDateAgainstAcceptance({
      criterion,
      userInputDate: Date.parse(criterion.response),
    })
    expect(ret).toBe(null)
  })

  it("should return false when future input date", async () => {
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

  it("should return null when invalid acceptance date", async () => {
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

  it("should return correct when invalid user date", async () => {
    const ret = checkDateValid("11-14-2021")
    expect(ret).toBe("")
    expect(checkDateValid("14-44-5000")).toBe("Please enter a valid date.")
    expect(checkDateValid("11-14-2025")).toBe("Please enter a valid date.")
  })
})
