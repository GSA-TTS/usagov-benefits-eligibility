---
title: "Annuity for Certain Military Surviving Spouses"
headline: "Annuity for Certain Military Surviving Spouses"
tags: 
- "financial assistance"
lifeEvents: 
- "bereavement"
source:
  name: "Department of Defense"
  link: "https://militarypay.defense.gov/Portals/3/Documents/acmss.pdf"

summary: "The surviving spouse of a deceased person who qualified for Social Security benefits may be eligible for a $255 financial assistance."

eligibility:
# In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
- criteriaKey: deceased_date_of_death
  label: "The deceased died before 1978."
- criteriaKey: deceased_served_in_active_military
  acceptableValues: ["had retired from the service"]
- criteriaKey: applicant_relationship
  acceptableValues: [spouse, child]

---
