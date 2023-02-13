---
title: cms-medicare-disability.title
headline: cms-medicare-disability.headline
tags:
  - healthcare
lifeEvents:
  - disability
  - financial-hardship
source:
  name: cms-medicare-disability.source.name
  link: cms-medicare-disability.source.link
  isEnglish: cms-medicare-disability.source.linkIsEnglish

summary: cms-medicare-disability.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_ability_to_work
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
