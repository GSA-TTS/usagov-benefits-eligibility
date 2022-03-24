---
title: "Veteran's Pension"
headline: "Veteran's Pension"
tags:
  - "financial assistance"
lifeEvents:
  - "retirement"
  - "military-service"
  - "disability"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/pension/how-to-apply/

summary: "Monthly payments to wartime veterans who meet certain age or disability requirements, and who have income and net worth within certain limits."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: "You are at least 65 years old."
    acceptableValues: [">65years"]
  - criteriaKey: applicant_served_in_active_military
    acceptableValues: ["were discharged under conditions other than dishonorable"]
  - criteriaKey: applicant_income
    acceptableValues: ["true"]
---
