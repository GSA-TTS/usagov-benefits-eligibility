---
title: ssa-supplemental-security-income-child.title
headline: ssa-supplemental-security-income-child.headline
tags:
  - financial assistance
lifeEvents:
  - disability
  - loss-of-job-and-low-income
source:
  name: ssa-supplemental-security-income-child.source.name
  link: https://www.ssa.gov/benefits/disability/apply-child.html

summary: ssa-supplemental-security-income-child.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_ability_to_work
    acceptableValues: [true]
  - criteriaKey: applicant_date_of_birth
    label: ssa-supplemental-security-income-child.eligibility.label
    acceptableValues: [<18years]
  - criteriaKey: applicant_income
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
