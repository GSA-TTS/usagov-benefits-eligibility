---
title: "Education Benefits (GI Bill) for Survivors"
headline: "Education Benefits (GI Bill) for Survivors"
tags:
  - educational assistance
lifeEvents:
  - death-of-a-loved-one
  - school-and-education
  - military-service
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/education/survivor-dependent-benefits/

summary: "VA education benefits (also called Chapter 35 benefits) or job training through a GI Bill program may be available for dependents and survivors of a veteran."

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
    acceptableValues: ["spouse", 
    "child"]
  - criteriaKey: applicant_high_school_diploma
    acceptableValues: [true]
---
