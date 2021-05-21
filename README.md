# Benefits Eligibility - Phase 3

BEARS will be a proactive notification service that provides timely and personalized information about benefits eligibility, contextualized 
by life events. Before we can do notifications and potentially proactive notifications, we need to be able to estimate eligibility and 
figure out a way to get people to sign up and store their information. We also need to establish relationships with benefits programs so 
we can keep eligibility information up to date. 

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### Useful links

 + https://nuxtjs.org
 + https://webpack.js.org/
 + https://jestjs.io/
 
 ### Github Actions

 + .github/workflows/main.yml - Builds, tests the BEARS site.
 + .github/workflows/codeql-analysis.yml - Scans for code quality and security issues in the BEARS site and it's dependancies.

### Federalist builds
 + https://federalistapp.18f.gov/sites/983/builds

## Design considerations

 + Ideally we'd use cross origin iframes to limit the rules engine access similar to twitch's design https://dev.twitch.tv/docs/extensions/
  + Federalist's setting `x-frame-options: SAMEORIGIN` prevents this design.
  + Additional mitigations are provided via the `iframe` `allow` feature policy.
  + A subdomain might be a further mitigation however this feature is deprecated.
 + Rules engine is in a seperate github (repo)[https://github.com/GSA/usagov-benefits-eligibility-rules].

```
 %% Rules Engine Overview Diagram
graph LR
    BEARS --> | - postMessage - | Extension
    Extension --> | - postMessage - | BEARS
