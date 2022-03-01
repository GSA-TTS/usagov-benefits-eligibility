---
title: "Home Loan Program"
headline: "Home Loan Program"
tags: 
- "housing"
lifeEvents: 
- "death-and-burial"
- "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/housing-assistance/home-loans/surviving-spouse/

summary: "A VA-backed home loan may be available to the surviving spouse of a veteran."

eligibility:
# In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
- criteriaKey: deceased_served_in_active_military
  acceptableValues: ["was discharged under conditions other than dishonorable", "died while on active duty"]
- criteriaKey: deceased_death_circumstance
  acceptableValues: ["(1) died as a result of a service-connected disability", "(2) died while receiving or traveling to receive VA care", "(3) died while eligible, pending to receive or receiving VA compensation / pension"]
- criteriaKey: applicant_relationship
  acceptableValues: ["spouse"]
- criteriaKey: applicant_marital_status
  acceptableValues: ["widowed"]
---
