---
title: ssa-survivor-benefits-mothers-fathers.title
headline: ssa-survivor-benefits-mothers-fathers.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
source:
  name: ssa-survivor-benefits-mothers-fathers.source.name
  link: ssa-survivor-benefits-mothers-fathers.source.link

summary: ssa-survivor-benefits-mothers-fathers.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: [ssa-survivor-benefits-mothers-fathers.eligibility.acceptableValues]
  - criteriaKey: applicant_care_for_child
    acceptableValues: [true]
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-survivor-benefits-mothers-fathers.eligibility.acceptableValues1, 
    ssa-survivor-benefits-mothers-fathers.eligibility.acceptableValues2]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
