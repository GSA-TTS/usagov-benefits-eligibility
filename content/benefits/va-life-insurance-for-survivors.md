---
title: "Veterans Life Insurance for Surviving Beneficiaries"
headline: "Veterans Life Insurance for Surviving Beneficiaries"
tags:
  - life insurance
lifeEvents:
  - death-of-a-loved-one
  - military-service
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.benefits.va.gov/INSURANCE/sglivgli.asp

summary: "Financial payment from a veteran's or service member's life insurance policy may be available."

eligibility:
  # In the order you want the criteria to display, list criteriaKeys from the csv here, each followed by a comma-separated list of which values indicate eligibility for that criteria. Wrap individual values in quotes if they have inner commas.
  - criteriaKey: deceased_served_in_active_military
    acceptableValues: ["yes"]
    label: "The deceased served in the active military, naval, or air service."
  - criteriaKey: deceased_service_status
    acceptableValues:
      [
        "an active-duty service member",
        "discharged under conditions other than dishonorable",
        "retired from the service",
        "a member of the National Guard or Reserves",
      ]
  - criteriaKey: applicant_relationship
    acceptableValues: ["spouse", 
    "child", 
    "parent", 
    "other family member"]
---