---
title: "Ticket to Work Program"
headline: "Ticket to Work Program"
tags: 
- "training and jobs"
lifeEvents: 
- "disability"
source:
  name: "Social Security Administration"
  link: "https://www.ssa.gov/work/"

summary: "Social Security's Ticket to Work Program supports career development for Social Security disability beneficiaries age 18 through 64 who want to work."

eligibility:
# In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
- criteriaKey: applicant_disability
  acceptableValues: [true]
- criteriaKey: applicant_ability_to_work
  acceptableValues: [true]
- criteriaKey: applicant_date_of_birth
  label: "You are 18 to 64 years old."
- criteriaKey: applicant_citizen_status
  acceptableValues: [true]

---
