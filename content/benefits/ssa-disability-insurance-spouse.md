---
title: ssa-disability-insurance-spouse.title
headline: ssa-disability-insurance-spouse.headline
tags:
  - financial assistance
lifeEvents:
  - disability
  - loss-of-job-and-low-income
source:
  name: ssa-disability-insurance-spouse.source.name
  link: https://www.ssa.gov/benefits/disability/

summary: ssa-disability-insurance-spouse.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: ssa-disability-insurance-spouse.eligibility.label
    acceptableValues: [">62years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-disability-insurance-spouse.eligibility.acceptableValues, 
    ssa-disability-insurance-spouse.eligibility.acceptableValues1]
  - criteriaKey: applicant_child_spouse_SS
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
