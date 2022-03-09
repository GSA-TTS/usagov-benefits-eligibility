---
title: "Survivor Benefit Plan"
headline: "Survivor Benefit Plan"
tags:
  - "financial assistance"
lifeEvents:
  - "death-and-burial"
  - "military-service"
source:
  name: "Department of Defense"
  link: https://militarypay.defense.gov/Benefits/Survivor-Benefit-Program/

summary: "Survivors of deceased active duty service members and some retired and reserve members may be eligible for up to 55% of the member's retired pay."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: ["died while on active duty", "had retired from the service"]
  - criteriaKey: applicant_relationship
    acceptableValues: ["spouse", "child"]
---
