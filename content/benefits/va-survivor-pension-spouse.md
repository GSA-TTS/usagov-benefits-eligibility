---
title: va-survivor-pension-spouse.title
headline: va-survivor-pension-spouse.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: va-survivor-pension-spouse.source.name
  link: https://www.va.gov/pension/survivors-pension/

summary: va-survivor-pension-spouse.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [va-survivor-pension-spouse.eligibility.acceptableValues]
    label: va-survivor-pension-spouse.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues: [va-survivor-pension-spouse.eligibility.acceptableValues1]
  - criteriaKey: applicant_relationship
    acceptableValues: [va-survivor-pension-spouse.eligibility.acceptableValues2]
  - criteriaKey: applicant_marital_status
    acceptableValues: [va-survivor-pension-spouse.eligibility.acceptableValues3, 
    va-survivor-pension-spouse.eligibility.acceptableValues4]
  - criteriaKey: applicant_income
    acceptableValues: [true]
---
