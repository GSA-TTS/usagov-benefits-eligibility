---
title: "Survivor Pension for Child with Disabilities"
headline: "Survivor Pension for Child with Disabilities"
tags:
  - "financial assistance"
lifeEvents:
  - "death-of-a-loved-one"
  - "military-service"
  - "disability"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/pension/survivors-pension/

summary: "Monthly payments may be available to qualified surviving dependent children of wartime veterans who meet certain income and net worth limits."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: ["yes"]
    label: "The deceased served in the active military, naval, or air service."
  - criteriaKey: deceased_service_status
    acceptableValues: ["discharged under conditions other than dishonorable"]
  - criteriaKey: applicant_relationship
    acceptableValues: ["child"]
  - criteriaKey: applicant_date_of_birth
    label: "You are at least 18 years old."
    acceptableValues: [">18years"]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_marital_status
    acceptableValues: ["unmarried"]
---
