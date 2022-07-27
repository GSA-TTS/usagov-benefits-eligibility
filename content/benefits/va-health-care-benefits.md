---
title: va-health-care-benefits.title
headline: va-health-care-benefits.headline
tags:
  - healthcare
lifeEvents:
  - military-service
source:
  name: va-health-care-benefits.source.name
  link: va-health-care-benefits.source.link
  isEnglish: va-health-care-benefits.source.linkIsEnglish

summary: va-health-care-benefits.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_served_in_active_military
    acceptableValues: [va-health-care-benefits.eligibility.acceptableValues]
  - criteriaKey: applicant_service_status
    acceptableValues:
      [va-health-care-benefits.eligibility.acceptableValues1, va-health-care-benefits.eligibility.acceptableValues2]
---
