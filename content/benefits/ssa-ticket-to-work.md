---
title: ssa-ticket-to-work.title
headline: ssa-ticket-to-work.headline
tags:
  - training and jobs
lifeEvents:
  - disability
source:
  name: ssa-ticket-to-work.source.name
  link: https://www.ssa.gov/work/

summary: ssa-ticket-to-work.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_ability_to_work
    acceptableValues: [true]
  - criteriaKey: applicant_date_of_birth
    label: ssa-ticket-to-work.eligibility.label
    acceptableValues: [>18years, <64years]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
