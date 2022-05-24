---
title: fema-covid-19-funeral-assistance.title
headline: fema-covid-19-funeral-assistance.headline
tags:
  - burial and funeral assistance
lifeEvents:
  - death-of-a-loved-one
  - national-emergency-and-disaster
source:
  name: fema-covid-19-funeral-assistance.source.name
  link: fema-covid-19-funeral-assistance.source.link

summary: fema-covid-19-funeral-assistance.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_died_of_COVID
    acceptableValues: [true]
  - criteriaKey: deceased_death_location_is_US
    acceptableValues: [true]
  - criteriaKey: deceased_date_of_funeral
    label: fema-covid-19-funeral-assistance.eligibility.label
    acceptableValues: [">01-20-2020"]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
  - criteriaKey: applicant_paid_funeral_expenses
    acceptableValues: [true]
---
