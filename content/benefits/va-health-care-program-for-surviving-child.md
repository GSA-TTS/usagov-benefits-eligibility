---
title: "Civilian Health and Medical Program of the VA (CHAMPVA) for Child"
headline: "Civilian Health and Medical Program of the VA (CHAMPVA) for Child"
tags:
  - healthcare
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/health-care/family-caregiver-benefits/champva/

summary: "As a surviving child of a veteran you may be eligible for health insurance that covers the cost of some of your health care services and supplies, including pharmacy benefits."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: ["yes"]
    label: "The deceased served in the active military, naval, or air service."
  - criteriaKey: deceased_service_status
    acceptableValues: ["an active-duty service member", 
    "discharged under conditions other than dishonorable"]
  - criteriaKey: deceased_death_circumstance
    acceptableValues: ["died while on active duty", 
    "died as a result of a service-connected disability or illness"]
  - criteriaKey: applicant_relationship
    acceptableValues: ["child"]
  - criteriaKey: applicant_date_of_birth
    label: "You are under 18 years old (under 23 years old if attending a VA-approved school)."
    acceptableValues: [<18years]
  - criteriaKey: applicant_marital_status
    acceptableValues: ["unmarried"]
---