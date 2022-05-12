---
title: ssa-disability-insurance-child.title
headline: ssa-disability-insurance-child.headline
tags:
  - financial assistance
lifeEvents:
  - disability
  - loss-of-job-and-low-income
source:
  name: ssa-disability-insurance-child.source.name
  link: https://www.ssa.gov/benefits/disability/

summary: ssa-disability-insurance-child.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: ssa-disability-insurance-child.eligibility.label
    acceptableValues: ["<18years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-disability-insurance-child.eligibility.acceptableValues]
  - criteriaKey: applicant_child_spouse_SS
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
