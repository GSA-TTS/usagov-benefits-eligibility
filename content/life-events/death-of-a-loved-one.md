---
# yaml front matter here
title: death-of-a-loved-one.title
summary: death-of-a-loved-one.summary
lede: death-of-a-loved-one.lede
secondaryHeadline: death-of-a-loved-one.secondaryHeadline

eligibilityCriteriaDescription: death-of-a-loved-one.eligibilityCriteriaDescription

topLevelFilter:
  - label: death-of-a-loved-one.topLevelFilter.label
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

  - label: death-of-a-loved-one.topLevelFilter.label1
    criteriaKey: applicant_relationship
    disableGroupKey:
    disableGroupWhen:

  - label: death-of-a-loved-one.topLevelFilter.label2
    criteriaKey: deceased_served_in_active_military
    disableGroupKey: deceased-military
    disableGroupWhen: [death-of-a-loved-one.topLevelFilter.disableGroupWhen]

eligibilityCriteria:
  - label: death-of-a-loved-one.eligibilityCriteria.label
    description: death-of-a-loved-one.eligibilityCriteria.description
    criteriaGroupKey: deceased-basics
    criteriaKeys:
      - deceased_paid_into_SS
      - deceased_died_of_COVID
      - deceased_death_location_is_US
      - deceased_public_safety_officer
      - deceased_date_of_death
      - deceased_date_of_funeral

  - label: death-of-a-loved-one.eligibilityCriteria.label1
    description: death-of-a-loved-one.eligibilityCriteria.description1
    criteriaGroupKey: deceased-military
    criteriaKeys:
      - deceased_service_status
      - deceased_death_circumstance
      - deceased_grave_headstone

  - label: death-of-a-loved-one.eligibilityCriteria.label2
    description: death-of-a-loved-one.eligibilityCriteria.description2
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_marital_status
      - applicant_care_for_child
      - applicant_paid_funeral_expenses
      - applicant_funeral_reimbursment
      - applicant_citizen_status

relatedKeys:
  - disability
  - retirement
---
