---
# yaml front matter here
title: "Burial and Death Benefits"
summary: "If you have lost a loved one, you may qualify for help, including help with burial costs, financial support, and more."
lede: "You may be eligible for certain benefits after losing a loved one. Please answer the following questions to help us estimate what benefits might be available to help you during this time, including burial support and memorials for veterans and financial support for surviving spouses and children. We work closely with federal agencies to make our estimates accurate, but no benefits are guaranteed until you apply for them directly with each agency."
secondaryHeadline: "Burial and Death Benefits"

eligibilityCriteria:
  - label: "About the person who died"
    description: "Please check all the boxes that best describe the person who died."
    criteriaGroupKey: deceased
    criteriaKeys:
      - deceased_paid_into_SS
      - deceased_died_of_COVID
      - deceased_death_location_is_US

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
      - applicant_paid_funeral_expenses
      - applicant_funeral_reimbursment

---
