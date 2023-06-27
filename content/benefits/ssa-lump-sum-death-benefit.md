---
title: ssa-lump-sum-death-benefit.title
headline: ssa-lump-sum-death-benefit.headline
tags:
  - financial assistance
lifeEvents:
  - death-of-a-loved-one
  - financial-hardship
source:
  name: ssa-lump-sum-death-benefit.source.name
  link: ssa-lump-sum-death-benefit.source.link
  isEnglish: ssa-lump-sum-death-benefit.source.linkIsEnglish

summary: ssa-lump-sum-death-benefit.summary
criticalApplicationInformation: ssa-lump-sum-death-benefit.criticalApplicationInformation

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_paid_into_SS
    acceptableValues: [true]
  - criteriaKey: deceased_date_of_death
    label: ssa-lump-sum-death-benefit.eligibility.label
    acceptableValues: ["<2years"]
  - criteriaKey: applicant_relationship
    acceptableValues: [ssa-lump-sum-death-benefit.eligibility.acceptableValues,
    ssa-lump-sum-death-benefit.eligibility.acceptableValues1]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]
---
