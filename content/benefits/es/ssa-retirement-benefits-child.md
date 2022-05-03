---
title: "Retirement Benefits for Child"
headline: "Retirement Benefits for Child"
tags:
  - "financial assistance"
lifeEvents:
  - "retirement"
  - "loss-of-job-and-low-income"
source:
  name: "Social Security Administration"
  link: https://www.ssa.gov/benefits/retirement/

summary: "Social Security is part of the retirement plan for almost every American worker. It provides replacement income for qualified retirees and their families."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: "You are under 18 years old (under 19 years old if you are a full-time student in an elementary or secondary school)."
    acceptableValues: ["<18years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: ["unmarried"]
  - criteriaKey: applicant_child_spouse_SS
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---