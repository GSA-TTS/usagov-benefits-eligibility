# Python i18n tools

In this directory there are three python scripts to help with the i18n flow of bears.

## `createCriteriaJson.py`

- Converts the unchanged `criteria.csv` to a json file as well as rewriting the `criteria.csv` file to follow a dotted notation.

## `createEnEsJs.py`

- Reads through the `locales/en` and `locales/es` directory and compiles the `en.js` and `es.js` files that are required for nuxt internationalization.

## `createJson.py`

- Reads through the `content` directory and all subdirectories and reads the nessecary variables that need to be translated and pulls them into a corresponding `json` file for that `markdown` file and then writes that json to a file and then rewrites the markdown file to follow a dotted notation.
