---
title: va-home-loan-program.title
headline: va-home-loan-program.headline
tags:
  - housing
lifeEvents:
  - military-service
source:
  name: va-home-loan-program.source.name
  link: https://www.va.gov/housing-assistance/home-loans/eligibility/

summary: va-home-loan-program.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_served_in_active_military
    acceptableValues: [va-home-loan-program.eligibility.acceptableValues]
  - criteriaKey: applicant_service_status
    acceptableValues:
      [
        va-home-loan-program.eligibility.acceptableValues1,
        va-home-loan-program.eligibility.acceptableValues2,
        va-home-loan-program.eligibility.acceptableValues3,
      ]
  - criteriaKey: applicant_minimum_service_requirement
    acceptableValues: [true]
---
