---
title: "Health Care Benefits"
headline: "Health Care Benefits"
tags: 
- "healthcare"
lifeEvents: 
- "bereavement"
source:
  name: "U.S. Department of Veteran Affairs"
  link: "https://www.va.gov/health-care/family-caregiver-benefits/"

summary: "If you are a surviving spouse or a child of a Veteran or service member, you may qualify for health care benefits, such as TRICARE or CHAMPVA."

eligibility:
# In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
- criteriaKey: deceased_served_in_active_military
  acceptableValues: ["was discharged under conditions other than dishonorable", "died while on active duty"]
- criteriaKey: applicant_relationship
  acceptableValues: ["spouse", "child"]
- criteriaKey: applicant_marital_status
  acceptableValues: ["unmarried", "widowed"]

---
