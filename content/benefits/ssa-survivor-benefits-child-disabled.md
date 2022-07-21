---
title: ssa-survivor-benefits-child-disabled.title
headline: ssa-survivor-benefits-child-disabled.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - disability
source:
  name: ssa-survivor-benefits-child-disabled.source.name
  link: ssa-survivor-benefits-child-disabled.source.link
  isEnglish: ssa-survivor-benefits-child-disabled.source.linkIsEnglish

summary: ssa-survivor-benefits-child-disabled.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: [ssa-survivor-benefits-child-disabled.eligibility.acceptableValues]
  - criteriaKey: applicant_date_of_birth
    label: ssa-survivor-benefits-child-disabled.eligibility.label
    acceptableValues: [">18years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-survivor-benefits-child-disabled.eligibility.acceptableValues1]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_ability_to_work
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
