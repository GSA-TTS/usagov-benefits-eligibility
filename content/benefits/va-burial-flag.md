---
title: "Burial Flag"
headline: "Burial Flag"
tags:
  - "memorial"
lifeEvents:
  - "death-of-a-loved-one"
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/burials-memorials/memorial-items/burial-flags/

summary: "VA provides a United States flag to drape on a casket (or coffin) or place with an urn in honor of the military service of a Veteran or Reservist. Find out how to apply for this burial honor."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: ["yes"]
    label: "The deceased served in the active military, naval, or air service."
  - criteriaKey: deceased_service_status
    acceptableValues:
      [
        "an active-duty service member",
        "discharged under conditions other than dishonorable",
        "a member of the National Guard or Reserves",
      ]
  - criteriaKey: applicant_relationship
    acceptableValues: ["spouse", "child", "parent", "other family member", "personal or official representative"]
---
