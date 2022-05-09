---
title: "Veteran’s Medallion"
headline: "Burial marker for veterans"
tags:
  - "burial and funeral assistance"
lifeEvents:
  - "death-of-a-loved-one"
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/

summary: "Some veterans who are buried in a private cemetery, including veterans of the National Guard, may be eligible for a headstone medallion."

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
  - criteriaKey: deceased_grave_headstone
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: ["spouse", 
    "child", 
    "parent", 
    "other family member", 
    "personal or official representative"]
---
