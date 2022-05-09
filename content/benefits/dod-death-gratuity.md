---
title: dod-death-gratuity.title
headline: dod-death-gratuity.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: dod-death-gratuity.source.name
  link: https://militarypay.defense.gov/Benefits/Death-Gratuity/

summary: dod-death-gratuity.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [dod-death-gratuity.eligibility.acceptableValues]
    label: dod-death-gratuity.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues: [dod-death-gratuity.eligibility.acceptableValues1, 
    dod-death-gratuity.eligibility.acceptableValues2]
  - criteriaKey: deceased_death_circumstance
    acceptableValues: [dod-death-gratuity.eligibility.acceptableValues3, 
    dod-death-gratuity.eligibility.acceptableValues4]
  - criteriaKey: applicant_relationship
    acceptableValues: [dod-death-gratuity.eligibility.acceptableValues5, 
    dod-death-gratuity.eligibility.acceptableValues6,
     dod-death-gratuity.eligibility.acceptableValues7, 
     dod-death-gratuity.eligibility.acceptableValues8]
---
