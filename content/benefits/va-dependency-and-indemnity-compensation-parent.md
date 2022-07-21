---
title: va-dependency-and-indemnity-compensation-parent.title
headline: va-dependency-and-indemnity-compensation-parent.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: va-dependency-and-indemnity-compensation-parent.source.name
  link: va-dependency-and-indemnity-compensation-parent.source.link
  isEnglish: va-dependency-and-indemnity-compensation-parent.source.linkIsEnglish

summary: va-dependency-and-indemnity-compensation-parent.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [va-dependency-and-indemnity-compensation-parent.eligibility.acceptableValues]
    label: va-dependency-and-indemnity-compensation-parent.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues: [va-dependency-and-indemnity-compensation-parent.eligibility.acceptableValues1, 
    va-dependency-and-indemnity-compensation-parent.eligibility.acceptableValues2]
  - criteriaKey: deceased_death_circumstance
    acceptableValues:
      [
        va-dependency-and-indemnity-compensation-parent.eligibility.acceptableValues3,
        va-dependency-and-indemnity-compensation-parent.eligibility.acceptableValues4,
        va-dependency-and-indemnity-compensation-parent.eligibility.acceptableValues5,
      ]
  - criteriaKey: applicant_relationship
    acceptableValues: [va-dependency-and-indemnity-compensation-parent.eligibility.acceptableValues6]
  - criteriaKey: applicant_income
    acceptableValues: [true]
---
