---
# yaml front matter here
title: disability.title
summary: disability.summary
lede: disability.lede
secondaryHeadline: disability.secondaryHeadline

eligibilityCriteriaDescription: disability.eligibilityCriteriaDescription

topLevelFilter:
  - label: disability.topLevelFilter.label
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

  - label: disability.topLevelFilter.label1
    criteriaKey: applicant_served_in_active_military
    disableGroupKey: applicant-military
    disableGroupWhen: [disability.topLevelFilter.disableGroupWhen]


eligibilityCriteria:
  - label: disability.eligibilityCriteria.label
    description: disability.eligibilityCriteria.description
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_disability
      - applicant_ability_to_work
      - applicant_child_spouse_SS
      - applicant_paid_into_SS
      - applicant_income
      - applicant_citizen_status
      - applicant_marital_status

  - label: disability.eligibilityCriteria.label1
    description: disability.eligibilityCriteria.description1
    criteriaGroupKey: applicant-military
    criteriaKeys:
      - applicant_service_disability
      - applicant_service_status


relatedKeys:
  - death-of-a-loved-one
  - retirement
---
