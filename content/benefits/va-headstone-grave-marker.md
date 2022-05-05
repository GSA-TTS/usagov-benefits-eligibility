---
title: "Veteran’s Headstone and Grave Marker"
headline: "Veteran’s Headstone and Grave Marker"
tags:
  - "burial and funeral assistance"
lifeEvents:
  - "death-of-a-loved-one"
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/

summary: "A headstone, grave marker, or niche marker may be available to honor a veteran, service member, or eligible family member."

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
  - criteriaKey: deceased_buried_in_unmarked_grave
    acceptableValues: [true]
  - criteriaKey: deceased_grave_headstone
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: ["spouse", "child", "parent", "other family member", "personal or official representative"]
---
