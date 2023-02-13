---
title: ssa-survivor-benefits-parents.title
headline: ssa-survivor-benefits-parents.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - financial-hardship
source:
  name: ssa-survivor-benefits-parents.source.name
  link: ssa-survivor-benefits-parents.source.link
  isEnglish: ssa-survivor-benefits-parents.source.linkIsEnglish

summary: ssa-survivor-benefits-parents.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: [ssa-survivor-benefits-parents.eligibility.acceptableValues]
  - criteriaKey: applicant_date_of_birth
    label: ssa-survivor-benefits-parents.eligibility.label
    acceptableValues: [">62years"]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
