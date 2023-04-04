---
title: ssa-supplemental-security-income-elder.title
headline: ssa-supplemental-security-income-elder.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - financial-hardship
source:
  name: ssa-supplemental-security-income-elder.source.name
  link: ssa-supplemental-security-income-elder.source.link
  isEnglish: ssa-supplemental-security-income-elder.source.linkIsEnglish

summary: ssa-supplemental-security-income-elder.summary
criticalApplicationInformation: ssa-supplemental-security-income-elder.criticalApplicationInformation

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
