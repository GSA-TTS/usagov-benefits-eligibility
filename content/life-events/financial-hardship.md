---
# yaml front matter here
title: financial-hardship.title
summary: financial-hardship.summary
lede: financial-hardship.lede
secondaryHeadline: financial-hardship.secondaryHeadline

eligibilityCriteriaDescription: financial-hardship.eligibilityCriteriaDescription

topLevelFilter:
  - label: financial-hardship.topLevelFilter.label
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

eligibilityCriteria:
  - label: financial-hardship.eligibilityCriteria.label
    description: financial-hardship.eligibilityCriteria.description
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_paid_into_SS
      - applicant_income
      - applicant_disability
      - applicant_ability_to_work
      - applicant_child_spouse_SS
      - applicant_care_for_child
      - applicant_marital_status
      - applicant_citizen_status
---
