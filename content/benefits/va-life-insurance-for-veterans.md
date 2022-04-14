---
title: "Life Insurance (eligible for purchase by veteran)"
headline: "Life Insurance (eligible for purchase by veteran)"
tags:
  - "life insurance"
lifeEvents:
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/life-insurance/options-eligibility/

summary: "VA Life Insurance programs are available for veterans, service members, and their spouses and dependent children."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_served_in_active_military
    acceptableValues: ["yes"]
  - criteriaKey: applicant_service_status
    acceptableValues:
      [
        "an active-duty service member",
        "discharged under conditions other than dishonorable",
        "retired from the service",
      ]
---
