---
title: "Survivors Benefits for Mothers/Fathers"
headline: "Survivors Benefits for Mothers/Fathers"
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
source:
  name: "Social Security Administration"
  link: https://www.ssa.gov/forms/ssa-5.html

summary: "Social Security survivors benefits might be available to the person providing care for the deceased worker's child."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: applicant_care_for_child
    acceptableValues: [true]
  - criteriaKey: applicant_marital_status
    acceptableValues: ["unmarried", 
    "widowed", 
    "divorced"]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
