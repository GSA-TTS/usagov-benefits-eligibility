---
title: ssa-supplemental-security-income_adult.title
headline: ssa-supplemental-security-income_adult.headline
tags:
  - financial assistance
lifeEvents:
  - disability
  - loss-of-job-and-low-income
source:
  name: ssa-supplemental-security-income_adult.source.name
  link: ssa-supplemental-security-income_adult.source.link
  isEnglish: ssa-supplemental-security-income_adult.source.linkIsEnglish

summary: ssa-supplemental-security-income_adult.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_ability_to_work
    acceptableValues: [true]
  - criteriaKey: applicant_date_of_birth
    label: ssa-supplemental-security-income_adult.eligibility.label
    acceptableValues: [">18years", "<64years"]
  - criteriaKey: applicant_income
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
