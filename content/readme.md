# Content Folder

## One Life Event Version

To toggle between the one life event version and the full version, a content manager must follow the steps below.

1. Modify the `landing-page.md` file to include the `lifeEvent` variable.
2. Example of the `lifeEvent` variable: `lifeEvent: retirement`
3. Commit and push the changes to the github repository.
4. View the federalist site to verify changes.

## Top-Level Filters

In order to provide BEARS users with a reduced and tailored list of eligibility questions you can use the following encoding in a `life-event.md` file:

```yaml
// military-service.md

topLevelFilter:
  - label: "Start here"
    criteriaKey: applicant_served_in_active_military
    disableGroupKey: applicant
    disableGroupWhen: ["not applicable"]

eligibilityCriteria:
  - label: "About you (the person applying for benefits)"
    description: ""
    criteriaGroupKey: applicant
    criteriaKeys:
      - applicant_served_in_active_military
      - applicant_disability
      - applicant_marital_status
```

The top-level filter `disableGroupKey` will look for the Eligibility Criteria `criteriaGroupKey` that matches and will disable all `criteriaKeys` found when any values in the `disableGroupWhen` are met.

## Date Criteria

In order to use the date input logic correctly you must put the **key** and **acceptance values** in with accordance to our encoding:

We have several options for inputting a date:

1. Comparator into the criteria

   - `> / < / =`
   - Will check the users date against the given date using the specified comparator
   - Next we will put in the date `>11-14-1999`
   - Needs to follow this pattern `>MM-DD-YYYY`

2. Dynamically calculated date (i.e. the user has to be older than 60 years)

   - We can do this by following a similar pattern
   - `>60years`
   - The pattern is the operator then an amount of time then a determiner (months, days, years)
   - You are also able to put in multiple dates / encodings to create a range
   - i.e. You wish to only have a user be eligible if they are older than 40 years and less than 60 years
   - acceptanceValues: `["<60years", ">40years"]`
