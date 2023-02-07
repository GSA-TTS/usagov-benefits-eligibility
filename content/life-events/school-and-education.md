---
# yaml front matter here
title: school-and-education.title
summary: school-and-education.summary
lede: school-and-education.lede
secondaryHeadline: school-and-education.secondaryHeadline

eligibilityCriteriaDescription: school-and-education.eligibilityCriteriaDescription

topLevelFilter:
  - label: school-and-education.topLevelFilter.label
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

  - label: school-and-education.topLevelFilter.label1
    criteriaKey: applicant_served_in_active_military
    disableGroupKey: applicant-military
    disableGroupWhen: [school-and-education.topLevelFilter.disableGroupWhen]

  - label: school-and-education.topLevelFilter.label2
    criteriaKey: applicant_lost_a_family_member
    disableGroupKey: deceased
    disableGroupWhen: [school-and-education.topLevelFilter.disableGroupWhen1]

eligibilityCriteria:
  - label: school-and-education.eligibilityCriteria.label
    description: school-and-education.eligibilityCriteria.description
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_high-school_diploma
      - applicant_degree_cerificate_program
      - applicant_citizen_status
      - applicant_family_of_service_member

  - label: school-and-education.eligibilityCriteria.label1
    description: school-and-education.eligibilityCriteria.description1
    criteriaGroupKey: applicant-military
    criteriaKeys:
      - applicant_service_status
      - applicant_disability
      - applicant_service_disability

  - label: school-and-education.eligibilityCriteria.label2
    description: school-and-education.eligibilityCriteria.description2
    criteriaGroupKey: deceased
    criteriaKeys:
      - applicant_relationship
      - deceased_public_safety_officer
      - deceased_served_in_active_military
      - deceased_service_status
---
