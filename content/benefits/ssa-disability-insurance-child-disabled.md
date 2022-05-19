---
title: ssa-disability-insurance-child-disabled.title
headline: ssa-disability-insurance-child-disabled.headline
tags:
  - financial assistance
lifeEvents:
  - disability
  - loss-of-job-and-low-income
source:
  name: ssa-disability-insurance-child-disabled.source.name
  link: ssa-disability-insurance-child-disabled.source.link

summary: ssa-disability-insurance-child-disabled.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: ssa-disability-insurance-child-disabled.eligibility.label
    acceptableValues: [">18years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-disability-insurance-child-disabled.eligibility.acceptableValues]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_ability_to_work
    acceptableValues: [true]
  - criteriaKey: applicant_child_spouse_SS
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
