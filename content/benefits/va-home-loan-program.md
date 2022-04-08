---
title: "Home Loan Program"
headline: "Home Loan Program"
tags:
  - "housing"
lifeEvents:
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/housing-assistance/home-loans/eligibility/

summary: "VA housing assistance can help Veterans and service members to buy, build or improve a home, or refinance a home loan."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_served_in_active_military
    acceptableValues: ["yes"]
  - criteriaKey: applicant_service_status
    acceptableValues: ["an active-duty service member", "discharged under conditions other than dishonorable", "a member of the National Guard or Reserves"]
  - criteriaKey: applicant_minimum_service_requirement
    acceptableValues: [true]
---
