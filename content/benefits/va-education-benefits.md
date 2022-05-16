---
title: va-education-benefits.title
headline: va-education-benefits.headline
tags:
  - educational assistance
lifeEvents:
  - school-and-education
  - military-service
source:
  name: va-education-benefits.source.name
  link: https://www.va.gov/education/eligibility/

summary: va-education-benefits.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_served_in_active_military
    acceptableValues: [va-education-benefits.eligibility.acceptableValues]
  - criteriaKey: applicant_service_status
    acceptableValues:
      [
        va-education-benefits.eligibility.acceptableValues1,
        va-education-benefits.eligibility.acceptableValues2,
        va-education-benefits.eligibility.acceptableValues3,
      ]
  - criteriaKey: applicant_high-school_diploma
    acceptableValues: [true]
---
