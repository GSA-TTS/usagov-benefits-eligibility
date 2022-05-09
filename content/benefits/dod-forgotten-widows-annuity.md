---
title: "Annuity for Certain Military Surviving Spouses"
headline: "Annuity for Certain Military Surviving Spouses"
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: "Department of Defense"
  link: https://militarypay.defense.gov/Portals/3/Documents/acmss.pdf

summary: "Commonly referred to as the Annuity for Forgotten Widows, qualified surviving spouses of members of the Uniformed Services may be eligible for financial support."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: ["yes"]
    label: "The deceased served in the active military, naval, or air service."
  - criteriaKey: deceased_service_status
    acceptableValues: ["retired from the service"]
  - criteriaKey: deceased_date_of_death
    acceptableValues: [<01-01-197]
    label: "The deceased died before 1978."
  - criteriaKey: applicant_relationship
    acceptableValues: [spouse]
---