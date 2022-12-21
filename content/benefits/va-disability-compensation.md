---
title: va-disability-compensation.title
headline: va-disability-compensation.headline
tags:
  - educational assistance
lifeEvents:
  - disability
  - military-service
  - financial-hardship
source:
  name: va-disability-compensation.source.name
  link: va-disability-compensation.source.link
  isEnglish: va-disability-compensation.source.linkIsEnglish

summary: va-disability-compensation.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_served_in_active_military
    label: va-disability-compensation.eligibility.label
    acceptableValues: [va-disability-compensation.eligibility.acceptableValues]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_service_disability
    acceptableValues: [true]
---
