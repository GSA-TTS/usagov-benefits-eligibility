---
title: va-survivor-pension-child.title
headline: va-survivor-pension-child.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
  - financial-hardship
source:
  name: va-survivor-pension-child.source.name
  link: va-survivor-pension-child.source.link
  isEnglish: va-survivor-pension-child.source.linkIsEnglish

summary: va-survivor-pension-child.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [va-survivor-pension-child.eligibility.acceptableValues]
    label: va-survivor-pension-child.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues: [va-survivor-pension-child.eligibility.acceptableValues1]
  - criteriaKey: applicant_relationship
    acceptableValues: [va-survivor-pension-child.eligibility.acceptableValues2]
  - criteriaKey: applicant_date_of_birth
    label: va-survivor-pension-child.eligibility.label1
    acceptableValues: ["<18years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [va-survivor-pension-child.eligibility.acceptableValues3]
---
