---
title: "Survivors Benefits for Parents"
headline: "Survivors Benefits for Parents"
tags:
  - "financial assistance"
lifeEvents:
  - "death-and-burial"
source:
  name: "Social Security Administration"
  link: https://www.ssa.gov/benefits/survivors/ifyou.html#h5

summary: "Social Security survivors benefits are paid to parents of eligible workers."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: [parent]
  - criteriaKey: deceased_date_of_death
    label: "You are at least 62 years old and were dependent on the deceased for at least half of your support."
    acceptableValues: [">62years"]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
