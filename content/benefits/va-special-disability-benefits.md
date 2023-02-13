---
title: va-special-disability-benefits.title
headline: va-special-disability-benefits.headline
tags:
  - financial assistance
lifeEvents:
  - disability
  - military-service
  - financial-hardship
source:
  name: va-special-disability-benefits.source.name
  link: va-special-disability-benefits.source.link
  isEnglish: va-special-disability-benefits.source.linkIsEnglish

summary: va-special-disability-benefits.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_served_in_active_military
    label: va-special-disability-benefits.eligibility.label
    acceptableValues: [va-special-disability-benefits.eligibility.acceptableValues]
  - criteriaKey: applicant_service_status
    acceptableValues: [va-special-disability-benefits.eligibility.acceptableValues1, va-special-disability-benefits.eligibility.acceptableValues2, va-special-disability-benefits.eligibility.acceptableValues3, va-special-disability-benefits.eligibility.acceptableValues4]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_service_disability
    acceptableValues: [true]
---
