---
title: ssa-retirement-benefits-spouse.title
headline: ssa-retirement-benefits-spouse.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - financial-hardship
source:
  name: ssa-retirement-benefits-spouse.source.name
  link: ssa-retirement-benefits-spouse.source.link
  isEnglish: ssa-retirement-benefits-spouse.source.linkIsEnglish

summary: ssa-retirement-benefits-spouse.summary
criticalApplicationInformation: ssa-retirement-benefits-spouse.criticalApplicationInformation

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: ssa-retirement-benefits-spouse.eligibility.label
    acceptableValues: [">62years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-retirement-benefits-spouse.eligibility.acceptableValues,
    ssa-retirement-benefits-spouse.eligibility.acceptableValues1]
  - criteriaKey: applicant_child_spouse_SS
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
