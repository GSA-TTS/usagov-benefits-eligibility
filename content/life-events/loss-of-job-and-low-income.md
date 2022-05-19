---
# yaml front matter here
title: loss-of-job-and-low-income.title
summary: loss-of-job-and-low-income.summary
lede: loss-of-job-and-low-income.lede
secondaryHeadline: loss-of-job-and-low-income.secondaryHeadline

eligibilityCriteriaDescription: loss-of-job-and-low-income.eligibilityCriteriaDescription

topLevelFilter:
  - label: loss-of-job-and-low-income.topLevelFilter.label
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

eligibilityCriteria:
  - label: loss-of-job-and-low-income.eligibilityCriteria.label
    description: loss-of-job-and-low-income.eligibilityCriteria.description
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
