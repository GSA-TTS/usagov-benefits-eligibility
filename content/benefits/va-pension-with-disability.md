---
title: va-pension-with-disability.title
headline: va-pension-with-disability.headline
tags:
  - financial assistance
lifeEvents:
  - disability
  - military-service
source:
  name: va-pension-with-disability.source.name
  link: va-pension-with-disability.source.link
  isEnglish: va-pension-with-disability.source.linkIsEnglish

summary: va-pension-with-disability.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: va-pension-with-disability.eligibility.label
    acceptableValues: ["<65years"]
  - criteriaKey: applicant_served_in_active_military
    label: va-pension-with-disability.eligibility.label1
    acceptableValues: [va-pension-with-disability.eligibility.acceptableValues]
  - criteriaKey: applicant_service_status
    acceptableValues: [va-pension-with-disability.eligibility.acceptableValues1]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_income
    acceptableValues: [true]
---
