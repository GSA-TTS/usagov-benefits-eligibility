---
title: ssa-supplemental-security-income-elder.title
headline: ssa-supplemental-security-income-elder.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - loss-of-job-and-low-income
  - late-adulthood
source:
  name: ssa-supplemental-security-income-elder.source.name
  link: https://www.ssa.gov/benefits/ssi/65older.html

summary: ssa-supplemental-security-income-elder.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: ssa-supplemental-security-income-elder.eligibility.label
    acceptableValues: [">65years"]
  - criteriaKey: applicant_income
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
