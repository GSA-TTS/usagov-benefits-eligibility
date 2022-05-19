---
title: va-dependency-and-indemnity-compensation-child.title
headline: va-dependency-and-indemnity-compensation-child.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: va-dependency-and-indemnity-compensation-child.source.name
  link: va-dependency-and-indemnity-compensation-child.source.link

summary: va-dependency-and-indemnity-compensation-child.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [va-dependency-and-indemnity-compensation-child.eligibility.acceptableValues]
    label: va-dependency-and-indemnity-compensation-child.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues: [va-dependency-and-indemnity-compensation-child.eligibility.acceptableValues1, 
    va-dependency-and-indemnity-compensation-child.eligibility.acceptableValues2]
  - criteriaKey: deceased_death_circumstance
    acceptableValues:
      [
        va-dependency-and-indemnity-compensation-child.eligibility.acceptableValues3,
        va-dependency-and-indemnity-compensation-child.eligibility.acceptableValues4,
        va-dependency-and-indemnity-compensation-child.eligibility.acceptableValues5,
      ]
  - criteriaKey: applicant_relationship
    acceptableValues: [va-dependency-and-indemnity-compensation-child.eligibility.acceptableValues6]
  - criteriaKey: applicant_date_of_birth
    label: va-dependency-and-indemnity-compensation-child.eligibility.label1
    acceptableValues: ["<18years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: [va-dependency-and-indemnity-compensation-child.eligibility.acceptableValues7]
---
