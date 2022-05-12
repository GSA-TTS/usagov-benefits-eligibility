---
title: cms-medicaid.title
headline: cms-medicaid.headline
tags:
  - healthcare
lifeEvents:
  - loss-of-job-and-low-income
  - pregnancy-and-baby
source:
  name: cms-medicaid.source.name
  link: https://www.medicaid.gov/

summary: cms-medicaid.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_income
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
