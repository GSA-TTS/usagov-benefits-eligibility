---
# yaml front matter here
title: national-emergency-and-disaster.title
summary: national-emergency-and-disaster.summary
lede: national-emergency-and-disaster.lede
secondaryHeadline: national-emergency-and-disaster.secondaryHeadline

eligibilityCriteriaDescription: national-emergency-and-disaster.eligibilityCriteriaDescription

topLevelFilter:
  - label: national-emergency-and-disaster.topLevelFilter.label
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:
    
  - label: national-emergency-and-disaster.topLevelFilter.label1
    criteriaKey: applicant_loss_of_life_to_disaster
    disableGroupKey: deceased
    disableGroupWhen: [national-emergency-and-disaster.topLevelFilter.disableGroupWhen]

eligibilityCriteria:
  - label: national-emergency-and-disaster.eligibilityCriteria.label
    description: national-emergency-and-disaster.eligibilityCriteria.description
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_declared_disaster
      - applicant_citizen_status

  - label: national-emergency-and-disaster.eligibilityCriteria.label1
    description: national-emergency-and-disaster.eligibilityCriteria.description1
    criteriaGroupKey: deceased
    criteriaKeys:
      - deceased_died_of_COVID
      - deceased_death_location_is_US
      - applicant_paid_funeral_expenses
---
