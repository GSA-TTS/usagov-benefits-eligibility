---
title: "Veteran's Pension with Disability"
headline: "Veteran's Pension with Disability"
tags:
  - "financial assistance"
lifeEvents:
  - "disability"
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/pension/how-to-apply/

summary: "Monthly payments to wartime veterans who meet certain age or disability requirements, and who have income and net worth within certain limits."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: "You are under 65 years old."
    acceptableValues: [<65years]
  - criteriaKey: applicant_served_in_active_military
    acceptableValues: ["yes"]
  - criteriaKey: applicant_service_status
    acceptableValues: ["discharged under conditions other than dishonorable"]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_income
    acceptableValues: [true]
---
