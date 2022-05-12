---
title: va-headstone-grave-marker.title
headline: va-headstone-grave-marker.headline
tags:
  - burial and funeral assistance
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: va-headstone-grave-marker.source.name
  link: https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/

summary: va-headstone-grave-marker.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: [va-headstone-grave-marker.eligibility.acceptableValues]
    label: va-headstone-grave-marker.eligibility.label
  - criteriaKey: deceased_service_status
    acceptableValues:
      [
        va-headstone-grave-marker.eligibility.acceptableValues1,
        va-headstone-grave-marker.eligibility.acceptableValues2,
        va-headstone-grave-marker.eligibility.acceptableValues3,
      ]
  - criteriaKey: deceased_buried_in_unmarked_grave
    acceptableValues: [true]
  - criteriaKey: deceased_grave_headstone
    acceptableValues: [true]
  - criteriaKey: applicant_relationship
    acceptableValues: [va-headstone-grave-marker.eligibility.acceptableValues4, 
    va-headstone-grave-marker.eligibility.acceptableValues5, 
    va-headstone-grave-marker.eligibility.acceptableValues6, 
    va-headstone-grave-marker.eligibility.acceptableValues7, 
    va-headstone-grave-marker.eligibility.acceptableValues8]
---
