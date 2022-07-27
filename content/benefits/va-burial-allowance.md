---
title: va-burial-allowance.title
headline: va-burial-allowance.headline
tags:
  - burial and funeral assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: va-burial-allowance.source.name
  link: va-burial-allowance.source.link
  isEnglish: va-burial-allowance.source.linkIsEnglish

summary: va-burial-allowance.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [va-burial-allowance.eligibility.acceptableValues]
    label: va-burial-allowance.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues: [va-burial-allowance.eligibility.acceptableValues1]
  - criteriaKey: deceased_death_circumstance
    acceptableValues:
      [
        va-burial-allowance.eligibility.acceptableValues2,
        va-burial-allowance.eligibility.acceptableValues3,
        va-burial-allowance.eligibility.acceptableValues4,
      ]
  - criteriaKey: deceased_date_of_funeral
    label: va-burial-allowance.eligibility.label1
    acceptableValues: ["<2years"]
  - criteriaKey: applicant_relationship
    acceptableValues: [va-burial-allowance.eligibility.acceptableValues5, 
    va-burial-allowance.eligibility.acceptableValues6, 
    va-burial-allowance.eligibility.acceptableValues7, 
    va-burial-allowance.eligibility.acceptableValues8, 
    va-burial-allowance.eligibility.acceptableValues9]
  - criteriaKey: applicant_paid_funeral_expenses
    acceptableValues: [true]
  - criteriaKey: applicant_funeral_reimbursment
    acceptableValues: [true]
---
