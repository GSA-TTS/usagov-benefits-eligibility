---
title: ssa-survivor-benefits-spouse-disabled.title
headline: ssa-survivor-benefits-spouse-disabled.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - disability
source:
  name: ssa-survivor-benefits-spouse-disabled.source.name
  link: ssa-survivor-benefits-spouse-disabled.source.link
  isEnglish: ssa-survivor-benefits-spouse-disabled.source.linkIsEnglish


summary: ssa-survivor-benefits-spouse-disabled.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: [ssa-survivor-benefits-spouse-disabled.eligibility.acceptableValues]
  - criteriaKey: applicant_date_of_birth
    label: ssa-survivor-benefits-spouse-disabled.eligibility.label
    acceptableValues: [">50years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-survivor-benefits-spouse-disabled.eligibility.acceptableValues1, 
    ssa-survivor-benefits-spouse-disabled.eligibility.acceptableValues2]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_ability_to_work
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
