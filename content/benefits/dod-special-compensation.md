---
title: dod-special-compensation.title
headline: dod-special-compensation.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - disability
  - military-service
  - financial-hardship
source:
  name: dod-special-compensation.source.name
  link: dod-special-compensation.source.link
  isEnglish: dod-special-compensation.source.linkIsEnglish

summary: dod-special-compensation.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_served_in_active_military
    label: dod-special-compensation.eligibility.label1
    acceptableValues: [dod-special-compensation.eligibility.acceptableValues]
  - criteriaKey: applicant_service_status
    acceptableValues:
      [dod-special-compensation.eligibility.acceptableValues1]
  - criteriaKey: applicant_service_disability
    acceptableValues: [true]

---
