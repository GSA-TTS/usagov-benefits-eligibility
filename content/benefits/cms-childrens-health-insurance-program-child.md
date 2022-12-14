---
title: cms-childrens-health-insurance-program-child.title
headline: cms-childrens-health-insurance-program-child.headline
tags:
  - healthcare
lifeEvents:
  - financial-hardship
  - becoming-a-parent
source:
  name: cms-childrens-health-insurance-program-child.source.name
  link: cms-childrens-health-insurance-program-child.source.link
  isEnglish: cms-childrens-health-insurance-program-child.source.linkIsEnglish

summary: cms-medicare-savings-programs.summary

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: cms-childrens-health-insurance-program-child.eligibility.label
    acceptableValues: ["<19years"]
  - criteriaKey: applicant_income
    acceptableValues: [true]
  - criteriaKey: applicant_health_insurance
    acceptableValues: [true]
  - criteriaKey: applicant_citizen_status
    acceptableValues: [true]

---
