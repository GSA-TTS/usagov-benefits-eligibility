---
title: "Survivors Benefits for Spouse with Disabilities"
headline: "Survivors Benefits for Spouse with Disabilities"
tags:
  - "financial assistance"
lifeEvents:
  - "death-and-burial"
  - "disability"
source:
  name: "Social Security Administration"
  link: https://www.ssa.gov/benefits/survivors/ifyou.html#h2

summary: "Social Security survivors benefits are paid to a surviving spouse of eligible workers, and under certain circumstances, to a surviving divorced spouse of eligible workers."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: [spouse]
  - criteriaKey: applicant_date_of_birth
    label: "You are at least 50 years old."
    acceptableValues: [">50years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: ["widowed", "divorced"]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_ability_to_work
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
