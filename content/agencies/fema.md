---
title: "FEMA"
summary: "Federal Emergency Management Agency (FEMA) offers support to people during natural disasters and national emergencies, including housing and funeral assistance."
lede: "Federal Emergency Management Agency (FEMA) offers support to people during natural disasters and national emergencies, including housing and funeral assistance."


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
---