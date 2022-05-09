---
title: "Death Gratuity"
headline: "Death Gratuity"
tags:
  - "financial assistance"
lifeEvents:
  - "death-of-a-loved-one"
  - "military-service"
source:
  name: "Department of Defense"
  link: https://militarypay.defense.gov/Benefits/Death-Gratuity/

summary: "Death Gratuity is a tax free payment of $100,000 to eligible survivors of members of the Armed Forces, who died while on active duty or while serving in certain reserve statuses."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: ["yes"]
    label: "The deceased served in the active military, naval, or air service."
  - criteriaKey: deceased_service_status
    acceptableValues: ["an active-duty service member", 
    "a member of the National Guard or Reserves"]
  - criteriaKey: deceased_death_circumstance
    acceptableValues: ["died while on active duty", 
    "died while on inactive-duty training"]
  - criteriaKey: applicant_relationship
    acceptableValues: ["spouse", 
    "child",
     "parent", 
     "other family member"]
---
