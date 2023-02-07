---
title: ssa-extra-help.title
headline: ssa-extra-help.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - financial_hardship
source:
  name: ssa-extra-help.source.name
  link: ssa-extra-help.source.link
  isEnglish: ssa-extra-help.source.linkIsEnglish

summary: ssa-extra-help.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: ssa-extra-help.eligibility.label
    acceptableValues: [">65years"]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_income
    acceptableValues: [true]
---
