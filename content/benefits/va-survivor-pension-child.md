---
title: "Survivor Pension for Child"
headline: "Survivor Pension for Child"
tags:
  - "financial assistance"
lifeEvents:
  - "death-and-burial"
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/pension/survivors-pension/

summary: "Monthly payments may be available to qualified surviving spouses and unmarried dependent children of wartime veterans who meet certain income and net worth limits."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: ["yes"]
  - criteriaKey: deceased_service_status
    acceptableValues: ["discharged under conditions other than dishonorable"]
  - criteriaKey: applicant_relationship
    acceptableValues: ["child"]
  - criteriaKey: applicant_date_of_birth
    label: "You are under 18 years old (under 23 years old if attending a VA-approved school)."
    acceptableValues: ["<18years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: ["unmarried"]
---
