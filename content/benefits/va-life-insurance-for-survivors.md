---
title: va-life-insurance-for-survivors.title
headline: va-life-insurance-for-survivors.headline
tags:
  - life insurance
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: va-life-insurance-for-survivors.source.name
  link: https://www.benefits.va.gov/INSURANCE/sglivgli.asp

summary: va-life-insurance-for-survivors.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [va-life-insurance-for-survivors.eligibility.acceptableValues]
    label: va-life-insurance-for-survivors.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues:
      [
        va-life-insurance-for-survivors.eligibility.acceptableValues1,
        va-life-insurance-for-survivors.eligibility.acceptableValues2,
        va-life-insurance-for-survivors.eligibility.acceptableValues3,
        va-life-insurance-for-survivors.eligibility.acceptableValues4,
      ]
  - criteriaKey: applicant_relationship
    acceptableValues: [va-life-insurance-for-survivors.eligibility.acceptableValues5, 
    va-life-insurance-for-survivors.eligibility.acceptableValues6, 
    va-life-insurance-for-survivors.eligibility.acceptableValues7, 
    va-life-insurance-for-survivors.eligibility.acceptableValues8]
---
