# Content Folder

## Internationalization Support Toggle

To toggle on the internationalization support feature, set the `languageToggleActive` to `true` in the `nuxt.config.js` file.

Now when creating or editing content files, any text that will be shown to the user and translated, needs  
to be in the markdown files' corresponding `json` file. It must also be referenced in the `dot notation`.  
Here is an example:

```yaml
// centers-for-medicare-and-medicaid.md
---
title: centers-for-medicare-and-medicaid.title
summary: centers-for-medicare-and-medicaid.summary
lede: centers-for-medicare-and-medicaid.lede

relatedKeys:
  - social-security-administration
  - u-s-department-of-veteran-affairs
---


// centers-for-medicare-and-medicaid.json
{
  "centers-for-medicare-and-medicaid.title": "Centers for Medicare and Medicaid",
  "centers-for-medicare-and-medicaid.summary": "Administers Medicare, Medicaid, and the Health Insurance Exchanges.",
  "centers-for-medicare-and-medicaid.lede": "Administers Medicare, Medicaid, and the Health Insurance Exchanges."
}

```

Since I want the `title, summary, and lede` to be text, and I know that it will be shown to the user, I will need to reference them using the `dot notation`. This notation is as follows `[name of the file].[name of variable]`. See a more complex example below.

```yaml
// some-benefit.md
eligibleCriteria:
  - label: death-of-a-loved-one.eligibilityCriteria.label

// some-beneift.json
{
  "some-benefit.eligibleCriteria.label": "Death of a loved one"
}
```

## New Content Translation

The content is now beinbg translated following a `dot (key.key...)` notation to allow for smooth translation. Currently the content of the content files are to be moved to their respective json language files. Following the convention layed out in the `locales/en.json` file. (will be migrating the content to json files that individually correspond to the content files before this branch is merged with main)

<!--
## New File Structure 05/04/2022
Now the content folder is structured as follows:
content
- en
- es
  - markdown files at the root of the content folder that are translated
- types
  - en
  - es
    - markdown data files
- agencies
  - en
  - es
    - markdown data files
- benefits
  - en
  - es
    - markdown data files
- life-events
  - en
  - es
    - markdown data files

Since the readme and the criteria.csv are not changed with internationalization we can keep them in the root folder. -->

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
