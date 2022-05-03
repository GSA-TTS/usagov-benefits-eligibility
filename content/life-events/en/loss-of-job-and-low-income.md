---
# yaml front matter here
title: "Loss of job and low income"
summary: "There may be benefits available to help you with a recent job loss or if you have low income, including financial help and retraining."
lede: ""
secondaryHeadline: "Loss of job and low income benefits"

eligibilityCriteriaDescription: "Please check the boxes and select the options that best describe your situation. Answer as many questions as possible for the most accurate results."

topLevelFilter:
  - label: "Start here"
    criteriaKey: applicant_date_of_birth
    disableGroupKey:
    disableGroupWhen:

eligibilityCriteria:
  - label: "About you (the person applying for benefits)"
    description: ""
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_paid_into_SS
      - applicant_income
      - applicant_disability
      - applicant_ability_to_work
      - applicant_child_spouse_SS
      - applicant_care_for_child
      - applicant_marital_status
      - applicant_citizen_status
---