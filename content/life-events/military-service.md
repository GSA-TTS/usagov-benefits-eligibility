---
# yaml front matter here
title: "Military service"
summary: "Service members and veterans have many benefits available to them, including educational assistance, home loans, and life insurance."
lede: ""
secondaryHeadline: "Military service benefits"

eligibilityCriteriaDescription: "Please check the boxes and select the options that best describe your situation. Answer as many questions as possible for the most accurate results."

topLevelFilter:
  - label: "Start here"
    criteriaKey: 
      - applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:
  
  - label: ""
    criteriaKey:
      - applicant_served_in_active_military
    disableGroupKey: applicant-military
    disableGroupWhen: ["no"]
    
  - label: ""
    criteriaKey: 
      - applicant_lost_a_service_member
    disableGroupKey: deceased-military
    disableGroupWhen: ["no"]

eligibilityCriteria:
  - label: "About you (the person applying for benefits)"
    description: ""
    criteriaGroupKey: applicant-basics
    criteriaKeys:
      - applicant_disability
      - applicant_marital_status

  - label: "About your military service"
    description: ""
    criteriaGroupKey: applicant-military
    criteriaKeys:
      - applicant_service_status
      - applicant_minimum_service_requirement
      - applicant_service_disability

  - label: "About the military service of the person who died"
    description: ""
    criteriaGroupKey: deceased-military
    criteriaKeys:
      - deceased_service_status
      - deceased_death_circumstance
      - deceased_grave_headstone
      - applicant_relationship
  
---
