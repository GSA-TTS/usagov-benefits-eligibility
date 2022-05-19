---
# yaml front matter here
title: military-service.title
summary: military-service.summary
lede: military-service.lede
secondaryHeadline: military-service.secondaryHeadline

eligibilityCriteriaDescription: military-service.eligibilityCriteriaDescription

topLevelFilter:
  - label: military-service.topLevelFilter.label
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

  - label: military-service.topLevelFilter.label1
    criteriaKey: applicant_served_in_active_military
    disableGroupKey: applicant-military
    disableGroupWhen: [military-service.topLevelFilter.disableGroupWhen]

  - label: military-service.topLevelFilter.label2
    criteriaKey: applicant_lost_a_service_member
    disableGroupKey: deceased-military
    disableGroupWhen: [military-service.topLevelFilter.disableGroupWhen1]

eligibilityCriteria:
  - label: military-service.eligibilityCriteria.label
    description: military-service.eligibilityCriteria.description
    criteriaGroupKey: applicant-basics
    criteriaKeys:
      - applicant_disability
      - applicant_marital_status

  - label: military-service.eligibilityCriteria.label1
    description: military-service.eligibilityCriteria.description1
    criteriaGroupKey: applicant-military
    criteriaKeys:
      - applicant_service_status
      - applicant_minimum_service_requirement
      - applicant_service_disability

  - label: military-service.eligibilityCriteria.label2
    description: military-service.eligibilityCriteria.description2
    criteriaGroupKey: deceased-military
    criteriaKeys:
      - deceased_service_status
      - deceased_death_circumstance
      - deceased_grave_headstone
      - applicant_relationship
---
