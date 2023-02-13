---
title: va-burial-flag.title
headline: va-burial-flag.headline
tags:
  - memorial
lifeEvents:
  - death-of-a-loved-one
  - military-service
  - financial-hardship
source:
  name: va-burial-flag.source.name
  link: va-burial-flag.source.link
  isEnglish: va-burial-flag.source.linkIsEnglish

summary: va-burial-flag.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [va-burial-flag.eligibility.acceptableValues]
    label: va-burial-flag.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues:
      [
        va-burial-flag.eligibility.acceptableValues1,
        va-burial-flag.eligibility.acceptableValues2,
        va-burial-flag.eligibility.acceptableValues3,
      ]
  - criteriaKey: applicant_relationship
    acceptableValues: [va-burial-flag.eligibility.acceptableValues4, 
    va-burial-flag.eligibility.acceptableValues5, 
    va-burial-flag.eligibility.acceptableValues6, 
    va-burial-flag.eligibility.acceptableValues7, 
    va-burial-flag.eligibility.acceptableValues8]
---
