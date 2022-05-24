---
title: ssa-disability-insurance-mothers-fathers.title
headline: ssa-disability-insurance-mothers-fathers.headline
tags:
  - financial assistance
lifeEvents:
  - disability
  - loss-of-job-and-low-income
source:
  name: ssa-disability-insurance-mothers-fathers.source.name
  link: ssa-disability-insurance-mothers-fathers.source.link

summary: ssa-disability-insurance-mothers-fathers.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_marital_status
    acceptableValues: [ssa-disability-insurance-mothers-fathers.eligibility.acceptableValues, 
    ssa-disability-insurance-mothers-fathers.eligibility.acceptableValues1]
  - criteriaKey: applicant_care_for_child
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
