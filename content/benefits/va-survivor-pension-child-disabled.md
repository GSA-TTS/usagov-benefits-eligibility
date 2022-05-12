---
title: va-survivor-pension-child-disabled.title
headline: va-survivor-pension-child-disabled.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
  - disability
source:
  name: va-survivor-pension-child-disabled.source.name
  link: https://www.va.gov/pension/survivors-pension/

summary: va-survivor-pension-child-disabled.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [va-survivor-pension-child-disabled.eligibility.acceptableValues]
    label: va-survivor-pension-child-disabled.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues: [va-survivor-pension-child-disabled.eligibility.acceptableValues1]
  - criteriaKey: applicant_relationship
    acceptableValues: [va-survivor-pension-child-disabled.eligibility.acceptableValues2]
  - criteriaKey: applicant_date_of_birth
    label: va-survivor-pension-child-disabled.eligibility.label1
    acceptableValues: [">18years"]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_marital_status
    acceptableValues: [va-survivor-pension-child-disabled.eligibility.acceptableValues3]
---
