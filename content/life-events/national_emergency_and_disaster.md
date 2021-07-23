---
# yaml front matter here
title: "National emergency and disaster"
summary: "National emergency and disaster life event description here."
secondaryHeadline: "National Emergency and Disaster Benefits"

eligibilityCriteria:
  - label: "About the person who died"
    description: "Please check all the boxes that best describe the person who died."
    criteriaGroupKey: deceased
    criteriaKeys:
      - deceased_paid_into_SS
      - deceased_died_of_COVID
      - deceased_death_location_is_US
      - deceased_public_safety_officer

  - label: "About the military service"
    description: "Please select options and check all the boxes that best describe the person who died."
    criteriaGroupKey: military
    criteriaKeys:
      - deceased_served_in_active_military
      - deceased_buried_in_unmarked_grave
      - deceased_headstone_is_privately_purchased
      - deceased_buried_in_private_cemetery
 
  - label: "About the applicant"
    description: "Please select options and check all the boxes that best describe you (the person who will be applying for benefits)."
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_relationship
      - applicant_care_for_deceaseds_child
      - applicant_paid_funeral_expenses
      - applicant_funeral_reimbursment


---
