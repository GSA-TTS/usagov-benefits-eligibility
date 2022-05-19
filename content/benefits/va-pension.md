---
title: va-pension.title
headline: va-pension.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - military-service
source:
  name: va-pension.source.name
  link: va-pension.source.link

summary: va-pension.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: va-pension.eligibility.label
    acceptableValues: [va-pension.eligibility.acceptableValues]
  - criteriaKey: applicant_served_in_active_military
    acceptableValues: [va-pension.eligibility.acceptableValues1]
  - criteriaKey: applicant_service_status
    acceptableValues: [va-pension.eligibility.acceptableValues2]
  - criteriaKey: applicant_income
    acceptableValues: [true]
---
