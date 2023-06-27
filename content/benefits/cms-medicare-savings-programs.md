---
title: cms-medicare-savings-programs.title
headline: cms-medicare-savings-programs.headline
tags:
  - healthcare
lifeEvents:
  - financial-hardship
  - disability
  - retirement
source:
  name: cms-medicare-savings-programs.source.name
  link: cms-medicare-savings-programs.source.link
  isEnglish: cms-medicare-savings-programs.source.linkIsEnglish

summary: cms-medicare-savings-programs.summary
criticalApplicationInformation: cms-medicare-savings-programs.criticalApplicationInformation

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: cms-medicare-savings-programs.eligibility.label
    acceptableValues: [">65years"]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_income
    acceptableValues: [true]

---
