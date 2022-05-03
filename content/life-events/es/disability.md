---
# yaml front matter here
title: "Disability"
summary: "Whether you are newly disabled or have a lifelong challenge, assistance may be available, including financial help."
lede: ""
secondaryHeadline: "Disability benefits"

eligibilityCriteriaDescription: "Please check the boxes and select the options that best describe your situation. Answer as many questions as possible for the most accurate results."

topLevelFilter:
  - label: "Start here"
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

  - label: ""
    criteriaKey: applicant_served_in_active_military
    disableGroupKey: applicant-military
    disableGroupWhen: ["no"]

  - label: ""
    criteriaKey:
      - applicant_lost_a_family_member
    disableGroupKey: applicant-relationships
    disableGroupWhen: ["no"]

eligibilityCriteria:
  - label: "About you (the person applying for benefits)"
    description: ""
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_disability
      - applicant_ability_to_work
      - applicant_child_spouse_SS
      - applicant_paid_into_SS
      - applicant_income
      - applicant_marital_status
      - applicant_citizen_status

  - label: "About your military service"
    description: ""
    criteriaGroupKey: applicant-military
    criteriaKeys:
      - applicant_service_status
      - applicant_service_disability

  - label: "About the person who died"
    description: ""
    criteriaGroupKey: applicant-relationships
    criteriaKeys:
      - applicant_relationship
      - deceased_paid_into_SS
      - deceased_served_in_active_military
---
