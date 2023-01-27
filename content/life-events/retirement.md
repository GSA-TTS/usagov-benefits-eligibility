---
# yaml front matter here
title: retirement.title
summary: retirement.summary
lede: retirement.lede
secondaryHeadline: retirement.secondaryHeadline

eligibilityCriteriaDescription: retirement.eligibilityCriteriaDescription

topLevelFilter:
  - label: retirement.topLevelFilter.label
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

  - label: retirement.topLevelFilter.label1
    criteriaKey: applicant_served_in_active_military
    disableGroupKey: applicant-military
    disableGroupWhen: [retirement.topLevelFilter.disableGroupWhen]
    
  - label: retirement.topLevelFilter.label2
    criteriaKey: applicant_american_indian
    disableGroupKey: 
    disableGroupWhen:

eligibilityCriteria:
  - label: retirement.eligibilityCriteria.label
    description: retirement.eligibilityCriteria.description
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_paid_into_SS
      - applicant_income
      - applicant_disability
      - applicant_ability_to_work
      - applicant_miner
      - applicant_child_spouse_SS
      - applicant_care_for_child
      - applicant_citizen_status
      - applicant_marital_status

  - label: retirement.eligibilityCriteria.label1
    description: retirement.eligibilityCriteria.description1
    criteriaGroupKey: applicant-military
    criteriaKeys:
      - applicant_service_status

relatedKeys:
  - death-of-a-loved-one
  - disability
---
