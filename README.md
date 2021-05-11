# Benefits Eligibility - Phase 3

BEARS will be a proactive notification service that provides timely and personalized information about benefits eligibility, contextualized 
by life events. Before we can do notifications and potentially proactive notifications, we need to be able to estimate eligibility and 
figure out a way to get people to sign up and store their information. We also need to establish relationships with benefits programs so 
we can keep eligibility information up to date. 

### The following npm scripts are defined

 * `npm start`
    * Runs the static site generator eleventy and webpack in watch mode.
 * `npm run build`
    * Runs the production webpack build and eleventy build for the static site.
 * `npm run test`
    * Runs the unit and functional tests.


### Useful links

 + https://www.11ty.dev/
 + https://webpack.js.org/
 + https://jestjs.io/

### Github Actions

 + .github/workflows/main.yml - Builds, tests the BEARS site.
 + .github/workflows/codeql-analysis.yml - Scans for code quality and security issues in the BEARS site and it's dependancies.

### How to develop with 11ty

`npm start` 11ty will detect updates to most files and automatically reload your browser. Any webpack related changes will not reload automatically.

To update the rules engine: 
 + Make your changes to the library.
 + Update the package.json with a new version number.
 + Build the package.
 + Upload to github.
 + Run `npm i` locally to update your `node_modules`.

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
```
