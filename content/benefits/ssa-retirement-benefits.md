---
title: ssa-retirement-benefits.title
headline: ssa-retirement-benefits.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - financial-hardship
source:
  name: ssa-retirement-benefits.source.name
  link: ssa-retirement-benefits.source.link
  isEnglish: ssa-retirement-benefits.source.linkIsEnglish

summary: ssa-retirement-benefits.summary
criticalApplicationInformation: ssa-retirement-benefits.criticalApplicationInformation

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: applicant_date_of_birth
    label: ssa-retirement-benefits.eligibility.label
    acceptableValues: [">62years"]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
