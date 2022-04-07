---
# yaml front matter here
title: "Death and burial"
summary: "If you have lost a loved one, you may qualify for help, including assistance with burial or funeral costs, financial support, and more."
lede: ""
secondaryHeadline: "Death and burial benefits"

eligibilityCriteriaDescription: "Please check the boxes and select the options that best describe your situation. Answer as many questions as possible for the most accurate results."

topLevelFilter:
  - label: "Start here"
    criteriaKey: 
      - applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

  - label: ""
    criteriaKey: 
      - applicant_relationship
    disableGroupKey:
    disableGroupWhen:
    
  - label: ""
    criteriaKey: 
      - deceased_served_in_active_military
    disableGroupKey: deceased-military
    disableGroupWhen: ["not applicable"]

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

  - label: "About the deceased's military service"
    description: ""
    criteriaGroupKey: deceased-military
    criteriaKeys:
      - deceased_buried_in_unmarked_grave
      - deceased_headstone_is_privately_purchased
      - deceased_buried_in_private_cemetery

  - label: "About you (the person applying for benefits)"
    description: ""
    criteriaGroupKey: applicant-basics
    criteriaKeys:
      - applicant_care_for_child
      - deceased_date_of_funeral
      - applicant_paid_funeral_expenses
      - applicant_funeral_reimbursment

relatedKeys:
  - disability
  - late-adulthood
---
