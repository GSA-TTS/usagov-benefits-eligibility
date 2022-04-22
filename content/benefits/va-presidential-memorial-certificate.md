---
title: "Presidential Memorial Certificate"
headline: "Presidential Memorial Certificate"
tags:
  - "memorial"
lifeEvents:
  - "death-of-a-loved-one"
  - "military-service"
source:
  name: "U.S. Department of Veteran Affairs"
  link: https://www.va.gov/burials-memorials/memorial-items/presidential-memorial-certificates/

summary: "A Presidential Memorial Certificate (PMC) is an engraved paper certificate signed by the current president issued to honor the military service of a Veteran or Reservist."

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
        "a member of the National Guard or Reserves",
      ]
  - criteriaKey: deceased_death_circumstance
    acceptableValues:
      [
        "died while on active duty",
        "died as a result of a service-connected disability or illness",
        "died while receiving or traveling to receive VA care",
        "died while eligible or receiving VA compensation",
      ]
  - criteriaKey: applicant_relationship
    acceptableValues: ["spouse", "child", "parent", "other family member", "personal or official representative"]
---
