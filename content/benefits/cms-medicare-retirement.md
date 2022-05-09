---
title: "Medicare with Retirement"
headline: "Medicare with Retirement"
tags:
  - healthcare
lifeEvents:
  - late-adulthood
  - retirement
source:
  name: "Centers for Medicare and Medicaid"
  link: https://www.medicare.gov/sign-up-change-plans/get-started-with-medicare

summary: "Health insurance program for Americans aged 65 and older, and for people with disabilities."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: "You are at least 65 years old."
    acceptableValues: [>65years]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
