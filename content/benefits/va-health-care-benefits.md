---
title: "Veteran's Health Care Benefits"
headline: "Veteran's Health Care Benefits"
tags:
  - "healthcare"
lifeEvents:
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/health-care/eligibility/

summary: "You may be eligible for VA health care benefits if you served in the active military, naval, or air service that covers regular checkups with your primary care provider and appointments with specialists."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_served_in_active_military
    acceptableValues: ["yes"]
  - criteriaKey: applicant_service_status
    acceptableValues:
      ["discharged under conditions other than dishonorable", "a member of the National Guard or Reserves"]
---
