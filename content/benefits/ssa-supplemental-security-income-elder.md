---
title: "Supplemental Security Income (SSI)"
headline: "Supplemental Security Income (SSI)"
tags: 
- "financial assistance"
lifeEvents: 
- "retirement"
- "loss-of-job-and-low-income"
- "late-adulthood"
source:
  name: "Social Security Administration"
  link: https://www.ssa.gov/benefits/ssi/65older.html

summary: "Provides financial assistance to older, blind, and people with disabilities to help meet basic needs for food, clothing, and shelter."

eligibility:
# In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
- criteriaKey: applicant_date_of_birth
  label: "You are at least 65 years old."
  acceptableValues: [true]
- criteriaKey: applicant_income
  acceptableValues: [true]
- criteriaKey: applicant_citizen_status
  acceptableValues: [true]

---
