---
title: dod-retirement-and-disability-payments.title
headline: dod-retirement-and-disability-payments.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - disability
  - military-service
  - financial-hardship
source:
  name: dod-retirement-and-disability-payments.source.name
  link: dod-retirement-and-disability-payments.source.link
  isEnglish: dod-retirement-and-disability-payments.source.linkIsEnglish

summary: dod-retirement-and-disability-payments.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: dod-retirement-and-disability-payments.eligibility.label
    acceptableValues: [">60years"]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_served_in_active_military
    label: dod-retirement-and-disability-payments.eligibility.label1
    acceptableValues: [dod-retirement-and-disability-payments.eligibility.acceptableValues]
  - criteriaKey: applicant_service_status
    acceptableValues:
      [dod-retirement-and-disability-payments.eligibility.acceptableValues1, 
      dod-retirement-and-disability-payments.eligibility.acceptableValues2]

---
