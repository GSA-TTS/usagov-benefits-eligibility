---
title: "Lump-Sum Death Benefit"
headline: "Need text here"
tags:
  - "financial assistance"
lifeEvents:
  - "death-of-a-loved-one"
source:
  name: "Social Security Administration"
  link: https://www.ssa.gov/benefits/survivors/ifyou.html#h7

summary: "The surviving spouse of a deceased person who qualified for Social Security benefits may be eligible for a $255 financial assistance."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: deceased_date_of_death
    label: "The deceased died within the last two years."
    acceptableValues: [<2years]
  - criteriaKey: applicant_relationship
    acceptableValues: ["spouse", 
    "child"]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
