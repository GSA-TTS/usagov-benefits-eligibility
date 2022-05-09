---
title: ssa-survivor-benefits-child.title
headline: ssa-survivor-benefits-child.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
source:
  name: ssa-survivor-benefits-child.source.name
  link: https://www.ssa.gov/benefits/survivors/ifyou.html#h4

summary: ssa-survivor-benefits-child.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: [ssa-survivor-benefits-child.eligibility.acceptableValues]
  - criteriaKey: applicant_date_of_birth
    label: ssa-survivor-benefits-child.eligibility.label
    acceptableValues: [<18years]
  - criteriaKey: applicant_marital_status
    acceptableValues: [unmarried]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
