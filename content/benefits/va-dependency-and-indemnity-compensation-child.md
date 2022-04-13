---
title: "Dependency and Indemnity Compensation (DIC) for Child"
headline: "Dependency and Indemnity Compensation (DIC) for Child"
tags:
  - "financial assistance"
lifeEvents:
  - "death-and-burial"
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/disability/dependency-indemnity-compensation/

summary: "Tax-free financial assistance may be available to surviving family members of a service member or a veteran."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: ["yes"]
  - criteriaKey: deceased_service_status
    acceptableValues: ["an active-duty service member", "discharged under conditions other than dishonorable"]
  - criteriaKey: deceased_death_circumstance
    acceptableValues:
      [
        "died while on active duty",
        "died as a result of a service-connected disability or illness",
        "died while eligible or receiving VA compensation",
      ]
  - criteriaKey: applicant_relationship
    acceptableValues: ["child"]
  - criteriaKey: applicant_date_of_birth
    label: "You are under 18 years old (under 23 years old if attending a VA-approved school)."
    acceptableValues: ["<18years"]
  - criteriaKey: applicant_marital_status
    acceptableValues: ["unmarried"]
---
