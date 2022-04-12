---
# yaml front matter here
title: "School and education"
summary: "Find out what help is available as you pursue your education, including loans, grants, and guidance."
lede: ""
secondaryHeadline: "School and education benefits"

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
      - applicant_lost_a_family_member
    disableGroupKey: applicant-relationships
    disableGroupWhen: ["no"]

eligibilityCriteria:
  - label: "About you (the person applying for benefits)"
    description: ""
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_high-school_diploma
      - applicant_degree_cerificate_program
      - applicant_citizen_status
      - applicant_family_of_service_member
   
  - label: "About your military service"
    description: ""
    criteriaGroupKey: applicant-military
    criteriaKeys:
      - applicant_service_status
      - applicant_disability
      - applicant_service_disability

  - label: "About the person who died"
    description: ""
    criteriaGroupKey: applicant-relationships
    criteriaKeys:
      - applicant_relationship
      - deceased_public_safety_officer
      - deceased_served_in_active_military
      - deceased_service_status
---
