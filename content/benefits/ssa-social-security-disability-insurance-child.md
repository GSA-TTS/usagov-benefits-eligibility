---
title: "Social Security Disability Insurance for Child"
headline: "Social Security Disability Insurance for Child"
tags: 
- "financial assistance"
lifeEvents: 
- "disability"
source:
  name: "Social Security Administration"
  link: "https://www.ssa.gov/benefits/disability/"

summary: "Provides financial assistance to people with disabilities and their family members."

eligibility:
# In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
- criteriaKey: applicant_date_of_birth
  label: "You are under 18 years old."
- criteriaKey: applicant_marital_status
  acceptableValues: ["unmarried"]
- criteriaKey: applicant_child_parents_benefits
  acceptableValues: [true]
- criteriaKey: applicant_citizen_status
  acceptableValues: [true]
  
---
