---
title: va-medallion.title
headline: va-medallion.headline
tags:
  - burial and funeral assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
  - financial-hardship
source:
  name: va-medallion.source.name
  link: va-medallion.source.link
  isEnglish: va-medallion.source.linkIsEnglish

summary: va-medallion.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [va-medallion.eligibility.acceptableValues]
    label: va-medallion.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues:
      [
        va-medallion.eligibility.acceptableValues1,
        va-medallion.eligibility.acceptableValues2,
        va-medallion.eligibility.acceptableValues3,
      ]
  - criteriaKey: deceased_grave_headstone
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: [va-medallion.eligibility.acceptableValues4, 
    va-medallion.eligibility.acceptableValues5, 
    va-medallion.eligibility.acceptableValues6, 
    va-medallion.eligibility.acceptableValues7, 
    va-medallion.eligibility.acceptableValues8]
---
