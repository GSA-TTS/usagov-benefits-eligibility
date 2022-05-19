---
title: dod-survivor-benefit-plan.title
headline: dod-survivor-benefit-plan.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: dod-survivor-benefit-plan.source.name
  link: dod-survivor-benefit-plan.source.link

summary: dod-survivor-benefit-plan.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [dod-survivor-benefit-plan.eligibility.acceptableValues]
    label: dod-survivor-benefit-plan.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues:
      [dod-survivor-benefit-plan.eligibility.acceptableValues1, 
      dod-survivor-benefit-plan.eligibility.acceptableValues2, 
      dod-survivor-benefit-plan.eligibility.acceptableValues3]
  - criteriaKey: deceased_death_circumstance
    acceptableValues: [dod-survivor-benefit-plan.eligibility.acceptableValues4, 
    dod-survivor-benefit-plan.eligibility.acceptableValues5]
  - criteriaKey: applicant_relationship
    acceptableValues: [dod-survivor-benefit-plan.eligibility.acceptableValues6, 
    dod-survivor-benefit-plan.eligibility.acceptableValues7]
---
