---
# yaml front matter here
title: death-of-a-loved-one.title
summary: death-of-a-loved-one.summary
lede: death-of-a-loved-one.lede
secondaryHeadline: death-of-a-loved-one.secondaryHeadline

eligibilityCriteriaDescription: death-of-a-loved-one.eligibilityCriteriaDescription

topLevelFilter:
  - label: death-of-a-loved-one.topLevelFilter.applicant_date_of_birth.label
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

  - label: ""
    criteriaKey: applicant_relationship
    disableGroupKey:
    disableGroupWhen:

  - label: ""
    criteriaKey: deceased_served_in_active_military
    disableGroupKey: deceased-military
    disableGroupWhen: ["no"]

eligibilityCriteria:
  - label: death-of-a-loved-one.eligibilityCriteria.deceased-basics.label
    description: ""
    criteriaGroupKey: deceased-basics
    criteriaKeys:
      - deceased_paid_into_SS
      - deceased_died_of_COVID
      - deceased_death_location_is_US
      - deceased_public_safety_officer
      - deceased_date_of_death
      - deceased_date_of_funeral

  - label: death-of-a-loved-one.eligibilityCriteria.deceased-military.label
    description: ""
    criteriaGroupKey: deceased-military
    criteriaKeys:
      - deceased_service_status
      - deceased_death_circumstance
      - deceased_grave_headstone

  - label: death-of-a-loved-one.eligibilityCriteria.applicant.label
    description: ""
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_marital_status
      - applicant_care_for_child
      - applicant_paid_funeral_expenses
      - applicant_funeral_reimbursment

relatedKeys:
  - disability
  - late-adulthood
---
