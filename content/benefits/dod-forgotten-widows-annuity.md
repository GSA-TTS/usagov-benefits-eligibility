---
title: dod-forgotten-widows-annuity.title
headline: dod-forgotten-widows-annuity.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
  - financial-hardship
source:
  name: dod-forgotten-widows-annuity.source.name
  link: dod-forgotten-widows-annuity.source.link
  isEnglish: dod-forgotten-widows-annuity.source.linkIsEnglish

summary: dod-forgotten-widows-annuity.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [dod-forgotten-widows-annuity.eligibility.acceptableValues]
    label: dod-forgotten-widows-annuity.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues: [dod-forgotten-widows-annuity.eligibility.acceptableValues1]
  - criteriaKey: deceased_date_of_death
    acceptableValues: ["<01-01-1978"]
    label: dod-forgotten-widows-annuity.eligibility.label1
  - criteriaKey: applicant_relationship
    acceptableValues: [dod-forgotten-widows-annuity.eligibility.acceptableValues2]
---
