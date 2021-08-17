---
title: "Veteran’s Burial Allowance"
headline: "Burial marker for veterans"
tags: 
- "burial and funeral assistance"
lifeEvents: 
- "death-and-burial"
source:
  name: "U.S. Department of Veteran Affairs"
  link: "https://www.va.gov/burials-memorials/veterans-burial-allowance/"

summary: "Assistance may be available to help with burial, funeral, and transportation costs of a deceased veteran."

eligibility:
# In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
- criteriaKey: deceased_served_in_active_military
  acceptableValues: ["was discharged under conditions other than dishonorable"]
- criteriaKey: deceased_death_circumstance
  acceptableValues: ["(1) died as a result of a service-connected disability", "(2) died while receiving or traveling to receive VA care", "(3) died while eligible, pending to receive or receiving VA compensation / pension"]
- criteriaKey: deceased_date_of_funeral
  label: "The deceased's funeral/burial was within the last two years."
- criteriaKey: applicant_relationship
  acceptableValues: ["spouse", "child", "parent", "other family member", "personal or official representative"]
- criteriaKey: applicant_paid_funeral_expenses
  acceptableValues: [true]
- criteriaKey: applicant_funeral_reimbursment
  acceptableValues: [true]


---

