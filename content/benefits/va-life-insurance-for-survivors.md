---
title: "Life Insurance (payout for survivors following veteran's death)"
headline: "Life Insurance (payout for survivors following veteran's death)"
tags: 
- "life insurance"
lifeEvents: 
- "death-and-burial"
source:
  name: "U.S. Department of Veteran Affairs"
  link: "https://www.benefits.va.gov/INSURANCE/sglivgli.asp"

summary: "Financial payment from a veteran's or service member's life insurance policy may be available."

eligibility:
# In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
- criteriaKey: deceased_served_in_active_military
  acceptableValues: ["was discharged under conditions other than dishonorable", "died while on active duty", "had retired from the service"]
- criteriaKey: applicant_relationship
  acceptableValues: ["spouse", "child", "parent", "other family member"]

---
