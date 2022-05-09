---
title: "Veteran Readiness and Employment (VR&E)"
headline: "Veteran Readiness and Employment (VR&E)"
tags:
  - educational assistance
lifeEvents:
  - school-and-education
  - military-service
  - disability
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/careers-employment/vocational-rehabilitation/eligibility/

summary: "If you’re a service member or veteran and have a disability that limits your ability to work or prevents you from working, you may be able to get employment support or services to help you live as independently as possible."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: applicant_served_in_active_military
    acceptableValues: ["yes"]
  - criteriaKey: applicant_service_status
    acceptableValues: ["an active-duty service member", 
    "discharged under conditions other than dishonorable"]
  - criteriaKey: applicant_disability
    acceptableValues: [true]
  - criteriaKey: applicant_service_disability
    acceptableValues: [true]
---
