---
title: ssa-retirement-benefits-child.title
headline: ssa-retirement-benefits-child.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - loss-of-job-and-low-income
source:
  name: ssa-retirement-benefits-child.source.name
  link: https://www.ssa.gov/benefits/retirement/

summary: ssa-retirement-benefits-child.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: ssa-retirement-benefits-child.eligibility.label
    acceptableValues: ["<18years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-retirement-benefits-child.eligibility.acceptableValues]
  - criteriaKey: applicant_child_spouse_SS
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
