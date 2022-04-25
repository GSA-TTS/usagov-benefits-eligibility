---
# yaml front matter here
title: "Death and burial"
summary: "If you have lost a loved one, you may qualify for help, including assistance with burial or funeral costs, financial support, and more."
lede: ""
secondaryHeadline: "Death and burial benefits"

eligibilityCriteriaDescription: "Please check the boxes and select the options that best describe your situation. Answer as many questions as possible for the most accurate results."

topLevelFilter:
  - label: "Start here"
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

  - label: ""
    criteriaKey: applicant_relationship
    disableGroupKey:
    disableGroupWhen:

  - label: ""
    criteriaKey: deceased_served_in_active_military
    disableGroupKey: deceased-military
    disableGroupWhen: ["no"]

eligibilityCriteria:
  - label: "About the person who died"
    description: ""
    criteriaGroupKey: deceased-basics
    criteriaKeys:
      - deceased_paid_into_SS
      - deceased_died_of_COVID
      - deceased_death_location_is_US
      - deceased_public_safety_officer
      - deceased_date_of_death
      - deceased_date_of_funeral

  - label: "About the military service of the person who died"
    description: ""
    criteriaGroupKey: deceased-military
    criteriaKeys:
      - deceased_service_status
      - deceased_death_circumstance
      - deceased_grave_headstone

  - label: "About you (the person applying for benefits)"
    description: ""
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_marital_status
      - applicant_care_for_child
      - applicant_paid_funeral_expenses
      - applicant_funeral_reimbursment

relatedKeys:
  - disability
  - late-adulthood
---
