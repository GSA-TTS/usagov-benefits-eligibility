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
    
  - label: financial-hardship.topLevelFilter.label1
    criteriaKey: applicant_served_in_active_military
    disableGroupKey: applicant-military
    disableGroupWhen: [financial-hardship.topLevelFilter.disableGroupWhen]
        
  - label: financial-hardship.topLevelFilter.label2
    criteriaKey: applicant_lost_a_family_member
    disableGroupKey: applicant-relationships
    disableGroupWhen: [financial-hardship.topLevelFilter.disableGroupWhen1]

eligibilityCriteria:
  - label: financial-hardship.eligibilityCriteria.label
    description: financial-hardship.eligibilityCriteria.description
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_paid_into_SS
      - applicant_income
      - applicant_high-school_diploma
      - applicant_disability
      - applicant_ability_to_work
      - applicant_child_spouse_SS
      - applicant_care_for_child
      - applicant_marital_status
      - applicant_citizen_status

  - label: financial-hardship.eligibilityCriteria.label1
    description: financial-hardship.eligibilityCriteria.description1
    criteriaGroupKey: applicant-military
    criteriaKeys:
      - applicant_service_status
      - applicant_service_disability

  - label: financial-hardship.eligibilityCriteria.label2
    description: financial-hardship.eligibilityCriteria.description2
    criteriaGroupKey: applicant-relationships
    criteriaKeys:
      - deceased_paid_into_SS
      - deceased_public_safety_officer
      - applicant_family_of_service_member
      - applicant_relationship
      - deceased_service_status
      - deceased_death_circumstance
      - deceased_grave_headstone
      - deceased_date_of_death


relatedKeys:
  - disability
  - retirement
---
