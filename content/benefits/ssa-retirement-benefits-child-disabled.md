---
title: ssa-retirement-benefits-child-disabled.title
headline: ssa-retirement-benefits-child-disabled.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - late-adulthood
  - disability
  - loss-of-job-and-low-income
source:
  name: ssa-retirement-benefits-child-disabled.source.name
  link: ssa-retirement-benefits-child-disabled.source.link
  isEnglish: ssa-retirement-benefits-child-disabled.source.linkIsEnglish

summary: ssa-retirement-benefits-child-disabled.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: ssa-retirement-benefits-child-disabled.eligibility.label
    acceptableValues: [">18years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-retirement-benefits-child-disabled.eligibility.acceptableValues]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_ability_to_work
    acceptableValues: [true]
  - criteriaKey: applicant_child_spouse_SS
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
