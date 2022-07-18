---
title: ssa-survivor-benefits-spouse.title
headline: ssa-survivor-benefits-spouse.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
source:
  name: ssa-survivor-benefits-spouse.source.name
  link: ssa-survivor-benefits-spouse.source.link

summary: ssa-survivor-benefits-spouse.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: [ssa-survivor-benefits-spouse.eligibility.acceptableValues]
  - criteriaKey: applicant_date_of_birth
    label: ssa-survivor-benefits-spouse.eligibility.label
    acceptableValues: [">60years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-survivor-benefits-spouse.eligibility.acceptableValues1, 
    ssa-survivor-benefits-spouse.eligibility.acceptableValues2]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
  - criteriaKey: applicant_marriage_length
    acceptableValues: [true]
---
