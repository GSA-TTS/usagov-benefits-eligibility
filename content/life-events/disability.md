---
# yaml front matter here
title: "Disability"
summary: "Whether you are newly disabled or have a lifelong challenge, assistance may be available, including financial help."
lede: ""
secondaryHeadline: "Disability benefits"

eligibilityCriteriaDescription: "Please check all the boxes and select the options that best describe your situation."

eligibilityCriteria:
  - label: "About the person who died"
    description: ""
    criteriaGroupKey: deceased
    criteriaKeys:
      - deceased_paid_into_SS
      - deceased_died_of_COVID
      - deceased_death_location_is_US
      - deceased_public_safety_officer

  - label: "About the military service"
    description: ""
    criteriaGroupKey: military
    criteriaKeys:
      - deceased_served_in_active_military
      - deceased_buried_in_unmarked_grave
      - deceased_headstone_is_privately_purchased
      - deceased_buried_in_private_cemetery
 
  - label: "About the applicant"
    description: ""
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_relationship
      - applicant_care_for_deceaseds_child
      - applicant_paid_funeral_expenses
      - applicant_funeral_reimbursment


  - label: "About your military service"
    description: ""
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_served_in_active_military

---
