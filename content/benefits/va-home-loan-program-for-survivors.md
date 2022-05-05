---
title: "Home Loan Program for Survivors"
headline: "Home Loan Program for Survivors"
tags:
  - "housing"
lifeEvents:
  - "death-of-a-loved-one"
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/housing-assistance/home-loans/surviving-spouse/

summary: "A VA-backed home loan may be available to the surviving spouse of a veteran."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: ["yes"]
    label: "The deceased served in the active military, naval, or air service."
  - criteriaKey: deceased_service_status
    acceptableValues: ["an active-duty service member", "discharged under conditions other than dishonorable"]
  - criteriaKey: deceased_death_circumstance
    acceptableValues:
      [
        "died while on active duty",
        "died as a result of a service-connected disability or illness",
        "died while receiving or traveling to receive VA care",
        "died while eligible or receiving VA compensation",
      ]
  - criteriaKey: applicant_marital_status
    acceptableValues: ["widowed"]
  - criteriaKey: applicant_relationship
    acceptableValues: ["spouse"]
---
