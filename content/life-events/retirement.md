---
# yaml front matter here
title: "Retirement"
summary: "Find out what financial, health care, and other benefits may be available as you enter this next phase of your life."
lede: ""
secondaryHeadline: "Retirement benefits"

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

eligibilityCriteria:
  - label: "About you (the person applying for benefits)"
    description: ""
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_paid_into_SS
      - applicant_marital_status
      - applicant_disability
      - applicant_ability_to_work
      - applicant_income
      - applicant_child_spouse_SS
      - applicant_care_for_child
      - applicant_citizen_status

  - label: "About your military service"
    description: ""
    criteriaGroupKey: applicant-military
    criteriaKeys:
      - applicant_service_status
---
