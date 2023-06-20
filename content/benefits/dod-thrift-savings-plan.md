---
title: dod-thrift-savings-plan.title
headline: dod-thrift-savings-plan.headline
tags:
  - financial assistance
lifeEvents:
  - retirement
  - military-service
  - financial-hardship
source:
  name: dod-thrift-savings-plan.source.name
  link: dod-thrift-savings-plan.source.link
  isEnglish: dod-thrift-savings-plan.source.linkIsEnglish

summary: dod-thrift-savings-plan.summary
criticalApplicationInformation: dod-thrift-savings-plan.criticalApplicationInformation

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_date_of_birth
    label: dod-thrift-savings-plan.eligibility.label
    acceptableValues: [">60years"]
  - criteriaKey: applicant_served_in_active_military
    label: dod-thrift-savings-plan.eligibility.label1
    acceptableValues: [dod-thrift-savings-plan.eligibility.acceptableValues]

---
