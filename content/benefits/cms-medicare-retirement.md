---
title: cms-medicare-retirement.title
headline: cms-medicare-retirement.headline
tags:
  - healthcare
lifeEvents:
  - late-adulthood
  - retirement
source:
  name: cms-medicare-retirement.source.name
  link: cms-medicare-retirement.source.link
  isEnglish: cms-medicare-retirement.source.linkIsEnglish

summary: cms-medicare-retirement.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: cms-medicare-retirement.eligibility.label
    acceptableValues: [">65years"]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
